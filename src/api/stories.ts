import type { Story } from '@/models/story';

export const getStoriesIds = async (
  page: number,
  limit: number
): Promise<string[] | undefined> => {
  try {
    const response = await fetch(
      'https://hacker-news.firebaseio.com/v0/topstories.json'
    );
    const storiesData = await response.json();

    const start = (page - 1) * limit;
    const end = start + limit;

    return storiesData.slice(start, end);
  } catch (error) {
    console.error(error);
  }
};

export const getStoryItem = async (id: string): Promise<Story> => {
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error('Something went wrong while fetching the story!');
  }
};

export const getStories = async (page: number, limit: number) => {
  const ids = await getStoriesIds(page, limit);
  if (!ids) return [];
  try {
    const stories = await Promise.all(
      ids.map((id) => getStoryItem(id))
    );
    return stories;
  } catch (error) {
    throw new Error('Something went wrong while fetching the story!'); // Normally I would inform user via toast or something similar
  }
};

export const getComments = async (ids: string[]) => {
  if (ids.length < 1) return [];

  try {
    const comments = await Promise.all(
      ids.map((id) => getStoryItem(id))
    );
    return comments;
  } catch (error) {
    throw new Error('Something went wrong while fetching the story!'); // Normally I would inform user via toast or something similar
  }
};
