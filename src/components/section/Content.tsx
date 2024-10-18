import { SECTION_CONTENT } from '@/constatns';
import React from 'react';

const Content = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-4 gap-5 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-1 xl:grid-rows-4">
      {SECTION_CONTENT &&
        SECTION_CONTENT.length > 0 &&
        SECTION_CONTENT?.map(({ title }, index) => (
          <div className={`${'linear-gradient-border'}`}>
            <div className="flex cursor-pointer flex-col justify-start gap-2 rounded-2xl bg-base-185 p-6 pb-[38px]">
              <div key={index}>
                <h4 className="text-base font-medium leading-6 text-white">
                  {title}
                </h4>
              </div>
              <div>
                <p className="text-base font-medium leading-6 text-indigo-200 text-opacity-70">
                  Don’t take it from me:
                  <span className="text-[#9382FF]"> @reflectnotes</span> is
                  magic.
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Content;
