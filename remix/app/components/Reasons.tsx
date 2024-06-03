import { PortableText } from '@portabletext/react';
import React from 'react';

const Reasons = ({ siteSettings }) => {
  return (
    <section className="my-0 mx-mobilePadding md:mx-auto max-w-narrowPageWidth">
      <h2 className="text-white font-sans text-[32px] font-black md:text-[48px]">
        <span className="text-yellow">Why</span> did we start this show?
      </h2>
      <ol className="reasons-list pl-0 list-none md:pl-10">
        {siteSettings &&
          siteSettings.reasonsBehind.map((item: { reason: [] }, index: number) => (
            <li key={index} className="pt-[10px] pb-[25ppx] pl-[42px] relative md:pl-[75px]">
              <PortableText value={item.reason} />
            </li>
          ))}
      </ol>
    </section>
  );
};

export default Reasons;
