import * as React from "react";
import * as config from "../../config";
import {Widget} from "../../widget";
import * as classNames from "classnames";

interface ICertificateViewProps extends config.ICertificate {
}

interface ICertificateViewState {
    name: string;
}

export class CertificateView extends React.Component<ICertificateViewProps, ICertificateViewState> {

    constructor(props: ICertificateViewProps) {
        super(props);

        this.state = {
            name: props.name || "Войти"
        };
    }

    onClick() {
        const link = `${config.global.trusted.login}?auth_type=certificate&response_type=code&scope=userprofile&redirect_uri=${config.global.redirect_uri}&client_id=${config.global.client_id}`;
        Widget.open(link);
    }

    render() {
        let cn = classNames(["view-certificate"]);

        return (
            <div className={cn} onClick={this.onClick.bind(this) }>{this.state.name}</div>
        );
    }

}