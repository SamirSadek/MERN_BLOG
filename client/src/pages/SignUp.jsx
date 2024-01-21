import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen max-w-6xl mx-auto mt-5 font-mono">
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between p-3 ">
        {/* left */}
        <div className="flex-1 ">
          <form className="space-y-2 flex flex-col justify-center">
            <div>
              <Label value=" Name" />
              <TextInput type="text" placeholder="Type Your Name ..." id="username" />
            </div>
            <div>
              <Label value=" Email" />
              <TextInput type="email" placeholder="Type Your Email ..." id="email" />
            </div>
            <div>
              <Label value=" Password" />
              <TextInput type="password" placeholder="Type Your Password ..." id="password" />
            </div>
            <Button gradientDuoTone='greenToBlue' className="font-bold ">Sign up</Button>
          </form>
          <div className="text-sm mt-4">
            <span>Have an account? </span>
            <Link className="font-bold text-green-400" to='/sign-in'>
            Sing In
            </Link>
          </div>
        </div>
        {/* right */}
        <div className="flex-1 text-center">
          <Link
            to="/"
            className="text-3xl md:text-4xl font-bold dark:text-white text-emerald-800 uppercase rounded  border-sky-600  p-1"
          >
            <span className="py-1 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-600 font-bold">
              everyday
            </span>
            SAMIR
          </Link>
          <p className="text-sm mt-2">This is a Demo Mern blog Project</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
