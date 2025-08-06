// fb-header-spoof.js
// Spoof device model and iOS version only if FBLC=en_US is found in User-Agent

let headers = $request.headers;

if (headers && headers["User-Agent"] && headers["User-Agent"].includes("FBLC/en_US")) {
    let ua = headers["User-Agent"];

    // Replace FBDV (device)
    ua = ua.replace(/FBDV\/[^;]+;/, "FBDV/iPhone15,3;");

    // Replace FBSV (iOS version)
    ua = ua.replace(/FBSV\/[^;]+;/, "FBSV/16.3.1;");

    // Return modified headers
    $done({ headers: { ...headers, "User-Agent": ua } });
} else {
    $done({});
}