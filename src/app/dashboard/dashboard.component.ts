import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Repository } from '../models/Repository';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  faChevronRight = faChevronRight;

  inputControl = new FormControl();
  errors = '';
  repositories: Repository[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.getRepositories();
  }

  onSearch(): void {
    if (!this.inputControl.value) {
      this.errors = 'Preencha o campo para buscar';
    }

    this.githubService
      .getRepository(this.inputControl.value)
      .subscribe((repository) => {
        this.setRepository(repository);
      });
  }

  private setRepository(repository: Repository): void {
    this.repositories.push(repository);

    localStorage.setItem('repositories', JSON.stringify(this.repositories));
  }

  private getRepositories(): void {
    const repositoriesString = localStorage.getItem('repositories');

    if (repositoriesString) {
      this.repositories = JSON.parse(repositoriesString);
    }
  }
}
