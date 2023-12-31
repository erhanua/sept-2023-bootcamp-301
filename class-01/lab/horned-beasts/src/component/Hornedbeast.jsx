function HornedBeast1({ title, imageUrl, description }) {
  return (
    <div className="horned-beast">
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} title={title} />
      <p>{description}</p>
    </div>
  );
}

export default HornedBeast1;
