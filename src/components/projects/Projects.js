import React, { useState } from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, projectFour, projectFive } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import Modal from './Modal';

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedProject({});
  };

  const projects = [
    {
      title: "3-BEDROOM BUNGALOW",
      des: "This is a simple typical design layout that I did for a client. The layout entails a 3-bedroom bungalow with master bedroom ensuite and covers a floor area of 80 sq. meters. It features a spacious lounge area and a mid-standard open kitchen layout. The plan has both front and rear porches for entry and exit. I designed the project in ArchiCAD and 3D-render in Artlantis Studio. The project cost is estimated at  KSH. 2M and is status complete",
      src: projectOne
    },
    {
      title: "PROPOSED 3-BEDROOM BUNGALOW",
      des: "An elegant 3-bedroom bungalow featuring an ensuite master bedroom, a separate dining and sitting area, a kitchen, and a common bathroom. The proposed structure also has an entry porch. The floor area was 85 sq. meters. The project cost KSH. 3M, and the status is 90% complete. I designed the project in ArchiCAD and 3D render in Artlantis Studio",
      src: projectTwo
    },
    {
      title: "3 BEDROOM COMPLETE PROJECT",
      des: "Designed spacious 3 bedroom bungalow, master bedroom ensuite with a floor plan area of 95 sq. meters. The structure features a spacious sitting/dining area, a common bathroom, and an open kitchen with an exit yard on the rear end of the building. I designed the project in ArchiCAD and 3D render in Artlantis Studio. The project status is 100% complete",
      src: projectThree
    },
    {
      title: "SPACIOUS 3 BEROOM HIDDED ROOF BUNGALOW",
      des: "Explore a design concept of a 3 bedroom bungalow 120 sq. meters floor-Hidden roof layout. Design and render was done in ArchiCAD. Estimated project cost KSH. 3M",
      src: projectFour
    },
    {
      title: "4 BEDROOM BUNGALOW",
      des: "Designed a 4 bedroom bungalow for a client. 2 bedrooms ensuite with a spacious living room and kitchen. The floor plan area is 160 Sq. Meters. The estimated project cost is KSH. 3.5M. The project status is complete.",
      src: projectFive
    },
    {
      title: "CONCEPT UPCOMING",
      des: "Design of a 4 bedroom house, master bedroom ensuite in Revit+ Artlantis Studio. Quantities takeoff in Planswift. BOQ in excel and Project schedule in MS Project",
      src: projectTwo
    }
  ];

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="CHECK OUT MY PORTFOLIO AND FEEL WELCOME TO GIVE YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projects.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            des={project.des}
            src={project.src}
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div>
      <Modal 
        isOpen={isOpen} 
        onClose={handleClose} 
        imageSrc={selectedProject.src} 
        imageTitle={selectedProject.title} 
        imageDescription={selectedProject.des}
      />
    </section>
  );
}

export default Projects;
