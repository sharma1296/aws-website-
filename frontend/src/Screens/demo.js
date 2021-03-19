import React from 'react'

function demo() {
    return (
        <div>
            <div className="tab-pane" id="register" role="tabpanel">
<h5 className="heading-design-h5">Register Now!</h5>
<fieldset className="form-group">
<label>Enter Email/Mobile number</label>
<input type="text" className="form-control" placeholder="Enter Your Email"/>
</fieldset>
<fieldset className="form-group">
<label>Enter Password</label>
<input type="password" className="form-control" placeholder='Enter Your password'/>
</fieldset>
<fieldset className="form-group">
<label>Enter Confirm Password </label>
<input type="password" className="form-control" placeholder="Enter Your Password"/>
</fieldset>
<fieldset className="form-group">
<button type="submit" className="btn btn-lg btn-success btn-block">Create Your Account</button>
</fieldset>
<div className="custom-control custom-checkbox">
<input type="checkbox" className="custom-control-input" id="customCheck2"/>
<label className="custom-control-label" for="customCheck2">I Agree with <a href="#">Term and Conditions</a></label>
</div>
</div>
        </div>
    )
}

export default demo
