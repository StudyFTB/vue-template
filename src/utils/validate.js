/* 
*邮箱验证
*/
export function mail(mail){ //true是邮箱正确
    const mailReg = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/;
    return mailReg.test(mail);
}

/* 
*手机号验证
 */
export const phone = (str) => {
    const patrn = /^1[3456789]\d{9}$/;
    return patrn.test(str);
}

/* 
*特殊字符
 */
export const special = (str) => { //true是还有特殊字符
    const patrn = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/im;
    return patrn.test(str);
}

/* 
*只能有字母和数字
 */
export const onlyLetterNum = (str) => {
    const patrn = /^[0-9a-zA-Z]+$/;
    return patrn.test(str);
}

/* 
*身份证验证
 */
export const valiNoIdCard = (value) => { //为true = 所有的身份证都匹配不上
    //大陆身份证号码校验
    const patter=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
            
    //香港身份证号码校验
    //开头一位或两位大写字母，然后接上6-10位数字，最后一位数字或字母校验
    const patterHongKong =/^[A-Z]{1,2}[0-9]{6,10}[0-9A-Z]$/;
    
    //澳门身份证号码校验
    //开头数字1或者5或者7，然后接上6位数字，再接上一位数字或者大写字母校验
    const patterAoMen =/^[1|5|7][0-9]{6}[0-9A-Z]$/;
    
    //台湾身份证号码校验
    //开头一位小写或者大写字母，接上9位数字
    const patterTaiWan =/^[a-zA-Z][0-9]{9}$/;
    return !patter.test(value)&&!patterHongKong.test(value)&&!patterAoMen.test(value)&&!patterTaiWan.test(value);
}