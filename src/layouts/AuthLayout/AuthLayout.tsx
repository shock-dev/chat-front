import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
  type: 'login' | 'register';
  formDesc: string;
  title: string;
  desc: string;
  footer: string;
}

export const AuthLayout = ({
  children,
  type,
  formDesc,
  title,
  desc,
  footer,
}: AuthLayoutProps) => (
  <div className="container style">
    <div className="page_container style">
      <div className="column_container left_column animation_one">
        <div className="login_register_button">
          <a href="/register">
            <div className="button_top">
              {type === 'login' ? 'Register' : 'Login'}
            </div>
          </a>
        </div>
        <div className="blue_bg" />
        <div className="wellcome_text">
          <div className="wellcome animation_text">{title}</div>
          <div className="wellcome_note animation_text">{desc}</div>
        </div>
        <div className="wellcome_footer animation_footer">{footer}</div>
      </div>
      <div className="column_container right_column animation_two">
        <div className="form_middle">
          <div className="in">
            <div className="login_note">{formDesc}</div>
            <div className="login_form">{children}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
