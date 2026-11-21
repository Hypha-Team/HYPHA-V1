// All people and organisations are fictional.
import type { Person } from './types'

const av = (seed: number) => ({ style: 'orbs' as const, seed, ratio: 1 })

export const people: Person[] = [
  // ---- The story ----------------------------------------------------------
  {
    id: 'marta',
    name: 'Marta Silva',
    role: 'student',
    discipline: 'Sculpture',
    programme: 'Sculpture, BA',
    year: 3,
    bio: 'I carve, cast and bend. Right now: a light installation for my graduation show, about how a body leaves a trace in a room.',
    skills: ['Stone carving', 'Plaster casting', 'Welding basics', 'Installation'],
    topics: ['Body', 'Memory', 'Light', 'Public space'],
    materials: ['Stone', 'Plaster', 'Metal', 'Light'],
    area: 'Penha de França',
    avatar: av(31),
    uniConfirmed: true,
    openToCollab: true,
    openToCommissions: true,
  },
  {
    id: 'tiago',
    name: 'Tiago Rocha',
    role: 'student',
    discipline: 'Industrial Design',
    programme: 'Industrial Design, BA',
    year: 2,
    bio: 'I build lamps and small structures in steel and aluminium. Happy to make the parts of your idea that need to stand up and light up.',
    skills: ['Metalwork', 'Lighting', 'CAD', 'Prototyping', 'Laser cutting'],
    topics: ['Light', 'Craft', 'Objects', 'Circular design'],
    materials: ['Metal', 'Light', 'Aluminium', 'Wood'],
    area: 'Marvila',
    avatar: av(12),
    uniConfirmed: true,
    openToCollab: true,
    openToCommissions: true,
  },
  {
    id: 'helena',
    name: 'Prof. Helena Costa',
    role: 'teacher',
    discipline: 'Sculpture',
    programme: 'Sculpture department, FBAUL',
    bio: 'I teach sculpture and spatial practice. I share open calls I hear about and point people to students whose work deserves a room.',
    skills: ['Sculpture', 'Curating', 'Mentoring'],
    topics: ['Body', 'Material', 'Public space'],
    materials: ['Stone', 'Bronze'],
    area: 'Chiado',
    avatar: av(44),
    uniConfirmed: true,
  },
  {
    id: 'fio',
    name: 'Galeria Fio',
    role: 'provider',
    orgType: 'Gallery',
    programme: 'Contemporary gallery',
    bio: 'A small gallery in a former thread factory in Marvila. We open two group shows a year for artists in their first five years of practice.',
    skills: ['Group shows', 'Commissions', 'Artist talks'],
    topics: ['Emerging artists', 'Installation', 'Craft'],
    materials: [],
    area: 'Marvila',
    avatar: av(3),
    checked: true,
    website: 'galeriafio.example',
  },

  // ---- Other students and alumni ----------------------------------------
  {
    id: 'ines', name: 'Inês Moura', role: 'alumni', discipline: 'Painting', programme: 'Painting, MA 2024',
    bio: 'Painter. Large canvases about tidal landscapes. I mentor first-years on how to price their work.',
    skills: ['Oil painting', 'Large formats', 'Pricing work'], topics: ['Landscape', 'Water', 'Time'], materials: ['Oil', 'Canvas'],
    area: 'Alcântara', avatar: av(5), openToCommissions: true,
  },
  {
    id: 'rui', name: 'Rui Fonseca', role: 'student', discipline: 'Photography', programme: 'Photography, BA', year: 3,
    bio: 'Night photography of the riverfront. I document exhibitions too.',
    skills: ['Analogue', 'Darkroom', 'Exhibition photography'], topics: ['City', 'Night', 'Water'], materials: ['Film', 'Silver gelatin'],
    area: 'Cais do Sodré', avatar: av(6), uniConfirmed: true, openToCommissions: true, openToCollab: true,
  },
  {
    id: 'beatriz', name: 'Beatriz Lopes', role: 'student', discipline: 'Drawing', programme: 'Drawing, BA', year: 2,
    bio: 'Graphite and charcoal, mostly hands and faces. Slow drawings.',
    skills: ['Graphite', 'Charcoal', 'Life drawing'], topics: ['Body', 'Portrait', 'Memory'], materials: ['Graphite', 'Paper'],
    area: 'Graça', avatar: av(7), uniConfirmed: true, openToCollab: true,
  },
  {
    id: 'joao', name: 'João Pires', role: 'student', discipline: 'Multimedia', programme: 'Multimedia Art, BA', year: 3,
    bio: 'Projection mapping and sound. I can make your sculpture move without touching it.',
    skills: ['Projection mapping', 'TouchDesigner', 'Sound'], topics: ['Light', 'Technology', 'Public space'], materials: ['Video', 'Light', 'Sound'],
    area: 'Arroios', avatar: av(8), uniConfirmed: true, openToCollab: true, openToCommissions: true,
  },
  {
    id: 'clara', name: 'Clara Mendes', role: 'student', discipline: 'Communication Design', programme: 'Communication Design, BA', year: 3,
    bio: 'Posters, identities and exhibition catalogues for student shows.',
    skills: ['Typography', 'Identity', 'Risograph'], topics: ['Typography', 'Print', 'City'], materials: ['Paper', 'Riso ink'],
    area: 'Arroios', avatar: av(9), uniConfirmed: true, openToCommissions: true,
  },
  {
    id: 'duarte', name: 'Duarte Neves', role: 'student', discipline: 'Sculpture', programme: 'Sculpture, BA', year: 2,
    bio: 'Wood and found objects from the docks.',
    skills: ['Woodwork', 'Assemblage'], topics: ['Ecology', 'Found objects', 'Water'], materials: ['Wood', 'Rope', 'Metal'],
    area: 'Alcântara', avatar: av(10), uniConfirmed: true, openToCollab: true,
  },
  {
    id: 'sofia', name: 'Sofia Batista', role: 'student', discipline: 'Painting', programme: 'Painting, BA', year: 3,
    bio: 'Colour fields and azulejo fragments. I paint what tiles forget.',
    skills: ['Acrylic', 'Ceramic glaze', 'Murals'], topics: ['Memory', 'City', 'Colour'], materials: ['Acrylic', 'Ceramic'],
    area: 'Alfama', avatar: av(11), uniConfirmed: true, openToCommissions: true,
  },
  {
    id: 'miguel', name: 'Miguel Antunes', role: 'alumni', discipline: 'Industrial Design', programme: 'Industrial Design, BA 2023',
    bio: 'Now at a furniture studio in Marvila. Ask me about production and suppliers in Lisbon.',
    skills: ['Furniture', 'Production', 'Suppliers'], topics: ['Craft', 'Objects', 'Circular design'], materials: ['Wood', 'Metal'],
    area: 'Marvila', avatar: av(13), openToCollab: true,
  },
  {
    id: 'leonor', name: 'Leonor Dias', role: 'student', discipline: 'Photography', programme: 'Photography, BA', year: 1,
    bio: 'Portraits of grandmothers in their kitchens.',
    skills: ['Portrait', 'Digital', 'Lighting'], topics: ['Portrait', 'Memory', 'Domestic'], materials: ['Digital'],
    area: 'Penha de França', avatar: av(14), uniConfirmed: true,
  },
  {
    id: 'andre', name: 'André Sousa', role: 'student', discipline: 'Multimedia', programme: 'Multimedia Art, BA', year: 2,
    bio: 'Glitch, games and small screens.',
    skills: ['Unity', 'Creative coding', 'Video'], topics: ['Technology', 'Play', 'Body'], materials: ['Video', 'Screens'],
    area: 'Arroios', avatar: av(15), uniConfirmed: true, openToCollab: true,
  },
  {
    id: 'mariana', name: 'Mariana Teixeira', role: 'alumni', discipline: 'Sculpture', programme: 'Sculpture, MA 2022',
    bio: 'Ceramic sculptor with a shared studio in Graça. Two residencies behind me, happy to tell you how I applied.',
    skills: ['Ceramics', 'Residency applications', 'Kiln firing'], topics: ['Body', 'Material', 'Ecology'], materials: ['Clay', 'Ceramic'],
    area: 'Graça', avatar: av(16), openToCommissions: true,
  },
  {
    id: 'pedro', name: 'Pedro Ramos', role: 'student', discipline: 'Drawing', programme: 'Drawing, BA', year: 3,
    bio: 'Architectural drawings of buildings that do not exist yet.',
    skills: ['Ink', 'Perspective', 'Etching'], topics: ['City', 'Architecture', 'Time'], materials: ['Ink', 'Paper', 'Copper plate'],
    area: 'Chiado', avatar: av(17), uniConfirmed: true, openToCommissions: true,
  },
  {
    id: 'carolina', name: 'Carolina Gomes', role: 'student', discipline: 'Communication Design', programme: 'Communication Design, BA', year: 2,
    bio: 'Motion type and zines.',
    skills: ['Motion design', 'Zines', 'Editorial'], topics: ['Typography', 'Print', 'Play'], materials: ['Paper', 'Video'],
    area: 'Cais do Sodré', avatar: av(18), uniConfirmed: true, openToCollab: true,
  },
  {
    id: 'nuno', name: 'Nuno Carvalho', role: 'student', discipline: 'Industrial Design', programme: 'Industrial Design, BA', year: 3,
    bio: 'Furniture from recycled cork.',
    skills: ['Cork', 'CNC', 'Upholstery'], topics: ['Circular design', 'Objects', 'Ecology'], materials: ['Cork', 'Wood'],
    area: 'Alcântara', avatar: av(19), uniConfirmed: true, openToCommissions: true,
  },
  {
    id: 'rita', name: 'Rita Almeida', role: 'student', discipline: 'Painting', programme: 'Painting, BA', year: 1,
    bio: 'Small egg tempera panels.',
    skills: ['Egg tempera', 'Gilding'], topics: ['Domestic', 'Colour', 'Time'], materials: ['Tempera', 'Wood panel'],
    area: 'Graça', avatar: av(20), uniConfirmed: true,
  },

  // ---- Teachers ----------------------------------------------------------
  {
    id: 'vasco', name: 'Prof. Vasco Ribeiro', role: 'teacher', discipline: 'Industrial Design', programme: 'Design department, FBAUL',
    bio: 'Industrial design, materials lab. I recommend students who finish what they prototype.',
    skills: ['Materials', 'Prototyping'], topics: ['Craft', 'Circular design'], materials: ['Metal', 'Wood'],
    area: 'Chiado', avatar: av(21), uniConfirmed: true,
  },
  {
    id: 'ana', name: 'Prof. Ana Lima', role: 'teacher', discipline: 'Photography', programme: 'Photography and Multimedia, FBAUL',
    bio: 'Photography and moving image. I forward festival calls every week.',
    skills: ['Photography', 'Film'], topics: ['City', 'Archive'], materials: ['Film'],
    area: 'Chiado', avatar: av(22), uniConfirmed: true,
  },

  // ---- Opportunity providers --------------------------------------------
  {
    id: 'armazem', name: 'Armazém 9', role: 'provider', orgType: 'Venue', programme: 'Event and project space',
    bio: 'A riverside warehouse that hosts installations, concerts and one-night shows. We pay for production.',
    skills: ['Large installations', 'One-night shows'], topics: ['Installation', 'Sound', 'Light'], materials: [],
    area: 'Alcântara', avatar: av(23), checked: true,
  },
  {
    id: 'oficina', name: 'Oficina Lume', role: 'provider', orgType: 'Studio', programme: 'Design and production studio',
    bio: 'Lighting and furniture studio. We commission young designers for hotel and restaurant pieces.',
    skills: ['Commissions', 'Production'], topics: ['Light', 'Objects'], materials: [],
    area: 'Marvila', avatar: av(24), checked: true,
  },

  // ---- Spectator --------------------------------------------------------
  {
    id: 'joana', name: 'Joana Frade', role: 'spectator', programme: 'Collector',
    bio: 'I collect works on paper by young Lisbon artists.',
    skills: [], topics: ['Drawing', 'Print'], materials: [], area: 'Chiado', avatar: av(25),
  },
]

export const personById = (id: string) => people.find((p) => p.id === id)
