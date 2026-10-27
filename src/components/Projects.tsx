
const projects = [
  {
    category: 'PERSONAL PROJECT',
    title: 'StillAlive-SOS',
    description:
      'A safety check-in and SOS application concept built with React Native and FastAPI.',
    technologies: ['React Native', 'FastAPI', 'Python', 'SQLAlchemy'],
    links: [
      {
        label: 'Mobile Repository ↗',
        href: 'https://github.com/aditya-kumar96/StillAliveSOS_mobile',
      },
      {
        label: 'Backend Repository ↗',
        href: 'https://github.com/aditya-kumar96/stillalive-sos-backend',
      },
    ],
  },
  {
    category: 'PROFESSIONAL PROJECT',
    title: 'Customization Station',
    description:
      'Contributed to dealer and vendor functionality for a retail customization platform, building UI features and integrating APIs.',
    technologies: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'REST APIs'],
    links: [
      {
        label: 'Visit Website ↗',
        href: 'https://www.customizationstation.com/',
      },
    ],
  },
  {
    category: 'PERFORMANCE CASE STUDY',
    title: 'Native Android SVG Optimization',
    description:
      'Moved resource-intensive SVG processing into native Android code, reducing loading time from approximately 1–2 minutes to 4–5 seconds.',
    technologies: ['React Native', 'Android', 'Kotlin/Java', 'Optimization'],
    links: [],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Selected work
        </p>

        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Projects & impact
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          A selection of personal projects and professional engineering work.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
            >
              <p className="text-xs font-semibold tracking-widest text-blue-600">
                {project.category}
              </p>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {project.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-4 pt-7">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
