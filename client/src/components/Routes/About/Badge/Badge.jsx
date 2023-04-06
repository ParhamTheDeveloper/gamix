const Badge = ({ children, className }) => {
  return (
    <div
      className={`w-fit my-2 py-1 px-2 bg-mediumsky text-mediumblue rounded-lg text-sm ${className}`}
    >
      {children}
    </div>
  );
};

export default Badge;
