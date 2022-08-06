import { NextPage } from 'next';
import { AuthLayout } from '../layouts/AuthLayout/AuthLayout';
import { Input } from '../components/auth/Input';
import { Checkbox } from '../components/auth/Checkbox';

const Register: NextPage = () => (
  <AuthLayout
    type="register"
    formDesc="Join us and enjoy the moment."
    title="WELCOME!"
    desc="REGISTER AND ENJOY OUR BENEFITS!"
    footer="Register and stay in touch with your friends. Discover what people are doing and make new friends."
  >
    <form action="">
      <Input
        name="username"
        placeholder="Write your username!"
        icon="user_icon"
      />
      <Input
        name="fullname"
        placeholder="Write your Full Name!"
        icon="name_icon"
      />
      <Input name="email" placeholder="E-Mail Address!" icon="email_icon" />
      <Input name="password" placeholder="Password" icon="pass_icon" />
      <div className="register_form_item">
        <Checkbox name="gender" title="Male" />
        <Checkbox name="gender" title="Female" />
      </div>
      <div className="register_form_item">
        <button type="submit" className="button">
          Register
        </button>
      </div>
    </form>
  </AuthLayout>
);

export default Register;
