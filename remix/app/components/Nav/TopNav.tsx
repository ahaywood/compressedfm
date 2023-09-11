import { NavLink } from "@remix-run/react";

interface TopNavProps {
  handleClick: () => void;
}

const TopNav = ({ handleClick }: TopNavProps) => {
  const nav = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Episodes", link: "/episodes" },
    { name: "Sponsors", link: "/sponsors" },
    { name: "Newsletter", link: "/newsletter" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="top-nav">
      <ul className="list-none m-0 p-0">
        {nav.map((item, index) => (
          <li
            key={index}
            className="font-sans text-5xl font-black leading-[82px] mb-0"
          >
            <NavLink
              onClick={handleClick}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-yellow cursor-default hover:text-lavenderIndigo no-underline border-b-0 hover:border-b-0"
                  : "text-white hover:text-lavenderIndigo no-underline border-b-0 hover:border-b-0"
              }
              to={item.link}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { TopNav };
