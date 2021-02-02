import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { Repository } from '../models/Repository';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getRepository(repoName: string): Observable<Repository> {
    const url = `https://api.github.com/repos/${repoName}`;
    return this.http.get<Repository>(url);
  }
}
