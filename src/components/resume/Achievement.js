import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company Experience Section */}
          <div>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-sm text-designColor tracking-[4px]">2022 - </p>
              <h2 className="text-4xl font-bold">Company Experience</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="Risk Surveys & Management"
                subTitle="Implemented comprehensive risk assessments at Heritage Insurance."
                result="Success"
                des={`As a Risk Surveyor, I specialized in risk profiling, hazard assessment, and loss estimation.
I successfully conducted enterprise-wide risk surveys, developed safety programs, and provided actionable risk mitigation strategies.
These efforts enhanced risk management processes, minimized potential losses, and ensured compliance with safety regulations.`}
              />
              <ResumeCard
                title="Engineering Structural Design"
                subTitle="Enhanced interactive structural design and analysis of framed structures."
                result="Success"
                des={`At Meijer Engineers, I gained expertise in Steel and Reinforced Concrete design, utilizing software such as Midas Gen, Tekla TSD, and Prokon.
I improved structural analysis capabilities, ensured compliance with British and EURO codes, and enhanced efficiency in structural detailing.
This experience strengthened my design, analysis, and technical documentation skills.`}
              />
              <ResumeCard
                title="Material Quality Improvement"
                subTitle="Developed material quality templates for better sourcing at Edermann."
                result="Success"
                des={`Introduced a material quality template that improved concrete quality in batching mix design by 50%.
Collaborated with suppliers to ensure high-quality materials, enhancing construction integrity and compliance with standards.`}
              />
            </div>
          </div>

          {/* Job Experience Section */}
          <div>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-sm text-designColor tracking-[4px]">2022 - </p>
              <h2 className="text-4xl font-bold">Job Experience</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="Project Management"
                subTitle="Supervised execution and quality control at Edermann."
                result="Success"
                des={`Achieved 90% effectiveness in preparing BBS, estimating cast-in-place material, and ensuring compliance with site specifications.
Collaborated with survey teams to achieve 100% efficiency in invert levels installation for sewer lines and curbs.
Generated detailed reports to track project progress and ensure successful execution.`}
              />
              <ResumeCard
                title="Client Satisfaction"
                subTitle="99% On-time project delivery record."
                result="Success"
                des={`Consistently adhered to client design specifications and ensured on-time project delivery, significantly enhancing client satisfaction.
Maintained high-quality standards in all projects, leading to repeat business and strong professional relationships.`}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
