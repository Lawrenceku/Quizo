import React from "react";
import ReactMarkdown from 'react-markdown'; 

const teams = [
  {
    id: 1,
    name: "Lawrence Eniola",
    role: "Frontend Engineer",
    description: "As the Frontend Engineer, Lawrence is responsible for building and maintaining the user interface of the application. He ensures that the app is visually appealing, responsive, and user-friendly. Lawrence translates UI/UX designs into code, using modern frameworks and libraries like **React** and **Tailwind CSS**.",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQFN0MAuY-JtFg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720441582512?e=1741824000&v=beta&t=4pYEfQf17bWIqtoWZxWFQPEPpMs5ZMM9z-Fq-oUvtq8"
  },
  {
    id: 2,
    name: "Lawrence Eniola",
    role: "Backend Engineer",
    description: "As the Backend Engineer, Lawrence is responsible for managing the server-side application logic and integration. He handles the databases, server-side scripting, and API development, ensuring smooth data flow and security. Lawrence works to optimize the performance of the application and ensures it runs seamlessly on the backend using tools like **Node.js**, **Express.js**, **PostgreSQL**, **Sequelize**, and **JWT** for secure authentication.",
    img: "https://pbs.twimg.com/profile_images/1840465173011652608/HS7yJagh_400x400.jpg"
  }
];

const TeamsSection = () => {
  return (
    <section id="team" className="teams-section my-20 bg-gray-100 py-10">
      <h2 className="text-center text-2xl font-bold mb-8 text-green-800">Meet the Team</h2>
      <div className="team-container flex flex-wrap justify-center gap-4">
        {teams.map((member) => (
          <div
            key={member.id}
            className="team-card flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-96 sm:w-64 md:w-80 lg:w-96"
          >
            <img
              src={member.img}
              alt={`${member.name}`}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <ReactMarkdown className="text-gray-600 mt-2 text-sm">{member.description}</ReactMarkdown>
          </div>
        ))}
      </div>
      <p className="text-center my-8">YUP! It's a one-man army</p>
      
    </section>
  );
};

export default TeamsSection;
