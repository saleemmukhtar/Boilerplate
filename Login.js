import './style.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { loginUser } from '../store/action'
import { useDispatch } from 'react-redux'


function Login() {


    const [email ,setEmail] = useState ("")
    const [password ,setPassword] = useState ("")
    const dispatch = useDispatch();

    const login = ()=>{
        let user = {
            email,
            password
        }

        dispatch(loginUser(user))
        // console.log (user)
    }

    return (
        <div>

            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card login_card'>
                            <h1>Login</h1>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input  onChange = { (e)=> setEmail(e.target.value)} value = {email} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Password</label>
                                <input onChange = { (e) => setPassword(e.target.value)} value = {password} type="password" className="form-control" id="exampleFormControlInput1" />

                                <div className="d-grid gap-2 btn">
                                    <button  onClick = { login } class="btn btn-primary" type="button"><Link to = 'Home'> Login </Link></button>

                                    <div>
                                        <Link to = "/signup">Create New account</Link>
                                        

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

export default Login;