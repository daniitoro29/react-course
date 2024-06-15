export const getGifs = async (category) => {
    const urlGifs = `https://api.giphy.com/v1/gifs/search?api_key=zdNwpEyAL97MTbMRe0RNVzYSrVhJ0gYB&q=${category}&limit=20`;
    const resp = await fetch(urlGifs);
    const { data } = await resp.json();
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

    return gifs;
  };