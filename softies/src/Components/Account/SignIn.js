import React, { useState,useContext } from 'react'
import "./signup.css"
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Logincontext } from "../context/ContextProvider";

const SignIn = () => {
    
  const { account, setAccount } = useContext(Logincontext);

    const [logdata, setData] = useState({
        email: "",
        password: ""
    });

    const adddata = (e) => {
        const { name, value } = e.target;
        //console.log(name, value);

        setData(() => {
            return {
                ...logdata,
                [name]: value
            }
        })
    };

    const senddata = async (e) => {
        e.preventDefault();
        
        const { email, password } = logdata;
        // console.log(email);
        try {
            const res = await fetch("/login", {
                method: "POST",
                credentials: 'include', withCredentials: true,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });
            

            const data = await res.json();
            console.log(data);

            if (res.status === 400 || !data) {
                toast.error("Invalid Details 👎!", {
                    position: "top-center"
                });
            } else {
                setAccount(data);
                setData({ ...logdata, email: "", password: "" });
                toast.success("Login Successfully done 😃!", {
                    position: "top-center"
                });
            }
        } catch (error) { 
            console.log("Error in Login page" + error.message);
        }
    };

  return (
    <section>

            <div className="sign_container">
                <div className="sign_header">
                    <img src="https://images.pexels.com/photos/4792086/pexels-photo-4792086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="signupimg" />
                </div> 
                <div className="sign_info">
                <div className="sign_form">
                    <form method="POST">
                        <h1>Sign-In</h1>

                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"
                            onChange={adddata}
                            value={logdata.email}
                                id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                            onChange={adddata}
                            value={logdata.password}
                                id="password" placeholder="At least 6 characters" />
                        </div>
                        <button type="submit" className="signin_btn" onClick={senddata}>Continue</button>
                    </form>
                    <ToastContainer />
                </div>
                <div className="create_accountinfo">
                    <p>New Here?</p>
                    <button>  <NavLink to="/signup">Create A New Account</NavLink></button>
                </div>
                </div>
            </div>

        </section>
  )
}

export default SignIn