import { jobs } from "@/content/jobs";

export function Experience() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Experience</h2>
      {jobs.map((job) => (
        <div key={`${job.company}-${job.role}`} className="flex flex-col gap-1">
          <h3 className="font-medium">
            {job.role} · {job.company}
          </h3>
          <p className="text-sm text-zinc-500">
            {job.start} – {job.end}
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">{job.description}</p>
        </div>
      ))}
    </section>
  );
}
