import React from "react";
import Layout from "../../components/layout/Layout";
import {Container, Grid} from "@material-ui/core";
import {connect} from "react-redux";
import Information from "../../components/shared/Information";

function WhatsNewPage({news}) {

    return (
        <Layout>
            <div className="padding-vertical-huge">
                <Container>
                    <Grid container={true} spacing={3} justify="center">
                        <Grid item={true} xs={12}>
                            <p className="uppercase margin-vertical-large sub-header">What's new</p>
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
