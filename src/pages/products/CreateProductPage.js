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

function CreateProductPage() {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                minHeight: "83vh",
                backgroundColor: "#eeeeee",
                paddingTop: 30,
                paddingBottom: 30
            }
        }
    });

    const classes = useStyles();


    const [step, setStep] = useState(0);

    const handleNextClick = () => {
        setStep(step => step + 1);
    }

    const handlePreviousClick = () => {
        setStep(step => step + 1);
    }

    const getStepComponent = (step) => {
        switch (step) {
            case 0:
                return <CreateProductInfo/>;
            case 1:
                return "";
            case 2:
                return "";
            default:
                return <CreateProductInfo/>
        }
    }


    return (
        <Layout>
            <div className={classes.container}>
                <Container>
                    <Grid container={true} alignItems="center">
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
                                position="static"
                                activeStep={step}
                                backButton={
                                    <Button
                                        disabled={step === 0}
                                        onClick={handlePreviousClick}>
                                        Previous
                                    </Button>
                                } nextButton={
                                <Button
                                    onClick={handleNextClick}>
                                    {step === 2 ? "Submit" : "Next"}
                                </Button>
                            } steps={3}
                                variant="progress"
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
