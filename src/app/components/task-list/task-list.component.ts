import { Component, OnInit } from '@angular/core';
import {  TaskService } from '../../services/task.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'; // Importação correta do FormsModule
import { TaskFormComponent } from '../task-form/task-form.component';


import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    TaskFormComponent,
    MatListModule
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];  // Usando um array de qualquer tipo

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  toggleCompleted(task: any): void {  // Usando um objeto genérico
    task.completed = !task.completed;
    this.taskService.toggleTaskCompleted(task).subscribe();
  }
   // Método para adicionar a tarefa diretamente
   addTask(task: any): void {
    this.tasks.push(task);  // Adiciona a nova tarefa ao array local
  }
}