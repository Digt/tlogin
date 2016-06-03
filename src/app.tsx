import * as React from "react";
import * as config from "./config";

import {SocialView} from "./components/social/view";
import {LoginView} from "./components/login/view";
import {CertificateView} from "./components/certificate/view";

export interface IAppProps { }

export interface IAppState {
    config?: config.IConfig;
    login?: boolean;
    social?: boolean;
    certificate?: boolean;
}

export class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);

        this.state = {
            config: config.global,
            login: !!config.global.login,
            social: !!config.global.social,
            certificate: !!config.global.certificate
        };
    }

    componentWillMount() {
    }

    renderItems() {
        let views: JSX.Element[] = [];
        for (let i in this.state.config) {
            switch (i) {
                case "login":
                    views.push(<LoginView name = {this.state.config.login.name} />);
                    break;
                case "certificate":
                    views.push(<CertificateView name = {this.state.config.certificate.name} />);
                    break;
                case "social":
                    views.push(<SocialView config={this.state.config.social} />);
                    break;
            }
        }

        return views;
    }

    render() {
        return (
            <div className="view-contaier">
                {this.renderItems() }
            </div>
        );
    }

}