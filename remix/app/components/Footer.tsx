import { Constants } from '~/lib/constants';
import { VerticalDivider } from './VerticalDivider';
import { SocialMedia } from './SocialMedia';
import { Link } from '@remix-run/react';

interface FooterProps {
  footerLinks: Link[];
}

const Footer = ({ footerLinks }: FooterProps) => {
  const getCurrentYear = () => new Date().getFullYear();
  return (
    <footer className="py-0 px-mobilePadding md:px-0 text-center">
      <VerticalDivider className="mb-[90px]" />
      <SocialMedia
        className="justify-center"
        socialMedia={{
          instagram: Constants.COMPRESSEDFM_INSTAGRAM_URL,
          github: Constants.COMPRESSEDFM_GITHUB_URL,
          twitter: Constants.COMPRESSEDFM_TWITTER_URL,
          rss: Constants.COMPRESSEDFM_RSS,
        }}
      />

      <div className="border-t-[#454545] pt-10 pb-16 text-white font-mono">
        {footerLinks && (
          <div className="legal">
            <ul className="flex justify-center uppercase p-0 m-5 flex-col sm:flex-row">
              {footerLinks.map((link) => (
                <li key={link._id} className="mb-[10px] sm:mb-0">
                  <Link
                    className="text-white hover:text-yellow border-b-0 hover:border-b-0 no-underline"
                    to={`/legal/${link.slug.current}`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="italic text-center mx-auto max-w-[1245px] relative">
          <span className="whitespace-nowrap">Copyright &copy;{getCurrentYear()}. Compressed.fm.</span>{' '}
          <span className="whitespace-nowrap">All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
