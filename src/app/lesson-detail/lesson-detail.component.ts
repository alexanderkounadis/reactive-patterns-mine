import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from 'app/shared/model/lesson';

@Component({
  selector: 'lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {
@Input()
lesson: Lesson;
  constructor() { }

  ngOnInit() {
  }

}
