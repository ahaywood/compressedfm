import { Button } from "~/components/Form/Button";

export default function Login() {
  return (
    <div className="max-w-formWidth w-full relative z-content">
      <h1 className="auth-title">Login</h1>
      <form action="">
        <div className="field">
          <input type="text" name="email" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="field">
          <input type="password" name="password" />
          <label htmlFor="password">Password</label>
        </div>
        <div className="field">
          <Button label="Submit" />
        </div>
      </form>
    </div>
  );
}
