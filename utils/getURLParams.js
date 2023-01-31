function getParameters(URL) {
  const params = URL.split("?")[1];
  if (params) {
      const res1 = decodeURI(params).replace(/&/g, '","');
      const res2 = res1.replace(/=/g, '":"');
      const res3 = `{"${res2}"}`;
      /*   console.log(params)
        console.log(res1) */
      console.log("res2",res2) //q":"js+md","newwindow":"1
      console.log("res3",res3) //{"q":"js+md","newwindow":"1"}
      const res = JSON.parse(res3);
      return res;
  }
  return null;
}

let res = getParameters("https://www.google.com.hk/search?q=js+md&newwindow=1");
console.log(res);