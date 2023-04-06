import "./Picture.css";

const Picture = ({ src, alt, className, parentClassName }) => {
  return (
    <picture className={`${parentClassName}`}>
      <img
        className={`Picture Transition ${className}`}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
};

export default Picture;
