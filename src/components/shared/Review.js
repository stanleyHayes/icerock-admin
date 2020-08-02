import React from "react";
import {Avatar, Card, CardContent, CardHeader, Divider} from "@material-ui/core";
import {Rating} from "@material-ui/lab";

const Review = ({review}) => {

    const {user, createdAt, feedback, rating} = review;

    return (
        <Card elevation={1} raised={true} variant="elevation">
            {
                user.avatar ? (
                    <CardHeader
                        avatar={<Avatar src={user.avatar}/>}
                        title={user.name}
                        subheader={new Date(createdAt).toDateString()}/>
                ) : (
                    <Avatar title={`${user.name[0][0]} ${user.name[1][0]}`}/>
                )
            }
            <Divider variant="fullWidth"/>
            <CardContent>
                <p className="text font-size-small grey-text">{feedback}</p>
                <Rating
                    readOnly={true}
                    value={rating}
                    max={5}
                    precision={.1}
                    size="large"/>
            </CardContent>
        </Card>
    )
}

export default Review;
