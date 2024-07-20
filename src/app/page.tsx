import Link from 'next/link';

import { getStories } from '@/lib/stories';

const Home = async () => {
  const stories = await getStories();

  return (
    <div>
      <h1>Hacker News Top Stories</h1>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            <Link href={`/story/${story.id}`}>{story.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
