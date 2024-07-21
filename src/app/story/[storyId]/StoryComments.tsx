import { getComments } from '@/lib/stories';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

import styles from './StoryComments.module.scss';

import type { Story } from '@/models/story';
import { formatDistanceToNow } from 'date-fns';

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
                <p className={styles.storyCommentTime}>
                  {formatDistanceToNow(Date.now() - comment.time)} ago
                </p>
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
