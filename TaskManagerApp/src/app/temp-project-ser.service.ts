import { Injectable } from '@angular/core';
import { TemplateProj } from './template-proj';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TempProjectSerService {
  urlPrefix: string = "http://localhost:9090"; //make this as empty ("") if you are using asp.net core [without CORS]

  constructor(private httpClient: HttpClient)
  {
  }

  getAllProjects(): Observable<TemplateProj[]>
  {
    return this.httpClient.get<TemplateProj[]>(this.urlPrefix + "/api/projects", { responseType: "json" })
      .pipe(map(
        (data: TemplateProj[]) =>
        {
          for (let i = 0; i < data.length; i++)
          {
            //data[i].teamSize = data[i].teamSize * 100;
          }
          return data;
        }
      ));
  }

  insertProject(newProject: TemplateProj): Observable<TemplateProj>
  {
    var requestHeaders = new HttpHeaders();
    requestHeaders = requestHeaders.set("X-XSRF-TOKEN", sessionStorage['XSRFRequestToken']);
    return this.httpClient.post<TemplateProj>(this.urlPrefix + "/api/projects", newProject, { headers: requestHeaders, responseType: "json" });
  }

  updateProject(existingProject: TemplateProj): Observable<TemplateProj>
  {
    return this.httpClient.put<TemplateProj>(this.urlPrefix + "/api/projects", existingProject, { responseType: "json" });
  }

  deleteProject(ProjectID: number): Observable<string>
  {
    return this.httpClient.delete<string>(this.urlPrefix + "/api/projects?ProjectID=" + ProjectID);
  }

  SearchProjects(searchBy: string, searchText: string): Observable<TemplateProj[]>
  {
    return this.httpClient.get<TemplateProj[]>(this.urlPrefix + "/api/projects/search/" + searchBy + "/" + searchText, { responseType: "json" });
  }

}
