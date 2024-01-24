import { Button } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import {GoogleAuthProvider,  getAuth, signInWithPopup } from 'firebase/auth'
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
const OAuth = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = getAuth(app)

    const handleGoogleSignIn =async() =>{
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({prompt:'select_account'})
        try {
            const result = await signInWithPopup(auth, provider)
            const res = await fetch('/api/auth/google',{
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    googlePhotoUrl : result.user.photoURL

                })
            })
            const data = res.json()
             if(res.ok){
                dispatch(signInSuccess(data))
                navigate('/')
             }

        } catch (error) {
            console.log(error);
        }
    }
  return (
    <Button gradientDuoTone="greenToBlue" className="font-bold" outline onClick={handleGoogleSignIn}>
      <FcGoogle className="text-xl mr-3"/>
      SignIn with Google
    </Button>
  );
};

export default OAuth;
