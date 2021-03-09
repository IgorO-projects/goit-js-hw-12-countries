const BASE_URL = 'https://restcountries.eu/rest/v2/name/';

function fetchCountries (name) {
    return fetch(`${BASE_URL}${name}`)
    .then(response => {
        return new Promise((resolve, reject) => {
            if (!response.ok) {
                reject();
            } else {
                resolve(response.json());
            }
        })
        // return response.json();
    });
}

export default fetchCountries;