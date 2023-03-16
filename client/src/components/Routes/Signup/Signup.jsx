import "./Signup.css";
import { useEffect, useRef } from "react";
import { Envelope, Key, Person } from "react-bootstrap-icons";
import { useScrollToTop } from "../../../hooks";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { Link } from "../../Link";

const Signup = () => {
  return (
    <section className="Signup-Wrapper Container">
      <div className="Signup Active-Blur">
        <div className="text-2xl text-white text-center">وقت ثبت نامه!</div>
        <div className="text-lg text-center my-4 text-gray-300">
          لطفا یک اکانت برای خود بسازید
        </div>
        <Input
          className="mt-8 mb-2 w-full"
          icon={<Person />}
          placeholder="نام کاربری"
        />
        <Input
          className="mt-2 mb-2 w-full"
          icon={<Envelope />}
          placeholder="ایمیل"
        />
        <Input className="my-2 w-full" icon={<Key />} placeholder="رمز" />
        <Button className="mt-auto">ورود</Button>
        <div className="mt-auto flex-end self-center text-white flex flex-row items-center gap-2">
          اکانت داری؟
          <Link to="/login" className="!text-lightsky">
            وارد شو
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Signup;
