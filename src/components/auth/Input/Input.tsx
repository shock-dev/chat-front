interface InputProps {
  name: string;
  placeholder: string;
  icon: string;
}

export const Input = ({ name, placeholder, icon }: InputProps) => (
  <div className="login_form_item">
    <input
      type="text"
      className="input_field"
      name={name}
      id={name}
      placeholder={placeholder}
    />
    <div className={`icon icons ${icon}`} />
  </div>
);
