import React from "react";
import Layout from "../../components/layout/Layout";
import {Button, Container, Grid, makeStyles} from "@material-ui/core";
import {connect} from "react-redux";
import Product from "../../components/shared/Product";
import {Add} from "@material-ui/icons";
import {Link} from "react-router-dom";

function ProductsPage({products}) {

    const useStyles = makeStyles({
        divider: {
            marginTop: 16,
            marginBottom: 16
        },
        createButton: {
            paddingTop: 6,
            paddingBottom: 6,
            backgroundColor: "darkblue",
            fontFamily: "Poppins",
            fontWeight: "bold",
            color: "white"
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <div className="padding-vertical-huge">
                <Container>
                    <Grid container={true} spacing={3} justify="center" alignItems="center">
                        <Grid item={true} xs={4} md={8}>
                            <p className="uppercase margin-vertical-large sub-header">Products</p>
                        </Grid>
                        <Grid item={true} xs={8} md={4}>
                            <Button
                                fullWidth={true}
                                className={classes.createButton}
                                size="small"
                                variant="outlined"
                                endIcon={<Add />}>
                                <Link className="text-decoration-none white-text font-weight-bold" to="/product/new">
                                    Create Product
                                </Link>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={3}>
                        {
                            (!products.length) ? (
                                <Grid container={true} item={true} xs={12} alignItems="center" justify="center">
                                    <Grid item={true}>
                                        <p className="uppercase font-weight-bold font-size-medium grey-text">
                                            No Products Available
                                        </p>
                                    </Grid>
                                </Grid>
                            ) : (
                                products.map((product, index) => {
                                    return (
                                        <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                            <Product product={product}/>
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
        products: state.products.products,
        loading: state.products.loading
    }
}

export default connect(mapStateToProps) (ProductsPage);
