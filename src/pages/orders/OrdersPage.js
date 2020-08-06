import React from "react";
import Layout from "../../components/layout/Layout";
import {Container, Grid} from "@material-ui/core";
import {connect} from "react-redux";
import Order from "../../components/shared/Order";

function OrdersPage({orders}) {

    return (
        <Layout>
            <div className="padding-vertical-huge">
                <Container>
                    <Grid container={true} spacing={3}>
                        <Grid item={true} xs={12}>
                            <p className="uppercase margin-vertical-large sub-header">Orders</p>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={3}>
                        {
                            (!orders.length) ? (
                                <Grid container={true} item={true} xs={12} alignItems="center" justify="center">
                                    <Grid item={true}>
                                        <p className="uppercase font-weight-bold font-size-medium grey-text">
                                            No Orders Available
                                        </p>
                                    </Grid>
                                </Grid>
                            ) : (
                                orders.map((order, index) => {
                                    return (
                                        <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                            <Order order={order}/>
                                        </Grid>
                                    )
                                })
                            )
                        }
                    </Grid>
                </Container>
            </div>
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        orders: state.orders.orders,
        loading: state.orders.loading
    }
}

export default connect(mapStateToProps) (OrdersPage);
