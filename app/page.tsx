'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* ======= HEADER ======= */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-primary-300">
        <h1 className="text-2xl font-bold">Tech Solutions by Jane Doe</h1>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 text-sm font-medium rounded bg-accent hover:bg-accent-600 text-white"
        >
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </header>

      {/* ======= HERO SECTION ======= */}
      <section className="relative flex flex-col items-center justify-center h-[70vh] text-center bg-primary-50 dark:bg-primary-900">
        {/* Hero Background Image (Unsplashなど自由に変更可) */}
        <Image
          src="https://images.unsplash.com/photo-1564564295391-7f24f26f568b"
          alt="Hero Image"
          fill
          className="object-cover opacity-25"
        />
        <div className="relative z-10 max-w-2xl px-4">
          <h2 className="mb-4 text-4xl font-extrabold text-secondary-900 dark:text-secondary-200 drop-shadow-lg">
            Building Modern Web Applications
          </h2>
          <p className="mb-6 text-lg text-primary-600 dark:text-primary-200">
            As a freelancer, I help businesses create fast, reliable, and beautiful web solutions.
          </p>
          <a
            href="#services"
            className="inline-block px-6 py-3 font-semibold rounded bg-accent text-white hover:bg-accent-700"
          >
            Our Services
          </a>
        </div>
      </section>

      {/* ======= SERVICES SECTION ======= */}
      <section
        id="services"
        className="px-8 py-12 mx-auto max-w-5xl grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <div className="p-6 bg-primary-50 dark:bg-primary-800 rounded shadow">
          <h3 className="mb-2 text-xl font-semibold text-secondary-700 dark:text-secondary-200">
            Custom Web Apps
          </h3>
          <p className="text-sm text-primary-700 dark:text-primary-300">
            Tailored applications to meet your business needs, from landing pages to full-stack
            solutions.
          </p>
        </div>
        <div className="p-6 bg-primary-50 dark:bg-primary-800 rounded shadow">
          <h3 className="mb-2 text-xl font-semibold text-secondary-700 dark:text-secondary-200">
            API Integration
          </h3>
          <p className="text-sm text-primary-700 dark:text-primary-300">
            Streamline workflows by integrating third-party APIs, CRMs, or payment gateways.
          </p>
        </div>
        <div className="p-6 bg-primary-50 dark:bg-primary-800 rounded shadow">
          <h3 className="mb-2 text-xl font-semibold text-secondary-700 dark:text-secondary-200">
            Performance Optimization
          </h3>
          <p className="text-sm text-primary-700 dark:text-primary-300">
            Ensure fast load times, high accessibility, and a seamless user experience.
          </p>
        </div>
        <div className="p-6 bg-primary-50 dark:bg-primary-800 rounded shadow">
          <h3 className="mb-2 text-xl font-semibold text-secondary-700 dark:text-secondary-200">
            SEO & Marketing
          </h3>
          <p className="text-sm text-primary-700 dark:text-primary-300">
            Boost visibility and traffic with industry best practices for search and social media.
          </p>
        </div>
        <div className="p-6 bg-primary-50 dark:bg-primary-800 rounded shadow">
          <h3 className="mb-2 text-xl font-semibold text-secondary-700 dark:text-secondary-200">
            Ongoing Maintenance
          </h3>
          <p className="text-sm text-primary-700 dark:text-primary-300">
            Keep your site up-to-date, secure, and performing optimally over the long term.
          </p>
        </div>
        <div className="p-6 bg-primary-50 dark:bg-primary-800 rounded shadow">
          <h3 className="mb-2 text-xl font-semibold text-secondary-700 dark:text-secondary-200">
            Consulting & Strategy
          </h3>
          <p className="text-sm text-primary-700 dark:text-primary-300">
            Leverage expertise to plan and develop innovative solutions that give your business an
            edge.
          </p>
        </div>
      </section>

      {/* ======= CALL TO ACTION ======= */}
      <section className="px-8 py-12 bg-secondary-50 dark:bg-secondary-800">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="mb-4 text-2xl font-bold text-primary-700 dark:text-primary-200">
            Ready to elevate your digital presence?
          </h3>
          <p className="mb-8 text-sm text-primary-600 dark:text-primary-400">
            Let’s discuss your project and bring your ideas to life with a modern, high-performing
            web application!
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 font-semibold rounded bg-accent text-white hover:bg-accent-700"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* ======= CONTACT SECTION ======= */}
      <section id="contact" className="px-8 py-12 mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h4 className="mb-4 text-xl font-semibold text-secondary-700 dark:text-secondary-200">
            Get in Touch
          </h4>
          <p className="mb-2 text-primary-700 dark:text-primary-300">
            Jane Doe - Full Stack Developer
          </p>
          <p className="mb-2 text-primary-700 dark:text-primary-300">
            Email:{' '}
            <a href="mailto:contact@example.com" className="underline">
              contact@example.com
            </a>
          </p>
          <p className="text-primary-700 dark:text-primary-300">
            Phone:{' '}
            <a href="tel:+123456789" className="underline">
              +1 (234) 567-89
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form className="p-6 bg-primary-50 dark:bg-primary-900 rounded shadow space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block mb-1 text-sm font-medium text-secondary-700 dark:text-secondary-200"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 rounded border border-primary-200 bg-background text-foreground dark:border-primary-700 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-secondary-700 dark:text-secondary-200"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 rounded border border-primary-200 bg-background text-foreground dark:border-primary-700 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-1 text-sm font-medium text-secondary-700 dark:text-secondary-200"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 h-32 rounded border border-primary-200 bg-background text-foreground dark:border-primary-700 focus:outline-none"
            />
          </div>
          <button className="px-4 py-2 bg-accent text-white font-semibold rounded hover:bg-accent-700">
            Send
          </button>
        </form>
      </section>

      {/* ======= FOOTER ======= */}
      <footer className="px-8 py-4 mt-8 text-center bg-primary-50 dark:bg-primary-900 text-sm text-primary-700 dark:text-primary-300">
        © {new Date().getFullYear()} Jane Doe. All rights reserved.
      </footer>
    </main>
  )
}
