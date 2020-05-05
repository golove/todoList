import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public keywords: string;
  public todoList: Array<object> = [];

  constructor(public storage: StorageService) {

  }

  ngOnInit(): void {
    this.todoList = this.storage.get('todoList')
  }
  doadd(e: any) {
    if (this.keywords !== '') {
      if (e.keyCode === 13) {
        if (!this.todolisthaskeywords(this.todoList, this.keywords)) {
          this.todoList.unshift({ title: this.keywords, status: 0 })
          this.keywords = ''
          this.storage.set('todoList', this.todoList)
        } else {
          alert(`已存在[${this.keywords}]`)
        }
      }
    }
  }


  doaddbtn() {
    if (this.keywords !== '') {
      if (!this.todolisthaskeywords(this.todoList, this.keywords)) {
        this.todoList.unshift({ title: this.keywords, status: 0 })
        this.keywords = ''
        this.storage.set('todoList', this.todoList)
      } else {
        alert(`已存在[${this.keywords}]`)
      }
    }

  }



  checkchange() {
    this.storage.set('todoList', this.todoList)
  }
  deleteitem(key: number) {
    this.todoList.splice(key, 1)
    this.storage.set('todoList', this.todoList)
  }
  todolisthaskeywords(todoList: Array<any>, keywords: string) {
    for (const iterator of todoList) {
      if (iterator.title === keywords) {
        return true
      }
    }
    return false
  }
}
