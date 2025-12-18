export default function ProjectsPage() {
  const projectsData = [
    {
      id: 1,
      name: "Next.js Portfolio",
      description: "Personal portfolio website built with Next.js and Tailwind CSS",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      status: "Completed",
      year: "2024"
    },
    {
      id: 2,
      name: "Task Management App",
      description: "Web application for managing daily tasks and projects",
      technologies: ["React", "Firebase", "CSS"],
      status: "In Progress",
      year: "2024"
    },
    {
      id: 3,
      name: "E-commerce Website",
      description: "Online shopping platform with product catalog and cart",
      technologies: ["JavaScript", "HTML", "CSS"],
      status: "Completed",
      year: "2023"
    },
    {
      id: 4,
      name: "Weather Dashboard",
      description: "Real-time weather information application",
      technologies: ["API", "JavaScript", "Bootstrap"],
      status: "Completed",
      year: "2023"
    },
    {
      id: 5,
      name: "Chat Application",
      description: "Real-time messaging app with user authentication",
      technologies: ["React", "Node.js", "Socket.io"],
      status: "Planning",
      year: "2024"
    },
    {
      id: 6,
      name: "Blog Platform",
      description: "Content management system for blogging",
      technologies: ["Next.js", "MongoDB", "Prisma"],
      status: "In Progress",
      year: "2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">My Projects</h1>
        <p className="text-gray-600 mb-8">Collection of projects I have worked on</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500">Year: {project.year}</p>
              </div>

              <div className="p-6">
                <h4 className="font-bold text-gray-700 mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}