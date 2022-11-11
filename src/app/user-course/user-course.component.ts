import { Component, OnInit } from '@angular/core';
import { APIConfig } from '../APIConfig';
import { CourseService } from '../Service/course.service';

@Component({
  selector: 'app-user-course',
  templateUrl: './user-course.component.html',
  styleUrls: ['./user-course.component.css']
})
export class UserCourseComponent implements OnInit {

  courseList: any;
  courseModel: any;
  courseDetailView = false;
  constructor(private courseservice: CourseService) { }

  ngOnInit(): void {
    this.GetCourses();
  }

  GetCourses() {
    this.courseservice.GetAllCourse()
      .subscribe(z => {
        this.courseList = z;
      });
    this.courseDetailView = false;
  }

  GetFilterCourse(technology:any, fromduration:any, toduration:any) {
    this.courseservice.GetCourseFilter(technology, fromduration, toduration)
      .subscribe(z => {
        this.courseList = z;
      });
    this.courseDetailView = false;
  }

  GetCourseDetail(course: any) {
    this.courseModel = course;
    this.courseDetailView = true;
  }

  CloseCourseDetailView() {
    this.courseDetailView = false;
  }

}
