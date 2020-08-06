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

function ForgotPasswordPage() {

    const [email, setEmail] = useState("");

    const [error, setError] = useState("");

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleForgotPasswordClick(event) {
        event.preventDefault();
        if (!email) {
            setError("Email required");
            return;
        } else {
            setError(null);
        }
        setEmail(null);
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
            <Container>
                <Grid className={classes.container} container={true} justify="center" alignItems="center">
                    <Grid item={true} xs={12} md={4}>
                        <form>
                            <Card elevation={2} raised={true} variant="elevation">
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
                                        Forgot Password
                                    </p>

                                    <p className="grey-text font-size-small">Email</p>
                                    <TextField
                                        placeholder="Enter Email"
                                        name="email"
                                        fullWidth={true}
                                        onChange={handleEmailChange}
                                        value={email}
                                        required={true}
                                        margin="dense"
                                        helperText={"This field is required"}
                                        variant="outlined"
                                        type="text"
                                        label="Email"
                                        color="primary"
                                        error={error}
                                    />

                                    <p className="grey-text font-size-medium font-weight-bold text-align-center">
                                        Enter email associated with your account
                                    </p>

                                    <Button
                                        className={classes.button}
                                        color="primary"
                                        variant="outlined"
                                        size="large"
                                        fullWidth={true}
                                        onClick={handleForgotPasswordClick}>
                                        Send Email
                                    </Button>
                                </CardContent>
                            </Card>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ForgotPasswordPage;
