import * as React from "react";
import { Switch, Route } from 'react-router-dom';
import HomePage from "./home/homePage";
import Layout from "./common/Layout"
import AnimePage from "./anime/animePage";
import { connect } from "react-redux"

export const NoMatch = ({ location }) => (
    <div className="card bg-dark">
        <div className="card-body">
            <div style={{ height: "-webkit-fill-available", backgroundImage: "url('../../img/saitama404.jpg')" }}>
            </div>
        </div>
    </div>
);

class LoggedInRouterRedux extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/anime/:id" component={AnimePage} />
                    <Route component={NoMatch} />
                </Switch>
            </Layout>
        )
    }
}
const mapStateProps = state => {
    return {
        user: state.user
    }
}
export const LoggedInRouter = connect(mapStateProps)(LoggedInRouterRedux);