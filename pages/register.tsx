import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthLayout } from '../layouts/AuthLayout/AuthLayout';
import { Input } from '../components/auth/Input';
import { Radio } from '../components/auth/Radio';
import { registerScheme } from '../validation/auth';

const genders = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
];

interface FormTypes {
  username: string;
  email: string;
  fullname: string;
  password: string;
  gender: 'male' | 'female';
}

const Register: NextPage = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormTypes>({
    resolver: yupResolver(registerScheme),
  });

  const onSubmit: SubmitHandler<FormTypes> = data => console.log(data);

  return (
    <>
      <NextSeo title="Registration" />
      <AuthLayout
        type="register"
        formDesc="Join us and enjoy the moment."
        title="WELCOME!"
        desc="REGISTER AND ENJOY OUR BENEFITS!"
        footer="Register and stay in touch with your friends. Discover what people are doing and make new friends."
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
            name="fullname"
            placeholder="Write your Full Name!"
            icon="name_icon"
            control={control}
            error={errors.fullname}
          />
          <Input
            name="email"
            placeholder="E-Mail Address!"
            icon="email_icon"
            control={control}
            error={errors.email}
          />
          <Input
            name="password"
            placeholder="Write your password!"
            icon="pass_icon"
            control={control}
            error={errors.password}
          />
          <div className="register_form_item">
            {genders.map(i => (
              <Radio
                key={i.value}
                name="gender"
                title={i.label}
                control={control}
                value={i.value}
              />
            ))}
          </div>
          <div className="register_form_item">
            <button type="submit" className="button">
              Register
            </button>
          </div>
        </form>
      </AuthLayout>
    </>
  );
};

export default Register;
