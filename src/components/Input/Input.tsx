import { ForwardedRef, forwardRef } from 'react';

type Props = {
  label: string;
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  type?: 'text' | 'email';
};
export const Input = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const { label, id, type = 'text', errorMessage, ...rest } = props;

    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} ref={ref} type={type} {...rest} />
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
