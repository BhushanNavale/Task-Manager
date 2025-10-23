import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  newTask: string = '';
  selectedPriority: 'High' | 'Medium' | 'Low' = 'Medium';

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.tasksService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  addTask() {
    if (this.newTask.trim() === '') return;
    const task: Task = {
      id: Date.now(),
      name: this.newTask,
      completed: false,
      isEditing: false,
      priority: this.selectedPriority
    };
    this.tasksService.addTask(task).subscribe(() => {
      this.tasks.push(task);
      this.newTask = '';
      this.selectedPriority = 'Medium';
    });
  }

  deleteTask(id: number) {
    this.tasksService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== id);
    });
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
    this.tasksService.updateTask(task).subscribe();
  }

  editTask(task: Task) {
    task.isEditing = true;
  }

  saveEdit(task: Task, updatedName: string) {
    if (updatedName.trim() === '') return;
    task.name = updatedName;
    task.isEditing = false;
    this.tasksService.updateTask(task).subscribe();
  }

  cancelEdit(task: Task) {
    task.isEditing = false;
  }
}