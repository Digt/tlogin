import * as React from "react";
import * as config from "../../config";
import * as classNames from "classnames";

import {ButtonSocial} from "./button";

interface ISocialViewProps {
    config: config.ISocial;
}

interface ISocialViewState {
    size?: string;
    form?: string;
}

export class SocialView extends React.Component<ISocialViewProps, ISocialViewState> {

    constructor(props: ISocialViewProps) {
        super(props);

        this.state = {
            size: props.config.size || "big",
            form: props.config.form || "square",
        };
    }

    render() {
        let that = this;
        let providers = this.props.config.providers.map(function(value: string, index: number) {
            return [<ButtonSocial label={value} key={index}/>, <span className="splitter"/>];
        });

        let cn = classNames(["view-social", this.state.size, this.state.form]);

        return (
            <div className={cn}>
                {providers}
            </div>
        );
    }

}