import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnInit {
  @Output('action') counterChange = new EventEmitter();
  @Input() currentSprint;

  constructor() { }
  model: any = {};
  ngOnInit() {}
  addProject(){
    this.model.sprint=this.currentSprint.id
    this.counterChange.emit(this.model)
  }

  toggleVisibility(){
    this.counterChange.emit()
  }


}
