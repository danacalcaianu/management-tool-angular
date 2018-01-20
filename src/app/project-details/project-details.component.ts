import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/index';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(private location: Location, private route: ActivatedRoute, private ProjectService:ProjectService, private router: Router,) { }
  project;
  sprints;
  issues;
  visible;
  visible2;
  currentSprint;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getProject(id);
  }
  ngOnChanges(changes) {
    this.sprints=changes.project.currentValue.sprints;
  }
  getProject(id) {
    this.ProjectService.getProject(id).subscribe(project => {
       this.project = project["payload"];
       this.sprints = this.project.sprints;} )
  }

  removeSprint(sprintId) {
    console.log(sprintId)
    this.ProjectService.deleteSprint(this.project.id,sprintId).subscribe(res=>location.reload())
  }

  toggleVisibility(){
    this.visible= !this.visible;
  }

  toggleVisibility2(sprint){
    this.visible2= !this.visible2;
    this.currentSprint=sprint;

  }


  myValueChange($event) {
    if($event !== undefined){
      this.ProjectService.addSprint($event,this.project.id)
        .subscribe(project=>{this.sprints=project['payload'].sprints},
        error => {
            alert(error.statusText)
        });
    }
    this.visible=false;
    }

    myValueChange2($event) {
      if($event !== undefined){
        this.ProjectService.addIssue($event,this.project.id)
          .subscribe(project=>{this.project=project['payload']},
          error => {
              alert(error.statusText)
          });
      }
      this.visible2=false;
      }

      backClicked() {
        this.location.back();
    }

}