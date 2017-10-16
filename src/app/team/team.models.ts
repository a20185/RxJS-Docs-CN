export interface ITeam {
  coreTeam: IMember[];
  learningTeam: IMember[];
}

export interface IMember {
  name: string;
  role: string;
  githubUrl: string;
  avatar: string;
  twitterUrl: string;
  linkedin: string;
  email: string;
  bio: string;
}
