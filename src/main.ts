import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./app";

// function createByHtml(html: string): Node {
//     let div = document.createElement("div");
//     div.innerHTML = html;
//     return div.childNodes[0];
// }

// function setLink() {
//     const CSS_NAME = "trusted-css";
//     const CSS_URL = "css/tlogin.css";
//     let head = document.querySelector("head");
//     let link: any = document.getElementById(`${CSS_NAME}`);
//     if (!link) {
//         link = createByHtml(`<link id="${CSS_NAME}" rel="stylesheet" href="${CSS_URL}">`);
//         if (head.childNodes[0]) {
//             head.insertBefore(link, head.childNodes[0]);
//         }
//         else {
//             head.appendChild(link);
//         }
//     }
// };

try {
    // setLink();
    ReactDOM.render(React.createElement(App), document.getElementById("trusted-login"));
}
catch (e) {
    console.error(e);
    document.getElementById("trusted-login").textContent = "Ошибка";
    throw e;
}