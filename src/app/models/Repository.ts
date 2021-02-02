export interface Repository {
  full_name: string;
  description: string;
  issues_url: string;
  owner: {
    avatar_url: string;
    url: string;
    login: string;
  };
}
