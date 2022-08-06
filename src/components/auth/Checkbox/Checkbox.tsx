interface CheckboxProps {
  name: string;
  title: string;
}

export const Checkbox = ({ name, title }: CheckboxProps) => (
  <div className="gender">
    <label>
      <input className="with-gap" name={name} type="radio" />
      <span>{title}</span>
    </label>
  </div>
);
