import { useRef } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

// components
import { Icon } from 'modules/shared/components/Icon';

// styles
import { MixinTextField, MixinLabel, MixinButtonWithArrow } from 'styles/Form';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const SearchForm = () => {
  const { register, handleSubmit } = useForm();
  const searchInput = useRef();
  const router = useRouter();

  const onSubmit = (data) => {
    // redirect to the homepage, send the key words
    router.push({ pathname: '/search', query: data });
  };

  return (
    <StyledSearchForm>
      <form onSubmit={handleSubmit(onSubmit)} method="get">
        <input
          type="text"
          name="keywords"
          id="search"
          placeholder=" "
          ref={(e) => {
            searchInput.current = e;
            register(e, { required: true });
          }}
        />
        <label htmlFor="search">Search</label>
        <button name="submit" type="submit">
          <Icon name="arrow" height="64" width="64" />
        </button>
      </form>
    </StyledSearchForm>
  );
};

export { SearchForm };

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledSearchForm = styled.div`
  form {
    position: relative;
    margin-bottom: 85px;
  }

  input[type='text'] {
    ${MixinTextField}
  }

  label {
    ${MixinLabel}
  }

  ${MixinButtonWithArrow}
`;
