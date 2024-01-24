
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInFailure, signInStart, signInSuccess } from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

const SignIn = () => {
    const [formData, setFormData] = useState({})
   
    const {loading, error} = useSelector(state => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const handleChange = e =>{
        setFormData({...formData, [e.target.id] : e.target.value.trim()})
    }
 const handleSubmit = async(e) =>{
    e.preventDefault()
    if( !formData.email || !formData.password){
        return dispatch(signInFailure('Please fill out all the fields'))
    }
    try {
        dispatch(signInStart())
        const res = await fetch('/api/auth/signin', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        const data = await res.json()
        if(data.success === false){
           dispatch(signInFailure(data.message))
        }
        if (res.ok){
          dispatch(signInSuccess(data))
          navigate('/')

        }
      } catch (error) {
        dispatch(signInFailure(error.message))
       
    }
 }
    return (
    <div className=" max-w-6xl mx-auto mt-5 mb-20 md:mt-20 font-mono">
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between p-3 ">
        {/* left */}
        <div className="flex-1 ">
          <form className="space-y-4 flex flex-col justify-center" onSubmit={handleSubmit}>
            
            <div>
              <Label value=" Email" />
              <TextInput type="email" placeholder="Type Your Email ..." id="email" onChange={handleChange}/>
            </div>
            <div>
              <Label value=" Password" />
              <TextInput type="password" placeholder="Type Your Password ..." id="password" onChange={handleChange}/>
            </div>
            <Button type="submit" gradientDuoTone='greenToBlue' className="font-bold" disabled={loading}>
                {
                    loading ? <div><Spinner size='sm'/> <span>loading...</span></div> : 'Sign in'
                }
            </Button>
            <OAuth/>
          </form>
          {
                error && (

                    <Alert className="mt-4" color='failure'>
                        {error}
                    </Alert>
                )
            }
          <div className="text-sm mt-4">
            <span>New Here? Please </span>
            <Link className="font-bold text-green-400" to='/sign-up'>
            Sing up
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

export default SignIn;
