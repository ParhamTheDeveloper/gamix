import { CircleFill } from "react-bootstrap-icons";
import { CourseItem } from "../CourseItem";

const CourseItemsWrapper = ({ data }) => {
  return <section className="Course-Items-Wrapper">
    <div className="w-fit my-8 text-2xl text-white flex flex-row items-center gap-x-2"><CircleFill className="text-xs"/> توضیحات</div>
    {data.map((item, index) => <CourseItem key={index} {...item} />)}
  </section>
};

export default CourseItemsWrapper;
