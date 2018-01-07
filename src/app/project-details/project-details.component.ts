import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/index';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ProjectService:ProjectService, private router: Router,) { }
  project;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getProject(id) 
  }
  getProject(id) {
    this.ProjectService.getProject(id).subscribe(project =>  this.project = project["payload"] ) 
  }

  removeSprint(sprintId) {
    console.log(sprintId)
    this.ProjectService.deleteSprint(this.project.id,sprintId).subscribe(res=>location.reload())
  }

}