const skills = [
  { category: "Frontend", items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"] },
  { category: "Blockchain", items: ["Solidity", "Motoko", "Hardhat", "Truffle", "Ganache", "ethers.js", "Web3.js"] },
  { category: "Web3 Technologies", items: ["MetaMask integration", "IPFS", "The Graph"] },
  { category: "AI Development", items: ["AI Chatbot Development", "AI Voice Agent Development", "AI Workflow Automation"] },
  { category: "DevOps & Tools", items: ["Git", "GitHub", "Docker", "AWS", "Vercel"] },
  { category: "Testing", items: ["Jest", "Mocha", "Chai"] },
  { category: "API Integration", items: ["RESTful APIs", "GraphQL"] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillSet, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{skillSet.category}</h3>
              <ul className="space-y-2">
                {skillSet.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {skill}
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
