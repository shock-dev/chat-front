import {
  Controller,
  UseControllerProps,
  FieldError,
  FieldValues,
} from 'react-hook-form';
import cc from 'classcat';

interface Props<T> extends UseControllerProps<T> {
  placeholder: string;
  icon: string;
  error: FieldError | undefined;
}

export const Input = <T extends FieldValues>({
  name,
  placeholder,
  icon,
  error,
  control,
}: Props<T>) => (
  <div className="login_form_item">
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <>
          <input
            type="text"
            className={cc(['input_field', { input_error: !!error?.message }])}
            onChange={text => onChange(text)}
            placeholder={placeholder}
            id={name}
          />
          <div className={`icon icons ${icon}`} />
          {error && <span className="input_message">{error?.message}</span>}
        </>
      )}
    />
  </div>
);
