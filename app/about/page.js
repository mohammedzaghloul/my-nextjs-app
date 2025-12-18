export default function AboutPage() {
  const aboutData = {
    name: "Mohammed Zaghloul",
    education: "Computer Science Student",
    university: "University of Technology",
    location: "Cairo, Egypt",
    skills: ["Next.js", "React.js", "JavaScript", "HTML/CSS", "Tailwind CSS", "Git"],
    hobbies: ["Coding", "Learning new technologies", "Reading tech blogs"],
    description: "A passionate developer focused on creating modern web applications."
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Me</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-600">Full Name</h3>
                <p className="text-lg">{aboutData.name}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-600">Education</h3>
                <p className="text-lg">{aboutData.education}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-600">Location</h3>
                <p className="text-lg">{aboutData.location}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-600">University</h3>
                <p className="text-lg">{aboutData.university}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">Skills</h2>
            <ul className="space-y-3">
              {aboutData.skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">Hobbies</h2>
            <ul className="space-y-3">
              {aboutData.hobbies.map((hobby, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">{hobby}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}