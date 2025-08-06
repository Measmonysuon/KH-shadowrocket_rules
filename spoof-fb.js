// ua-rewrite.js

const ua = $request.headers['User-Agent'] || "";

if (ua.includes("en_US") || ua.includes("us_US") || ua.includes("Qaau_US")) {
  $request.headers['User-Agent'] = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/21F80 [FBAN/FBIOS;FBDV/iPhone15,2;FBMD/iPhone;FBSN/iOS;FBSV/17.5.1;FBSS/3;FBID/phone;FBLC/en_US;FBOP/5]";
}

$done({ headers: $request.headers });