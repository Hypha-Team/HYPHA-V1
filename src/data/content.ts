// Posts, project calls, opportunities and canned chat replies.
import { art } from '../art/generateArt'
import type { Message, Opportunity, Post, ProjectCall } from './types'

export const posts: Post[] = [
  { id: 'p1', authorId: 'tiago', text: 'Second bend of the Arco lamp. The jig held this time.', picture: art('lamp', 501, 0.8, ['#1E2328', '#C9A66B', '#3A4148', '#EEE']), tags: ['Light', 'Metal'], ago: 35 },
  { id: 'p2', authorId: 'helena', text: 'Armazém 9 just opened a call for one-night installations. Pay for production included. Sculpture third-years, look at this.', tags: ['Open call', 'Installation'], ago: 80 },
  { id: 'p3', authorId: 'sofia', text: 'Found a whole box of broken tiles behind a shop in Alfama. Next canvas starts tomorrow.', picture: art('blocks', 502, 1, ['#1F4E79', '#F2C14E', '#E6E1D3', '#F7F3EA']), tags: ['Painting', 'Ceramic'], ago: 140 },
  { id: 'p4', authorId: 'fio', text: 'Studio visits in Marvila this Saturday for the spring group show. Write to us if you want a slot.', picture: art('horizon', 503, 1.3, ['#3A2F25', '#B8946A', '#D8CFC0', '#F4EFE7']), tags: ['Group show', 'Marvila'], ago: 200 },
  { id: 'p5', authorId: 'rui', text: 'Printing the night series this week. Darkroom smells like home.', picture: art('horizon', 504, 0.8, ['#0E1A26', '#2D4A63', '#5F7E95', '#C9D6DF']), tags: ['Photography', 'Darkroom'], ago: 320 },
  { id: 'p6', authorId: 'beatriz', text: 'Twelve Sundays, one pair of hands.', picture: art('hatch', 505, 0.75), tags: ['Drawing', 'Portrait'], ago: 460 },
  { id: 'p7', authorId: 'joao', text: 'Testing projections on the courtyard wall tonight. Come by after 9.', picture: art('screen', 506, 1.5, ['#0A0F1E', '#3FA7D6', '#F2A541', '#FFFFFF']), tags: ['Multimedia', 'Light'], ago: 600 },
  { id: 'p8', authorId: 'mariana', text: 'Residency applications close in three weeks. Happy to read your statement if you send it to me.', tags: ['Residency', 'Advice'], ago: 900 },
  { id: 'p9', authorId: 'nuno', text: 'Prof. Ribeiro recommended the cork bench. Now looking for a café that wants six of them.', picture: art('blocks', 507, 1.3, ['#3A2F25', '#B8946A', '#D8CFC0', '#F4EFE7']), tags: ['Cork', 'Commission'], ago: 1300 },
]

export const projectCalls: ProjectCall[] = [
  {
    id: 'c1', authorId: 'joao', title: 'Looking for a sculptor for a projected object', lookingFor: 'Sculpture',
    description: 'I need a white object, about 1 m tall, to project on for the night of museums. Your form, my light.',
    tags: ['Projection', 'Collaboration'], area: 'Arroios', ago: 300, picture: art('screen', 601, 1.4),
    responses: [{ personId: 'duarte', text: 'I have a carved wooden piece that could work. Want to see it?' }],
  },
  {
    id: 'c2', authorId: 'clara', title: 'Looking for a photographer for a catalogue', lookingFor: 'Photography',
    description: 'Catalogue for the third-year group show. Two days of shooting in December, paid.',
    tags: ['Catalogue', 'Paid'], area: 'Chiado', ago: 700, responses: [],
  },
  {
    id: 'c3', authorId: 'nuno', title: 'Looking for a painter to finish cork panels', lookingFor: 'Painting',
    description: 'Six cork panels for a café wall, need someone who knows colour better than I do.',
    tags: ['Cork', 'Commission'], area: 'Alcântara', ago: 1500, responses: [],
  },
]

export const opportunities: Opportunity[] = [
  {
    id: 'o1', providerId: 'fio', kind: 'exhibition', title: 'Spring group show: first five years',
    description: 'Six artists, one room, four weeks in March. We cover transport and the opening. Sculpture and installation welcome.',
    deadline: '15 Jan 2027', disciplines: ['Sculpture', 'Painting', 'Drawing'], area: 'Marvila', fee: '€300 per artist', picture: art('horizon', 701, 1.4, ['#3A2F25', '#B8946A', '#D8CFC0', '#F4EFE7']),
  },
  {
    id: 'o2', providerId: 'armazem', kind: 'open-call', title: 'One-night installations by the river',
    description: 'Three proposals chosen for one night in February. Production budget included.',
    deadline: '10 Dec 2026', disciplines: ['Sculpture', 'Multimedia'], area: 'Alcântara', fee: '€800 production', picture: art('flow', 702, 1.4, ['#11263A', '#3F7CA6', '#C7D9E3', '#F2EEE8']),
  },
  {
    id: 'o3', providerId: 'oficina', kind: 'commission', title: 'Pendant lamps for a hotel lobby',
    description: 'We are looking for a young designer to develop three pendant lamps with our workshop.',
    deadline: '20 Dec 2026', disciplines: ['Industrial Design'], area: 'Marvila', fee: '€2,400', picture: art('lamp', 703, 1.4),
  },
  {
    id: 'o4', providerId: 'fio', kind: 'commission', title: 'Window piece for the gallery facade',
    description: 'A work for our street window, visible day and night, for three months.',
    deadline: '5 Jan 2027', disciplines: ['Sculpture', 'Communication Design', 'Multimedia'], area: 'Marvila', fee: '€600', picture: art('blocks', 704, 1.4),
  },
  {
    id: 'o5', providerId: 'armazem', kind: 'open-call', title: 'Sound pieces for the warehouse',
    description: 'Short sound works for our listening nights.',
    deadline: '30 Jan 2027', disciplines: ['Multimedia'], area: 'Alcântara', picture: art('screen', 705, 1.4),
  },
]

/** Messages already in the app before the demo starts. */
export const seedMessages: Message[] = [
  { id: 'm1', from: 'helena', to: 'marta', text: 'I marked "What the Room Keeps" as recommended. Show it to people.', at: Date.now() - 1000 * 60 * 60 * 26 },
  { id: 'm2', from: 'marta', to: 'helena', text: 'Thank you! I will.', at: Date.now() - 1000 * 60 * 60 * 25 },
  { id: 'm3', from: 'mariana', to: 'tiago', text: 'Saw your lamp at open studios. Nice joints.', at: Date.now() - 1000 * 60 * 60 * 50 },
]

/** Fake replies, so chats feel alive. The demo uses the first reply of each person. */
export const cannedReplies: Record<string, string[]> = {
  tiago: [
    'Hi Marta! Your stone piece is beautiful. A steel frame with warm light inside it — I can do that. Coffee at the workshop on Thursday?',
    'I can bring a few LED samples so we test the colour on the stone.',
    'Perfect, see you there.',
  ],
  fio: ['Thanks for writing. We will look at your portfolio and get back to you this week.'],
  helena: ['Good. Send me a photo when it is done.'],
  default: ['Thanks! Let me look and get back to you.', 'Sounds good to me.', 'Sure, send me more details.'],
}
