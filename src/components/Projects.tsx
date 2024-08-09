"use client"

import React, { useState } from 'react'

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

const projectsData: Project[] = [
  {
    title: "Fullstack Crowdfunding DApp",
    description: "A decentralized crowdfunding platform built on Polygon Amoy. Features Docker containerization, Jenkins CI/CD, Grafana and Prometheus monitoring, and Kubernetes for auto-scaling and orchestration.",
    technologies: ["Next.js", "Solidity", "Docker", "Jenkins", "Kubernetes", "Grafana", "Prometheus", "Polygon Amoy"]
  },
  {
    title: "Health Data Record Management DApp",
    description: "A blockchain-based system for managing and monetizing health records, built on Polygon Amoy.",
    technologies: ["React", "Solidity", "Web3.js", "Polygon Amoy"]
  },
  {
    title: "Decentralized FoodLedger",
    description: "Winner of BlockHack Toronto. A blockchain solution for tracking and ensuring the integrity of the food supply chain.",
    technologies: ["Ethereum", "Solidity", "React", "Node.js"]
  },
  {
    title: "NFT Marketplace",
    description: "A full-stack NFT marketplace allowing users to mint, buy, and sell NFTs.",
    technologies: ["React", "Next.js", "Ethereum", "Solidity", "IPFS", "Hardhat"]
  },
  {
    title: "DeFi Yield Farming Platform",
    description: "A decentralized finance application enabling users to stake tokens and earn rewards.",
    technologies: ["React", "Web3.js", "Solidity", "Truffle", "OpenZeppelin"]
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => setSelectedProject(project)}>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="bg-gray-600 text-xs font-semibold px-2 py-1 rounded">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-600 text-xs font-semibold px-2 py-1 rounded">+{project.technologies.length - 3} more</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 p-8 rounded-lg max-w-2xl w-full">
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.technologies.map((tech, i) => (
                <span key={i} className="bg-gray-700 text-xs font-semibold px-2 py-1 rounded">{tech}</span>
              ))}
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => setSelectedProject(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}