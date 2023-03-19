import "./CourseItem.css";

const CourseItem = ({ children }) => {
  return (
    <div className="CourseItem">
      <div className="text-gray-300 my-4">{children}</div>
    </div>
  );
};

export default CourseItem;
