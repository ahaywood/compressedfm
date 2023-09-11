import { useEffect, useState } from "react";

interface HamburgerProps {
  className: string;
  onClick: () => void;
  navShowing: boolean;
}

const Hamburger = ({ className, onClick, navShowing }: HamburgerProps) => {
  const [toggled, setToggled] = useState<boolean>(navShowing);

  useEffect(() => {
    setToggled(navShowing);
  }, [navShowing]);

  const toggle = () => {
    setToggled((prevToggled) => !prevToggled);
    onClick();
  };

  return (
    <div
      className={`hamburger bg-transparent border-none cursor-pointer fixed h-[70px] w-[70px] focus:outline-none ${className}`}
      onClick={toggle}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 75.41 69.03"
        className={toggled ? "x" : ""}
      >
        <path
          className="top line"
          d="M23.79,46,46.17,23.56s11-13.77,16-6.77-9.61,8.47-11.8,8.47l-31.71.06"
        />
        <line
          className="middle line"
          x1="19.12"
          y1="34.82"
          x2="50.83"
          y2="34.76"
        />
        <path
          className="bottom line"
          d="M23.79,23,46.17,45.49s11,13.77,16,6.77-9.61-8.47-11.8-8.47l-31.71-.06"
        />
      </svg>
    </div>
  );
};

export { Hamburger };
