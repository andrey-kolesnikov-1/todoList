import {Component, OnDestroy, OnInit} from '@angular/core';
import {Task} from './shared/interfaces/task';
import {TaskService} from "./shared/services/task.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'todoList';
  todoList: Task[] = [];
  sub: Subscription = new Subscription;
  textTask: string = '';
  isError: boolean = false;

  constructor(private data: TaskService) {
  }

  ngOnInit(): void {
    this.sub = this.data.stream$.subscribe(tasks => this.todoList = tasks);
  }

  deleteSelected() {
    this.data.deleteCompleted();
  }

  addNewTask() {
    let text = this.textTask.trim();
    if (text === '' || text.length < 3) {
      this.isError = true;
    } else  {
      this.data.addNewTask(text);
      this.textTask = '';
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
