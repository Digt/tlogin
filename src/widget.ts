export class Widget {
    static open(link: string, width: number = 475, height: number = 475) {
        // Fixes dual-screen position                         Most browsers      Firefox
        let dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : (screen as any).left;
        let dualScreenTop = window.screenTop !== undefined ? window.screenTop : (screen as any).top;

        let w = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        let h = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        let left = ((w / 2) - (width / 2)) + dualScreenLeft;
        let top = ((h / 2) - (height / 2)) + dualScreenTop - 200;
        let f = window.open(link, "Login", `scrollbars=yes, toolbar=no, location=no, menubar=no, width=${width}, height=${height}, top=${top}, left=${left}`);


        // Puts focus on the newWindow
        if (window.focus) {
            f.focus();
        }
        // function poolColosed(){
        //     if (!f.closed){
        //         setTimeout(poolColosed, 200);
        //     }
        //     else{
        //         document.getElementById("status").textContent="Login success";    
        //     }
        // }
        // poolColosed();
    }
}