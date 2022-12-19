import {Injectable} from '@angular/core';
import {Student} from '../../models/student';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private url = 'http://localhost:9600/';
  private studentList: Student[];
  public students$: BehaviorSubject<Student[]> = new BehaviorSubject([]);

  constructor(
    private http: HttpClient
  ) {}

  getStudent() {
    this.http.get<Student[]>(`${this.url}/api/students`).subscribe((students) => {
      this.studentList = students;
      this.students$.next(this.studentList);
      console.log((this.studentList));
    });
  }

  addStudent(student: Student) {
    // You need here to update the list of ticket and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    this.studentList.push(student); // add new ticket to list
    this.students$.next(this.studentList); // update observable
  }

  deleteStudent(id) {
    this.http.delete(`${this.url}/api/students/${id}`).subscribe(value => {
      this.getStudent();
      console.log('deleted');
    });
  }

}

