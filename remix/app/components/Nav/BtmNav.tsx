import { Link, NavLink } from "@remix-run/react";

interface BtmNavProps {
  handleClick: () => void;
}

const BtmNav = ({ handleClick }: BtmNavProps) => {
  return (
    <div>
      <ul className="list-none p-0 m-0">
        <li className="font-sans text-2xl font-medium leading-loose mb-0">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-yellow border-b-0 hover:border-b-0 no-underline"
                : "text-white hover:text-yellow border-b-0 hover:border-b-0 no-underline"
            }
            to="/press-kit"
            onClick={handleClick}
          >
            Press Kit
          </NavLink>
        </li>
        {/* {!isSponsor && (
          <li className="sponsoring">
            <Link href="/sponsoring">
              <a>Sponsoring</a>
            </Link>
          </li>
        )} */}

        {/* {isSponsor && (
          <li className="sponsor-dashboard">
            <Link href={`/dashboard/sponsors/${sponsorSlug}`}>
              <a>Dashboard</a>
            </Link>
          </li>
        )} */}

        {/* {isGuest && (
          <li className="guest-dashboard">
            <Link href="/dashboard/guests">
              <a>Dashboard</a>
            </Link>
          </li>
        )} */}

        <li className="font-sans text-2xl font-medium leading-loose mb-0">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-yellow border-b-0 hover:border-b-0 no-underline"
                : "text-white hover:text-yellow border-b-0 hover:border-b-0 no-underline"
            }
            to="/login"
            onClick={handleClick}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export { BtmNav };
