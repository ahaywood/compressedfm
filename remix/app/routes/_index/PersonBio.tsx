import { SocialMedia } from '~/components/SocialMedia';

interface PersonBioProps {
  className: string;
  avatar: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  largeBody: string;
  body: string;
  twitter?: string;
  instagram?: string;
  github?: string;
  youtube?: string;
  twitch?: string;
}

const PersonBio = ({
  className,
  avatar,
  firstName,
  lastName,
  jobTitle,
  largeBody,
  body,
  twitter,
  instagram,
  github,
  youtube,
  twitch,
}: PersonBioProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-start pt-[60px] w-full">
          <div className="rounded-full mr-5 w-[187px]">
            <img
              className="rounded-full border-4 border-white"
              alt={`${firstName} ${lastName}`}
              src={avatar}
              height="187"
              width="187"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-sans font-black text-[68px] leading-[0.9] mx-0 mb-[10px] p-0">
              <span className="text-yellow block">{firstName}</span>{' '}
              <span className="block whitespace-nowrap">{lastName}</span>
            </h2>
            <h3 className="section-heading mb-[10px] md:mb-[20px] md:p-[7px] md:-ml-10 md:py-[7px] md:px-10">
              {jobTitle}
            </h3>
          </div>
        </div>
      </div>
      <p className="large-body-copy">{largeBody}</p>
      <p>{body}</p>
      <div className="social-media">
        <SocialMedia className="personal-bio-social" socialMedia={{ twitter, instagram, github, youtube, twitch }} />
      </div>
    </div>
  );
};

export { PersonBio };
