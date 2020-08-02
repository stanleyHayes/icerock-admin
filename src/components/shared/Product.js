import React from "react";
import {Card, CardActions, CardContent, CardMedia, Button, Divider, CardHeader, Avatar} from "@material-ui/core";
import {Info} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import {Rating} from "@material-ui/lab";

const Product = ({product}) => {

    const useStyles = makeStyles(theme => {
        return {
            button: {
                fontWeight: "bold",
                fontFamily: "Poppins",
                color: "darkblue"
            },
            icon: {
                color: "darkblue"
            }
        }
    });

    const classes = useStyles();

    const {price, averageRating, name, image, status} = product;
    return (
        <Card raised={true} elevation={1} variant="elevation">
            <CardHeader title={name} subheader={status} avatar={<Avatar src={`${process.env.PUBLIC_URL}/images/water.svg`} />} />
            <CardMedia component="img" src={image} />
            <CardContent>
                <div className="center-vertical-align">
                    <span className="uppercase font-weight-bold grey-text font-size-small">{price}GHS</span>
                    <span className="separator">|</span>
                    <span className="inline-block">
                        <Rating
                            readOnly={true}
                            value={averageRating}
                            max={5}
                            precision={.1}
                            size="small"/>
                    </span>

                </div>

            </CardContent>
            <Divider variant="fullWidth" />
            <CardActions>
                <Button className={classes.button} fullWidth={true} endIcon={<Info className={classes.icon} />} size="small">
                    <Link className="nav-link" to={`/products/${name}`}>
                        View Product Details
                    </Link>
                </Button>
            </CardActions>
        </Card>
    )
}

export default Product;
