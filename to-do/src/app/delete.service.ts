import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor() { }

  taskList:any[]=[]
 
    deleteTask(taskId: string) {
      this.taskList = this.taskList.filter(task => task.id !== taskId)
    }
  }

