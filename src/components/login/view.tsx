import * as React from "react";
import * as config from "../../config";
import {Widget} from "../../widget";
import * as classNames from "classnames";

interface ILoginViewProps extends config.ILogin {
}

interface ILoginViewState {
    name: string;
}

export class LoginView extends React.Component<ILoginViewProps, ILoginViewState> {

    constructor(props: ILoginViewProps) {
        super(props);

        this.state = {
            name: props.name || "Войти"
        };
    }

    onClick() {
        const link = `${config.global.trusted.auth}?auth_type=trustednet&response_type=code&scope=userprofile&redirect_uri=${config.global.redirect_uri}&client_id=${config.global.client_id}`;
        Widget.open(link);
    }

    render() {
        let cn = classNames(["view-login"]);

        return (
            <div className={cn} onClick={this.onClick.bind(this) }>{this.state.name}</div>
        );
    }

}