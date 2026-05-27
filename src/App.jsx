function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* ===== NAVBAR ===== */}
      <nav className="flex justify-between items-center px-10 py-6 sticky top-0 bg-black/80 backdrop-blur-md z-50">
        <h1 className="text-2xl font-bold">Ahmed Moussa</h1>
        <ul className="flex gap-8 text-gray-300">
          <li className="hover:text-white cursor-pointer transition">Home</li>
          <li className="hover:text-white cursor-pointer transition">Projects</li>
          <li className="hover:text-white cursor-pointer transition">Contact</li>
        </ul>
      </nav>

      {/* ===== HERO ===== */}
      <section className="flex flex-col items-center justify-center text-center h-[90vh] px-4">
        <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">
          Available for freelance
        </p>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          React & React Native<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Developer
          </span>
        </h2>
        <p className="text-gray-400 max-w-xl mb-8 text-lg">
          I build modern, fast and responsive web & mobile applications
          with clean UI and great user experience.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Hire Me
          </button>
          <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
            View Projects
          </button>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-10 py-24 bg-white/5">
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-7xl shrink-0">
          👨‍💻
        </div>
        <div className="max-w-lg">
          <h3 className="text-4xl font-bold mb-4">About Me</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            I'm a Frontend & Mobile Developer with experience in React and React Native.
            I focus on building clean, responsive interfaces with great user experience.
            Available for freelance projects worldwide.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {["React", "React Native", "Tailwind CSS", "JavaScript", "Vite", "Git"].map((skill) => (
              <span key={skill} className="bg-white/10 px-4 py-1 rounded-full text-sm text-white border border-white/20">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="px-10 py-24">
        <h3 className="text-4xl font-bold text-center mb-14">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "E-Commerce App",
              desc: "Full React Native mobile app with cart, auth and payments.",
              tags: ["React Native", "Firebase"],
              color: "from-purple-500 to-blue-500",
            },
            {
              title: "Portfolio Website",
              desc: "Modern portfolio built with React + Tailwind CSS + Vite.",
              tags: ["React", "Tailwind"],
              color: "from-blue-500 to-cyan-400",
            },
            {
              title: "Dashboard UI",
              desc: "Admin dashboard with charts, tables and dark/light mode.",
              tags: ["React", "Recharts"],
              color: "from-pink-500 to-purple-500",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition group"
            >
              <div className={`h-40 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition`} />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-white/10 px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="px-10 py-24 bg-white/5">
        <h3 className="text-4xl font-bold text-center mb-4">Contact</h3>
        <p className="text-gray-400 text-center mb-12">
          Have a project in mind? Let's talk.
        </p>
        <div className="max-w-lg mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition resize-none"
          />
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition">
            Send Message 🚀
          </button>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="text-center py-8 text-gray-600 text-sm border-t border-white/10">
        © 2025 Ahmed Moussa — Built with React & Tailwind CSS
      </footer>

    </div>
  )
}

export default App