import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useUser } from '@auth0/nextjs-auth0';

export default function Login() {
  // const { register, handleSubmit, watch, errors } = useForm();
  // const onSubmit = data => console.log(data);

  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return <a href="/api/auth/login">Login</a>;

  /*
  return (
    <StyledLogin>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input name="email" defaultValue="" ref={register({ required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input name="password" type="password" ref={register({ required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
        </div>

        <button role="submit">
          Submit
        </button>
      </form>

    </StyledLogin>
  )
  */
}

const StyledLogin = styled.div`

`;