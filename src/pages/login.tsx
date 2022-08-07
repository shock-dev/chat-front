import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthLayout } from '../layouts/AuthLayout/AuthLayout';
import { Input } from '../components/auth/Input';
import { loginScheme } from '../validation/auth';

interface FormTypes {
  username: string;
  password: string;
}

const Login: NextPage = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormTypes>({
    resolver: yupResolver(loginScheme),
  });

  const onSubmit = (data: FormTypes) => console.log(data);

  return (
    <>
      <NextSeo title="Login" />
      <AuthLayout
        type="login"
        formDesc="Log in and see what people are doing."
        title="HELLO!"
        desc="WE ARE HAPPY TO SEE YOU AGAIN!"
        footer="Log in to see what their friends and acquaintances do."
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="username"
            placeholder="Write your username!"
            icon="user_icon"
            control={control}
            error={errors.username}
          />
          <Input
            name="password"
            placeholder="Write your password!"
            icon="pass_icon"
            control={control}
            error={errors.password}
          />
          <div className="login_form_item">
            <button type="submit" className="button">
              Login
            </button>
          </div>
        </form>
      </AuthLayout>
    </>
  );
};

export default Login;
