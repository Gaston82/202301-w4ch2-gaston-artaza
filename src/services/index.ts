const API_KEY = "8vG6z2FesxcljPGMEGNRT0hP79exFH21";

export const getRandomGifs = async (category: string) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&q="${category}"&tag=&rating=g`
  );

  const gifs = await response.json();

  return gifs.data.images.fixed_height.url;
};
