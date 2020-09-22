import React, { useState } from 'react';
import Axios from 'axios';


export const Register = (props) => {
  const [username, setUserName] =useState('');
  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');
  const [data, setData] =useState(null);
  const GetValues = ()=>{
    if(username && email && password){
      Axios({
        method:"POST",
        data:{
          username:username,
          email:email,
          password:password
        },
        withCredentials:true,
        url:"http://localhost:4000/register"
      }).then((res)=>{
          console.log(res.data);
          setData(res.data);
          if (res.data === 'user created and now the pass is so Hard'){
            props.history.push('/login');
          }
      });
    }
  };
  
    return (
      <div>
      <div className="app-content content mt-4">
      <div className="content-overlay"></div>
      <div className="content-wrapper">
          <div className="content-header row">
          </div>
          <div className="content-body">
              <section className="row flexbox-container">
                  <div className="col-12 d-flex align-items-center justify-content-center">
                      <div className="col-lg-4 col-md-8 col-10 box-shadow-2 p-0">
                          <div className="card border-grey border-lighten-3 px-1 py-1 m-0">
                              <div className="card-header border-0 pb-0">
                                  <div className="card-title text-center">
                                      <h1>Register</h1>
                                      {data ? <span className="alert alert-warning">{data}</span> : null}
                                  </div>
                              </div>
                              <div className="card-content">
                                  <div className="card-body">
                                          <fieldset className="form-group position-relative has-icon-left">
                                              <input type="text" className="form-control" id="user-name" placeholder="User Name" onChange={e => setUserName(e.target.value)}/>
                                              <div className="form-control-position">
                                                  <i className="la la-user"></i>
                                              </div>
                                          </fieldset>
                                          <fieldset className="form-group position-relative has-icon-left">
                                              <input type="email" className="form-control" id="user-email" placeholder="Your Email Address" required onChange={e => setEmail(e.target.value)}/>
                                              <div className="form-control-position">
                                                  <i className="la la-envelope"></i>
                                              </div>
                                          </fieldset>
                                          <fieldset className="form-group position-relative has-icon-left">
                                              <input type="password" className="form-control" id="user-password" placeholder="Enter Password" required onChange={e => setPassword(e.target.value)}/>
                                              <div className="form-control-position">
                                                  <i className="la la-key"></i>
                                              </div>
                                          </fieldset>
                                          <div className="form-group row">
                                             
                                              <div className="float-left pl-4"><a href="recover-password.html" className="card-link">Forgot Password?</a></div>
                                          </div>
                                          <button className="btn btn-outline-info btn-block" onClick={GetValues}>Register</button>

                                  </div>
                                  <div className="card-body">
                                      <a href="login-with-bg-image.html" className="btn btn-outline-danger btn-block"><i className="ft-unlock"></i>
                                          Login</a>
                                  </div>
                              </div>
                     
                          </div>
                      </div>
                  </div>
              </section>

          </div>
      </div>
  </div>
  </div>
  
    )
}
