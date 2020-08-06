import React from "react";
import {Card, CardContent, Divider, CardHeader, CardActions, Button, Avatar, Chip} from "@material-ui/core";
import {ArrowForward} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";

const Order = ({order}) => {

    const useStyles = makeStyles(theme => {
        return {
            icon: {
                color: "darkblue"
            },
            link: {
                color: "darkblue",
                fontWeight: "bold"
            },
            button: {
                color: "darkblue",
                fontWeight: "bold",
                fontFamily: "Poppins"
            },
            chip: {
                marginLeft: 4,
                marginRight: 4,
                marginTop: 4,
                marginBottom: 4
            }
        }
    });

    const classes = useStyles();

    const {orderID, _id, createdAt, products, status, owner, avatar} = order;

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

                <CardHeader
                    avatar={<Avatar src={avatar}/>}
                    title={owner.name}
                    subheader={new Date(createdAt).toDateString()}
                />

                <Divider variant="fullWidth"/>

                <CardContent>

                    <p className="font-weight-bold font-size-small uppercase text">Order ID</p>
                    <p className="font-size-medium text">{orderID}</p>

                    <p className="font-size-medium text font-size-small">{products.length} Items</p>
                    {
                        products.map((product, index) => {
                            return (
                                <Chip
                                    className={classes.chip}
                                    key={index}
                                    size="small"
                                    color="primary"
                                    icon={<Avatar src={getProductAvatar(product.name)} /> } label={product.name} variant="outlined" />
                            )
                        })
                    }
                    <p className="font-weight-bold font-size-small uppercase text">Status</p>
                    <p className="font-size-medium text">{status}</p>
                </CardContent>
                <Divider variant="fullWidth"/>
                <CardActions>
                    <Button className={classes.button} endIcon={<ArrowForward className={classes.icon} />} size="small" fullWidth={true} variant="text">
                        <Link className="text-decoration-none" to={`/orders/${orderID}`}>
                            View Order
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Order;
