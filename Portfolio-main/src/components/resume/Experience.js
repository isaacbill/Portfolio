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
              <p className="text-sm text-designColor tracking-[4px]">2023 - </p>
              <h2 className="text-4xl font-bold">Job Experience</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="Risk Surveyor"
                subTitle="Heritage Insurance Company - (Sep. 2024 - Present)"
                result="Kenya"
                des={`1. Profiling risks and assessing their acceptability.
2. Conducting risk surveys and inspections on properties and machinery.
3. Preparing detailed reports with risk recommendations.
4. Advising clients on safety improvements and risk mitigation.`}
              />
              <ResumeCard
                title="Site Quality Engineer"
                subTitle="Edermann Co. (K) Ltd - (Sep. 2023 - Aug. 2024)"
                result="Machakos-KENYA"
                des={`1. Supervised construction quality control and materials inspection.
2. Collaborated with the survey team to ensure precise installation of sewer lines and curbs.
3. Prepared BBS, estimated cast-in-place materials, and ensured compliance with specifications.
4. Generated daily, weekly, and monthly reports summarizing site progress.`}
              />
              <ResumeCard
                title="Graduate Trainee (Structural Engineering)"
                subTitle="Meijer Engineers - (Mar. 2023 - Jun. 2023)"
                result="Nairobi-KENYA"
                des={`1. Analyzed and prepared structural design calculation reports.
2. Developed detailed technical drawings for structural projects.
3. Reviewed structural designs and reports for accuracy and compliance.`}
              />
            </div>
          </div>

          {/* Trainer Experience Section */}
          <div>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-sm text-designColor tracking-[4px]">2023</p>
              <h2 className="text-4xl font-bold">Trainer Experience</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="ArchiCAD Instructor"
                subTitle="Qubit Institute of Technology (Jul. 2023 - Aug. 2023)"
                result="Machakos-KENYA"
                des={`1. Taught BIM software with a hands-on approach.
2. Focused on 3D modeling, collaboration, and data management.
3. Designed custom lessons for beginners and advanced learners.
4. Fostered architectural design and documentation expertise among students.`}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
