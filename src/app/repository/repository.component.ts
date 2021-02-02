import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { Repository } from '../models/Repository';
import { GithubService } from '../services/github.service';

interface RepositoryParams {
  owner: string;
  repositoryName: string;
}

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
})
export class RepositoryComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  repository: Repository;

  constructor(
    private activatedRoute: ActivatedRoute,
    private githubService: GithubService
  ) {
    this.loadParams();
  }

  ngOnInit(): void {}

  private async loadParams(): Promise<void> {
    this.activatedRoute.params.subscribe((params) => {
      const { owner, repositoryName } = params as RepositoryParams;

      this.loadRepository(`${owner}/${repositoryName}`);
    });
  }

  private loadRepository(repositoryName: string): void {
    this.githubService.getRepository(repositoryName).subscribe((repository) => {
      this.repository = repository;
    });
  }
}
