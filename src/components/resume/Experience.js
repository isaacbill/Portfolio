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
          {/* Professional Experience Section */}
          <div>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-sm text-designColor tracking-[4px]">2024 - Present</p>
              <h2 className="text-4xl font-bold">Professional Experience</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="Risk Surveyor"
                subTitle="Heritage Insurance Company - General Insurance (Sept. 2024 - Present)"
                result="Nairobi, KENYA"
                des={`1. Profiling of risks presented to the company for insurance and assessing their acceptability.\n2. Inspecting property and machinery based on enterprise all risks to assess their exposure to hazards.\n3. Collating and assessing risk information on-site, including capturing photographic evidence, and estimating the nature, size, and frequency of possible losses throughout the insured’s entire operations.\n4. Preparing detailed reports, establishing Estimated Possible Loss [EPL] and Maximum Possible Loss [MPL] with risk recommendations and safety improvements.\n5. Developing safety programs compatible with the needs and resources of policyholders (Occupational Safety and Health Act).\n6. Advising clients on-site about opportunities and savings on risk improvement programs.`}
              />
              <ResumeCard
                title="Site Quality Engineer"
                subTitle="Edermann Co. (K) Ltd - Great Wall Gardens Phase 5, Athi River Machakos (Sept. 2023 - Aug. 2024)"
                result="Athi River, KENYA"
                des={`1. Achieved 90% effectiveness in preparing BBS, estimation of cast-in-place material, and ensuring as-built specifications onsite.\n2. Collaborated with the survey team to set out, inspect, and supervise invert levels installations for sewer lines, and curbs at 100% efficiency.\n3. Conducted daily quality control for all building materials and engineering site activities.\n4. Achieved 100% efficiency in preparing comprehensive daily, weekly, and monthly inspection reports, summarizing construction activities and progress.`}
              />
            </div>
          </div>

          {/* Training Experience Section */}
          <div>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-sm text-designColor tracking-[4px]">2023</p>
              <h2 className="text-4xl font-bold">Trainer Experience</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="ArchiCAD Instructor"
                subTitle="Qubit Institute of Technology (July 2023 - Aug. 2023)"
                result="Machakos, KENYA"
                des={`As a Graphisoft ArchiCAD Instructor, I guided students in mastering this powerful BIM software.\nMy approach emphasized hands-on training, focusing on 3D modeling, collaboration, and data management. I tailored classes for a wide range of skills, from beginners to advanced users, promoting creativity and technical proficiency. My goal was to empower students with the tools to deliver efficient, innovative architectural designs.`}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
