import "./Signup.css";
import { Envelope, Key, Person } from "react-bootstrap-icons";
import { useScrollToTop, useTitle } from "../../../hooks";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { Link } from "../../Link";
import { AuthContext } from "../../../shared/contexts/auth.context";
import { useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";

const Signup = () => {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState(null);
  const { onSignup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await onSignup(
        usernameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
    } catch (error) {
      setError(error);
    }
    if (error) {
      if (!error.username || !error.email || !error.password)
        navigate("/dashboard");
    }
  };

  useTitle("ثبت نام");
  useScrollToTop();

  return (
    <section className="Signup-Wrapper Container">
      <div
        className={`Signup Active-Blur ${error && "!h-[42rem] md:!h-[40rem]"}`}
      >
        <div className="text-2xl text-white text-center">وقت ثبت نامه!</div>
        <div className="text-lg text-center my-4 text-gray-300">
          لطفا یک اکانت برای خود بسازید
        </div>
        <div className="text-sm text-red-500 mx-2">{error?.username}</div>
        <Input
          ref={usernameRef}
          className={`${error ? "mt-4" : "mt-8"} mb-2 w-full`}
          icon={<Person />}
          placeholder="نام کاربری"
        />
        <div className="text-sm text-red-500 mx-2">{error?.email}</div>
        <Input
          ref={emailRef}
          className="mt-2 mb-2 w-full"
          icon={<Envelope />}
          placeholder="ایمیل"
        />
        <div className="text-sm text-red-500 mx-2">{error?.password}</div>
        <Input
          ref={passwordRef}
          className="my-2 w-full"
          icon={<Key />}
          placeholder="رمز"
        />
        <Button className="mt-auto" onClick={handleSignup}>
          ثبت نام
        </Button>
        <div className="mt-auto flex-end self-center text-white flex flex-row items-center gap-2">
          اکانت داری؟
          <Link to="/login" className="!text-lightsky">
            وارد شوید
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Signup;
