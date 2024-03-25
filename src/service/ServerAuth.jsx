import axios from 'axios';

function ServerAuth() {

    const apiKey = "my-api-key";
    const orgID = "your-organization-id";
    const apiEndpoint = `https://test1-api.rescuegroups.org/v5/public/animals/search/available?orgID=${orgID}`;

    fetch(apiEndpoint, {
    method: "GET",
    headers: {
        Authorization: apiKey,
        "Content-Type": "application/json",
    },
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));



    return (
    <div>ServerAuth. 
        <p>_place data here_</p>


        ---- API Resourses:

    -- https://api.rescuegroups.org/v5/public/docs // no API keys provided for now, pending for the devs team to reply
    </div>
    )
}

export default ServerAuth


// Let's break this code down. First, we defined our API key and the organization ID we want to retrieve the data for. Then, we constructed the API endpoint with the endpoint path and the organization ID. Finally, we used the fetch API to make a GET request to the endpoint and included the API key in the Authorization header.

// In the then statements, we convert the response from JSON to JavaScript Object format and log it to the console. We also added a catch statement to log any errors that may occur.



        {/* API Resourses:

    -- https://api.rescuegroups.org/v5/public/docs // no API keys provided for now, pending for the devs team to reply */}