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
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
