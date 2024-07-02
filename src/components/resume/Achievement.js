import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4 w-full">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Engineering Structural Design"
            subTitle="Enhanced interactive structural design and analysis of framed structures...."
            result="Success"
            des={`During my internship at Meijer Engineers, I gained valuable skills in Steel and Reinforced Concrete 
            I performed structural analysis using software like Midas Gen, Tekla Tedds, Prokon and Tekla TSD,
            designed various structural elements, and ensured compliance with industry standards.\n
            I developed proficiency in material selection, connection design,\n
            I also learned design codes of practice (British and EURO codes), concrete mix design, reinforcement 
            detailing, and quality control methods.\nAdditionally, I enhanced my project management, technical 
            documentation, and problem-solving skills, ensuring regulatory and safety compliance.This experience
            provided a solid foundation in structural engineering and practical industry knowledge.`}
          />
          <ResumeCard
            title="Architectural and Structural Drawings Production"
            subTitle="Developed Skill Report Writing and Documentation"
            result="Success"
            des={`I developed the skill to create precise and detailed blueprints, 3D models, and 
            Understanding software interfaces at Meijer Engineers, utilizing various commands and functions, and implementing industry
            standards were key competencies I acquired.\nMy previous experience enhanced my ability to translate 
            conceptual designs into accurate digital representations efficiently.\nI also honed my problem-solving 
            skills to address design challenges, ensured compliance with building codes, and improved communication 
            through clear, professional drawings.\nMastering these skills led to increased productivity and the production 
            of high-quality architectural documentation.`}
          />
          <ResumeCard
            title="Client Satisfaction"
            subTitle="99% Delivery On-time delivery Record"
            result="Success"
            des="Throughout my work experience, I adhered to client design specification and delivered on time as per the code requirement, significantly contributing to client satisfaction."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4 w-full">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Project Management"
            subTitle="Quantities estimation."
            result="Success"
            des={`At Edermann, I developed expertise in accurately assessing project needs, calculating the required workforce,
            and estimating material quantities.\nThis involved analyzing blueprints, specifications, and project scopes to 
            create detailed and precise estimates. I employed industry-standard methodologies and tools to ensure accuracy
            and efficiency. My ability to forecast costs, manage resources, and align estimates with budgets contributed to
            successful project planning and execution.\nThis skill set enhanced project timelines, controlled expenses, and 
            improved overall project outcomes, demonstrating my proficiency in project management and estimation.`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
