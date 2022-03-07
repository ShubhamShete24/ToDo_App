import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { login } from "../redux/reducer/userSlice"
import "./Login.css"
import { useForm } from 'react-hook-form'

const Login = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();
    const { formState: { errors } } = useForm()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            login({
                name: name,
                email: email,
                password: password,
                loggedIn: true,
            })
        );
    };

    return (
        <div className="login"> 
            <form className="login_form" onSubmit={(e) => handleSubmit(e)} >
                <h1>Login Here</h1>
                <input 
                type="name" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                // required
                />
                {/* {errors.name && <p>This field is required</p>} */}
               
                <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                // required
                />
                {/* {errors.email && <p>This field is required</p>} */}

                <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // required 
                // minLength = {8}
                />
                {/* {errors.password && <p>This field is required</p>} */}

                <button type="submit" className="submit_btn">Submit</button>
            </form>
        </div>
    )
}

export default Login
