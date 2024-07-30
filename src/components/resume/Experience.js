import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Job Experience Section */}
          <div>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
              <h2 className="text-4xl font-bold">Job Experience</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="Site Engineer"
                subTitle="Edermann Co. (K)Ltd - (Sep. 2023 - Present)"
                result="Machakos-KENYA"
                des={`1. Pre-construction Inspection and Coordination:\n2. Drainage and Civil Works Oversight:\n3. Quality Control and Material Inspection:\n4. Survey and Site Management:\n5. Reporting and Documentation:`}
              />
              <ResumeCard
                title="Design Intern"
                subTitle="Meijer Engineers - (March 2023 - June 2023)"
                result="Nairobi-KENYA"
                des={`1. Analyze and produce design calculation reports:\n2. Interpret and produce detailed drawings\n3. Review structural drawing & design Reports:`}
              />
            </div>
          </div>

          {/* Trainer Experience Section */}
          <div>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
              <h2 className="text-4xl font-bold">Trainer Experience</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="ArchiCAD Instructor"
                subTitle="Qubit Institute of Technology (July 2023 - Aug. 2023)"
                result="Machakos-KENYA"
                des={`As a Graphisoft ArchiCAD Instructor, I guided on teaching this powerful BIM software to students.\nMy approach emphasised hands-on mastering, ensuring contributors mastered 3D Modelling, Collaboration, and Data Management. I customised classes to fulfill various wishes, from beginners to expert users, fostering an intensive knowledge of architectural design and documentation.\nMy purpose was to empower freshmen with the competencies to use ArchiCAD for efficient, innovative assignment delivery.\nThrough interactive sessions and practical designs, I aimed to encourage creativity and enhance technical skill in a collaborative educational environment.`}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
