import {Component, Input} from '@angular/core';
import {Task} from "../../shared/interfaces/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input()
  task: Task = {completed:false, task: ''};

  constructor() { }

  toggleCompleted() {
    this.task.completed = !this.task.completed;
  }

}
