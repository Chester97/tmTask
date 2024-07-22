import { formatDistanceToNow } from 'date-fns';
import { useMemo } from 'react';

type Props = {
  time: number;
  className?: string;
};

export const AddedTimeAgo = ({ time, className }: Props) => {
  const timeAgo = useMemo(
    () => formatDistanceToNow(Date.now() - time),
    [time]
  );

  return <p className={className}>Added {timeAgo} ago</p>;
};
