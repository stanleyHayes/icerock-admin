import React from "react";
import {CardContent, Card, CardActions, Divider, Button} from "@material-ui/core";

const UploadProductMedia = () => {

    return (
        <div>
            <Card elevation={0} raised={true} variant="outlined">
                <CardContent>

                </CardContent>
                <Divider variant="fullWidth" />
                <CardActions>
                    <Button>
                        <input type="file" />
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default UploadProductMedia;
