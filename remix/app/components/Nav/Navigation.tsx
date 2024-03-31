import { useEscapeKey } from '~/hooks/useEscapeKey';
import { BtmNav } from './BtmNav';
import { SearchForm } from './SearchForm';
import { TopNav } from './TopNav';
import { Tag } from './Tag';

interface NavigationProps {
  handleClick: () => void;
  isShowing: boolean;
  tags: Tag[];
}

const Navigation = ({ handleClick, isShowing, tags }: NavigationProps) => {
  // TODO: Escape key will also open the navigation
  useEscapeKey(() => handleClick());
  return (
    <div
      className={`navigation bg-bastille grid grid-cols-[1fr_2fr] grid-rows-[auto_auto] h-screen left-0 fixed transition-all duration-500 ease-in-out right-0 w-screen z-navigation ${
        isShowing ? 'bottom-0' : 'bottom-[200vh]'
      }`}
    >
      {/* TODO: Make side bar scroll when overflow - need to combine top nav and bottom nav container */}
      <div className="main-nav background-bastille pt-12 px-mobilePadding md:p-[110px] pb-0 text-left">
        <TopNav handleClick={handleClick} />
      </div>

      <div className="sub-nav self-end bg-bastille px-mobilePadding md:p-[110px] pt-0 text-left">
        <BtmNav handleClick={handleClick} />
      </div>

      <div className="search bg-charcoal hidden px-mobilePadding md:p-[110px] text-left md:block">
        <SearchForm />

        <h3 className="text-white font-sans font-medium mb-2 text-2xl">Tags</h3>
        <ul className="flex flex-wrap list-none m-0 p-0 gap-2">
          {tags &&
            tags.map((tag) => (
              <li key={tag._id} className="mb-0">
                <Tag name={tag.title} handleClick={handleClick} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export { Navigation };
