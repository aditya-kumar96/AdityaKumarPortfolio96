
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './Contact'

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="flex min-h-screen items-center bg-white px-6 pt-16"
        >
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 py-20 md:grid-cols-2">
            {/* Left: Introduction */}
            <div>
              <p className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                React Native · React.js · FastAPI
              </p>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Building digital products
                <span className="block text-blue-600">
                  for the real world.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                I'm Aadi, a software developer focused on web and mobile
                applications. I build with React Native and React.js, with
                backend experience in Python and FastAPI.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-700"
                >
                  Explore My Work ↗
                </a>

                <a
                  href="#contact"
                  className="rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Get in Touch
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
                <span>✓ Production applications</span>
                <span>✓ Performance-focused</span>
                <span>✓ Web & mobile</span>
              </div>
            </div>

            {/* Right: Developer Card */}
            <div className="mx-auto w-full max-w-md">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white">
                    A
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Aadi Kumar
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Software Developer · India
                    </p>
                  </div>
                </div>

                <div className="my-7 h-px bg-slate-200" />

                <p className="text-sm font-medium text-slate-500">
                  CURRENTLY FOCUSED ON
                </p>

                <div className="mt-4 space-y-3">
                  {[
                    ['01', 'Cross-platform mobile apps'],
                    ['02', 'Full-stack application development'],
                    ['03', 'Native Android performance'],
                  ].map(([number, title]) => (
                    <div
                      key={number}
                      className="flex items-center gap-4 rounded-xl bg-white p-4"
                    >
                      <span className="text-sm font-semibold text-blue-600">
                        {number}
                      </span>
                      <span className="text-sm font-medium text-slate-700">
                        {title}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm text-slate-500">
                  Turning ideas into useful, reliable software.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Temporary sections: navbar links need matching IDs */}

        <section id="about" className="scroll-mt-20 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              A little about me
            </p>

            <div className="mt-4 grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  I build apps that solve real problems.
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                  I'm a Software Developer at Chetu Inc, working across web and
                  mobile applications. My primary focus is React Native and React.js,
                  with experience integrating APIs, managing application state, and
                  building features for production environments.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  I also work with native Android code when a problem requires a
                  platform-level solution, and I'm expanding my full-stack skills
                  with Python, FastAPI, and relational databases.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-6">
                  <p className="text-3xl font-bold text-slate-900">Web</p>
                  <p className="mt-3 font-semibold text-slate-800">
                    React.js
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Responsive interfaces, reusable components, and API integration.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <p className="text-3xl font-bold text-slate-900">Mobile</p>
                  <p className="mt-3 font-semibold text-slate-800">
                    React Native
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Cross-platform apps, native modules, and performance improvements.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <p className="text-3xl font-bold text-slate-900">Backend</p>
                  <p className="mt-3 font-semibold text-slate-800">
                    Python + FastAPI
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    REST APIs, authentication, and database integration.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <p className="text-3xl font-bold text-slate-900">Native</p>
                  <p className="mt-3 font-semibold text-slate-800">
                    Android
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Java, Kotlin, and native Android integrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="experience"
          className="scroll-mt-20 bg-slate-50 px-6 py-24"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Professional journey
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Experience & impact
            </h2>

            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
              <div className="flex flex-col justify-between gap-4 sm:flex-row">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Software Developer
                  </h3>
                  <p className="mt-1 font-medium text-slate-600">
                    Chetu Inc. · Noida, India
                  </p>
                </div>

                <p className="text-sm font-medium text-slate-500">
                  June 2023 – Present
                </p>
              </div>

              <div className="mt-8 space-y-5">
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Web application development
                  </h4>
                  <p className="mt-2 leading-7 text-slate-600">
                    Developed web application features using React.js, Redux Toolkit,
                    Tailwind CSS, and REST APIs, including dealer and vendor
                    functionality for a retail kiosk platform.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Mobile application development
                  </h4>
                  <p className="mt-2 leading-7 text-slate-600">
                    Built and maintained React Native application features, integrated
                    third-party SDKs, and worked with native Android code to support
                    platform-specific functionality.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Performance optimization
                  </h4>
                  <p className="mt-2 leading-7 text-slate-600">
                    Improved a resource-intensive SVG rendering workflow by moving
                    heavy processing into native Android code, reducing loading time
                    from approximately 1–2 minutes to 4–5 seconds.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  'React Native',
                  'React.js',
                  'TypeScript',
                  'Redux Toolkit',
                  'Kotlin',
                  'Java',
                  'REST APIs',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <Projects/>
        <Skills/>
        <Contact/>
      </main>
    </>
  )
}

export default App
