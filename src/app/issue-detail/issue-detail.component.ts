import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProjectService } from "../services/index";
import { Location } from '@angular/common';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {

  constructor(private location: Location, private route: ActivatedRoute, private ProjectService: ProjectService, private router: Router, ) { }
  project;
  issueId;
  projectId;
  issue;
  visible;

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('projectId');
    this.issueId = this.route.snapshot.paramMap.get('id');
    this.getIssue(this.projectId, this.issueId)
  }

  getIssue(pId, iId) {
    this.ProjectService.getProject(pId).subscribe(project => {
      this.project = project["payload"];
      this.issue = this.project.issues.filter(item => item.id == iId);
      this.issue=this.issue[0];
    })
  }
  backClicked() {
    this.location.back();
  }

  toggleVisibility(){
    this.visible= !this.visible;
  }

  myValueChange($event) {
    if($event !== undefined){
      // this.ProjectService.editIssue($event,this.project.id).subscribe(project=>{this.sprints=project['payload'].sprints});
    }
    this.visible=false;
    }
}