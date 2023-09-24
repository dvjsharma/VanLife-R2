import React from "react"
import { Navigate, useLocation} from "react-router-dom"
import { loginUser } from "../api"
import { setSelectionRange } from "@testing-library/user-event/dist/utils"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [status, setStatus] = React.useState("idle")
    const [errorState, setErrorState]=React.useState(null)
    const [loginState, setLoginState]=React.useState(null)
    const [delayedNavigation, setDelayedNavigation] = React.useState(false);

    const val=useLocation()
    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        setErrorState(null)
        setLoginState(null)
        loginUser(loginFormData)
            .then(data=>{
                console.log(data)
                setLoginState(data)
            })
            .catch(error => {
                console.error("Error:", error); // Handle the error here
                setErrorState(error)
            })
            .finally(()=>setStatus("idle"))
        //further you can use this data to do more st uff
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    React.useEffect(() => {
        if (loginState !== null) {
          const delay = setTimeout(() => {
            setDelayedNavigation(true);
          }, 1000);
          return () => clearTimeout(delay);
        }
      }, [loginState]);

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                {val.state===null? null :<h5 className="red">{val.state.message}</h5>}
                {errorState===null? null :<h5 className="red">{errorState.message}</h5>}
                {loginState===null? null :(
                    <>
                    <h5 className="red-none">Welcome {loginState.user.name}, redirecting you to host page..</h5>
                    {delayedNavigation && <Navigate to="/host"/>}
                    </>
                )}
                <button 
                    disabled={status === "submitting"}
                >
                    {status === "submitting" 
                        ? "Logging you in..." 
                        : "Log in"
                    }
                </button>
            </form>
        </div>
    )

}