import React, { useEffect, useState } from "react";
import { getGifs } from "./helpers/getGifs";

const GifGrid = ({ category }) => {
  const [images, setimages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setimages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {images.map(({ id, title, url }) => (
          <div key={id}>
            <h5>{title}</h5>
            <img src={url} alt={title} />
          </div>
        ))}
      </ol>
    </>
  );
};

export default GifGrid;
