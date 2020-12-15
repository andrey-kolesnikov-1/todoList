import {Injectable} from '@angular/core';
import {Task} from "../interfaces/task";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskArray: Task[] = [];
  stream$: Subject<Task[]> = new Subject<Task[]>();

  constructor() {
  }

  getTasks() {
    this.stream$.next(this.taskArray);
  }

  addNewTask(task: string) {
    this.taskArray.push({completed: false, task: task});
    this.getTasks();
  }

  deleteCompleted() {
    this.taskArray = this.taskArray.filter(item => !item.completed);
    this.getTasks();
  }
}
