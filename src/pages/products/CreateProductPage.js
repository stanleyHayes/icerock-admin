import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {
    Container,
    Grid,
    Stepper,
    StepLabel,
    Step,
    MobileStepper,
    Button, makeStyles
} from "@material-ui/core";
import CreateProductInfo from "../../components/shared/CreateProductInfo";
import UploadProductImage from "../../components/shared/UploadProductImage";
import UploadProductMedia from "../../components/shared/UploadProductMedia";

function CreateProductPage() {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                minHeight: "83vh",
                backgroundColor: "#eeeeee",
                paddingTop: 30,
                paddingBottom: 30
            },
            nextButton: {
                fontFamily: "Poppins",
                color: "white",
                fontWeight: "bold",
                backgroundColor: "darkgreen"
            },
            prevButton: {
                fontFamily: "Poppins",
                color: "white",
                fontWeight: "bold",
                backgroundColor: "darkblue"
            }
        }
    });

    const classes = useStyles();


    const [step, setStep] = useState(0);

    const handleNextClick = () => {
        setStep(step => step + 1);
    }

    const handlePreviousClick = () => {
        setStep(step => step - 1);
    }

    const getStepComponent = (step) => {
        switch (step) {
            case 0:
                return <CreateProductInfo/>;
            case 1:
                return <UploadProductImage />;
            case 2:
                return <UploadProductMedia />;
            default:
                return <CreateProductInfo/>
        }
    }


    return (
        <Layout>
            <div className={classes.container}>
                <Container>
                    <Grid container={true} alignItems="center" justify="center">
                        <Grid item={true} xs={12} md={7}>
                            <p className="uppercase margin-vertical-large sub-header">New Product</p>
                        </Grid>
                    </Grid>

                    <Grid container={true} justify="center" spacing={3}>
                        <Grid item={true} xs={12} md={7}>
                            <Stepper activeStep={step} elevation={1} variant="elevation" orientation="horizontal">
                                <Step>
                                    <StepLabel>Info</StepLabel>
                                </Step>

                                <Step>
                                    <StepLabel>Image</StepLabel>
                                </Step>

                                <Step>
                                    <StepLabel>Media</StepLabel>
                                </Step>
                            </Stepper>
                        </Grid>


                        <Grid item={true} xs={12} md={7}>
                            {getStepComponent(step)}
                        </Grid>


                        <Grid item={true} xs={12} md={7}>
                            <MobileStepper
                                position="bottom"
                                activeStep={step}
                                backButton={
                                    <Button
                                        className={classes.prevButton}
                                        variant="outlined"
                                        size="large"
                                        disabled={step === 0}
                                        onClick={handlePreviousClick}>
                                        Previous
                                    </Button>
                                } nextButton={
                                <Button
                                    className={classes.nextButton}
                                    variant="outlined"
                                    size="large"
                                    disabled={step === 2}
                                    onClick={handleNextClick}>
                                    { "Next"}
                                </Button>
                            } steps={3}
                                variant="text"
                                elevation={1}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Layout>
    )
}

export default CreateProductPage;
