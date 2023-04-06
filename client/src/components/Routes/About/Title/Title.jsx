const Title = ({ children, className }) => {
  return (
    <div className={`text-xl md:text-2xl text-white mt-8 ${className}`}>
      {children}
    </div>
  );
};

export default Title;
