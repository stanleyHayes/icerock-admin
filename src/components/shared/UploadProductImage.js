import React, {useState} from "react";
import {CardContent, Card, CardActions, Divider, Button, CardMedia, makeStyles} from "@material-ui/core";
import {AddAPhoto, CloudUpload} from "@material-ui/icons";

const UploadProductImage = () => {

    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleFileSelected = event => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                setPreview(reader.result);
            }
        }
        reader.readAsDataURL(event.target.files[0]);
        setFile(event.target.files[0]);
    }

    const handleFileUploadClick = (event) => {

        event.preventDefault();

        const formData = new FormData();
        formData.append("product-image", file);
    }

    const useStyles = makeStyles(theme => {
            return {
                selectImageButton: {
                    color: "white",
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                    backgroundColor: "darkblue",
                    paddingTop: 4,
                    paddingBottom: 4,
                    marginBottom: 16,
                    '&:hover': {
                        color: "darkblue"
                    }
                },
                uploadImageButton:
                    {
                        marginBottom: 16,
                        color: "white",
                        fontWeight: "bold",
                        fontFamily: "Poppins",
                        backgroundColor: "darkgreen",
                        paddingTop: 4,
                        paddingBottom: 4,
                        '&:hover': {
                            color: "darkgreen"
                        }
                    }
                ,
                icon: {
                    color: "white",
                    '&:hover': {
                        color: "darkgreen"
                    }
                },
                input: {
                    display: "none"
                }
            }
        })
    ;

    const classes = useStyles();


    return (
        <div>
            {
                (!file) ? (
                    <div>
                        <input onChange={handleFileSelected} className={classes.input} type="file"
                               accept="image/*" id="product-image"/>
                        <label htmlFor="product-image">
                            <Button
                                component="div"
                                fullWidth={true}
                                color="primary"
                                variant="outlined"
                                className={classes.selectImageButton}
                                endIcon={<AddAPhoto className={classes.icon}/>}>
                                Select
                            </Button>
                        </label>
                    </div>

                ) : (
                    <Button
                        onClick={handleFileUploadClick}
                        fullWidth={true}
                        color="primary"
                        variant="outlined"
                        className={classes.uploadImageButton}
                        endIcon={<CloudUpload className={classes.icon}/>}>
                        Upload
                    </Button>
                )
            }
            <Card elevation={0} raised={true} variant="outlined">
                <CardMedia
                    component="img"
                    src={preview || `${process.env.PUBLIC_URL}/images/hero-image-big.jpg`}/>
                <CardContent>
                    {
                        (file) ? (
                            <p className="text-align-center text font-weight-bold font-size-small">
                                {file.name}
                            </p>
                        ) : (
                            <p className="text-align-center font-weight-bold text uppercase font-size-small">
                                Select Main Image For Product
                            </p>
                        )
                    }
                </CardContent>
            </Card>
        </div>
    )
}

export default UploadProductImage;
