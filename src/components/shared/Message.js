import React from "react";
import {Avatar, Card, CardContent, CardHeader, Divider} from "@material-ui/core";

const Message = ({message}) => {

    const {user, createdAt, subject, description} = message;

    return (
        <div className="shadow">
            <Card
                elevation={0}
                raised={false}
                variant="outlined">
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
                    <p className="text font-size-small grey-text uppercase font-weight-bold">{subject}</p>
                    <p className="text font-size-small grey-text">{description}</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message;
