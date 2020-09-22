import React, { useState, useContext } from 'react';
import Axios from 'axios';
import {Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import setUser from './user.context';
import './register.scss';



export const Register = (props) => {
    const get =useContext(setUser)
    const [data, setData] =useState('');
    const RegisterSchema = Yup.object().shape({
        username: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required').min(5, 'Too Short!').max(40, 'Too Long!'),
      });
    const handleSubmit = (values)=>{
        get.cb(values.email)
        //console.log(username, email)
        Axios({
            method:"POST",
            data:{
            username:values.username,
            email:values.email,
            password:values.password
            },
            withCredentials:true,
            url:"http://localhost:4000/register"
        }).then((res)=>{
            setData(res.data);
            if (res.data === 'user created and now the pass is so Hard'){
                props.history.push('/login');
            }
        });
    };
    return (
        <Formik
        initialValues= {{ username: '', email: '', password: '' }}
        onSubmit = {handleSubmit}
        validationSchema={RegisterSchema}
      >
        {() => (
            <div className="register">
            <div className="wrap">
                <h1>Register</h1>
                {data ? <span className="alert alert-info pb-2">{data}</span> : null}
                <Form>
                    <Field type="text" name="username" placeholder="Your name"/>
                    <ErrorMessage name="username" component="div" className="alert alert-danger"/>
                    <Field type="email" name="email" placeholder="Your email"/>
                    <ErrorMessage name="email" component="div" className="alert alert-danger"/>
                    <Field type="password" name="password"  placeholder="Enter Password"/>
                    <ErrorMessage name="password" component="div" className="alert alert-danger"/>
                    <input type="submit" value="Register"/>
                    <a href="/login">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Login
                    </a>
               </Form>
           </div>
           </div>
                             
        )}
      </Formik>
    )
}




/* <Formik
        initialValues= {{ username: '', email: '', password: '' }}
        onSubmit = {handleSubmit}
        validationSchema={RegisterSchema}
      >
        {() => (
         <div className="mt-4">
                 <section className="row">
                     <div className="col-12 d-flex align-items-center justify-content-center">
                         <div className="col-lg-4 col-md-8 col-10 box-shadow-2 p-0">
                             <div className="card border-grey border-lighten-3 px-1 py-1 m-0">
                                 <div className="card-header border-0 pb-0">
                                     <div className="card-title text-center">
                                         <h1>Register</h1>
                                     </div>
                                 </div>
                                 <Form>
                             <div className="form-group">
                             <Field type="text" name="username" className="form-control" placeholder="Your name" onKeyUp={e => setUserName(e.target.value)}/>
                             <ErrorMessage name="username" component="div" className="alert alert-danger"/>
                             </div>
                             <div className="form-group">
                             <Field type="email" name="email" className="form-control" placeholder="Your email" onKeyUp={e => setEmail(e.target.value)}/>
                             <ErrorMessage name="email" component="div" className="alert alert-danger"/>
                             </div>
                             <div className="form-group">
                             <Field type="password" name="password" className="form-control" placeholder="Enter Password" onKeyUp={e => setPassword(e.target.value)}/>
                             <ErrorMessage name="password" component="div" className="alert alert-danger"/>
                             </div>
                             <div className="card-body">
                             <button type="submit" className="btn btn-outline-info btn-block">Register</button>
                             </div>
                             <div className="card-body">
                                 <a href="/login" className="btn btn-outline-danger btn-block"><i className="ft-unlock"></i>Login</a>
                             </div>
                                 </Form>
                             </div>
                         </div>
                     </div>
                 </section>
      </div>
        )}
      </Formik> */

















/* <div className="wrap">
                                 <Form>
                             <Field type="text" name="username" placeholder="Your name" onKeyUp={e => setUserName(e.target.value)}/>
                             <ErrorMessage name="username" component="div" className="alert alert-danger"/>
                             <Field type="email" name="email" placeholder="Your email" onKeyUp={e => setEmail(e.target.value)}/>
                             <ErrorMessage name="email" component="div" className="alert alert-danger"/>
                             <Field type="password" name="password"  placeholder="Enter Password" onKeyUp={e => setPassword(e.target.value)}/>
                             <ErrorMessage name="password" component="div" className="alert alert-danger"/>
                            
                             <input type="submit" value="Register"/>
                            
                                 <a href="/login">Login</a>
                                 </Form>
                                 </div> */
                         