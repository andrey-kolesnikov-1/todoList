import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../../shared/interfaces/task";
import {TaskService} from "../../shared/services/task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input()
  task: Task = {completed:false, task: ''};

  constructor() { }

  ngOnInit(): void {
  }

  toggleCompleted() {
    this.task.completed = !this.task.completed;
  }

}
