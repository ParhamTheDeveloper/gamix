import "./Login.css";
import { useEffect, useRef } from "react";
import { Envelope, Key } from "react-bootstrap-icons";
import { useScrollToTop } from "../../../hooks";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { Link } from "../../Link";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useScrollToTop();

  return (
    <section className="Login-Wrapper Container">
      <div className="Login Active-Blur">
        <div className="text-2xl text-white text-center">خوش برگشتی!</div>
        <div className="text-lg text-center my-4 text-gray-300">
          لطفا به اکانت خود وارد شوید
        </div>
        <Input
          className="mt-8 mb-2 w-full"
          icon={<Envelope />}
          placeholder="ایمیل"
        />
        <Input className="my-2 w-full" icon={<Key />} placeholder="رمز" />
        <Button className="mt-auto">ورود</Button>
        <div className="mt-auto flex-end self-center text-white flex flex-row items-center gap-2">
          اکانت نداری؟ <Link to="/signup" className="!text-lightsky">ثبت نام کن</Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
