import { useState } from "react";
import { Hamburger } from "~/components/Nav/Hamburger";
import { Navigation } from "~/components/Nav/Navigation";
import { Constants } from "~/lib/constants";

interface HeaderHomeProps {
  tags: Tag[];
}

const HeaderHome = ({ tags }: HeaderHomeProps) => {
  const [navShowing, setNavShowing] = useState(false);

  const handleClick = () => {
    setNavShowing(!navShowing);
  };

  return (
    <div className="text-center pt-[50px] w-full md:pt-[110px]">
      <Navigation
        handleClick={handleClick}
        isShowing={navShowing}
        tags={tags}
      />
      <Hamburger
        navShowing={navShowing}
        className="fixed left-0 top-0 z-hamburger"
        onClick={handleClick}
      />

      <div>
        <h1 className="mx-auto mt-5 relative max-w-[65%] translate-x-[8%] md:max-w-[850px] md:pl-[140px] transform md:translate-x-[0]">
          <img
            alt="Compressed.fm logo"
            className="mb-5"
            src="/images/logo.svg"
            width="850"
            height="272"
          />
        </h1>
        <h2 className="font-sans text-2xl font-black text-left mx-auto pt-0 px-mobilePadding md:pl-16 pb-[120px] relative max-w-full md:text-4xl md:w-[710px] md:leading-tight">
          A weekly podcast all about web design and development with a little
          bit of zest.
        </h2>
      </div>
    </div>
  );
};

export { HeaderHome };
