import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

// hooks are a function that return anything
export const useFetchGifs = (category) => {
  const [images, setimages] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setimages(newImages);
    setisLoading(false)
  };

  useEffect(() => {
    getImages();
  }, []);
  
  return {
    images,
    isLoading,
  };
};
