import * as React from "react";
import { Switch, Route } from 'react-router-dom';
import { LoginPage } from "./login/loginPage";
import RegisterPage from "./register/registerPage";
import { LoggedInRouter } from "./LoggedInRouter"
import AnimePage from "./anime/animePage";
import { connect } from "react-redux"


class AppRouterRedux extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        }
    }
    componentDidUpdate(prevProps) {
        console.log("update", this.props)
        if (prevProps != this.props)
            this.setState({ user: this.props.user })
    }
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    {this.state.user && <LoggedInRouter />}
                </Switch>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export const AppRouter = connect(mapStateToProps)(AppRouterRedux)