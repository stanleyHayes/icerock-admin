import React, {useState} from "react";
import {Card, CardActions, Divider, Button, makeStyles, CardMedia, Grid} from "@material-ui/core";
import {AddAPhoto, CloudUpload, Delete} from "@material-ui/icons";

const UploadProductMedia = () => {

    const useStyles = makeStyles(theme => {
        return {
            selectImageButton: {
                color: "white",
                fontWeight: "bold",
                fontFamily: "Poppins",
                backgroundColor: "darkblue",
                paddingTop: 4,
                paddingBottom: 4,
                '&:hover': {
                    color: "darkblue"
                }
            },
            uploadImageButton:
                {
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
                }, '&:active': {
                    color: "darkblue"
                }
            },
            input: {
                display: "none"
            },
            deleteImageButton: {
                color: "white",
                fontWeight: "bold",
                fontFamily: "Poppins",
                backgroundColor: "darkred",
                paddingTop: 4,
                paddingBottom: 4,
                '&:hover': {
                    color: "darkred"
                }
            },
            container: {
                marginBottom: 16
            }
        }
    });

    const classes = useStyles();

    const [previews, setPreviews] = useState([]);
    const [images, setImages] = useState([]);

    const handleFileSelected = event => {

        for (let file of event.target.files) {
            setImages(prevState => [...prevState, file]);
        }

        for (let i = 0; i < event.target.files.length; i++) {


            const reader = new FileReader();

            reader.onload = () => {

                if (reader.readyState === 2) {
                    setPreviews(prevState => {
                        return [...prevState, reader.result]
                    });

                }
            }
            reader.readAsDataURL(event.target.files[i]);

        }
    }

    const handleFileUploadClick = (event, index) => {
        // const formData = new FormData();
        // formData.append("product-media", images[index]);
        console.log(index, images[index]);
    }

    const handleRemoveImageClick = (event, index) => {

        const filteredImages = images.filter(image => image.name !== images[index].name);
        const filteredPreviews = previews.filter(preview => preview !== previews[index]);
        setPreviews(filteredPreviews);
        setImages(filteredImages);
    }


    return (
        <div>
            <div className="margin-vertical-large">
                <input
                    onChange={handleFileSelected}
                    type="file"
                    className={classes.input}
                    accept="image/*"
                    multiple={true}
                    id="product-media"/>
                <label className="display-block" htmlFor="product-media">
                    <Button
                        className={`${classes.selectImageButton} display-block`}
                        component="div"
                        variant="text"
                        fullWidth={true}
                        size="large"
                        endIcon={<AddAPhoto/>}>
                        Select Media
                    </Button>
                </label>
            </div>
            <Grid container={true} spacing={3} className={classes.container}>
                {
                    (previews.length) ? (
                        <Grid item={true} xs={12}>
                            <p className="text text-align-center uppercase font-weight-bold margin-vertical-large">
                                {images.length} images selected
                            </p>
                        </Grid>
                    ) : null
                }

                {
                    (previews.length) ? (
                        previews.map((preview, index) => {
                            return (
                                <Grid key={index} item={true} xs={12} md={6}>
                                    <div className="shadow">
                                        <Card elevation={0} raised={true} variant="outlined">
                                            <CardMedia component="img" src={preview}/>
                                            <Divider variant="fullWidth"/>
                                            <CardActions>
                                                <Button
                                                    onClick={(e) => handleFileUploadClick(e, index)}
                                                    fullWidth={true}
                                                    color="primary"
                                                    variant="outlined"
                                                    className={classes.uploadImageButton}
                                                    endIcon={<CloudUpload className={classes.icon}/>}>
                                                    Upload
                                                </Button>

                                                <Button
                                                    onClick={(e) => handleRemoveImageClick(e, index)}
                                                    fullWidth={true}
                                                    color="primary"
                                                    variant="outlined"
                                                    className={classes.deleteImageButton}
                                                    endIcon={<Delete className={classes.icon}/>}>
                                                    Remove
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </div>
                                </Grid>
                            )
                        })
                    ) : (
                        <Grid item={true} xs={12}>
                            <p className="text text-align-center uppercase font-weight-bold margin-vertical-large">
                                No Product Media Selected
                            </p>
                        </Grid>
                    )
                }
            </Grid>
        </div>
    )
}

export default UploadProductMedia;
