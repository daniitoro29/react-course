export const getGifs = async (category) => {
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

    const urlGifs = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`;
    const resp = await fetch(urlGifs);
    const { data } = await resp.json();
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

    return gifs;
  };