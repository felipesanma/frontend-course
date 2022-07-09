const axios = require('axios').default;
url = "https://cloudping.info/"

const resp = axios.get(url)
    .then(response => response);

console.log(resp.status)