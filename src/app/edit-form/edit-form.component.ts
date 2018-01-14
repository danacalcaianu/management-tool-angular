import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  @Input() issue;
  @Output('action') counterChange = new EventEmitter();

  constructor() { }
  model : any = {};
  visible;
  ngOnInit() {
  }

  editIssue(){
    this.model.title= this.model.title || this.issue.title;
    this.model.description= this.model.description || this.issue.description;
    this.model.status= this.model.status || this.issue.status;
    this.model.type= this.model.type || this.issue.type;
    if(this.model.assignee !== undefined || this.issue.assignee !==undefined ){
      this.model.assignee=this.model.assignee || this.issue.assignee;
    }
    console.log(this.model)
    this.counterChange.emit(this.model)
  }
  
  toggleVisibility(){
    this.counterChange.emit()
  }
}