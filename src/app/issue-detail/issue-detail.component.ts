import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProjectService } from "../services/index";

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ProjectService:ProjectService, private router: Router,) { }
  project;
  issueId;
  projectId;
  issue;

  ngOnInit() {
     this.projectId = this.route.snapshot.paramMap.get('projectId');
     this.issueId = this.route.snapshot.paramMap.get('id');
     this.getIssue(this.projectId,this.issueId)
  }

  getIssue(pId,iId) {
    this.ProjectService.getProject(pId).subscribe(project =>{
      this.project = project["payload"]; 
      this.issue = this.project.issues.filter(item=>item.id==iId);
    }) 
  }
}
