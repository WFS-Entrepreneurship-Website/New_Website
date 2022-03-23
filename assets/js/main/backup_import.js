/*
var Imported_Data = {
    "Sheets": {
        "url": "https://script.google.com/macros/s/AKfycbzv9xghckHaLccdSatUqdAoDYSr5VEaJi_FtCr-yEAdV2m1gqSSR2jnxrDHuMmIQ-os/exec",
        "data": null
    },
    "IG": {
        "url": "https://script.google.com/macros/s/AKfycbzv9xghckHaLccdSatUqdAoDYSr5VEaJi_FtCr-yEAdV2m1gqSSR2jnxrDHuMmIQ-os/exec",
        "data": null
    }
}

function is_finished() {
    for (var key in Imported_Data) {
        console.log(Imported_Data[key]["data"])
        return false;
        if (typeof Imported_Data[key]["data"] == Promise || typeof Imported_Data[key]["data"] == null) {
            return false;
        }
    }
    return true;
}

function backup_fetch_data(url, key, last = false) {
    console.log(last);
    fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else if(response.status === 404) {
            return Promise.reject('error 404');
        } else {
            return Promise.reject('some other error: ' + response.status);
        }
    })
    .then(data => {
        Imported_Data[key]["data"] = data;
    })
    .then(() => {
        if (!(is_finished() || last)) {
            backup_main(Imported_Data);
        }
    })
    //.catch(error => console.log(error));
}

function backup_start() {
    var keys = Object.keys(Imported_Data);
    
    for (var key in keys) {
        this_try_num = try_num;
        
        while (this_try_num > 0) {
            if (this_try_num == 1 && keys.indexOf(keys[key]) == keys.length - 1) {
                setTimeout(function() {
                    backup_fetch_data(Imported_Data[keys[key]]["url"], keys[key], last = true);
                }, delayInMilliseconds);
                
            } else {
                setTimeout(function() {
                    backup_fetch_data(Imported_Data[keys[key]]["url"], keys[key]);
                }, delayInMilliseconds);

            }

            this_try_num -= 1;
        }
    }
}
*/

/*
function backup_fetch_data(url) {
    fetch(url, {

    })
    .then(response => {
        if (response.ok) {
            return response.json()
        } else if(response.status === 404) {
            return Promise.reject('error 404')
        } else {
            return Promise.reject('some other error: ' + response.status)
        }
    })
    .then(data => backup_main(data))
}

function backup_main(data) {
    console.log("data");
    console.log(data);
}



window.onload = function() {
    backup_fetch_data("https://randomuser.me/api/")
}

//https://cors-anywhere.herokuapp.com/
//https://kennethscoggins.medium.com/how-to-make-a-fetch-proxy-in-javascript-to-avoid-cors-errors-with-apis-2b93c4ed0e78
*/

/*
const loginUser = async () => {
    let asyncReq = await fetch('http://localhost:3000/assets/php/proxy.php', {

    });

    console.log('[BEFORE JSON]', asyncReq);
    let responseJson = await asyncReq.json();
    console.log('[JSON]', responseJson);
};

loginUser();
*/