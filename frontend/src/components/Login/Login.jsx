import React from 'react';

// import Image from ''

const Login = () => {
    return (
        <div className="d-flex flex-column flex-root">
            {/*begin::Login*/}
            <div
                className="login login-2 login-signin-on d-flex flex-column flex-column-fluid bg-white position-relative overflow-hidden"
                id="kt_login">
                {/*begin::Header*/}
                <div className="login-header py-10 flex-column-auto">
                    <div
                        className="container d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between">
                        {/*begin::Logo*/}
                        <a href="#" className="flex-column-auto py-5 py-md-0">
                            <img
                                src="https://preview.keenthemes.com/keen/theme/demo1/dist/assets/media/logos/logo-6.svg"
                                alt="logo" className="h-50px"/>
                        </a>
                        {/*end::Logo*/}
                        <span className="text-muted font-weight-bold font-size-h4">New Here?
						<a href="javascript:;" id="kt_login_signup" className="text-primary font-weight-bolder">Create an Account</a></span>
                    </div>
                </div>
                {/*end::Header*/}

                {/*begin::Body*/}
                <div className="login-body d-flex flex-column-fluid align-items-stretch justify-content-center">
                    <div className="container row">
                        <div className="col-lg-6 d-flex align-items-center">
                            {/*begin::Signin*/}
                            <div className="login-form login-signin">
                                {/*begin::Form*/}
                                <form className="form w-xxl-550px rounded-lg p-20" noValidate="novalidate"
                                      id="kt_login_signin_form">
                                    {/*begin::Title*/}
                                    <div className="pb-13 pt-lg-0 pt-5">
                                        <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">Welcome
                                            to Keen</h3>
                                    </div>
                                    {/*begin::Title*/}

                                    {/*begin::Form group*/}
                                    <div className="form-group">
                                        <label className="font-size-h6 font-weight-bolder text-dark">Email</label>
                                        <input className="form-control form-control-solid h-auto p-6 rounded-lg"
                                               type="text" name="username" autoComplete="off"/>
                                    </div>
                                    {/*end::Form group*/}

                                    {/*begin::Form group*/}
                                    <div className="form-group">
                                        <div className="d-flex justify-content-between mt-n5">
                                            <label
                                                className="font-size-h6 font-weight-bolder text-dark pt-5">Password</label>
                                            <a href="javascript:;"
                                               className="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5"
                                               id="kt_login_forgot">Forgot Password ?</a>
                                        </div>
                                        <input className="form-control form-control-solid h-auto p-6 rounded-lg"
                                               type="password" name="password" autoComplete="off"/>
                                    </div>
                                    {/*end::Form group*/}

                                    {/*begin::Action*/}
                                    <div className="pb-lg-0 pb-5">
                                        <button type="button" id="kt_login_signin_submit"
                                                className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3">Sign
                                            In
                                        </button>
                                        <button type="button"
                                                className="btn btn-light-primary font-weight-bolder px-8 py-4 my-3 font-size-lg">
										<span className="svg-icon svg-icon-md">
											{/*begin::Svg Icon | path:/keen/theme/demo1/dist/assets/media/svg/social-icons/google.svg-->*/}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                 viewBox="0 0 20 20" fill="none">
												<path
                                                    d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.879 15.7789 19.9895 13.221 19.9895 10.1871Z"
                                                    fill="#4285F4"/>
												<path
                                                    d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50243 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9466L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9313 10.1993 19.9313Z"
                                                    fill="#34A853"/>
												<path
                                                    d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397576 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397576 13.0882 1.08875 14.4391L4.39748 11.9366Z"
                                                    fill="#FBBC05"/>
												<path
                                                    d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33717L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z"
                                                    fill="#EB4335"/>
											</svg>

                                            {/*end::Svg Icon*/}
										</span>Sign in with Google
                                        </button>
                                    </div>

                                    {/*end::Action*/}
                                </form>
                                {/*end::Form*/}
                            </div>
                            {/*end::Sign in*/}

                            {/*begin::Signup*/}
                            <div className="login-form login-signup">
                                {/*begin::Form*/}
                                <form className="form w-xxl-550px rounded-lg p-20" noValidate="novalidate"
                                      id="kt_login_signup_form">
                                    {/*begin::Title*/}
                                    <div className="pb-13 pt-lg-0 pt-5">
                                        <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">Sign
                                            Up</h3>
                                        <p className="text-muted font-weight-bold font-size-h4">Enter your details to
                                            create your account</p>
                                    </div>
                                    {/*end::Title*/}

                                    {/*begin::Form group*/}
                                    <div className="form-group">
                                        <input
                                            className="form-control form-control-solid h-auto p-6 rounded-lg font-size-h6"
                                            type="text" placeholder="Fullname" name="fullname" autoComplete="off"/>
                                    </div>
                                    {/*end::Form group*/}

                                    {/*begin::Form group*/}
                                    <div className="form-group">
                                        <input
                                            className="form-control form-control-solid h-auto p-6 rounded-lg font-size-h6"
                                            type="email" placeholder="Email" name="email" autoComplete="off"/>
                                    </div>
                                    {/*end::Form group*/}

                                    {/*begin::Form group*/}
                                    <div className="form-group">
                                        <input
                                            className="form-control form-control-solid h-auto p-6 rounded-lg font-size-h6"
                                            type="password" placeholder="Password" name="password" autoComplete="off"/>
                                    </div>
                                    {/*end::Form group*/}

                                    {/*begin::Form group*/}
                                    <div className="form-group">
                                        <input
                                            className="form-control form-control-solid h-auto p-6 rounded-lg font-size-h6"
                                            type="password" placeholder="Confirm password" name="cpassword"
                                            autoComplete="off"/>
                                    </div>
                                    {/*end::Form group*/}

                                    {/*begin::Form group*/}
                                    <div className="form-group">
                                        <div className="checkbox-inline">
                                            <label className="checkbox">
                                                <input type="checkbox" name="agree"/>
                                                <span></span>I Agree the
                                                <a href="#" className="ml-1">terms and conditions</a>.</label>
                                        </div>
                                    </div>
                                    {/*end::Form group*/}

                                    {/*begin::Form group*/}
                                    <div className="form-group d-flex flex-wrap pb-lg-0 pb-3">
                                        <button type="button" id="kt_login_signup_submit"
                                                className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4">Submit
                                        </button>
                                        <button type="button" id="kt_login_signup_cancel"
                                                className="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3">Cancel
                                        </button>
                                    </div>
                                    {/*end::Form group*/}
                                </form>
                                {/*end::Form*/}
                            </div>
                            {/*end::Signup*/}

                            {/*begin::Forgot*/}
                            <div className="login-form login-forgot">
                                {/*begin::Form*/}
                                <form className="form w-xxl-550px rounded-lg p-20" noValidate="novalidate"
                                      id="kt_login_forgot_form">
                                    {/*begin::Title*/}
                                    <div className="pb-13 pt-lg-0 pt-5">
                                        <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">Forgotten
                                            Password ?</h3>
                                        <p className="text-muted font-weight-bold font-size-h4">Enter your email to
                                            reset your password</p>
                                    </div>
                                    {/*end::Title*/}

                                    {/*begin::Form group*/}
                                    <div className="form-group">
                                        <input
                                            className="form-control form-control-solid h-auto p-6 rounded-lg font-size-h6"
                                            type="email" placeholder="Email" name="email" autoComplete="off"/>
                                    </div>
                                    {/*end::Form group*/}

                                    {/*begin::Form group*/}
                                    <div className="form-group d-flex flex-wrap pb-lg-0">
                                        <button type="button" id="kt_login_forgot_submit"
                                                className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4">Submit
                                        </button>
                                        <button type="button" id="kt_login_forgot_cancel"
                                                className="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3">Cancel
                                        </button>
                                    </div>
                                    {/*end::Form group*/}
                                </form>
                                {/*end::Form*/}
                            </div>
                            {/*end::Forgot*/}
                        </div>
                        <div
                            className="col-lg-6 bgi-size-contain bgi-no-repeat bgi-position-y-center bgi-position-x-center min-h-150px mt-10 m-md-0"
                            style="background-image: url(https://preview.keenthemes.com/keen/theme/demo1/dist/assets/media/svg/illustrations/accomplishment.svg)"></div>
                    </div>
                </div>

                {/*end::Body*/}
                {/*begin::Footer*/}
                <div className="login-footer py-10 flex-column-auto">
                    <div
                        className="container d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between">
                        <div className="font-size-h6 font-weight-bolder order-2 order-md-1 py-2 py-md-0">
                            <span className="text-muted font-weight-bold mr-2">2021©</span>
                            <a href="../../../../../../keenthemes.com/keen/index.html" target="_blank"
                               className="text-dark-50 text-hover-primary">Keenthemes</a>
                        </div>
                        <div className="font-size-h5 font-weight-bolder order-1 order-md-2 py-2 py-md-0">
                            <a href="#" className="text-primary">Terms</a>
                            <a href="#" className="text-primary ml-10">Plans</a>
                            <a href="#" className="text-primary ml-10">Contact Us</a>
                        </div>
                    </div>
                </div>
                {/*end::Footer*/}
            </div>
            {/*end::Login*/}
        </div>
    );
}


export default Login;