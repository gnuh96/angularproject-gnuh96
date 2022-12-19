import {Student} from './student';

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  studentID?: number;
  student?: Student;
  major?: string;
  archived?: boolean;
}

export enum Major {
  SI = 'SI',
  GB = 'GB'
}
