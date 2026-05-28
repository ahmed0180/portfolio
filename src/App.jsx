import { useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import {
  FaGithub,
  FaLinkedin,
  FaFiverr,
  FaEnvelope,
} from "react-icons/fa"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState("")

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      setStatus("error")
      return
    }

    setStatus("loading")

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC
      )
      .then(() => {
        setStatus("success")
        setForm({
          name: "",
          email: "",
          message: "",
        })
      })
      .catch(() => {
        setStatus("fail")
      })
  }

  return (
    <div className="max-w-lg mx-auto flex flex-col gap-4">
      <input
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
        className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition"
      />

      <input
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
        className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition"
      />

      <textarea
        rows={5}
        placeholder="Your Message"
        value={form.message}
        onChange={(e) =>
          setForm({ ...form, message: e.target.value })
        }
        className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition resize-none"
      />

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleSubmit}
        disabled={status === "loading"}
        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50"
      >
        {status === "loading"
          ? "Sending..."
          : "Send Message 🚀"}
      </motion.button>

      {status === "success" && (
        <p className="text-green-400 text-center">
          ✅ Message sent!
        </p>
      )}

      {status === "error" && (
        <p className="text-red-400 text-center">
          ❌ Fill all fields.
        </p>
      )}

      {status === "fail" && (
        <p className="text-red-400 text-center">
          ❌ Something went wrong.
        </p>
      )}
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUND BLUR */}
      <div className="fixed top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500 rounded-full blur-[120px] opacity-20" />
      <div className="fixed bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500 rounded-full blur-[120px] opacity-20" />

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-6 sticky top-0 bg-black/70 backdrop-blur-md z-50 border-b border-white/10">

        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold"
        >
          Ahmed Moussa
        </motion.h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li>
            <a href="#home" className="hover:text-white transition">
              Home
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#design" className="hover:text-white transition">
              Design
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center h-[90vh] px-4"
      >
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4"
        >
          Available for freelance
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          React & React Native
          <br />

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Developer & Designer
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          className="text-gray-400 max-w-xl mb-8 text-lg"
        >
          I build modern web & mobile apps and create stunning visual designs.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4 }}
          className="flex gap-4"
        >
          <a
            href="#contact"
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Hire Me
          </a>

          <a
            href="#projects"
            className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            View Projects
          </a>
        </motion.div>
      </section>

      {/* ABOUT */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-center gap-12 px-10 py-24 bg-white/5"
      >
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-7xl shrink-0">
          👨‍💻
        </div>

        <div className="max-w-lg">
          <h3 className="text-4xl font-bold mb-4">
            About Me
          </h3>

          <p className="text-gray-400 leading-relaxed text-lg">
            I'm a Frontend & Mobile Developer and Visual
            Designer. I build clean, responsive web &
            mobile apps with React and React Native.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {[
              "React",
              "React Native",
              "Tailwind CSS",
              "JavaScript",
              "Figma",
              "Canva",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-white/10 px-4 py-1 rounded-full text-sm border border-white/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="px-10 py-24"
      >
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14"
        >
          Dev Projects
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            {
              title: "E-Commerce App",
              desc: "Modern ecommerce mobile app.",
              image:
                "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
            },

            {
              title: "Portfolio Website",
              desc: "Modern portfolio website.",
              image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
            },

            {
              title: "Dashboard UI",
              desc: "Admin dashboard with analytics.",
              image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
            },
          ].map((project, i) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                scale: 1.03,
                y: -5,
              }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">
                  {project.title}
                </h4>

                <p className="text-gray-400 text-sm">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DESIGN */}
      <section
        id="design"
        className="px-10 py-24 bg-white/5"
      >
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          Design Work
        </motion.h3>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-14"
        >
          Posters & social media designs
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {[
            "https://res.cloudinary.com/dy08nx5gj/image/upload/q_auto/f_auto/v1779989758/poster1_6_wbfqoy.jpg",
            "https://res.cloudinary.com/dy08nx5gj/image/upload/q_auto/f_auto/v1779989748/poster1_5_qux8dr.jpg",
            "https://res.cloudinary.com/dy08nx5gj/image/upload/q_auto/f_auto/v1779989741/poster1_4_jkpked.jpg",
            "https://res.cloudinary.com/dy08nx5gj/image/upload/q_auto/f_auto/v1779989736/poster1_1_exlsuj.jpg",
            "https://res.cloudinary.com/dy08nx5gj/image/upload/q_auto/f_auto/v1779989733/poster1_3_konbsg.jpg",
            "https://res.cloudinary.com/dy08nx5gj/image/upload/q_auto/f_auto/v1779989723/poster1_2_saigbu.jpg",
          ].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.05,
              }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={img}
                alt="design"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-10 py-24"
      >
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          Contact
        </motion.h3>

        <p className="text-gray-400 text-center mb-12">
          Have a project in mind? Let's talk.
        </p>

        <ContactForm />

        {/* SOCIALS */}
        <div className="flex justify-center gap-6 mt-10 text-2xl text-gray-400">
          <a href="https://github.com/" target="_blank">
            <FaGithub className="hover:text-white transition" />
          </a>

          <a href="https://linkedin.com/" target="_blank">
            <FaLinkedin className="hover:text-white transition" />
          </a>

          <a href="https://www.fiverr.com/" target="_blank">
            <FaFiverr className="hover:text-white transition" />
          </a>

          <a href="mailto:youremail@gmail.com">
            <FaEnvelope className="hover:text-white transition" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-gray-600 text-sm border-t border-white/10">
        © 2026 Ahmed Moussa — Developer & Designer
      </footer>
    </div>
  )
}

export default App