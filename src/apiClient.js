import $ from 'jquery'
let apiClient = {};

//TODO fetch from env
// apiClient.serverUrl = 'https://newgate.wudoka.it/wp-json/acf/v3'
apiClient.serverUrl = 'https://newgate.wudoka.it/index.php/wp-json/wp/v2'
apiClient.collections = {
    services: [],
    people: [],
    industries: [],
    socials: [],
}
apiClient.state = false;

apiClient.init = () => {
    return new Promise((resolve, reject) => {
        //TODO refactor to react-rest-api plugin

        Promise.all([apiClient.getCollection('/services'),
            apiClient.getCollection('/industries'),
            apiClient.getCollection('/people'),
            apiClient.getCollection('/socials'),

        ]).then((responses) => {

            $.extend(apiClient.collections, apiClient.processResponseCollections(responses))

            apiClient.state = true;
            resolve(apiClient.collections);

        }).catch((err) => {
            console.log(err)
            apiClient.state = false;

            reject(err)
        })

    })



}
apiClient.processResponseCollections = (responses) => {

    let collections = {}
    responses.forEach((response, index) => {
        console.log(response)
        let items = response.map((item) => {
            return item.acf
        })
        switch (index) {
            case 0: //services
                collections.services = response.sort(function(a, b) {
                    return a.acf.service_id - b.acf.service_id;
                });
                break;
            case 1: //industries
                collections.industries = items
                break;
            case 2: //people
                collections.people = items.sort(function(a, b) {
                    return a.order - b.order;
                });
                break;
            case 3: //socials
                collections.socials = items
                break;
            default:
                break;
        }
    })


    return collections;
}

apiClient.getCollection = (endpointEnd) => {
    return new Promise((resolve, reject) => {
        const settings = {
            'cache': false,
            // 'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url":apiClient.serverUrl + endpointEnd + '?_embed&per_page=20',
            "method": "GET",
            "headers": {
                // "accept": "application/json",
                // "Access-Control-Allow-Origin":"*"
            }
        }
  
        $.ajax(settings).done( (response) =>  {
            resolve(response)
  
        }).fail(() => {
            reject(new Error(`[ERROR] DB get ${endpointEnd}`))

        })

    })
}

export default apiClient;