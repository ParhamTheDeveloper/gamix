import "./Footer.css";
import { HeartFill } from "react-bootstrap-icons";
import FooterListItem from "./FooterListItem";
import { Wave } from "../Wave";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const routes = [
    {
      link: "/",
      text: "خانه",
    },
    {
      link: "/courses",
      text: "دوره ها",
    },
    {
      link: "/about-us",
      text: "درباره ما",
    },
  ];

  return (
    <>
      <Wave src="/Images/Waves/footer.svg" className="Footer-Wave" />
      <footer className="Footer Transition">
        <div className="Footer-Container Container">
          <div className="flex flex-col md:flex-row">
            <div className="md:mx-8">
              <div className="my-4 text-3xl text-lightsky">گیمیکس</div>
              <div className="md:w-96 text-gray-300">
                گیمیکس هدفش اینه که به شما بهترین اموزش هارو بده تا بدون هیچ
                دردسری بتونید تکنولوژی های مدرن بازی سازی در ویندوز رو یاد
                بگیرید. تمام اموزش های گیمیکس به صورت رایگان در اختیار قرار داده
                میشه تا بتونید بدون پول خرج کردن به شغل مورد علاقتون برسید.
              </div>
            </div>
            <div className="flex flex-col mx-4 my-8 md:my-0">
              <div className="text-lightblue text-xl my-4">بخش های سایت</div>
              <ul>
                {routes.map((item, index) => (
                  <FooterListItem key={index} link={item.link}>
                    {item.text}
                  </FooterListItem>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center text-white flex flex-col md:flex-row justify-center items-center gap-2 mt-12">
            ساخته شده با <HeartFill className="text-red-500" /> توسط پرهام
            طاهرخانی برای جشنواره خوارزمی
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
