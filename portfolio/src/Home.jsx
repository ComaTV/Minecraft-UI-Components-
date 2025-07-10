import React, { useState } from 'react';
import RotatingWheel from './Component';

const items = [
  { 
    name: "Banana",
    title: "Banana App",
    description: "O aplicație mobilă pentru gestionarea fructelor și a alimentelor sănătoase.",
    technologies: ["React Native", "Firebase", "Node.js"],
    image: "🍌",
    link: "https://github.com/yourusername/banana-app"
  },
  { 
    name: "iPhone",
    title: "iPhone Clone",
    description: "Un clone al interfeței iPhone cu funcționalități interactive.",
    technologies: ["React", "CSS3", "JavaScript"],
    image: "📱",
    link: "https://github.com/yourusername/iphone-clone"
  },
  { 
    name: "Nothing",
    title: "Nothing Project",
    description: "Un proiect minimalist care demonstrează designul simplu și elegant.",
    technologies: ["HTML5", "CSS3", "Vanilla JS"],
    image: "⚪",
    link: "https://github.com/yourusername/nothing-project"
  },
  { 
    name: "Car",
    title: "Car Rental System",
    description: "Sistem de închirieri auto cu interfață modernă și funcționalități complete.",
    technologies: ["React", "Express.js", "MongoDB"],
    image: "🚗",
    link: "https://github.com/yourusername/car-rental"
  },
  { 
    name: "Vacation",
    title: "Vacation Planner",
    description: "Aplicație pentru planificarea vacanțelor cu recomandări personalizate.",
    technologies: ["Vue.js", "Python", "PostgreSQL"],
    image: "🏖️",
    link: "https://github.com/yourusername/vacation-planner"
  },
  { 
    name: "Pizza",
    title: "Pizza Delivery",
    description: "Platformă de comandă online pentru pizza cu tracking în timp real.",
    technologies: ["Angular", "Java Spring", "MySQL"],
    image: "🍕",
    link: "https://github.com/yourusername/pizza-delivery"
  },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(items[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Portofoliul Meu
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
          {/* Project Details Card */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{selectedProject.image}</div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600 text-lg">
                  {selectedProject.description}
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Tehnologii folosite:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Vezi Proiectul
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Spin Wheel */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <RotatingWheel 
              items={items} 
              onProjectSelect={setSelectedProject}
            />
          </div>
        </div>
      </div>
    </div>
  );
}