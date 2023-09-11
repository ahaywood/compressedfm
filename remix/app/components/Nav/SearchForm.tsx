import { Icon } from "../Icon";

const SearchForm = () => {
  return (
    <div>
      <form className="relative mb-[85px]" method="get">
        <input type="text" name="keywords" id="search" placeholder=" " />
        <label htmlFor="search">Search</label>
        <button name="submit" type="submit">
          <Icon name="arrow" size={64} />
        </button>
      </form>
    </div>
  );
};

export { SearchForm };
