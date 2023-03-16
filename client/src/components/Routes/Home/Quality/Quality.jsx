import "./Quality.css";
import * as Icons from "react-bootstrap-icons";
import { Snippet } from "../../../Snippet";

const Quality = () => {
  return (
    <section className="Quality">
      <div className="w-fit m-8 mt-12 text-white font-bold text-2xl flex gap-x-4 items-center justify-center">
        <Icons.ViewList /> کیفیت دوره ها چجوریه؟
      </div>
      <div className="Quality-Inner">
        <div className="Quality-Picture"></div>
        <div className="Quality-Description">
          <div className="text-3xl md:text-4xl text-bold text-white mx-8 mt-32 mb-8">
            بالاترین کیفیت
          </div>
          <div className="m-8 text-gray-300">
            دوره هایی که ما در اختیار شما قرار میدیم کاملا بر اساس مقاله های
            سایت مایکروسافت هست که کامل ترین و بهترین چیز برای یادگیری یک
            تکنولوژی خوندن داکیومنتیشن خود سایت سازنده اون فناوری هست.
          </div>
          <div className="mx-10 text-mediumsky">
            قطعه کدی از داکیومنتیشن Win32 از سایت مایکروسافت
          </div>
          <Snippet
            extension="++C"
            codes={`int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance,
    PSTR lpCmdLine, int nCmdShow)
{
    return 0;
}`}
          />
        </div>
      </div>
    </section>
  );
};

export default Quality;
