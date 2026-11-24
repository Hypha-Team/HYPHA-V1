/*
  First-load moment.
  The logo itself starts as liquid: its red lines swirl and flow like serpents,
  then slowly calm down and settle into the word HYPHA. Then the app appears.

  It runs on the graphics card (a small WebGL shader on /logo.jpg), so it stays
  smooth on phones too. Tune it with the numbers in INTRO.
*/
import { useEffect, useRef } from 'react'
import { gsap, reducedMotion } from '../motion/motion'

const LOGO = `${import.meta.env.BASE_URL}logo.jpg`

const INTRO = {
  cream: '#FCDEC6', // the logo's background colour
  settle: 2.4, // seconds for the lines to calm down into the logo
  swirl: 1.7, // how much the lines twist around the centre at the start
  flow: 0.065, // how much the lines wave at the start
  zoom: 0.22, // starts slightly zoomed in
  speed: 1.0, // speed of the flowing waves
  hold: 0.5, // the finished logo stays on screen
  fade: 0.5, // fade into the app
}

const VERT = `
attribute vec2 a;
varying vec2 vUv;
void main() { vUv = a * 0.5 + 0.5; gl_Position = vec4(a, 0.0, 1.0); }`

const FRAG = `
precision highp float;
varying vec2 vUv;
uniform sampler2D img;
uniform vec2 cover;     // visible part of the image (object-fit: cover)
uniform float aspect;   // screen width / height
uniform float amt;      // 1 = fully liquid, 0 = calm logo
uniform float t;        // time, for the flowing waves
uniform float reveal;   // fade in from the cream background
uniform vec3 cream;
uniform float swirl;
uniform float flow;
uniform float zoom;

vec2 mirror(vec2 uv) { return 1.0 - abs(mod(uv, 2.0) - 1.0); }

void main() {
  vec2 c = vUv - 0.5;
  c.x *= aspect;
  c /= 1.0 + zoom * amt;

  // twist around the centre, stronger near it
  float r = length(c);
  float ang = amt * swirl * exp(-r * 1.6);
  float s = sin(ang), co = cos(ang);
  c = mat2(co, -s, s, co) * c;

  // slow flowing waves, like serpents
  vec2 w = vec2(
    sin(c.y * 7.0 + t * 1.3) + 0.5 * sin(c.y * 13.0 - t * 1.05 + c.x * 3.0),
    cos(c.x * 6.0 - t * 1.15) + 0.5 * cos(c.x * 11.0 + t * 0.85 + c.y * 2.0)
  );
  c += w * flow * amt;

  c.x /= aspect;
  vec2 raw = (c * cover) + 0.5;
  vec3 col = texture2D(img, mirror(raw)).rgb;
  // Beyond the top and bottom of the logo (tall phones) the stripes melt softly into cream.
  float out_ = max(max(-raw.y, raw.y - 1.0), max(-raw.x, raw.x - 1.0));
  col = mix(col, cream, smoothstep(0.0, 0.12, out_));
  gl_FragColor = vec4(mix(cream, col, reveal), 1.0);
}`

const hex = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255)

export default function Intro({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null)
  const canvas = useRef<HTMLCanvasElement>(null)
  const done = useRef(onDone)
  done.current = onDone

  useEffect(() => {
    const finish = () => done.current()
    if (reducedMotion()) return finish()
    const c = canvas.current!
    const gl = c.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'high-performance' })
    if (!gl) return finish()

    const shader = (type: number, src: string) => {
      const sh = gl.createShader(type)!
      gl.shaderSource(sh, src)
      gl.compileShader(sh)
      return sh
    }
    const prog = gl.createProgram()!
    gl.attachShader(prog, shader(gl.VERTEX_SHADER, VERT))
    gl.attachShader(prog, shader(gl.FRAGMENT_SHADER, FRAG))
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return finish()
    gl.useProgram(prog)

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
    const a = gl.getAttribLocation(prog, 'a')
    gl.enableVertexAttribArray(a)
    gl.vertexAttribPointer(a, 2, gl.FLOAT, false, 0, 0)

    const u = (n: string) => gl.getUniformLocation(prog, n)
    gl.uniform3fv(u('cream'), hex(INTRO.cream))
    gl.uniform1f(u('swirl'), INTRO.swirl)
    gl.uniform1f(u('flow'), INTRO.flow)
    gl.uniform1f(u('zoom'), INTRO.zoom)

    const state = { amt: 1, reveal: 0 }
    let imgAspect = 1
    let ready = false
    const start = performance.now()

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      c.width = Math.round(window.innerWidth * dpr)
      c.height = Math.round(window.innerHeight * dpr)
      gl.viewport(0, 0, c.width, c.height)
    }
    size()
    window.addEventListener('resize', size)

    const render = () => {
      if (!ready) return
      const boxAspect = c.width / c.height
      // Wide screens: fill the width. Tall phones: keep the whole word visible;
      // the stripes continue (mirrored) above and below.
      const cover = [1, imgAspect / boxAspect]
      gl.uniform2f(u('cover'), cover[0], cover[1])
      gl.uniform1f(u('aspect'), boxAspect)
      gl.uniform1f(u('amt'), state.amt)
      gl.uniform1f(u('reveal'), state.reveal)
      gl.uniform1f(u('t'), ((performance.now() - start) / 1000) * INTRO.speed)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    }
    gsap.ticker.add(render)

    let tl: gsap.core.Timeline | null = null
    const image = new Image()
    image.onload = () => {
      imgAspect = image.width / image.height
      gl.bindTexture(gl.TEXTURE_2D, gl.createTexture())
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      ready = true
      tl = gsap
        .timeline({ onComplete: finish })
        .to(state, { reveal: 1, duration: 0.6, ease: 'power1.out' }, 0)
        .to(state, { amt: 0, duration: INTRO.settle, ease: 'power3.inOut' }, 0)
        .to({}, { duration: INTRO.hold })
        .to(root.current, { opacity: 0, duration: INTRO.fade, ease: 'power2.inOut' })
    }
    image.onerror = finish
    image.src = LOGO

    return () => {
      tl?.kill()
      gsap.ticker.remove(render)
      window.removeEventListener('resize', size)
    }
  }, [])

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] cursor-pointer"
      style={{ background: INTRO.cream }}
      aria-hidden="true"
      onClick={onDone}
    >
      <canvas ref={canvas} className="block h-full w-full" />
    </div>
  )
}
