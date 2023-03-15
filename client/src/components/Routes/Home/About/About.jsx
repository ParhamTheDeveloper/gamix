import "./About.css";
import * as Icons from "react-bootstrap-icons";
import { Progress } from "../../../Progress";

const About = () => {
  return (
    <section className="About">
      <div className="w-fit m-8 mt-12 text-white font-bold text-2xl flex gap-x-4 items-center justify-center">
        <Icons.PersonVideo /> از که یاد میگیرید؟
      </div>
      <div className="About-Inner">
        <div className="About-Me-Picture"></div>
        <div className="About-Me">
          <div className="text-3xl md:text-4xl text-bold text-white mx-8 mt-32 mb-8">
            پرهام طاهرخانی
          </div>
          <div className="mx-14 my-8 text-mediumsky">برنامه نویس فول استک</div>
          <div className="m-8 text-gray-300">
            سلام اسمم پرهام طاهرخانی هست، من یه برنامه نویس فول استک هستم که توش
            3 سال تجربه دارم و همینطور 3 سال هم هست که دارم با ++c کد میزنم.
            هدفم از ساخت این وبسایت چیه؟ هدفم از ساخت گیمیکس اینه همتون بتونید
            بطور رایگان بازی سازی روی ویندوز و درست کردن برنامه های ویندوزی رو
            کامل یاد بگیرید و اینکه مشکلاتی که من در زمان یادگیری خودم داشتم رو
            از سر راه شما بر دارم.
          </div>
          <Progress percent="80" label="فرانت اند"/>
          <Progress percent="60" label="بک اند"/>
          <Progress percent="75" label="c++"/>
        </div>
      </div>
    </section>
  );
};

export default About;
