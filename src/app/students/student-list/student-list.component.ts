import {Component, OnInit} from '@angular/core';
import {Student} from '../../../models/student';
import {StudentService} from '../../../services/student/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: 'student-list.component.html',
  styleUrls: ['student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public students: Student[] = [];
  constructor(public studentService: StudentService) {
    studentService.getStudent();
    this.studentService.students$.subscribe((students) => this.students = students);
  }
  deleteStudent(student: Student) {
    this.studentService.deleteStudent(student.id);
  }
  ngOnInit() {
  }
}

