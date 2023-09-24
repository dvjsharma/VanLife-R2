import React from "react"
import { Navigate, redirect, useLocation} from "react-router-dom"
import { loginUser } from "../api"
import userImg from "../Assets/images/profile.jpg"
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
                localStorage.setItem("UserAuth", true)
            })
            .catch(error => {
                console.error("Error:", error); // Handle the error here
                setErrorState(error)
                localStorage.setItem("UserAuth", false)
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
    function handelClick(){
        localStorage.setItem("UserAuth", false)
        window.location.reload()
        console.log("redirecting...")
    }
    React.useEffect(() => {
        if (loginState !== null) {
          const delay = setTimeout(() => {
            setDelayedNavigation(true);
          }, 1000);
          return () => clearTimeout(delay);
        }
      }, [loginState]);

    if(localStorage.getItem("UserAuth")==="true" && loginState===null){
        // localStorage.setItem("UserAuth", false)
        const user=localStorage.getItem("username")
        const email=localStorage.getItem("email")
        return(
            <div className="login-container">
                <br /><br /><br />
                <img src={userImg} alt="" className="profile-img"/>
                <h1>{`${user}'s VanLife`}</h1>
                <span className="email-host">{email}</span>
                <br /> <br />
                <button className="button-profile" onClick={()=>{handelClick()}}>Do you wish to Logout?</button>
            </div>
        )
    }

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
                    {localStorage.setItem("username", loginState.user.name )}
                    {localStorage.setItem("email", loginState.user.email )}
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