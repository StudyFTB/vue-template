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
    function IdentityCodeValid(value) { 
        var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",
            32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",
            45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",
            62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
        var tip = "";
        var pass= true;
        
        if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
            tip = "身份证号格式错误";
            pass = false;
        }else if(!city[code.substr(0,2)]){
            tip = "地址编码错误";
            pass = false;
        }else{
            //18位身份证需要验证最后一位校验位
            if(code.length == 18){
                code = code.split('');
                //∑(ai×Wi)(mod 11)
                //加权因子
                var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
                //校验位
                var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
                var sum = 0;
                var ai = 0;
                var wi = 0;
                for (var i = 0; i < 17; i++)
                {
                    ai = code[i];
                    wi = factor[i];
                    sum += ai * wi;
                }
                var last = parity[sum % 11];
                if(parity[sum % 11] != code[17]){
                    tip = "校验位错误";
                    pass =false;
                }
            }
        }
        // if(!pass) alert(tip);
        return pass;
    }
    
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