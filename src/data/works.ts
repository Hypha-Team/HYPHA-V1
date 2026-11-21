// Portfolio projects. Each project is a small museum room: a label plus content blocks.
import { art } from '../art/generateArt'
import type { Discipline, Work } from './types'

// ---- Marta (filled in when she imports her portfolio) --------------------
const marta: Work[] = [
  {
    id: 'marta-trace',
    ownerId: 'marta',
    title: 'What the Room Keeps',
    year: 2026,
    technique: 'Carved limestone, steel, LED',
    materials: ['Stone', 'Metal', 'Light'],
    dimensions: '120 × 60 × 45 cm',
    edition: 'Unique',
    exhibited: 'FBAUL open studios, May 2026',
    discipline: 'Sculpture',
    topics: ['Body', 'Memory', 'Light'],
    picture: art('stone', 101, 0.78, ['#2E2A27', '#D9CDBB', '#9C8B76', '#EEE8DF']),
    recommendedBy: 'helena',
    fromImport: true,
    blocks: [
      {
        type: 'text',
        title: 'About the work',
        body: 'A block of Lioz limestone, the stone of Lisbon\'s pavements, carved until it holds the shape of someone sitting. A thin steel frame lights the hollow from inside. When you walk past, the light dims, as if the room were remembering a body that has just left.',
      },
      {
        type: 'process',
        title: 'How it was made',
        steps: [
          { picture: art('sketch', 102, 1.3), note: 'Drawings of people waiting at the Arroios metro, to find the posture.' },
          { picture: art('stone', 103, 1, ['#3B3430', '#A89F94', '#6F7F73', '#E8E3DC']), note: 'Rough carving with a point chisel. Three weeks, one block.' },
          { picture: art('lamp', 104, 1, ['#1C1A18', '#9AA3A8', '#3A3430', '#EEE']), note: 'Testing light inside the hollow with a borrowed LED strip.' },
          { picture: art('stone', 105, 1, ['#2E2A27', '#D9CDBB', '#9C8B76', '#EEE8DF']), note: 'Finished at open studios. The steel frame was the weak part: I need help here.' },
        ],
      },
      {
        type: 'video',
        title: 'Making of',
        caption: 'Carving and first light test, 1 min 40 s',
        poster: art('stone', 103, 16 / 9, ['#3B3430', '#A89F94', '#6F7F73', '#E8E3DC']),
      },
      { type: 'quote', text: 'Marta lets the stone decide how much of the body stays. Rare patience for a third-year.', by: 'Prof. Helena Costa' },
      { type: 'list', title: 'Materials and references', items: ['Lioz limestone from Pêro Pinheiro', 'Steel flat bar, 3 mm', 'Warm LED strip, 2700 K', 'Reference: the empty chair in Lisbon\'s cafés'] },
    ],
  },
  {
    id: 'marta-casts',
    ownerId: 'marta', title: 'Hands at Rest', year: 2025, technique: 'Plaster casts on oak shelf',
    materials: ['Plaster', 'Wood'], dimensions: '12 casts, 15 × 10 cm each', discipline: 'Sculpture',
    topics: ['Body', 'Memory'], picture: art('stone', 111, 1.25, ['#4A4541', '#EAE4DA', '#C8BFB2', '#F3EFE9']), fromImport: true,
    blocks: [
      { type: 'text', title: 'About the work', body: 'Twelve casts of my family\'s hands, each made while they told me about their first job.' },
      { type: 'gallery', title: 'Details', pictures: [art('stone', 112, 1), art('stone', 113, 1), art('hatch', 114, 1)] },
    ],
  },
  {
    id: 'marta-steel',
    ownerId: 'marta', title: 'Bent Line', year: 2025, technique: 'Bent steel rod', materials: ['Metal'],
    dimensions: '200 × 80 cm', discipline: 'Sculpture', topics: ['Public space', 'Body'],
    picture: art('flow', 121, 0.7, ['#262626', '#6E6E6E', '#BDB7AE', '#EFEBE5']), fromImport: true,
    blocks: [{ type: 'text', title: 'About the work', body: 'A single line drawn in the air of the faculty courtyard. My first try with metal.' }],
  },
  {
    id: 'marta-drawings',
    ownerId: 'marta', title: 'Waiting Bodies', year: 2026, technique: 'Graphite on paper', materials: ['Graphite', 'Paper'],
    dimensions: '42 × 29.7 cm, series of 20', discipline: 'Drawing', topics: ['Body', 'City'],
    picture: art('hatch', 131, 0.75, ['#2A2622', '#999', '#555', '#EEE']), fromImport: true,
    blocks: [{ type: 'text', title: 'About the work', body: 'Studies for "What the Room Keeps", drawn on the metro.' }],
  },
  {
    id: 'marta-wax',
    ownerId: 'marta', title: 'Candle Studies', year: 2024, technique: 'Beeswax and light', materials: ['Wax', 'Light'],
    dimensions: 'Variable', discipline: 'Sculpture', topics: ['Light', 'Time'],
    picture: art('orbs', 141, 1, ['#5A3A1E', '#E8B860', '#F2D9A0', '#F7EFE2']), fromImport: true,
    blocks: [{ type: 'text', title: 'About the work', body: 'Small wax forms that change while you look at them.' }],
  },
]

// ---- Tiago ------------------------------------------------------------
const tiago: Work[] = [
  {
    id: 'tiago-arc',
    ownerId: 'tiago',
    title: 'Arco Lamp',
    year: 2026,
    technique: 'Bent aluminium, brass, warm LED',
    materials: ['Metal', 'Aluminium', 'Light'],
    dimensions: '180 × 90 × 40 cm',
    edition: 'Prototype 2 of 3',
    discipline: 'Industrial Design',
    topics: ['Light', 'Objects', 'Craft'],
    picture: art('lamp', 201, 0.75, ['#1E2328', '#C9A66B', '#3A4148', '#EEE']),
    recommendedBy: 'vasco',
    blocks: [
      { type: 'text', title: 'About the work', body: 'A floor lamp made from a single aluminium tube, bent by hand on a jig I built at the faculty workshop. No screws: every joint is a fold.' },
      {
        type: 'process',
        title: 'How it was made',
        steps: [
          { picture: art('sketch', 202, 1.3), note: 'Sketch and 1:5 model in wire.' },
          { picture: art('blocks', 203, 1, ['#2B2B2B', '#888', '#C9A66B', '#EEE']), note: 'Building the bending jig from plywood offcuts.' },
          { picture: art('lamp', 204, 1, ['#1E2328', '#C9A66B', '#3A4148', '#EEE']), note: 'First light. Brass shade spun at a workshop in Marvila.' },
        ],
      },
      { type: 'video', title: 'Making of', caption: 'Bending the tube, 58 s', poster: art('lamp', 205, 16 / 9, ['#1E2328', '#C9A66B', '#3A4148', '#EEE']) },
      { type: 'list', title: 'Materials', items: ['Aluminium tube Ø 22 mm', 'Spun brass shade', 'LED 2700 K, dimmable'] },
    ],
  },
  {
    id: 'tiago-frame',
    ownerId: 'tiago', title: 'Light Frame 01', year: 2025, technique: 'Welded steel, diffused LED', materials: ['Metal', 'Light'],
    dimensions: '100 × 100 × 10 cm', discipline: 'Industrial Design', topics: ['Light', 'Objects'],
    picture: art('lamp', 211, 1, ['#141414', '#B0B6BA', '#4A4A4A', '#EEE']),
    blocks: [
      { type: 'text', title: 'About the work', body: 'A wall frame that holds light like a painting holds colour. Built for a café in Marvila.' },
      { type: 'gallery', title: 'Installed', pictures: [art('lamp', 212, 1.3), art('blocks', 213, 1)] },
    ],
  },
  {
    id: 'tiago-stool',
    ownerId: 'tiago', title: 'Folded Stool', year: 2025, technique: 'Laser-cut steel sheet', materials: ['Metal'],
    dimensions: '45 × 35 × 35 cm', discipline: 'Industrial Design', topics: ['Objects', 'Circular design'],
    picture: art('blocks', 221, 0.85, ['#2F4A5A', '#D9C9A8', '#B4553B', '#EDE6DA']),
    blocks: [{ type: 'text', title: 'About the work', body: 'One sheet, one cut file, four folds.' }],
  },
  {
    id: 'tiago-pendant',
    ownerId: 'tiago', title: 'Cork Pendant', year: 2024, technique: 'Cork, aluminium', materials: ['Aluminium', 'Light', 'Wood'],
    dimensions: 'Ø 40 cm', discipline: 'Industrial Design', topics: ['Light', 'Circular design'],
    picture: art('lamp', 231, 0.8, ['#3A2F25', '#B8946A', '#D8CFC0', '#F4EFE7']),
    blocks: [{ type: 'text', title: 'About the work', body: 'Offcuts from a cork factory, turned into a pendant lamp.' }],
  },
]

// ---- Everyone else: shorter projects -----------------------------------
type Short = [string, string, number, string, string[], string, Discipline, string[], ReturnType<typeof art>, string, string?]
const short: Short[] = [
  ['ines', 'Low Tide, Tagus', 2024, 'Oil on canvas', ['Oil', 'Canvas'], '200 × 150 cm', 'Painting', ['Landscape', 'Water'], art('strata', 301, 0.75), 'The river at Alcântara at 6 am, painted over a whole winter.'],
  ['ines', 'Salt Hours', 2023, 'Oil on linen', ['Oil', 'Canvas'], '120 × 120 cm', 'Painting', ['Water', 'Time'], art('strata', 302, 1), 'Salt pans near Alcochete, in layers of glaze.'],
  ['rui', 'Cais at 2 am', 2026, 'Silver gelatin print', ['Film', 'Silver gelatin'], '40 × 50 cm', 'Photography', ['City', 'Night'], art('horizon', 311, 0.8, ['#0E1A26', '#2D4A63', '#5F7E95', '#C9D6DF']), 'The ferry terminal after the last boat.'],
  ['rui', 'Night Shift', 2025, 'Analogue photography', ['Film'], 'Series of 12', 'Photography', ['City', 'Night'], art('horizon', 312, 1.4, ['#151515', '#3A3A3A', '#7A6A52', '#D8CFC0']), 'Bakers in Graça, 4 am.'],
  ['beatriz', 'Hands of My Grandmother', 2026, 'Graphite on paper', ['Graphite', 'Paper'], '30 × 40 cm', 'Drawing', ['Body', 'Portrait'], art('hatch', 321, 0.75), 'Drawn over twelve Sunday visits.', 'helena'],
  ['beatriz', 'Faces, Line 4', 2025, 'Charcoal', ['Charcoal', 'Paper'], '50 × 70 cm', 'Drawing', ['Portrait', 'City'], art('hatch', 322, 0.72), 'Passengers on the 28 tram.'],
  ['joao', 'Facade Breathing', 2026, 'Projection mapping', ['Video', 'Light'], '12 min loop', 'Multimedia', ['Light', 'Public space'], art('screen', 331, 1.5, ['#0A0F1E', '#3FA7D6', '#F2A541', '#FFFFFF']), 'Projected on the faculty facade during the night of museums.'],
  ['joao', 'Room Tone', 2025, 'Sound installation', ['Sound'], 'Variable', 'Multimedia', ['Technology'], art('flow', 332, 1, ['#111827', '#6EE7B7', '#3B82F6', '#0B1220']), 'The hum of empty classrooms, recorded and replayed.'],
  ['clara', 'Open Studios Poster', 2026, 'Risograph, 2 colours', ['Paper', 'Riso ink'], 'A2', 'Communication Design', ['Typography', 'Print'], art('poster', 341, 0.71, ['#1D3557', '#F4A261', '#E63946', '#F1FAEE']), 'Identity for the FBAUL open studios.'],
  ['clara', 'Bairro Type', 2025, 'Type specimen', ['Paper'], '64 pages', 'Communication Design', ['Typography', 'City'], art('poster', 342, 0.75, ['#222', '#E9C46A', '#2A9D8F', '#F7F3EA']), 'Letters photographed on shop signs in Arroios.'],
  ['duarte', 'Dock Totem', 2026, 'Found wood and rope', ['Wood', 'Rope'], '240 × 40 cm', 'Sculpture', ['Found objects', 'Water'], art('stone', 351, 0.55, ['#3A2F25', '#B8946A', '#7A6248', '#EDE6DA']), 'Built from pallets found at the Alcântara docks.'],
  ['sofia', 'What Tiles Forget', 2026, 'Acrylic and ceramic fragments', ['Acrylic', 'Ceramic'], '100 × 100 cm', 'Painting', ['Memory', 'Colour'], art('blocks', 361, 1, ['#1F4E79', '#F2C14E', '#E6E1D3', '#F7F3EA']), 'Broken azulejos from Alfama, painted back into a whole.'],
  ['sofia', 'Blue Hour', 2025, 'Acrylic on canvas', ['Acrylic'], '80 × 60 cm', 'Painting', ['Colour'], art('orbs', 362, 0.75, ['#1F3A5F', '#6A8EAE', '#D7E3EC', '#EEF2F5']), 'Colour study.'],
  ['miguel', 'Marvila Chair', 2023, 'Oak and steel', ['Wood', 'Metal'], '80 × 45 × 50 cm', 'Industrial Design', ['Objects', 'Craft'], art('blocks', 371, 0.85, ['#3A2F25', '#B8946A', '#4A4A4A', '#F4EFE7']), 'My graduation chair, now in production.'],
  ['leonor', 'Kitchens', 2026, 'Digital photography', ['Digital'], 'Series of 8', 'Photography', ['Portrait', 'Domestic'], art('horizon', 381, 0.8, ['#5A3A2A', '#E8C9A0', '#9C6B4E', '#F6EEE4']), 'Grandmothers and their kitchens in Penha de França.'],
  ['andre', 'Small Screens', 2026, 'Interactive installation', ['Video', 'Screens'], '6 monitors', 'Multimedia', ['Technology', 'Play'], art('screen', 391, 1.2), 'A game you can only play with a stranger.'],
  ['mariana', 'Vessel for a Body', 2024, 'Stoneware', ['Clay', 'Ceramic'], '90 × 50 cm', 'Sculpture', ['Body', 'Material'], art('stone', 401, 0.8, ['#5A2E2A', '#C98C6B', '#8C5A3C', '#F2E9DE']), 'Shown at a residency in Caldas da Rainha.'],
  ['pedro', 'Unbuilt Lisbon', 2026, 'Ink on paper', ['Ink', 'Paper'], '70 × 100 cm', 'Drawing', ['Architecture', 'City'], art('sketch', 411, 0.7, ['#1F2A44', '#999', '#B4553B', '#EEE']), 'A tower for Martim Moniz that will never be built.', 'helena'],
  ['carolina', 'Zine Machine', 2025, 'Zines, motion', ['Paper', 'Video'], '12 issues', 'Communication Design', ['Print', 'Play'], art('poster', 421, 0.8, ['#2B2D42', '#EF233C', '#8D99AE', '#EDF2F4']), 'A zine a month, printed at the faculty.'],
  ['nuno', 'Cork Bench', 2026, 'Recycled cork', ['Cork', 'Wood'], '160 × 40 × 45 cm', 'Industrial Design', ['Circular design', 'Ecology'], art('blocks', 431, 1.3, ['#3A2F25', '#B8946A', '#D8CFC0', '#F4EFE7']), 'Bench made from wine stoppers.', 'vasco'],
  ['rita', 'Kitchen Table', 2026, 'Egg tempera on panel', ['Tempera', 'Wood panel'], '25 × 30 cm', 'Painting', ['Domestic', 'Colour'], art('strata', 441, 0.85, ['#6B4226', '#E3B23C', '#A23E48', '#F5EEDC']), 'A still life of my grandmother\'s table.'],
]

const shortWorks: Work[] = short.map(([ownerId, title, year, technique, materials, dimensions, discipline, topics, picture, body, recommendedBy], i) => ({
  id: `${ownerId}-${i}`,
  ownerId, title, year, technique, materials, dimensions, discipline, topics, picture, recommendedBy,
  blocks: [
    { type: 'text', title: 'About the work', body },
    ...(i % 3 === 0 ? [{ type: 'gallery' as const, title: 'Details', pictures: [{ art: { ...('art' in picture ? picture.art : { style: 'orbs' as const, seed: 1, ratio: 1 }), seed: 900 + i, ratio: 1 } }, { art: { style: 'sketch' as const, seed: 950 + i, ratio: 1 } }] }] : []),
  ],
}))

export const works: Work[] = [...marta, ...tiago, ...shortWorks]
