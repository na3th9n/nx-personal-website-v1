export interface Job {
  company: string;
  role: string;
  // e.g. "2023"
  start: string;
  // e.g. "Present"
  end: string;
  description: string;
}

// Placeholder entries — swap in real work history.
export const jobs: Job[] = [
  {
    company: "Company Name",
    role: "Role Title",
    start: "2023",
    end: "Present",
    description: "Placeholder description of what you did in this role.",
  },
  {
    company: "Previous Company",
    role: "Previous Role Title",
    start: "2021",
    end: "2023",
    description: "Placeholder description of what you did in this role.",
  },
];
