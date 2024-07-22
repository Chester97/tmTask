import { Suspense } from 'react';

import { StorySkeleton } from '@/components/StorySkeleton/StorySkeleton';
import { AddedTimeAgo } from '@/components/AddedTimeAgo/AddedTimeAgo';
import { getStoryItem } from '@/api/stories';

import StoryComments from './StoryComments';
import styles from './Story.module.scss';

type StoryProps = { params: { storyId: string } };

const Story = async ({ params: { storyId } }: StoryProps) => {
  const story = await getStoryItem(storyId);

  return (
    <div>
      <div className={styles.storyDetailedItemWrapper}>
        <h1 className={styles.storyDetailedTitle}>{story.title}</h1>
        <h3>Author: {story.by}</h3>
        <p>Score: {story.score}</p>
        <AddedTimeAgo time={story.time} />
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
