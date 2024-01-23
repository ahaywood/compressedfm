import { useEffect } from 'react';
import kwesforms from 'kwesforms';
import { Icon } from './Icon';

const Newsletter = () => {
  useEffect(() => {
    kwesforms.init();
  }, []);

  return (
    <div className="px-mobilePadding relative md:mt-[60px] md:mx-auto md:p-0 max-w-formWidth w-full">
      <h2 className="text-white font-sans font-black text-[34px] m-0 mr-[10px] p-0 md:text-[48px]">
        Sign up for the newsletter
      </h2>
      <p>Want to stay up to date on our podcast? Get a behind-the-scenes look and know when new episodes drop.</p>
      <form className="kwes-form relative mt-[30px]" action="https://kwes.io/api/foreign/forms/VBsOqTJ8MTds1LU9utSf">
        <div className="relative">
          <input type="email" name="email" id="email" placeholder=" " rules="required" />
          <label htmlFor="email">Email Address</label>
          <button className="submit" type="submit">
            <Icon name="arrow" size={64} />
          </button>
        </div>
      </form>
    </div>
  );
};

export { Newsletter };
