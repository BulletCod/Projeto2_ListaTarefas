import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}
  getTasks(): Observable<any[]> {  // Retorne um array de qualquer tipo
    return this.http.get<any[]>(this.apiUrl);
  }

  addTask(task: { description: string; completed: boolean }): Observable<any> {  // Use um objeto simples
    return this.http.post<any>(this.apiUrl, task);
  }

  toggleTaskCompleted(task: { id: number; completed: boolean }): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${task.id}`, task);
  }
}