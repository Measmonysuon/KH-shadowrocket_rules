// spoof-fb.js
// Works with Loon Script Module - Spoof Device Info for Facebook API

let body = $request.body;
let url = $request.url;

try {
    if (body) {
        let json = JSON.parse(body);

        // Only spoof if targeting Facebook API domains
        const shouldSpoof = [
            "graph.facebook.com",
            "api.facebook.com",
            "b-api.facebook.com",
            "b-graph.facebook.com",
            "gateway.facebook.com"
        ].some(domain => url.includes(domain));

        if (shouldSpoof) {
            // Spoof device model and iOS version only
            json.device_model = "iPhone15,3";
            json.ios_version = "16.3.1";

            // Optional: spoof locale if present
            if (json.locale !== undefined) {
                json.locale = "en_US";
            }
        }

        body = JSON.stringify(json);
    }
} catch (err) {
    console.log("Facebook spoof failed:", err);
}

$done({ body });