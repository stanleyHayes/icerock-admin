import React, {useState} from "react";
import {
    Container,
    Grid,
    Card,
    CardContent,
    TextField,
    Button,
    Avatar
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Layout from "../../components/layout/Layout";
import {Visibility, VisibilityOff} from "@material-ui/icons";

function ForgotPasswordPage() {


    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [confirmPassword, setConfirmPassword] = useState("");
    const [visible, setVisibility] = useState(false);

    const {name, currentPassword, newPassword} = user;

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


    const useStyle = makeStyles({
        container: {
            minHeight: "100vh"
        },
        divContainer: {
            backgroundColor: "#2b3137",
        },
        button: {
            backgroundColor: "darkblue",
            marginTop: 20,
            marginBottom: 20,
            paddingTop: 16,
            paddingBottom: 16,
            fontFamily: "Poppins",
            fontWeight: "bold",
            color: "white"
        },
        logo: {
            marginTop: 8,
            marginBottom: 8,
            width: 75,
            height: 75
        },
        textButton: {
            fontFamily: "Poppins",
            color: "darkblue",
            fontWeight: "bold",
            textDecoration: "none"
        }
    });

    const classes = useStyle();

    return (
        <div className={classes.divContainer}>
            <Layout>
                <Container>
                    <Grid className={classes.container} container={true} justify="center" alignItems="center">
                        <Grid item={true} xs={12} md={6}>
                            <form>
                                <div className="shadow">
                                    <Card elevation={0} raised={false} variant="outlined">
                                        <CardContent>
                                            <Grid container={true} justify="center" alignItems="center">
                                                <Grid item={true}>
                                                    <Avatar className={classes.logo}
                                                            src={`${process.env.PUBLIC_URL}/images/hero-image-big.jpg`}/>
                                                </Grid>
                                            </Grid>

                                            <p className="text-align-center grey-text font-weight-bold font-size-large">
                                                Ice Rock
                                            </p>

                                            <p className="text-align-center grey-text font-weight-bold font-size-medium">
                                                Change Password
                                            </p>

                                            <div>
                                                <TextField
                                                    required={true}
                                                    name="currentPassword"
                                                    fullWidth={true}
                                                    type={visible ? "text" : "password"}
                                                    margin="dense"
                                                    onChange={handleChange}
                                                    helperText={error.currentPassword}
                                                    label="Current Password"
                                                    placeholder="Current password"
                                                    error={error.currentPassword}
                                                    value={currentPassword}
                                                    variant="outlined"
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    required={true}
                                                    name="newPassword"
                                                    fullWidth={true}
                                                    type={visible ? "text" : "password"}
                                                    margin="dense"
                                                    onChange={handleChange}
                                                    helperText={error.confirmPassword}
                                                    label="New Password"
                                                    placeholder="New password"
                                                    error={error.newPassword}
                                                    value={newPassword}
                                                    variant="outlined"
                                                />
                                            </div>

                                            <Grid container={true} spacing={1} alignItems="center">
                                                <Grid item={true} xs={10}>
                                                    <TextField
                                                        name="confirmPassword"
                                                        fullWidth={true}
                                                        type={visible ? "text" : "password"}
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
                                            </Grid>

                                            <Button
                                                className={classes.button}
                                                color="primary"
                                                variant="outlined"
                                                size="large"
                                                fullWidth={true}
                                                onClick={handleSubmit}>
                                                Change Password
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </form>
                        </Grid>
                    </Grid>
                </Container>
            </Layout>
        </div>
    )
}

export default ForgotPasswordPage;
