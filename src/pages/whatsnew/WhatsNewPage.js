import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Button, Container, Grid, makeStyles} from "@material-ui/core";
import {connect} from "react-redux";
import Information from "../../components/shared/Information";
import {Add} from "@material-ui/icons";
import CreateInfo from "../../components/shared/CreateInfo";

function WhatsNewPage({news}) {

    const useStyles = makeStyles({
        divider: {
            marginTop: 16,
            marginBottom: 16
        },
        createButton: {
            paddingTop: 6,
            paddingBottom: 6,
            backgroundColor: "darkblue",
            fontFamily: "Poppins",
            fontWeight: "bold",
            color: "white"
        }
    });

    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleAddClick = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Layout>
            <div className="padding-vertical-huge">
                <Container>
                    <Grid container={true} spacing={3} justify="space-between" alignItems="center">
                        <Grid item={true} xs={9}>
                            <p className="uppercase margin-vertical-large sub-header">What's new</p>
                        </Grid>
                        <Grid item={true} xs={3}>
                            <Button
                                onClick={handleAddClick}
                                className={classes.createButton}
                                size="small"
                                variant="outlined"
                                endIcon={<Add />}>
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={3}>
                        {
                            (!news.length) ? (
                                <Grid container={true} item={true} xs={12} alignItems="center" justify="center">
                                    <Grid item={true}>
                                        <p className="uppercase font-weight-bold font-size-medium grey-text">
                                            No Information Available
                                        </p>
                                    </Grid>
                                </Grid>
                            ) : (
                                news.map((info, index) => {
                                    return (
                                        <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                            <Information info={info}/>
                                        </Grid>
                                    )
                                })
                            )
                        }
                    </Grid>

                    <CreateInfo open={open} handleClose={handleClose} />

                </Container>
            </div>
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        news: state.news.news,
        loading: state.news.loading
    }
}

export default connect(mapStateToProps) (WhatsNewPage);
