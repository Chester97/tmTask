export const getStoriesIds = async (limit: number) => {
  try {
    const response = await fetch(
      'https://hacker-news.firebaseio.com/v0/topstories.json'
    );
    const storiesData = await response.json();
    return storiesData.slice(0, limit);
  } catch (error) {
    console.error(error);
  }
};

export const getStoryItem = async (id: string) => {
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export const getStories = async (limit = 30) => {
  const ids = await getStoriesIds(limit);
  const stories = await Promise.all(
    ids.map((id) => getStoryItem(id))
  );
  return stories;
};
