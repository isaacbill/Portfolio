import React from 'react'
import UploadDocumentCard from './UploadDocumentCard'
import FileActionCard from './FileActionCard'

const Joint = () => {
  return (
  <section
    className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
  >
    <UploadDocumentCard />
   <FileActionCard />
  </section>
  );
}

export default Joint