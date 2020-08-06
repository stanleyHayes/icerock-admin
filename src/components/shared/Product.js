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

    const getProductAvatar = (name) =>{
        switch (name){
            case "Sachet Water":
                return `${process.env.PUBLIC_URL}/images/sachet.svg`;

            case "Bottled Water":
                return `${process.env.PUBLIC_URL}/images/water-bottle.svg`;

            case "Gallon Water":
                return `${process.env.PUBLIC_URL}/images/gallon.svg`;

            default:
                return `${process.env.PUBLIC_URL}/images/sachet.svg`;
        }
    }

    return (
        <div className="shadow">
            <Card
                elevation={0}
                raised={false}
                variant="outlined">
                <CardHeader title={name} subheader={status}
                            avatar={<Avatar src={getProductAvatar(name)}/>}/>
                <CardMedia component="img" src={image}/>
                <CardContent>
                    <div className="center-vertical-align">
                        <span className="uppercase font-weight-bold grey-text font-size-medium">{price}GHS</span>
                        <span className="separator">|</span>
                        <span className="inline-block">
                        <Rating
                            readOnly={true}
                            value={averageRating}
                            max={5}
                            precision={.1}
                            size="large"/>
                    </span>
                    </div>
                </CardContent>
                <Divider variant="fullWidth"/>
                <CardActions>
                    <Button className={classes.button} fullWidth={true} endIcon={<Info className={classes.icon}/>}
                            size="small">
                        <Link className="nav-link" to={`/products/${name}`}>
                            View Product Details
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Product;
