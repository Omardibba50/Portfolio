"use client"

import { Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="flex flex-col justify-center min-h-screen px-4 bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-green-400 mb-2">Hey there, I'm-</h2>
        <h1 className="text-6xl font-bold mb-4">Omar Dibba.</h1>
        <p className="text-2xl text-gray-400 mb-6">
          Blockchain Developer. An innovative Web3, Frontend, and AI Developer with hands-on experience in blockchain health data tokenization and AI-powered solutions.
        </p>
        <p className="text-lg text-gray-500 mb-8">
          🚀 Currently specializing in Frontend (React / Next.js) and Blockchain Development
          <br />
          ⚡ Blockchain Developer Intern at Aurkei
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/omardibba50" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/omar-dibba-a9a180174?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:Omar.Dibba@georgebrown.com" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}