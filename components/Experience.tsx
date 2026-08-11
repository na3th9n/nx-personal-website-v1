import { jobs } from "@/content/jobs";

export function Experience() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-sm font-medium tracking-wide text-muted uppercase">
        Experience
      </h2>
      <div className="flex flex-col gap-6">
        {jobs.map((job) => (
          <div key={`${job.company}-${job.role}`} className="flex flex-col gap-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-medium">
                {job.role} <span className="text-muted">· {job.company}</span>
              </h3>
              <p className="font-mono text-xs text-muted">
                {job.start} – {job.end}
              </p>
            </div>
            <p className="leading-relaxed text-muted">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
