import React from 'react';
import './Projects.css';

const projects = [
  {
    name: "ProjectNeon (Ongoing)",
    description:
      "A roguelite sci-fi FPS currently in pre-alpha. Players navigate dynamic levels, making choices that shape each run. Features multiple playable characters with distinct passive and active abilities, and deep multi-synergy progression systems.",
    videoSrc: "https://www.youtube.com/embed/6-v2MbG5FOc", // ✅ Project Neon YouTube embed
    thumbnail: "./Images/ProjectNeon.png",
    isYouTubeVideo: true,
  },
  {
    name: "HoloTable AR",
    description:
      "An AR mobile strategy game powered by IBM Watson AI. Players issue voice commands to their virtual bridge crew to control navigation, combat, and tactical decisions in real time. Role: Producer",
    videoSrc: "https://www.youtube.com/embed/dfaxiMyPki0", // ✅ New YouTube link
    thumbnail: "./Images/HoloTableAR.png",
    isYouTubeVideo: true,
  },
  {
    name: "UE5 Slash Course",
    description:
      "A guided Unreal Engine 5 project focused on mastering key game development fundamentals. Explores blueprints, C++ integration, and in-engine building techniques through hands-on gameplay systems.",
    videoSrc: "https://www.youtube.com/embed/3QKZcaDJ4wg", // ✅ New YouTube link
    thumbnail: "./Images/UE5Slash.png",
    isYouTubeVideo: true,
  },
];

const Projects = () => {
  return (
    <div className="projects-section" id="Projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-item ${index % 2 === 1 ? 'reverse' : ''}`}
          >
            <div className="project-video">
              {project.videoSrc ? (
                project.isYouTubeVideo ? (
                  <iframe
                    src={project.videoSrc}
                    title={project.name}
                    className="project-media"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    src={project.videoSrc}
                    controls
                    poster={project.thumbnail}
                    className="project-media"
                  />
                )
              ) : (
                <div className="coming-soon">Coming Soon</div>
              )}
            </div>

            <div className="project-content">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
