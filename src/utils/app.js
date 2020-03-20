import cookie from "cookie_js";

const adminToKen = "admin_toKen";

export function getToKen(){
    return cookie.get(adminToKen);
}

export function setToKen(toKen){
    return cookie.set(adminToKen, toKen);
}

export function removeToKen(toKen){
    return cookie.remove(adminToKen);
}