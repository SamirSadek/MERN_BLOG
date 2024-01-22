
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
    const [formData, setFormData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    
    const handleChange = e =>{
        setFormData({...formData, [e.target.id] : e.target.value.trim()})
    }
 const handleSubmit = async(e) =>{
    e.preventDefault()
    if( !formData.email || !formData.password){
        return setError('All fields is required')
    }
    try {
        setLoading(true)
        setError(null)
        const res = await fetch('/api/auth/signin', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        const data = await res.json()
        if(data.success === false){
            return setError(data.message)
        }
        setLoading(false)
        navigate('/')
    } catch (error) {
        setError(error.message)
       
    }
    setLoading(false)
 }
    return (
    <div className=" max-w-6xl mx-auto mt-5 mb-20 md:mt-20 font-mono">
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between p-3 ">
        {/* left */}
        <div className="flex-1 ">
          <form className="space-y-2 flex flex-col justify-center" onClick={handleSubmit}>
            
            <div>
              <Label value=" Email" />
              <TextInput type="email" placeholder="Type Your Email ..." id="email" onChange={handleChange}/>
            </div>
            <div>
              <Label value=" Password" />
              <TextInput type="password" placeholder="Type Your Password ..." id="password" onChange={handleChange}/>
            </div>
            <Button gradientDuoTone='greenToBlue' className="font-bold " disabled={loading}>
                {
                    loading ? <div><Spinner size='sm'/> <span>loading...</span></div> : 'Sign in'
                }
            </Button>
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
