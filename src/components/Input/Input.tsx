import { ForwardedRef, forwardRef } from 'react';

import styles from './Input.module.scss';

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
      <div className={styles.inputWrapper}>
        <label htmlFor={id} className={styles.labelElement}>
          {label}
        </label>
        <input
          className={styles.inputElement}
          id={id}
          ref={ref}
          type={type}
          {...rest}
        />
        {errorMessage && (
          <p className={styles.errorMessage}>{errorMessage}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
