import { Link, useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { profile } from "../data/profile";
import { useEffect } from "react";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);
    useEffect(() => {
    window.scrollTo(0, 0);
    }, [slug]);

  if (!project) {
    return (
      <main className="min-h-screen bg-stone-100 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold">Project not found</h1>
            <Link
            to="/"
            className="text-sm font-medium text-slate-500 hover:text-slate-950"
            >
            ← Back to portfolio
            </Link>
        </div>
      </main>
    );
  }

return (
  <main className="min-h-screen bg-stone-100 text-slate-900">
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 lg:grid-cols-[1fr_340px] lg:items-start">
        <div>
          <Link to="/" className="text-sm font-medium text-slate-500 hover:text-slate-950">
            ← Back to portfolio
          </Link>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            {project.category}
          </p>

          <h1 className="mt-3 text-5xl font-black tracking-tight md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-4 text-lg font-medium text-slate-500">
            {project.dates}
          </p>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600">
            {project.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-stone-100 p-6 shadow-sm lg:mt-16">
          <h2 className="text-xl font-bold">Key Features</h2>

          <ul className="mt-5 list-disc space-y-3 pl-5 text-slate-600">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>

    {project.images?.length > 0 && (
      <section className="bg-stone-100">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-3xl font-bold">Project Gallery</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {project.images.map((image) => (
              <figure
                key={image.src}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full object-cover"
                />

                {image.caption && (
                  <figcaption className="border-t border-slate-200 px-5 py-4 text-sm text-slate-600">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>
    )}

    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold">Overview</h2>

          <p className="mt-6 whitespace-pre-line text-lg leading-8 text-slate-700">
            {project.longDescription}
          </p>
        </article>
      </div>
    </section>
      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500">
        {profile.name}
      </footer>
  </main>
);
}