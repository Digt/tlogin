const TRUSTED_HOST = "https://net.trusted.ru";

const trusted: ITrusted = {
    host: TRUSTED_HOST,
    auth: `${TRUSTED_HOST}/idp/sso/authorize`,
    login: `${TRUSTED_HOST}/trustedapp/app/oauth`
};

export interface IConfig {
    redirect_uri: string;
    client_id: string;
    trusted?: ITrusted;
    social?: ISocial;
    login?: ILogin;
}

export interface ITrusted {
    host: string;
    auth: string;
    login: string;
}

export interface ILogin {
    name?: string;
}

export interface ISocial {
    providers: string[];
    /**
     * big | medium | small
     */
    size?: string;
    /**
     * square | rounded | circle
     */
    form?: string;
}

function getConfig() {
    let config;

    try {
        config = JSON.parse(document.getElementById("trusted-login").getAttribute("data-config"));
    }
    catch (e) {
        throw new Error(`Trusted: can not get configuration from 'trusted-login'`);
    }

    config.trusted = trusted;

    return config;
}

export let global: IConfig = getConfig();
