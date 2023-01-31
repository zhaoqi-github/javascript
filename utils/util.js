// https://mp.weixin.qq.com/s/FJJG3zXNjjDJlA2YC2ulbQ

// 翻转字符串
const reverse1 = str => str.split(' ').reverse().join(' ');
reverse1('this is reverse'); //'reverse is this'

const reverse2 = str => str.split('').reverse().join('');
reverse2('this is reverse'); //'esrever si siht'


// 生成随机十六进制
const randomHexColor1 = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const randomHexColor2 = () => `#${(Math.random()*0xffffff<<0).toString(16).padEnd(6, "0")}`;
console.log(randomHexColor1());
console.log(randomHexColor2());


// 获取选定的文本 https://www.runoob.com/jsref/met-win-getselection.html
window.getSelection().toString();


// 查询某天是否为工作日
const isWeekday = (date) => date.getDay() % 6 !== 0;
console.log(isWeekday(new Date('2023-01-06')));


// 两日期之间相差的天数  86400000ms === 24h
const dayDiff = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
console.log(dayDiff(new Date('2022-11-26'), new Date('2022-11-25')));


// 将 RGB 转换为十六进制
const rgbToHex = (r, g, b) =>   "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
rgbToHex(255, 255, 255); 


// 计算数组平均值
const average = (arr) => arr.reduce((a, b) => a + b) / arr.length;
average([1,9,18,36]) //16

// 日期填充 https://juejin.cn/post/7032077549404586015#heading-2
const date = new Date(2023,0,6); //0-11: 1-12
const year = date.getFullYear();
const month = date.getMonth() + 1;
const ddate = date.getDate()

const res = year + '-' + `${month}`.padStart(2, "0") + '-' + `${ddate}`.padStart(2, "0")
console.log(res) // 2023-01-06
