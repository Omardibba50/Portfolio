import { Github, Linkedin, Mail, Phone } from 'lucide-react'

const contactInfo = [
  {
    category: "Get in Touch",
    items: [
      { icon: <Phone className="w-5 h-5" />, text: "+1 438 334 0176" },
      { icon: <Mail className="w-5 h-5" />, text: "Omar.Dibba@georgebrown.com", isLink: true, href: "mailto:Omar.Dibba@georgebrown.com" }
    ]
  },
  {
    category: "Connect with Me",
    items: [
      { icon: <Github className="w-5 h-5" />, text: "GitHub", isLink: true, href: "https://github.com/omardibba50" },
      { icon: <Linkedin className="w-5 h-5" />, text: "LinkedIn", isLink: true, href: "https://www.linkedin.com/in/omar-dibba" }
    ]
  }
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactInfo.map((infoSet, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{infoSet.category}</h3>
              <ul className="space-y-2">
                {infoSet.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <span className="w-5 h-5 text-green-500 mr-2">{item.icon}</span>
                    {item.isLink ? (
                      <a 
                        href={item.href}
                        className="hover:text-green-500 transition-colors"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
