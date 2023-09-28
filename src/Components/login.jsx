import React from "react"
import { Navigate, useLocation} from "react-router-dom"
import { loginUser } from "../api"
import userImg from "../Assets/images/profile-general.png"
import useAuth from "../Context/useAuth"
export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" }) //manage form data
    const [status, setStatus] = React.useState("idle") // login, logging in... status state
    const [errorState, setErrorState]=React.useState(null) //error state handeler if its not successfull
    const [loginState, setLoginState]=React.useState(null) //login state handeler if its successfull
    const [delayedNavigation, setDelayedNavigation] = React.useState(false); //to delay navigation by 1 sec
    const val=useLocation(); //to get that message "you need to login first"
    const {userData, setuserData, isloggedin, setisloggedin} = useAuth() // to acces all auth global variables and methods
    // console.log(val)
    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        setErrorState(null)
        setLoginState(null) 
        loginUser(loginFormData)
            .then(data=>{
                // console.log(data)
                setLoginState(data)
                setuserData(data)
                setisloggedin(true)
                // localStorage.setItem("UserAuth", true)
            })
            .catch(error => {
                console.error("Error:", error); // Handle the error here
                setErrorState(error)
                setuserData(null)
                setisloggedin(false)
                // localStorage.setItem("UserAuth", false)
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
        setuserData(null)
        setisloggedin(false)
        // window.location.reload()
        // console.log("redirecting...")
    }
    React.useEffect(() => {
        if (loginState !== null) {
          const delay = setTimeout(() => {
            setDelayedNavigation(true);
          }, 1000);
          return () => clearTimeout(delay);
        }
      }, [loginState]);

    if(isloggedin===true && loginState===null){
        // localStorage.setItem("UserAuth", false)
        const user=userData.user.name
        const email=userData.user.email
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
                {/* redirecting message is store in val object */}
                {val.state===null? null :<h5 className="red">{val.state.message}</h5>} 
                {/* error state and message */}
                {errorState===null? null :<h5 className="red">{errorState.message}</h5>}
                {/* login state and message */}
                {loginState===null? null :(
                    <>
                    {/* {localStorage.setItem("username", loginState.user.name )}
                    {localStorage.setItem("email", loginState.user.email )} */}
                    <h5 className="red-none">Welcome {userData.user.name}, redirecting you to host page..</h5>
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