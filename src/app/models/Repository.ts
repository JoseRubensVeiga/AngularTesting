export interface Repository {
  full_name: string;
  description: string;
  issues_url: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    avatar_url: string;
    url: string;
    login: string;
  };
}
