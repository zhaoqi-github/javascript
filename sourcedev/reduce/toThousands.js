function toThousands(num) {
  num = num.toString()
  let result = ''
  // 每3位分割
  while (num.length > 3) {
    // 从后往前添加','，num.substring(num.length - 3)
    result = ',' + num.substring(num.length - 3) + result
    num = num.substring(0, num.length - 3)
  }
  result = num + result
  return result
}
console.log(toThousands(1234567)) // 1,234,567
console.log(toThousands(123456)) // 123,456