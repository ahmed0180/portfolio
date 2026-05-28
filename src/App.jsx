import { useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("")

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      setStatus("error")
      return
    }
    setStatus("loading")
    emailjs.send(
      "service_2xfe7xt",
      "template_dc9ures",
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "IUIOlQVV96qroywUD"
    ).then(() => {
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    }).catch(() => {
      setStatus("fail")
    })
  }

  return (
    <div className="max-w-lg mx-auto flex flex-col gap-4">
      <input
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition"
      />
      <textarea
        rows={5}
        placeholder="Your Message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition resize-none"
      />
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleSubmit}
        disabled={status === "loading"}
        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send Message 🚀"}
      </motion.button>
      {status === "success" && <p className="text-green-400 text-center">✅ Message sent!</p>}
      {status === "error" && <p className="text-red-400 text-center">❌ Fill all fields.</p>}
      {status === "fail" && <p className="text-red-400 text-center">❌ Something went wrong.</p>}
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* ===== NAVBAR ===== */}
      <nav className="flex justify-between items-center px-10 py-6 sticky top-0 bg-black/80 backdrop-blur-md z-50">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          Ahmed Moussa
        </motion.h1>
        <motion.ul
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-8 text-gray-300"
        >
          <li className="hover:text-white cursor-pointer transition">Home</li>
          <li className="hover:text-white cursor-pointer transition">Projects</li>
          <li className="hover:text-white cursor-pointer transition">Design</li>
          <li className="hover:text-white cursor-pointer transition">Contact</li>
        </motion.ul>
      </nav>

      {/* ===== HERO ===== */}
      <section className="flex flex-col items-center justify-center text-center h-[90vh] px-4">
        <motion.p
          variants={fadeUp} initial="hidden" animate="show"
          className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4"
        >
          Available for freelance
        </motion.p>
        <motion.h2
          variants={fadeUp} initial="hidden" animate="show"
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          React & React Native<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Developer & Designer
          </span>
        </motion.h2>
        <motion.p
          variants={fadeUp} initial="hidden" animate="show"
          transition={{ delay: 0.3 }}
          className="text-gray-400 max-w-xl mb-8 text-lg"
        >
          I build modern web & mobile apps and create stunning visual designs.
        </motion.p>
        <motion.div
          variants={fadeUp} initial="hidden" animate="show"
          transition={{ delay: 0.4 }}
          className="flex gap-4"
        >
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Hire Me
          </button>
          <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
            View Projects
          </button>
        </motion.div>
      </section>

      {/* ===== ABOUT ===== */}
      <motion.section
        variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-center gap-12 px-10 py-24 bg-white/5"
      >
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-7xl shrink-0">
          👨‍💻
        </div>
        <div className="max-w-lg">
          <h3 className="text-4xl font-bold mb-4">About Me</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            I'm a Frontend & Mobile Developer and Visual Designer.
            I build clean, responsive web & mobile apps with React and React Native,
            and create stunning event posters and social media content.
            Available for freelance projects worldwide.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {["React", "React Native", "Tailwind CSS", "JavaScript", "Figma", "Canva", "Git"].map((skill) => (
              <span key={skill} className="bg-white/10 px-4 py-1 rounded-full text-sm text-white border border-white/20">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ===== PROJECTS ===== */}
      <section className="px-10 py-24">
        <motion.h3
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14"
        >
          Dev Projects
        </motion.h3>
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
          ].map((project, i) => (
            <motion.div
              key={project.title}
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition group cursor-pointer"
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== DESIGN WORK ===== */}
      <section className="px-10 py-24 bg-white/5">
        <motion.h3
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          Design Work
        </motion.h3>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-gray-400 text-center mb-14"
        >
          Event posters & social media content — DevOps ISIMA Club
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "/designs/poster1 (1).jpeg",
            "/designs/poster1 (2).jpeg",
            "/designs/poster1 (3).jpeg",
            "/designs/poster1 (4).jpeg",
            "/designs/poster1 (5).jpeg",
            "/designs/poster1 (6).jpeg",
          ].map((src, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden cursor-pointer"
            >
              <img src={src} alt={`design ${i + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <motion.section
        variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="px-10 py-24"
      >
        <h3 className="text-4xl font-bold text-center mb-4">Contact</h3>
        <p className="text-gray-400 text-center mb-12">Have a project in mind? Let's talk.</p>
        <ContactForm />
      </motion.section>

      {/* ===== FOOTER ===== */}
      <footer className="text-center py-8 text-gray-600 text-sm border-t border-white/10">
        © 2025 Ahmed Moussa — Developer & Designer
      </footer>

    </div>
  )
}

export default App