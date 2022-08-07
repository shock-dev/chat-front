import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthLayout } from '../layouts/AuthLayout/AuthLayout';
import { Input } from '../components/auth/Input';
import { Checkbox } from '../components/auth/Checkbox';

interface FormTypes {
  username: string;
  email: string;
  fullname: string;
  password: string;
}

const schema = yup
  .object({
    username: yup.string().required('Username is a required field'),
    fullname: yup
      .string()
      .required('full name is a required field')
      .matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        'Name can only contain Latin letters.',
      )
      .matches(/^\s*\S+(\s\S+)+\s*$/gms, 'Please enter your full name.'),
    email: yup
      .string()
      .email('Must be a valid email')
      .max(255)
      .required('Email is required'),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  })
  .required();

const Register: NextPage = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormTypes>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormTypes) => console.log(data);

  return (
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
};

export default Register;
