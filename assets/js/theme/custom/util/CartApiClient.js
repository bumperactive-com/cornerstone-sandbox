export default class CartApiClient {
    getCart(route) {
        return fetch(route, {
            method: "GET",
            credentials: "same-origin",
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(result => {
            return result;
        })
        .catch(error => {
            console.error("Error fetching cart:", error);
            throw error;
        });
    }
}

