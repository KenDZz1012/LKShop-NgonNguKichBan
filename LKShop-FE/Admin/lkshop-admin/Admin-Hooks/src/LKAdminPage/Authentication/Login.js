import PropTypes from "prop-types";
import React, { useState } from "react";

import { Row, Col, CardBody, Card, Alert, Container, Form, Input, FormFeedback, Label } from "reactstrap";

//redux
import { useSelector, useDispatch } from "react-redux";

import { withRouter, Link } from "react-router-dom";

import { adminLogin } from "helpers/app-backend/authorize-admin-backend-helper";

// import images
import profile from "assets/images/profile-img.png";
import logo from "assets/images/logo.svg";
import { useHistory } from "react-router-dom";
const Login = props => {
  const history = useHistory();

  const [loginInfo, setLoginInfo] = useState({
    "UserName": "",
    "Password": ""
  })

  //meta title
  document.title = "Login | Skote - React Admin & Dashboard Template";


  const { error } = useSelector(state => ({
    error: state.Login.error,
  }));

  const signIn = (res, type) => {

  };

  const onChangeHandler = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value
    })
  }

  const login = async () => {
    await adminLogin(loginInfo).then(res => {
      if (res.isSuccess) {
        localStorage.setItem("LKAuthUser", res.token)
        localStorage.setItem("LKUserInfo", JSON.stringify(res.data))
        history.push("/dashboard")
      }
      else {
      }
    })
  }



  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col xs={7}>
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue to LK Admin.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/" className="auth-logo-light">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logo}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    <Form
                      className="form-horizontal"
                      onSubmit={(e) => {
                        e.preventDefault();
                        login();
                        return false;
                      }}
                    >
                      {error ? <Alert color="danger">{error}</Alert> : null}

                      <div className="mb-3">
                        <Label className="form-label">UserName</Label>
                        <Input
                          name="UserName"
                          className="form-control"
                          placeholder="Enter UserName"
                          type="text"
                          onChange={onChangeHandler}
                          value={loginInfo.UserName || ""}
                        />
                      </div>

                      <div className="mb-3">
                        <Label className="form-label">Password</Label>
                        <Input
                          name="Password"
                          value={loginInfo.Password || ""}
                          type="password"
                          placeholder="Enter Password"
                          onChange={onChangeHandler}
                        />
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary btn-block"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <Link to="/forgot-password" className="text-muted">
                          <i className="mdi mdi-lock me-1" />
                          Forgot your password?
                        </Link>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Don&#39;t have an account ?{" "}
                  <Link to="/register" className="fw-medium text-primary">
                    {" "}
                    Signup now{" "}
                  </Link>{" "}
                </p>
                <p>
                  © {new Date().getFullYear()} Skote. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" /> by Themesbrand
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Login);

Login.propTypes = {
  history: PropTypes.object,
};
