
export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl bg-slate-900 px-6 py-12 text-white sm:px-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
            Get in touch
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-5xl">
            Have an interesting problem to solve?
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-slate-300">
            I'm interested in opportunities involving mobile development,
            React.js, and full-stack application engineering.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/adityakumar-react-native/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Connect on LinkedIn ↗
            </a>

            <a
              href="https://github.com/aditya-kumar96"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-600 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Explore GitHub ↗
            </a>
          </div>
        </div>

        <footer className="flex flex-col justify-between gap-3 py-8 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Aadi Kumar</p>
          <a href="#home" className="transition hover:text-slate-900">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  )
}
