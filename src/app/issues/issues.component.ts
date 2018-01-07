import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  @Input() sprint;
  @Input() project;
  issues;
  htmlToAdd;
  constructor() { }

  ngOnInit() {
    this.getIssues(this.sprint)
  }
  getIssues(sprint){
    const result = this.project.issues.filter( issue => issue.sprint === sprint.id );
    console.log(result)
    if(result.length !== 0){
      this.issues = result;
    } else{
      this.issues= [];
    }
    // return result;
    // this.ProjectService.getIssues(this.project.id, sprint.id).subscribe(res=>console.log(res))
  }

  putHtml(){
    this.htmlToAdd = "<div class='two'>two</div>";
  }

}
