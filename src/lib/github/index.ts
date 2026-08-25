/**
 * GitHub integration placeholder.
 * Future GitHub API integration should be isolated here
 * and not affect UI components directly.
 */

export type GitHubConfig = {
  username: string;
  token?: string;
};

export async function getGitHubProfile(config: GitHubConfig) {
  void config;
  // TODO: Implement GitHub API integration when needed
  return null;
}

export async function getGitHubRepos(config: GitHubConfig) {
  void config;
  // TODO: Implement GitHub repos fetch when needed
  return [];
}

export async function getGitHubActivity(config: GitHubConfig) {
  void config;
  // TODO: Implement GitHub activity fetch when needed
  return [];
}
