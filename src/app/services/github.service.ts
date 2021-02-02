import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Repository } from '../models/Repository';
import { Issue } from '../models/Issue';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getRepository(repoName: string): Observable<Repository> {
    const url = `https://api.github.com/repos/${repoName}`;
    return this.http.get<Repository>(url);
  }

  getIssues(repoName: string): Observable<Issue[]> {
    const url = `https://api.github.com/repos/${repoName}/issues`;
    return this.http
      .get<Issue[]>(url)
      .pipe(map((response) => response.slice(0, 5)));
  }
}
