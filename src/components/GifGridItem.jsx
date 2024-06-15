const GifGridItem = ({ title, url }) => {
  return (
    <div>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
