import { Component, OnInit } from '@angular/core';
import{ ProjectService } from "../services/index"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private ProjectService : ProjectService ) { }

  projects;
  visible;

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.ProjectService.getProjects().subscribe(projects => {
      if(this.projects !==undefined){
        return this.projects = this.projects.concat(projects['payload'])
      } else{ 
        return this.projects = projects['payload']}
      });
  }

  myValueChange($event) {
    if($event !== undefined){
      this.ProjectService.addProject($event).subscribe(project=>this.projects.push(project['payload']));
    }
    this.visible=false;
  }

  toggleVisibility(){
    this.visible= !this.visible;
  }

}