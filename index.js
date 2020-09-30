const axios = require('axios')

const url = "https://dummyapi.io/data/api/user"
const safe = require('./safe');
// Load the API-Key
config = safe.config

// Get Request with the URL and API Key
axios.get(url, config).then(resp=>
    {
        names = resp.data.data

        for (const name in names){
            // name is index 0,1 ...
            // names[name] to access a particular name
            console.log(names[name].email)
        }
    }
    );