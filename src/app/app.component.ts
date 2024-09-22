import { Component } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms'; // Importação correta do FormsModule


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    RouterLink,
    TaskListComponent,
    TaskFormComponent,
    MatToolbarModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lista-de-tarefas';
}
