import './style.css'
import { Link } from "react-router-dom"
import { useState } from 'react'
import { signupUser } from '../store/action'
import { useDispatch } from 'react-redux'

function Signup() {
    
    const [username ,setUsername] = useState ("")
    const [email ,setEmail] = useState ("")
    const [password ,setPassword] = useState ("")
    const dispatch = useDispatch();

    const signup_user = () => {
        let user = {
            username,
            email,
            password
        }

        dispatch (signupUser(user))

       
    }

    return (

        <div>

            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card login_card'>
                            <h1>Signup</h1>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Username</label>
                                <input onChange = { (e)=> setUsername(e.target.value)} value = {username} type="text" className="form-control" id="exampleFormControlInput1" placeholder="username here" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input  onChange = { (e)=> setEmail(e.target.value)} value = {email} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Password</label>
                                <input onChange = { (e)=> setPassword(e.target.value)} value = {password} type="password" className="form-control" id="exampleFormControlInput1" />

                                <div className="d-grid gap-2 btn">
                                    <button onClick = { signup_user } class="btn btn-primary" type="button">Signup</button>

                                <div>
                                        <Link to = "/">Login Here</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </div>

    )
}

export default Signup;