import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10">
          {/* Education Section */}
          <div>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-sm text-designColor tracking-[4px]">2005 - 2023</p>
              <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="BSc Civil Engineering"
                subTitle="Machakos University (2017 - 2022)"
                result="3.90/4"
                des="The training provided me with the fundamental skills of a civil engineer, to explore more in the field of science, technology."
              />
              <ResumeCard
                title="Secondary School Education"
                subTitle="Itierio Boys High School (2013 - 2016)"
                result="5.00/5"
                des="The training provided me with the fundamentals of STEM."
              />
            </div>
          </div>
          {/* Certifications Section */}
          <div>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-sm text-designColor tracking-[4px]">Certifications</p>
              <h2 className="text-3xl md:text-4xl font-bold">Professional Certifications</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="Fundamentals of Digital Marketing"
                subTitle="Google (ID: 195218724)"
                result="Completed"
                des="Comprehensive training on digital marketing strategies and tools."
              />
              <ResumeCard
                title="Leadership Course"
                subTitle="IIENSTITU (ID: 138287284752)"
                result="Completed"
                des="Developed leadership and management skills for effective decision-making."
              />
              <ResumeCard
                title="Property Loss Adjusting"
                subTitle="ZEP-RE Academy"
                result="Completed"
                des="Training on property loss assessment and risk mitigation strategies."
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
