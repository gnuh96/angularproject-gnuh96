import {Major, Ticket} from '../models/ticket';
import {STUDENTS_MOCKED} from './students.mock';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Vietnam',
    description: '',
    date: dateToday,
    student: STUDENTS_MOCKED[0],
    major: Major.GB
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: STUDENTS_MOCKED[1],
    major: Major.SI
  },
  {
    title: 'SI6 in London',
    description: 'Description du pays',
    date: dateToday,
    student: STUDENTS_MOCKED[2],
    major: Major.SI,
    archived: true
  },
];
