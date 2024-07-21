import { getStoryItem } from '@/lib/stories';
import StoryComments from './StoryComments';
import { Suspense } from 'react';

import styles from './Story.module.scss';
import { formatDistanceToNow } from 'date-fns';
import Loading from './loading';
import { StorySkeleton } from '@/components/StorySkeleton/StorySkeleton';

type StoryProps = { params: { storyId: string } };

const Story = async ({ params: { storyId } }: StoryProps) => {
  const story = await getStoryItem(storyId);
  const timeAgo = formatDistanceToNow(Date.now() - story.time);

  return (
    <div>
      <div className={styles.storyDetailedItemWrapper}>
        <h1 className={styles.storyDetailedTitle}>{story.title}</h1>
        <h3>Author: {story.by}</h3>
        <p>Score: {story.score}</p>
        <p>Added: {timeAgo} ago</p>
        {story.url && (
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={story.url}
          >
            Read more
          </a>
        )}
      </div>
      <Suspense fallback={<StorySkeleton />}>
        <StoryComments commentIds={story.kids} />
      </Suspense>
    </div>
  );
};

export default Story;
