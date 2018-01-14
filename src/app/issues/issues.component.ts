import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from "../services/index";

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css'],
})
export class IssuesComponent implements OnInit {
  @Input() sprint;
  @Input() project;

  issues;
  htmlToAdd;
  constructor(private ProjectService:ProjectService) { }

  ngOnInit() {
    this.getIssues(this.sprint)
  }
  ngOnChanges(changes) {
    this.getIssues(this.sprint)
  }

  getIssues(sprint) {
    this.ProjectService.getProject(this.project.id).subscribe(project=>{
      const result = this.project.issues.filter(issue => issue.sprint === sprint.id );
      console.log(result)
      if (result.length !== 0) {
        this.issues = result;
      } else {
        this.issues = [];
      }
    })
  }

  putHtml() {
    this.htmlToAdd = "<div class='two'>two</div>";
  }

}
