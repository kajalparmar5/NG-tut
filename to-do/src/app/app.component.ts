import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('task')
  task: ElementRef | undefined;
  title = 'to-do';
  taskList: any[] = [];

  constructor() {}
  onAdd(data: string) {
    this.taskList.push({ name: data, isChecked: false });
    // console.log(this.taskList);
    (this.task?.nativeElement as HTMLInputElement).value = '';
  }
  markAsCompleted(item:any){
    item.completed = !item.completed;
  }

  onDelete() {
    this.taskList = this.taskList.filter((item) => !item.isChecked);
    console.log('after delete', this.taskList);
  }
  onComplete(){
    this.taskList = this.taskList.filter((item) => item.isChecked)
    .concat(this.taskList.filter((item) => !item.isChecked));
    //this.taskList = this.taskList.filter((item) => item.isChecked);
  }
  onRemain(){
    this.taskList = this.taskList.filter((item) => !item.isChecked)
    .concat(this.taskList.filter((item) => item.isChecked));
    //this.taskList = this.taskList.filter((item) => !item.isChecked);
  }
  
}
