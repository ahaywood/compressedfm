import { Link } from '@remix-run/react';
import { slugify } from '~/lib/slugify';

interface TagProps {
  handleClick: () => void;
  name: string;
}

const Tag = ({ handleClick, name }: TagProps) => {
  return (
    <div className="text-lg font-black">
      <Link
        className="text-white bg-darkJungleGreen rounded-[3px] inline-block pr-[10px] pb-1 py-[5px] px-[10px] hover:bg-lavenderIndigo hover:text-yellow no-underline border-b-0"
        to={`/tag/${slugify(name)}`}
        onClick={handleClick}
      >
        {name}
      </Link>
    </div>
  );
};

export { Tag };
