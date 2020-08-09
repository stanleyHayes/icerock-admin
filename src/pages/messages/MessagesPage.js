import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Container, Grid} from "@material-ui/core";
import Order from "../../components/shared/Order";
import {Pagination} from "@material-ui/lab";
import {connect} from "react-redux";
import Message from "../../components/shared/Message";

const MessagesPage = ({messages, loading}) => {

    const [page, setPage] = useState(1);

    const handlePageChange = (event, page) => {
        setPage(page);
    }

    return (
        <Layout>
            <div className="padding-vertical-huge">
                <Container>
                    <Grid container={true} spacing={3} alignItems="center">
                        <Grid item={true} xs={12} md={6} lg={5}>
                            <p className="uppercase margin-vertical-large sub-header">Messages</p>
                        </Grid>

                        <Grid container={true} spacing={3}>
                            {
                                (!messages.length) ? (
                                    <Grid container={true} item={true} xs={12} alignItems="center" justify="center">
                                        <Grid item={true}>
                                            <p className="uppercase font-weight-bold font-size-medium grey-text">
                                                No Messages Available
                                            </p>
                                        </Grid>
                                    </Grid>
                                ) : (
                                    messages.map((message, index) => {
                                        return (
                                            <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                                <Message message={message}/>
                                            </Grid>
                                        )
                                    })
                                )
                            }
                        </Grid>
                    </Grid>

                    <div className="padding-vertical-large">
                        <Container>
                            <Grid container={true} justify="center">
                                <Grid item={true} xs={12} md={6}>
                                    <Pagination
                                        variant="outlined"
                                        count={5}
                                        defaultPage={1}
                                        page={page}
                                        size="medium"
                                        onChange={handlePageChange}
                                    />
                                </Grid>
                            </Grid>
                        </Container>
                    </div>

                </Container>
            </div>
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        messages: state.messages.messages,
        loading: state.orders.loading
    }
}

export default connect(mapStateToProps)(MessagesPage);

