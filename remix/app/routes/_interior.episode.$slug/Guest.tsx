import { PortableText } from '@portabletext/react';
import { SocialMedia } from '~/components/SocialMedia';

interface GuestProps {
  className: string;
  guest: Guest[];
}

const Guest = ({ className, guest }: GuestProps) => {
  return (
    <section className={`flex flex-col ${className}`}>
      {guest &&
        guest.map((item) => {
          return (
            <div key={item._id}>
              <div className="mb-3">
                <div className="flex pt-[60px] w-full">
                  <div className="mr-5">
                    <img
                      alt="{item.firstName} {item.lastName}"
                      className="border-[3px] border-white rounded-full h-[187px] w-[187px] object-cover"
                      src={item.avatar}
                    />
                  </div>
                  <div>
                    <h2 className="font-sans text-[68px] font-black leading-[0.9] mt-[25px] mx-0 mb-[15px] p-0">
                      <span className="text-yellow">{item.firstName}</span>{' '}
                      <span className="whitespace-nowrap">{item.lastName}</span>
                    </h2>
                    <h3 className="section-heading -ml-10 py-[7px] px-10">{item.jobTitle}</h3>
                  </div>
                </div>
              </div>
              <p className="large-body-copy">{item.largeBody}</p>
              {item.bio && <PortableText value={item.bio} />}
              <div className="pt-[10px]">
                <SocialMedia className="text-[#747474] hover:text-yellow" socialMedia={item.socialMedia} />
              </div>
            </div>
          );
        })}
    </section>
  );
};

export { Guest };
