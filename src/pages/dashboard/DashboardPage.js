import React from "react";
import Layout from "../../components/layout/Layout";
import {CardContent, Container, Grid, Card, Avatar} from "@material-ui/core";

function DashboardPage() {
    return (
        <Layout>
            <Container>
                <p className="font-weight-bold font-size-large uppercase">Dashboard</p>
                <Grid container={true} spacing={3}>
                    <Grid item={true} xs={12} md={4}>
                        <Card raised={true} elevation={1} variant="elevation">
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <img width="30" height="30" alt="Orders logo"src={`${process.env.PUBLIC_URL}/images/pin.svg`} />
                                    </Grid>
                                </Grid>
                                <p className="uppercase text-align-center font-weight-bold font-size-medium">Messages</p>
                                <p className=" text-align-center font-size-small">5 Messages</p>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item={true} xs={12} md={4}>
                        <Card raised={true} elevation={1} variant="elevation">
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <img width="30" height="30" alt="Orders logo" src={`${process.env.PUBLIC_URL}/images/menu.svg`} />
                                    </Grid>
                                </Grid>
                                <p className="uppercase text-align-center font-weight-bold font-size-medium">Orders</p>
                                <p className=" text-align-center font-size-small">50 Orders</p>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item={true} xs={12} md={4}>
                        <Card raised={true} elevation={1} variant="elevation">
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <img width="30" height="30" alt="Orders logo" src={`${process.env.PUBLIC_URL}/images/review.svg`} />
                                    </Grid>
                                </Grid>
                                <p className="uppercase text-align-center font-weight-bold font-size-medium">Reviews</p>
                                <p className=" text-align-center font-size-small">50 Reviews</p>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default DashboardPage;
