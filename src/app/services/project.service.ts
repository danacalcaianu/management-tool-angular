import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap, filter } from 'rxjs/operators';

@Injectable()
export class ProjectService {

  private projectsUrl = 'http://localhost:3030/projects/getAll/';

  getProjects() {
    return this.http.get(`${this.projectsUrl}`);
  }
  constructor(private http: HttpClient) { }

  getProject(id: string) {
    return this.http.get<any>(`http://localhost:3030/projects/${id}/getProject`);
  }

  deleteSprint( projectId, sprintId ) {
    return this.http.delete<any>(`http://localhost:3030/users/${projectId}/removeSprint/${sprintId}`);
  }

  getIssues( projectId, sprintId ) {
    return this.http.get<any>(`http://localhost:3030/projects/${ projectId }/getIssuesForSprint/${ sprintId }`);
  }

  addProject(body){
    //TODO: needs changes(not hardcoded user ID)!
    return this.http.put<any>(`http://localhost:3030/users/iwl0tbcrkh/addProject`,body);
  }

  addSprint(body,id){
    //TODO:needs changes(not hardcoded user ID)!
    return this.http.put<any>(`http://localhost:3030/users/iwl0tbcrkh/addSprint/${id}`,body);
  }

  editIssue(projectId,issueId,body) {
    //TODO VERIFY
    return this.http.put<any>(`http://localhost:3030/users/iwl0tbcrkh/${projectId}/editIssue/${issueId}`,body);
    //localhost:3030/users/iwl0tbcrkh/editIssue/hcr37a0aor
    // `http://localhost:3030/users/iwl0tbcrkh/${projectId}/editIssue/${issueId}`
  }

  addIssue(body,id){
    //TODO:needs changes(not hardcoded user ID)!
    return this.http.put<any>(`http://localhost:3030/users/iwl0tbcrkh/addIssue/${id}`,body);
  }
  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
