import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc Civil Engineering"
            subTitle="Machakos University (2017 - 2022)"
            result="3.90/4"
            des="The training provided me with the fundamental skills of a civil engineer,to explore more in the field of science, technology"
                    />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Itierio Boys High School (2013 - 2016)"
            result="5.00/5"
            des="The training provided me with the fundamentals of STEM"
          />
        </div>
      </div>
      
    </motion.div>
  );
}

export default Education