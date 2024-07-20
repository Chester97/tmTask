import { getStoryItem } from '@/lib/stories';

type StoryProps = { params: { storyId: string } };

const Story = async ({ params: { storyId } }: StoryProps) => {
  const story = await getStoryItem(storyId);

  return (
    <div>
      <h1>{story.title}</h1>
      <h3>Author: {story.by}</h3>
      <p>Score: {story.score}</p>
      <a rel="noopener noreferrer" target="_blank" href={story.url}>
        Read More
      </a>
      <button>Load Comments</button>
    </div>
  );
};

export default Story;
