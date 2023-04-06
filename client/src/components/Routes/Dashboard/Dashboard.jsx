import "./Dashboard.css";
import { Header } from "./Header";
import { Picture } from "../../Picture";
import { AuthContext } from "../../../shared/contexts/auth.context";
import { useContext, useState } from "react";
import { Button } from "../../Button";

const Dashboard = () => {
  const [isAccountVisible, setIsAccountVisible] = useState(true);
  const { user } = useContext(AuthContext);

  const handleAccountClick = () => {
    setIsAccountVisible(true);
  };

  const handleMyCoursesClick = () => {
    setIsAccountVisible(false);
  };

  return (
    <div className="Dashboard Container">
      <div className="Dashboard-Inner">
        <Header onClicks={[handleAccountClick, handleMyCoursesClick]} />
        {isAccountVisible && (
          <div className="relative p-4 md:p-8 rounded-lg my-4">
            <div className="text-white text-xl md:text-2xl font-semibold">
              سلام {user.username} عزیز
            </div>
            <div className="text-mediumsky my-4 text-sm">
              بیا باهم برنامه نویسی رو شروع کنیم
            </div>
            <div className="mt-8 text-white text-sm rounded-lg py-2 px-4 bg-lightsky bg-opacity-50">
              در قسمت دوره های من میتوانید تمام دوره هایی که ثبت نام کرده اید را
              مشاهده کنید.
            </div>
          </div>
        )}
        {!isAccountVisible && (
          <>
            <div className="m-4 md:mt-8 md:mx-8 md:mb-4 text-xl md:text-2xl text-white">
              لیست دوره های ثبت نام شده
            </div>
            <div className="pt-4 px-4 pb-1 md:pt-8 md:px-8 md:pb-4 mb-4">
              {!!user.registeredCourses.length &&
                user.registeredCourses.map((course, index) => (
                  <div className="p-4 rounded-lg bg-lightblue mb-4" key={index}>
                    <div className="flex flex-col md:flex-row">
                      <div className="flex flex-row items-center mb-4 md:mb-0">
                        <Picture
                          key={index}
                          src={course.img}
                          parentClassName="h-12 basis-[4.5rem] md:h-16 md:basis-16"
                          className="w-full h-full !rounded-full"
                        />
                        <div className="mx-4 flex flex-col gap-y-2">
                          <div className="text-mediumsky">
                            دوره جامع و پروژه محور {course.name}
                          </div>
                          <div className="text-sm text-gray-400">
                            {course.condition}
                          </div>
                        </div>
                      </div>
                      <Button
                        link={`${window.location.href.replace(
                          "/dashboard",
                          `/courses/${course.name}`
                        )}`}
                        className="h-fit my-auto mr-auto"
                      >
                        مشاهده
                      </Button>
                    </div>
                  </div>
                ))}
              {!user.registeredCourses.length && (
                <div className="text-white text-xl md:text-2xl font-semibold">
                  متاسفانه در دوره ای ثبت نام نکرده اید :(
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
