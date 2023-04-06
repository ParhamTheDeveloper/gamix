const Text = ({ children, className }) => {
  return (
    <div className={`my-4 text-gray-400 text-sm ${className}`}>{children}</div>
  );
};

export default Text;
