import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  @Output('action') counterChange = new EventEmitter();
  constructor() { }
  model: any = {};
  ngOnInit() {
  }

  addProject(){
    this.counterChange.emit(this.model)
  }

  toggleVisibility(){
    this.counterChange.emit()
  }

}
