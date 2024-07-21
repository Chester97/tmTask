'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>An error occured! Please try again</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
