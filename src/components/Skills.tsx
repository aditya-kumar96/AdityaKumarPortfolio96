
const skillGroups = [
  {
    title: 'Web Development',
    description: 'Building responsive web interfaces and reusable components.',
    skills: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform applications and native platform integrations.',
    skills: ['React Native', 'React Navigation', 'Redux Toolkit', 'Android SDK'],
  },
  {
    title: 'Backend Development',
    description: 'APIs, authentication, and relational database integration.',
    skills: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'SQLite', 'JWT'],
  },
  {
    title: 'Native & Engineering Tools',
    description: 'Platform-specific development, debugging, and delivery.',
    skills: ['Java', 'Kotlin', 'Git', 'GitHub', 'Firebase', 'Jest'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Technical toolkit
        </p>

        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Skills & technologies
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          The tools and technologies I use across web, mobile, and backend
          development.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
            >
              <h3 className="text-lg font-bold text-slate-900">
                {group.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {group.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
