function domainName(url) {
  //alt
  // return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i);
  let startReg0 = /(http:\/\/)/gi;
  let startReg1 = /(https:\/\/)/gi;
  let startReg2 = /(www\.)/gi;

  startReg0.exec(url);
  let next = url.slice(startReg0.lastIndex);

  startReg1.exec(next);
  let after = next.slice(startReg1.lastIndex);

  startReg2.exec(after);
  let final = after.slice(startReg2.lastIndex);

  let toCut = final.indexOf(".");
  return final.slice(0, toCut);
}

console.log(domainName("http://google.com")); //google
console.log(domainName("https://google.co.jp")); //google
console.log(domainName("www.google.co.th")); //google
console.log(domainName("https://hyphen-site.org")); //hyphen-site
