import React from 'react';
import { Form, Button, Card} from 'react-bootstrap';

const Login = (props) => {

    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError} = props;

    return(
        <section className="login">
            <div className="loginContainer">
                <Card>
                    <Card.Body>
                        <Form>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" autoFocus required value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                                <p className="errorMsg">{emailError}</p>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" required value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                                <p className="errorMsg">{passwordError}</p>
                            </Form.Group>
                            <div className="btnContainer">
                            { hasAccount ? (
                            <>
                                <Button className="w-100" onClick={handleLogin}>Log In</Button>
                                <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                            </>
                            ) : (
                            <>
                                <Button className="w-100" onClick={handleSignup}>Sign up</Button>
                                <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Log In</span></p>
                            </>
                            )}
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            
                
            </div>
        </section>
    )
}

export default Login;