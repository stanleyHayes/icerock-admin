import React, {useState} from "react";
import {CardContent, Container, Grid, Card, TextField, Button} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";
import {Link} from "react-router-dom";

const SignUpPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            button: {
                paddingTop: 4,
                paddingBottom: 4,
                fontFamily: "Poppins",
                fontWeight: "bold",
                backgroundColor: "darkblue",
                color: "white",
                marginTop: 16,
                marginBottom: 16
            },
            textButton: {
                paddingTop: 4,
                paddingBottom: 4,
                fontFamily: "Poppins",
                fontWeight: "bold",
                color: "darkblue"
            }, root: {
                minHeight: "100vh",
                display: "flex",
                alignItems: "center"
            }
        }
    });

    const classes = useStyles();

    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [confirmPassword, setConfirmPassword] = useState("");
    const [visible, setVisibility] = useState(false);

    const {name, email, username, phone, password} = user;

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name) {
            setError({...error, name: "Name field required"});
            return;
        } else {
            setError({...error, name: null});
        }

        console.log(user);
    }

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleVisibilityChange = () => {
        setVisibility(!visible);
    }
    return (
        <div className={`${classes.root} dark-grey`}>
            <Container>
                <Grid container={true} justify="center">
                    <Grid item={true} xs={12} md={8}>
                        <Card elevation={1} raised={true} variant="elevation" square={true}>
                            <div>
                                <Grid container={true} spacing={2}>
                                    <Grid item={true} xs={12} md={6}>
                                        <div className="d-flex flex-column height-100 info">
                                            <div>
                                                <p className="text-align-center font-size-large font-weight-bold white-text">Ice
                                                    Rock</p>
                                            </div>
                                            <div className="flex-grow-1 center-vertical">
                                                <p className="text-align-center font-size-medium font-weight-bold white-text">Welcome
                                                    to Ice Rock</p>
                                                <p className="text-align-center font-size-medium font-weight-bold white-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                </p>
                                            </div>
                                            <div className="padding-bottom-medium">
                                                <Grid container={true} justify="center" spacing={2}>
                                                    <Grid item={true}>
                                                        <a className="social-link uppercase padding-vertical-small"
                                                           href="https://linkedin.com/stanleyhayford" target="_blank"
                                                           rel="noreferrer noopener">
                                                            <img width={20} height={20}
                                                                 src={`${process.env.PUBLIC_URL}/images/linkedin.svg`}
                                                                 alt="Linkedin logo"/>
                                                        </a>
                                                    </Grid>

                                                    <Grid item={true}>
                                                        <a className="social-link uppercase padding-vertical-small"
                                                           href="https://"
                                                           target="_blank"
                                                           rel="noreferrer noopener">
                                                            <img width={20} height={20}
                                                                 src={`${process.env.PUBLIC_URL}/images/facebook.svg`}
                                                                 alt="Facebook logo"/>
                                                        </a>
                                                    </Grid>

                                                    <Grid item={true}>
                                                        <a className="social-link uppercase padding-vertical-small"
                                                           href="https://"
                                                           target="_blank"
                                                           rel="noreferrer noopener">
                                                            <img width={20} height={20}
                                                                 src={`${process.env.PUBLIC_URL}/images/twitter.svg`}
                                                                 alt="Twitter logo"/>
                                                        </a>
                                                    </Grid>

                                                    <Grid item={true}>
                                                        <a className="social-link uppercase padding-vertical-small"
                                                           href="https://"
                                                           target="_blank"
                                                           rel="noreferrer noopener">
                                                            <img width={20} height={20}
                                                                 src={`${process.env.PUBLIC_URL}/images/instagram.svg`}
                                                                 alt="Instagram logo"/>
                                                        </a>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item={true} xs={12} md={6}>
                                        <div className="padding-medium">
                                            <div>
                                                <TextField
                                                    name="name"
                                                    fullWidth={true}
                                                    type="text"
                                                    margin="dense"
                                                    onChange={handleChange}
                                                    helperText={error.name}
                                                    label="Name"
                                                    placeholder="Enter name"
                                                    error={error.name}
                                                    value={name}
                                                    variant="outlined"
                                                />
                                            </div>
                                            <div>
                                                <TextField
                                                    name="email"
                                                    fullWidth={true}
                                                    type="email"
                                                    margin="dense"
                                                    onChange={handleChange}
                                                    helperText={error.email}
                                                    label="Email"
                                                    placeholder="Enter email"
                                                    error={error.email}
                                                    value={email}
                                                    variant="outlined"
                                                />
                                            </div>
                                            <div>
                                                <TextField
                                                    name="username"
                                                    fullWidth={true}
                                                    type="text"
                                                    margin="dense"
                                                    onChange={handleChange}
                                                    helperText={error.username}
                                                    label="Username"
                                                    placeholder="Enter username"
                                                    error={error.username}
                                                    value={username}
                                                    variant="outlined"
                                                />
                                            </div>
                                            <div>
                                                <TextField
                                                    name="phone"
                                                    fullWidth={true}
                                                    type="tel"
                                                    margin="dense"
                                                    onChange={handleChange}
                                                    helperText={error.phone}
                                                    label="Phone"
                                                    placeholder="Enter phone number"
                                                    error={error.phone}
                                                    value={phone}
                                                    variant="outlined"
                                                />
                                            </div>
                                            <div>
                                                <TextField
                                                    name="password"
                                                    fullWidth={true}
                                                    type="password"
                                                    margin="dense"
                                                    onChange={handleChange}
                                                    helperText={error.password}
                                                    label="Password"
                                                    placeholder="Enter password"
                                                    error={error.password}
                                                    value={password}
                                                    variant="outlined"
                                                />
                                            </div>

                                            <Grid container={true} spacing={1} alignItems="center">
                                                <Grid item={true} xs={10}>
                                                    <TextField
                                                        name="confirmPassword"
                                                        fullWidth={true}
                                                        type="password"
                                                        margin="dense"
                                                        onChange={handleConfirmPasswordChange}
                                                        helperText={error.confirmPassword}
                                                        label="Confirm Password"
                                                        placeholder="Confirm password"
                                                        error={error.confirmPassword}
                                                        value={confirmPassword}
                                                        variant="outlined"
                                                    />
                                                </Grid>
                                                <Grid item={true} xs={1}>
                                                    <Button
                                                        size="large"
                                                        variant="text"
                                                        onClick={handleVisibilityChange}
                                                        startIcon={visible ? <VisibilityOff/> : <Visibility/>}/>
                                                </Grid>
                                                <Button
                                                    className={classes.button}
                                                    variant="outlined"
                                                    fullWidth={true}
                                                    size="large"
                                                    onClick={handleSubmit}>
                                                    Sign Up
                                                </Button>

                                                <Button
                                                    variant="text"
                                                    fullWidth={true} size="small" onClick={handleSubmit}>
                                                    <Link to="/login" className="nav-link">
                                                        Already a member?
                                                    </Link>
                                                </Button>
                                            </Grid>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default SignUpPage;
