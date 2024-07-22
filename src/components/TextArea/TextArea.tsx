import { ForwardedRef, forwardRef } from 'react';

import styles from './TextArea.module.scss';

type Props = {
  label: string;
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  errorMessage?: string;
};

export const TextArea = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const { label, id, errorMessage, ...rest } = props;

    return (
      <div className={styles.textAreaWrapper}>
        <label className={styles.labelElement} htmlFor={id}>
          {label}
        </label>
        <textarea
          className={styles.textAreaElement}
          id={id}
          ref={ref}
          {...rest}
        />
        {errorMessage && (
          <p className={styles.errorMessage}>{errorMessage}</p>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';
