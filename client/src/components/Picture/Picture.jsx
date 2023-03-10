import "./Picture.css";

const Picture = ({ src, alt, className }) => {
  return (
    <picture className={`Picture ${className}`}>
      <img
        className="Picture-InnerImg"
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
};

export default Picture;
