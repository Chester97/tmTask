import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

import type { Story } from '@/models/story';
import { getComments } from '@/api/stories';
import { AddedTimeAgo } from '@/components/AddedTimeAgo/AddedTimeAgo';

import styles from './StoryComments.module.scss';

type CommentIds = {
  commentIds: Story['kids'] | undefined;
};

const StoryComments = async ({ commentIds = [] }: CommentIds) => {
  const comments = await getComments(commentIds);

  const window = new JSDOM('').window;
  const purify = DOMPurify(window);

  if (comments.length < 1) {
    return <div>No comments</div>;
  }

  return (
    <div>
      <h3 className={styles.storyCommentsTitle}>Comments</h3>
      <div className={styles.storiesCommentsWrapper}>
        {comments.map((comment) => {
          if (comment.deleted) return null;
          return (
            <div
              className={styles.storyCommentContainer}
              key={comment.id}
            >
              <div>
                <p className={styles.storyCommentAuthor}>
                  {comment.by}
                </p>
                <AddedTimeAgo
                  time={comment.time}
                  className={styles.storyCommentTime}
                />
              </div>
              {comment.text && (
                <div
                  className={styles.storyCommentContent}
                  dangerouslySetInnerHTML={{
                    __html: purify.sanitize(comment.text),
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StoryComments;
