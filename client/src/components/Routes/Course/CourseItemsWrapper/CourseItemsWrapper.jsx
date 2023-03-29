import { CircleFill } from "react-bootstrap-icons";
import { CourseItem } from "../CourseItem";

const CourseItemsWrapper = ({ title, data }) => {
  return (
    <section className="Course-Items-Wrapper">
      <div className="w-fit my-8 text-2xl text-white flex flex-row items-center gap-x-2">
        <CircleFill className="text-xs" /> {title}
      </div>
      {data.map((item, index) => (
        <CourseItem key={index}>{item.children}</CourseItem>
      ))}
    </section>
  );
};

export default CourseItemsWrapper;
