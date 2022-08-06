import { NextPage } from 'next';
import { AuthLayout } from '../layouts/AuthLayout/AuthLayout';
import { Input } from '../components/auth/Input';

const Login: NextPage = () => (
  <AuthLayout
    type="login"
    formDesc="Log in and see what people are doing."
    title="HELLO!"
    desc="WE ARE HAPPY TO SEE YOU AGAIN!"
    footer="Log in to see what their friends and acquaintances do."
  >
    <form action="">
      <Input
        name="username"
        placeholder="Write your username!"
        icon="user_icon"
      />
      <Input
        name="password"
        placeholder="Write your password!"
        icon="pass_icon"
      />
      <div className="login_form_item">
        <button type="submit" className="button">
          Login
        </button>
      </div>
    </form>
  </AuthLayout>
);

export default Login;
