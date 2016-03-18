import * as React from "react";
import * as config from "./config";

import {SocialView} from "./components/social/view";
import {LoginView} from "./components/login/view";

export interface IAppProps { }

export interface IAppState {
    config?: config.IConfig;
    login?: boolean;
    social?: boolean;
}

export class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);

        this.state = {
            config: config.global,
            login: !!config.global.login,
            social: !!config.global.social
        };
    }

    componentWillMount() {
    }

    render() {
        return (
            <div className="view-contaier">
                {(this.state.login) ? <LoginView name = {this.state.config.login.name} /> : null}
                {(this.state.social) ? <SocialView config={this.state.config.social} /> : null}
            </div>
        );
    }

}