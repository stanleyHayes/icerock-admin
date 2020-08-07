import React from "react";
import {Grid, Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link, useHistory} from "react-router-dom";
import {VerifiedUser, ExitToApp, LockOpen} from "@material-ui/icons";

import "../../App.css";


function DesktopHeader() {

    const useStyles = makeStyles(theme => {
        return {
            logo: {
                height: 50
            },
            logoContainer: {
                textAlign: "center"
            },
            owner: {
                fontWeight: 900
            },
            icon: {
                color: "#777777",
                cursor: "pointer"
            }
        }
    });

    const classes = useStyles();

    const history = useHistory();

    const handleAccountClicked = () => {
        history.push('/account')
    }

    const handleChangePasswordClicked = () => {
        history.push('/auth/change-password')
    }

    const handleLogoutClicked = () => {
        history.push('/auth/login')
    }

    return (
        <Toolbar variant="regular">
            <Grid container={true} justify="center" alignItems="center">

                <Grid item={true} lg={1} container={true}>
                    <Grid item={true}>
                        <Link to="/">
                            <img
                                height="100"
                                width="50"
                                className={`${classes.logo} brand-name`}
                                src={`${process.env.PUBLIC_URL}/logo512.png`}
                                alt="The Pig Empire logo"
                            />
                        </Link>
                    </Grid>
                </Grid>

                <Grid item={true} container={true} lg={7} justify="center" spacing={4}>
                    <Grid item={true}>
                        <Link to="/" className="nav-link uppercase font-size-small font-weight-bold text">
                            Dashboard
                        </Link>
                    </Grid>

                    <Grid item={true}>
                        <Link to="/orders" className="nav-link uppercase font-size-small font-weight-bold text">
                            Orders
                        </Link>
                    </Grid>

                    <Grid item={true}>
                        <Link to="/whats-new" className="nav-link uppercase font-size-small font-weight-bold text">
                            What's new
                        </Link>
                    </Grid>

                    <Grid item={true}>
                        <Link to="/products" className="nav-link uppercase font-size-small font-weight-bold text">
                            Products
                        </Link>
                    </Grid>

                    <Grid item={true}>
                        <Link to="/archive" className="nav-link uppercase font-size-small font-weight-bold text">
                            Archive
                        </Link>
                    </Grid>
                </Grid>

                <Grid item={true} container={true} lg={1} spacing={1} justify="space-around">
                    <Grid item={true}>
                        <VerifiedUser onClick={handleAccountClicked} className={classes.icon}/>
                    </Grid>

                    <Grid item={true} >
                        <LockOpen onClick={handleChangePasswordClicked} className={classes.icon}/>
                    </Grid>

                    <Grid item={true}>
                        <ExitToApp onClick={handleLogoutClicked} className={classes.icon}/>
                    </Grid>
                </Grid>


            </Grid>
        </Toolbar>
    )
}

export default DesktopHeader;
