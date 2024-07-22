type ErrorType = Error & { digest?: string };
type ResetType = () => void;

export type ErrorProps = {
  error: ErrorType;
  reset: ResetType;
};
