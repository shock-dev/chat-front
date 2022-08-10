import { Controller } from 'react-hook-form';

// TODO: should be typed
export const Radio = ({ name, title, control, value }: any) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange } }) => (
      <div className="gender">
        <label>
          <input
            name={name}
            className="with-gap"
            type="radio"
            onChange={onChange}
            value={value}
          />
          <span>{title}</span>
        </label>
      </div>
    )}
  />
);
