import React, {useState} from "react";
import {Container, Grid, Card, TextField, Button, Avatar} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";
import {Link} from "react-router-dom";

const SignInPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            button: {
                paddingTop: 16,
                paddingBottom: 16,
                fontFamily: "Poppins",
                fontWeight: "bold",
                backgroundColor: "darkblue",
                color: "white",
                marginTop: 16,
                marginBottom: 16,

            },
            textButton: {
                paddingTop: 4,
                paddingBottom: 4,
                fontFamily: "Poppins",
                fontWeight: "bold",
                color: "darkblue"
            }, root: {
                minHeight: "85vh",
                display: "flex",
                alignItems: "center"
            },
            marginVerticalMedium: {
                marginBottom: 16,
                marginTop: 16
            },
            logo: {
                width: 75,
                height: 75
            }
        }
    });

    const classes = useStyles();

    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [visible, setVisibility] = useState(false);

    const {email, password} = user;

    const handleSubmit = event => {
        event.preventDefault();

        if (!email) {
            setError({...error, email: "Name field required"});
            return;
        } else {
            setError({...error, email: null});
        }

        console.log(user);
    }

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const handleVisibilityChange = () => {
        setVisibility(!visible);
    }
    return (
        <div className={`${classes.root} dark-grey padding-vertical-huge`}>
            <Container>
                <Grid container={true} justify="center">
                    <Grid item={true} xs={12} md={8}>
                        <Card elevation={1} raised={true} variant="elevation" square={true}>
                            <div>
                                <Grid container={true} spacing={2}>
                                    <Grid item={true} xs={12} md={6}>
                                        <div className="d-flex flex-column height-100 info padding-horizontal-medium">
                                            <div>
                                                <p className="text-align-center font-size-large font-weight-bold white-text">Ice
                                                    Rock</p>
                                            </div>
                                            <div className="flex-grow-1 center-vertical">
                                                <p className="text-align-center font-size-medium font-weight-bold white-text">
                                                    Welcome Back
                                                </p>
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
                                    <Grid item={true} xs={12} md={6} className={classes.marginVerticalMedium}>
                                        <Grid container={true} justify="center" alignItems="center">
                                            <Grid item={true}>
                                                <Avatar className={classes.logo}
                                                        src={`${process.env.PUBLIC_URL}/images/hero-image-big.jpg`}/>
                                            </Grid>
                                        </Grid>
                                        <div className="padding-medium ">

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

                                            <Button
                                                className={classes.textButton}
                                                variant="text"
                                                fullWidth={true} size="small">
                                                <Link to="/auth/forgot-password" className={`${classes.textButton} nav-link`}>
                                                    Forgot Password?
                                                </Link>
                                            </Button>

                                            <Grid container={true} spacing={1} alignItems="center">
                                                <Grid item={true} xs={10}>
                                                    <div>
                                                        <TextField
                                                            name="password"
                                                            fullWidth={true}
                                                            type={visible ? "text": "password"}
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
                                                    Sign In
                                                </Button>

                                                <Button
                                                    className={classes.textButton}
                                                    variant="text"
                                                    fullWidth={true} size="small">
                                                    <Link to="/auth/register" className={`${classes.textButton} nav-link`}>
                                                        Not a member?
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

export default SignInPage;
