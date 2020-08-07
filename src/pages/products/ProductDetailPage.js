import React from "react";
import Layout from "../../components/layout/Layout";
import {
    CardContent,
    Container,
    Grid,
    Card,
    CardMedia,
    makeStyles,
    Button,
    LinearProgress,
    TextField
} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import Review from "../../components/shared/Review";
import ImageGallery from "react-image-gallery";
import {connect} from "react-redux";
import {Add, Edit, Search} from "@material-ui/icons";
import {Link} from "react-router-dom";

function ProductDetailPage({product, loading}) {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                minHeight: "100vh",
                backgroundColor: "#eeeeee",
                paddingTop: 30,
                paddingBottom: 30
            },
            noReviews: {
                minHeight: "30vh"
            },
            editButton: {
                paddingTop: 6,
                paddingBottom: 6,
                backgroundColor: "darkblue",
                fontFamily: "Poppins",
                fontWeight: "bold",
                color: "white"
            }
        }
    });

    const classes = useStyles();


    const {reviews, name, status, summary, averageRating, price, image, images, purchases} = product;

    return (
        <Layout>
            <div className={classes.container}>
                {loading && <LinearProgress variant="query"/>}
                <Container>
                    <Grid container={true} alignItems="center" justify="center">
                        <Grid item={true} xs={4} md={4}>
                            <p className="uppercase margin-vertical-large sub-header">Orders</p>
                        </Grid>

                        <Grid item={true} xs={8} md={3}>
                            <Button
                                className={classes.editButton}
                                size="small"
                                variant="outlined"
                                fullWidth={true} endIcon={<Edit />}>
                                <Link
                                    className="text-decoration-none white-text font-weight-bold"
                                    to={`/products/${name}/edit`}>
                                    Edit Product
                                </Link>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container={true} justify="center">
                        <Grid item={true} xs={12} md={7}>
                            <Card elevation={1} variant="elevation" raised={true}>
                                <CardMedia component="img" src={image}/>
                                <CardContent>
                                    <p className="font-size-small font-weight-bold text uppercase">Name</p>
                                    <p className="font-size-medium text">{name}</p>

                                    <p className="font-size-small font-weight-bold text uppercase">Description</p>
                                    <p className="font-size-medium text">{summary}</p>

                                    <p className="font-size-small font-weight-bold text uppercase">Status</p>
                                    <p className="font-size-medium text">{status}</p>

                                    <p className="font-size-small font-weight-bold text uppercase">Price</p>
                                    <p className="font-size-medium text">{price} GHS</p>

                                    <div className="text-align-center center-vertical-align">
                                        <Rating
                                            readOnly={true}
                                            value={averageRating}
                                            max={5}
                                            precision={.1}
                                            size="small"
                                        />

                                        <span className="separator">|</span>

                                        <span className="font-size-small text">{reviews.length} reviews</span>

                                        <span className="separator">|</span>

                                        <span className="font-size-small text">{purchases.length} purchases</span>
                                    </div>


                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Grid container={true} spacing={2} justify="center">
                        <Grid item={true} xs={12} md={7}>
                            <p className="uppercase margin-vertical-large sub-header">Product Gallery</p>
                        </Grid>

                        <Grid item={true} xs={12} md={7}>
                            <ImageGallery
                                autoPlay={true}
                                items={images}
                                infinite={true}
                                showBullets={true}
                                useTranslate3D={true}
                                thumbnailPosition="bottom"
                                showFullscreenButton={true}
                                showThumbnails={true}
                            />
                        </Grid>
                    </Grid>

                    <Grid container={true} spacing={2} justify="center">
                        <Grid item={true} xs={12} md={7}>
                            <p className="uppercase margin-vertical-large sub-header">Product Reviews</p>
                        </Grid>
                        {
                            (!reviews.length) ? (
                                <Grid container={true}>
                                    <Grid item={true} xs={12} className={classes.noIssues}>
                                        <p className="text-align-center uppercase font-size-small font-weight-bold">
                                            No product reviews
                                        </p>
                                    </Grid>
                                </Grid>
                            ) : (
                                reviews.map((review, index) => {
                                    return (
                                        <Grid item={true} xs={12} md={6} xl={4} key={index}>
                                            <div className="shadow">
                                                <Review review={review}/>
                                            </div>
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
        product: state.products.product,
        loading: state.products.loading
    }
}

export default connect(mapStateToProps)(ProductDetailPage);
