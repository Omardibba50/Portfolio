import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Omar Dibba. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/omardibba50" 
              className="hover:text-gray-300 transition-colors duration-300"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/omar-dibba" 
              className="hover:text-gray-300 transition-colors duration-300"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="mailto:Omar.Dibba@georgebrown.com" 
              className="hover:text-gray-300 transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}