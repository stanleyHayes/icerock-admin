import React from "react";
import {Card, CardContent, Divider, CardHeader, Avatar} from "@material-ui/core";
import {Info} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";


const Information = ({info}) => {

    const useStyles = makeStyles(theme => {
        return {
            button: {
                fontWeight: "bold",
                fontFamily: "Poppins",
                color: "darkblue"
            },
            icon: {
                color: "darkblue"
            },
            urgent: {
                color: "red"
            },
            normal: {
                color: "green"
            }
        }
    });

    const classes = useStyles();


    const {title, description, status, createdAt} = info;
    return (
        <Card elevation={1} raised={true} variant="elevation">
            <CardHeader
                avatar={<Avatar>
                    <Info
                        className={status === "urgent" ? classes.urgent : classes.normal}
                    />
                </Avatar>}
                title={status} subheader={new Date(createdAt).toDateString()}/>
            <Divider variant="fullWidth"/>
            <CardContent>
                <p className="uppercase font-size-small font-weight-bold grey-text">{status}</p>
                <p className="font-size-medium font-weight-bold grey-text">{title}</p>
                <p className="font-size-small grey-text">{description}</p>
            </CardContent>
        </Card>
    )
}

export default Information;
