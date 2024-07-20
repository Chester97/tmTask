import { ForwardedRef, forwardRef } from 'react';

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
      <div>
        <label htmlFor={id}>{label}</label>
        <textarea id={id} ref={ref} {...rest} />
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';
