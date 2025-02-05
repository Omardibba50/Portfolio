"use client"

import React from 'react'
import { Github, ExternalLink } from 'lucide-react'

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  websiteUrl?: string;
  achievement?: string;
}

const projectsData: Project[] = [
  {
    title: "FoodLedger DApp",
    description: "A blockchain solution for tracking and ensuring the integrity of the food supply chain. Winning project at Blockchain Toronto 2024. Leverages ICP's decentralized collaboration capabilities with Kybra integration. Features microservices architecture catering to both beneficiaries and food banks.",
    technologies: ["Solidity", "Python", "Polygon", "React.js", "Web3.js", "Docker", "Kubernetes", "Jenkins"],
    achievement: "Winner - Blockchain Toronto 2024"
  },
  {
    title: "Golden Cleaning Enterprise",
    description: "A professional website built with Next.js for a cleaning services company. Features modern design, responsive layout, and seamless user experience. Implements best practices for performance and SEO optimization.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Responsive Design", "SEO"],
  
    websiteUrl: "https://www.goldencleaningenterprise.ca/"
  },
  {
    title: "Aurkei",
    description: "A blockchain healthcare management dApp built with Next.js and Tailwind CSS. This project focuses on improving healthcare data management and accessibility using blockchain technology.",
    technologies: ["Next.js", "Tailwind CSS", "Blockchain", "Healthcare", "dApp"],
    
    websiteUrl: "https://aurkei.com"
  },
  {
    title: "Botma",
    description: "A web application built with cutting-edge technologies, showcasing modern design principles and robust functionality. Features responsive design and optimized performance.",
    technologies: ["Next.js", "React", "Modern UI/UX", "Web Development"],
    
    websiteUrl: "https://www.botma.ca/"
  },
  {
    title: "HealthLink Africa",
    description: "A decentralized application (dApp) built on the Polygon blockchain to improve healthcare record management and data sharing in Africa. Developed as a capstone project to address healthcare data accessibility challenges.",
    technologies: ["Solidity", "React", "Web3.js", "Polygon", "Node.js"],
    githubLink: "github.com/Omardibba50/HealthLInk-dApp.git"
  },
  {
    title: "ZTips Platform",
    description: "A decentralized platform using zero-knowledge proofs to enable anonymous tip submissions and bounty creation. Built during the Zero Knowledge Hackathon in Montreal, focusing on privacy-preserving information exchange.",
    technologies: ["Solidity", "React", "Node.js", "Rust", "Zero-Knowledge Proofs"],
    githubLink: "github.com/Omardibba50/Ztips-zkapp.git"
  },
  {
    title: "Halal-Chain",
    description: "A decentralized supply chain platform designed to enhance transparency and traceability in halal product certification and supply chains. Leverages blockchain technology to ensure authenticity and compliance throughout the supply chain.",
    technologies: ["Solidity", "React", "Web3.js", "Supply Chain", "Smart Contracts"],
   
  },
  {
    title: "Crowdfunding dApp",
    description: "A full-stack decentralized crowdfunding application using Solidity for smart contracts, Hardhat for development environment, and Next.js framework. Features include adding campaigns, donating, and filtering by category.",
    technologies: ["Solidity", "Next.js", "Hardhat", "Tailwind CSS", "ethers.js", "IPFS", "Polygon"],
    githubLink: "github.com/Omardibba50/crowdfunding-dAPp.git"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-green-400">Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-700 group"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                    {project.title}
                  </h3>
                  {project.achievement && (
                    <span className="bg-green-400/20 text-green-400 text-xs font-semibold px-3 py-1 rounded-full">
                      {project.achievement}
                    </span>
                  )}
                </div>

                <p className="text-gray-300 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-gray-700 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  {project.githubLink && (
                    <a 
                      href={`https://${project.githubLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors bg-green-400/10 hover:bg-green-400/20 px-4 py-2 rounded-full"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                  )}
                  {project.websiteUrl && (
                    <a 
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors bg-green-400/10 hover:bg-green-400/20 px-4 py-2 rounded-full"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
