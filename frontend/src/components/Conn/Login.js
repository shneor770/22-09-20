import React, { useState, useContext } from 'react'
import Axios from 'axios';
import {Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import queryString from 'query-string'
import userContext from './user.context';
import './login.scss';
require('../Dashboard');



export const Login = (props) => {
  const geyuser = useContext(userContext);
  //const params = queryString.parse(props.location.search);
  console.log(props);
  const [data, setData] =useState('');
  const [email, setEmail] =useState(null);
  const [password, setPassword] =useState('');
  const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required').min(5, 'Too Short!').max(40, 'Too Long!'),
  });
  
  const handleLogin =()=>{
    Axios({
      method:"POST",
      data:{
      email:email ? email : geyuser.user,
      password:password
      },
      withCredentials:true,
      url:"http://localhost:4000/login"
  }).then((res)=>{
      console.log(res);
      setData(res.data);
      if (res.data === 'chmpine'){
        setTimeout(() => {
          props.history.push('/')
        }, 1000);
    }
  });
  }
  return (
    <Formik
    initialValues= {{email:geyuser.user, password: '' }}
    onSubmit = {handleLogin}
    validationSchema={RegisterSchema}
  >
    {() => (
     
                         <div className="login">
                         <div className="wrap">
                             <div className="card-header border-0 pb-0">
                                 <div className="card-title text-center">
                                     <h1>Login</h1>
                                    {data ? <span className="alert alert-info">{data}</span> : null}
                                 </div>
                             </div>
                             <Form>
                         <div className="form-group row">
                         <div className="col-1"><FontAwesomeIcon icon={email ? "user-edit" :"user"} color={ email ? "green" : "blue"} size="2x"/></div>
                         <div className="col-10 col-sm-11"><Field  type="email" name="email" className="form-control" placeholder="Your email" onKeyUp={e => setEmail(e.target.value)}/>
                         <ErrorMessage name="email" component="div" className="alert alert-danger"/></div>
                         </div>
                         <div className="form-group row">
                           <div className="col-1"><FontAwesomeIcon icon={password ? "unlock" :"lock"} color={ password ? "green" : "blue"} size="2x"/></div>
                           <div className="col-10 col-sm-11"><Field type="password" name="password" className="form-control" placeholder="Enter Password" onKeyUp={e => setPassword(e.target.value)}/>
                         <ErrorMessage name="password" component="div" className="alert alert-danger"/></div>
                         
                         </div>
                         <div className="card-body">
                         <input type="submit" value="Login"/>
                         </div>
                         <div className="card-body">
                             <a href="/register">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              Register
                            </a>
                         </div>
                             </Form>
                        </div>
                        </div>
                 
    )}
  </Formik>
)
}
