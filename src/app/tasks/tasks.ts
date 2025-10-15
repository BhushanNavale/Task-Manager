import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { App } from '../app';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';

interface Task {
  id: number;
  name: string;
  completed: boolean;
  isEditing?: boolean; 
  priority?: 'High' | 'Medium' | 'Low';
}

@Component({
  selector: 'app-tasks',
  imports: [FormsModule,NgFor,NgIf,NgClass],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
   tasks: Task[] = [];
  newTask: string = '';
  selectedPriority: 'High' | 'Medium' | 'Low' = 'Medium';

  addTask() {
    if (this.newTask.trim() === '') return;
    const task: Task = {
      id: Date.now(),
      name: this.newTask,
      completed: false,
      isEditing: false,
      priority: this.selectedPriority
    };
    this.tasks.push(task);
    this.newTask = '';
     this.selectedPriority = 'Medium';
    this.saveTasks();
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
    this.saveTasks();
  }

  editTask(task: Task) {
    task.isEditing = true;
  }

  saveEdit(task: Task, updatedName: string) {
    if (updatedName.trim() === '') return;
    task.name = updatedName;
    task.isEditing = false;
    this.saveTasks();
  }

  cancelEdit(task: Task) {
    task.isEditing = false;
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadTasks() {
    const data = localStorage.getItem('tasks');
    if (data) {
      this.tasks = JSON.parse(data);
    }
  }

  ngOnInit() {
    this.loadTasks();
  }
}
