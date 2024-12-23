
// Function to extract the base URL from the current URL

export default function getBaseUrl() {
    var currentUrl = window.location.href;
    // Extract the protocol and hostname
    var baseUrl = new URL(currentUrl).origin;
    return baseUrl;
}