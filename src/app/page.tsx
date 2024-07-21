import Link from 'next/link';
import styles from './page.module.scss';
import cx from 'classnames';
import { formatDistanceToNow } from 'date-fns';

import { getStories } from '@/lib/stories';

type SearchParams = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const limit = 25;

const Home = async ({ searchParams }: SearchParams) => {
  const pageParam = searchParams.page;
  const page = Array.isArray(pageParam)
    ? parseInt(pageParam[0])
    : parseInt(pageParam || '1');
  const stories = await getStories(page, limit);

  return (
    <div className={styles.storiesWrapper}>
      <h1 className={styles.storiesPageTitle}>
        Hacker News Top Stories
      </h1>
      <div className={styles.storiesContainer}>
        {stories.map((story) => {
          const timeAgo = formatDistanceToNow(
            Date.now() - story.time
          );
          return (
            <Link
              key={story.id}
              href={`/story/${story.id}`}
              className={styles.storyItem}
            >
              <div>
                <h2 className={styles.storyTitle}>{story.title}</h2>
                <p className={styles.storyAuthor}>{story.by}</p>
              </div>
              <div className={styles.storyItemDetails}>
                <p>Added {timeAgo} ago</p>
                <div>Read More</div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className={styles.storiesPaginationWrapper}>
        <Link
          href={`/?page=${page - 1}`}
          aria-disabled={page < 2}
          tabIndex={page < 2 ? -1 : undefined}
          className={cx(styles.storiesPaginationButton, {
            [styles.storiesPaginationButton__disabled]: page < 2,
          })}
        >
          Previous
        </Link>
        <Link
          href={`/?page=${page + 1}`}
          aria-disabled={page > 19}
          tabIndex={page > 19 ? -1 : undefined}
          className={cx(styles.storiesPaginationButton, {
            [styles.storiesPaginationButton__disabled]: page > 19,
          })}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Home;
