import { Hamburger } from "~/components/Nav/Hamburger";
import { Navigation } from "~/components/Nav/Navigation";
import { useState } from "react";

interface AuthHeaderProps {
  tags: Tag[];
}

const AuthHeader = ({ tags }: AuthHeaderProps) => {
  const [navShowing, setNavShowing] = useState(false);

  const handleClick = () => {
    setNavShowing((prevValue) => !prevValue);
  };

  return (
    <div className="fixed top-0 left-0">
      <Navigation
        isShowing={navShowing}
        handleClick={handleClick}
        tags={tags}
      />
      <Hamburger
        className="fixed left-0 top-0 z-hamburger"
        onClick={handleClick}
        navShowing={navShowing}
      />
    </div>
  );
};

export { AuthHeader };
