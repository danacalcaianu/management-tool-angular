import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/index';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ProjectService:ProjectService) { }
  project;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getProject(id) 
  }
  getProject(id) {
    this.ProjectService.getProject(id).subscribe(project =>  this.project = project["payload"] ) }

}