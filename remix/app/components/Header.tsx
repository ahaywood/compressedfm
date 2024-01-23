import { Link } from '@remix-run/react';
import { Hamburger } from './Nav/Hamburger';
import { Navigation } from './Nav/Navigation';
import { useState } from 'react';

interface HeaderProps {
  tags: Tag[];
}

const Header = ({ tags }: HeaderProps) => {
  const [navShowing, setNavShowing] = useState(false);

  const handleClick = () => {
    setNavShowing((prevValue) => !prevValue);
  };

  return (
    <div className="text-center pt-[36px] w-full">
      <Navigation isShowing={navShowing} handleClick={handleClick} tags={tags} />
      <Hamburger className="fixed left-0 top-0 z-hamburger" onClick={handleClick} navShowing={navShowing} />

      <div>
        <h1 className="mt-0 mx-auto mb-20 relative max-w-[65%] md:max-w-[850px] transform translate-x-[8%] md:pl-[70px] md:translate-x-0">
          <Link to="/">
            <img className="mx-auto" src="/images/logo.svg" width="435" height="185" alt="Compressed.fm" />
          </Link>
        </h1>
      </div>
    </div>
  );
};

export { Header };
