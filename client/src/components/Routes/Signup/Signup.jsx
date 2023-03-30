import "./Signup.css";
import { useContext, useRef } from "react";
import { Envelope, Key, Person } from "react-bootstrap-icons";
import { useScrollToTop, useTitle } from "../../../hooks";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { Link } from "../../Link";
import { AuthContext } from "../../../shared/contexts/auth.context";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
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
      console.log(error);
    }
    navigate("/dashboard");
  };

  useTitle("ثبت نام");
  useScrollToTop();

  return (
    <section className="Signup-Wrapper Container">
      <div className="Signup Active-Blur">
        <div className="text-2xl text-white text-center">وقت ثبت نامه!</div>
        <div className="text-lg text-center my-4 text-gray-300">
          لطفا یک اکانت برای خود بسازید
        </div>
        <Input
          ref={usernameRef}
          className="mt-8 mb-2 w-full"
          icon={<Person />}
          placeholder="نام کاربری"
        />
        <Input
          ref={emailRef}
          className="mt-2 mb-2 w-full"
          icon={<Envelope />}
          placeholder="ایمیل"
        />
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
