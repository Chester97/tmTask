import styles from './StorySkeleton.module.scss';

const SkeletonComment = () => {
  return (
    <div className={styles.skeletonCommentContainer}>
      <div className={styles.skeletonAuthor}></div>
      <div className={styles.skeletonContent}></div>
      <div className={styles.skeletonContent}></div>
      <div className={styles.skeletonTime}></div>
    </div>
  );
};

export const StorySkeleton = () => {
  return (
    <div className={styles.skeletonWrapper}>
      <div className={styles.skeletonTitle}></div>
      {Array.from({ length: 4 }).map((_, index) => (
        <SkeletonComment key={index} />
      ))}
    </div>
  );
};
