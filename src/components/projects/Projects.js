import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, profileFive } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
          src={profileFive}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="IMPORT WIZARDS"
          des="  web application to facilitate import of Excel files and display data in a table format on web pages. Runner-up in company wide Hackathon!"
          src={projectOne}
          url={'https://github.com/vishalboine/codebusters'}
          isGlobeIcon = {true}
        />
        <ProjectsCard
          title="SOCIAL APP"
          des=" Developed backend functionalities for social media platform: user authentication, post creation, likes, comments, following, and session management!"
          src={projectTwo}
          url={'https://github.com/vishalboine/social-app-backend-mern'}
          isGlobeIcon = {false}
        />
        <ProjectsCard
          title="IMAGIFY"
          des=" Implemented secure image uploads with grayscale and sepia filters, ensuring server-side storage, processing, and enhanced data integrity!"
          src={projectThree}
          url={'https://github.com/vishalboine/Imagify'}
          isGlobeIcon = {false}
        />
      </div>
    </section>
  );
}

export default Projects