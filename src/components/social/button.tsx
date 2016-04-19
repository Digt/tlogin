import * as React from "react";
import * as config from "../../config";
import {Widget} from "../../widget";

interface IButtonSocialPropsEx {
    label: string;
}

type IButtonSocialProps = React.HTMLProps<IButtonSocialPropsEx>

interface IButtonSocialState {
}

export class ButtonSocial extends React.Component<IButtonSocialProps, IButtonSocialState> {
    constructor(props: IButtonSocialProps) {
        super(props);
    }

    onClick() {
        let uri = this.props.label === "trustednet" ? config.global.trusted.login : config.global.trusted.auth;
        let link = `${uri}?auth_type=${this.props.label}&response_type=code&scope=userprofile&redirect_uri=${config.global.redirect_uri}&client_id=${config.global.client_id}`;
        Widget.open(link);
    }

    render() {

        return <span className={`icon-${this.props.label}`} style={{ textDecoration: "none" }} onClick={this.onClick.bind(this) }></span>;
    }
}