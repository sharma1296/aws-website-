import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import { signin } from '../actions/userActions';
import LoadingBox from '../Components/LoadingBox';
import Message from '../Components/Message';


function SignInScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
    const submitHandler = (e) => {
      e.preventDefault();
      // TODO: sign in action
      dispatch(signin(email, password));
    };
    return (
        <>

            <div className="login-body">
                <div className="row">
                    <div className="col-lg-6 pad-right-0">
                        <div className="login-modal-left">
                        </div>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="login-modal-right">

                            <div className="tab-content">
                                <div className="tab-pane active" id="login" role="tabpanel">
                                    <h5 className="heading-design-h5">Login to your account</h5>
                                    {loading && <LoadingBox></LoadingBox>}
        {error && <Message variant="danger">{error}</Message>}
                                    <fieldset className="form-group">
                                        <label>Enter Email/Mobile number</label>
                                        <input type="text" className="form-control" id="email" placeholder="" required   onChange={(e) => setEmail(e.target.value)}/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Enter Password</label>
                                        <input type="password" className="form-control" required placeholder="Enter Your Passsword"    onChange={(e) => setPassword(e.target.value)}/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <button type="submit" className="btn btn-lg btn-success btn-block">Enter to your account</button>
                                    </fieldset>

                                    <div className="login-with-sites text-center">
                                        <p>or Login with your social profile:</p>
                                        <button className="btn-facebook login-icons btn-lg"><i className="mdi mdi-facebook"></i> Facebook</button>
                                        <button className="btn-google login-icons btn-lg"><i className="mdi mdi-google"></i> Google</button>
                                        <button className="btn-twitter login-icons btn-lg"><i className="mdi mdi-twitter"></i> Twitter</button>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" for="customCheck1">Remember me</label>
                                    </div>
                                </div>

                            </div>
                            <div className="clearfix"></div>
                            <div className="text-center login-footer-tab">
                                <ul className="nav nav-tabs" role="tablist">
                                  
                                    <li className="nav-item">
                                    New customer?{' '}
            <Link to={`/register?redirect=${redirect}`}>
              Create your account
            </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </form>
                </div>
            </div>







        </>
    )
}

export default SignInScreen

