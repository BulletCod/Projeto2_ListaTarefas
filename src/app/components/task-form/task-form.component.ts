import { Component, EventEmitter, Output} from '@angular/core';
import { TaskService } from '../../services/task.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'; // Importação correta do FormsModule
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormField,
    MatFormFieldModule,
    MatLabel,
    FormsModule,
    MatInputModule

  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  newTaskDescription: string = '';
  @Output() taskAdded = new EventEmitter<any>();  // Emitindo o evento

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (!this.newTaskDescription.trim()) {  // Validação do campo
      alert('Por favor, insira uma descrição válida.');
      return;  // Não adiciona se estiver em branco
    }

    const newTask = {
      description: this.newTaskDescription,
      completed: false
    };
    
    this.taskService.addTask(newTask).subscribe((task) => {
      this.taskAdded.emit(task);  // Emite a nova tarefa
      this.newTaskDescription = '';  // Limpa o campo após adicionar
    });
  }
}