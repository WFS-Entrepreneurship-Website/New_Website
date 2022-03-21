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
        /*
        if (typeof Imported_Data[key]["data"] == Promise || typeof Imported_Data[key]["data"] == null) {
            return false;
        }
        */
    }
    return true;
}

function fetch_data(url, key, last = false) {
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
            main(Imported_Data);
        }
    })
    //.catch(error => console.log(error));
}

function start() {
    var keys = Object.keys(Imported_Data);
    
    for (var key in keys) {
        this_try_num = try_num;
        
        while (this_try_num > 0) {
            if (this_try_num == 1 && keys.indexOf(keys[key]) == keys.length - 1) {
                setTimeout(function() {
                    fetch_data(Imported_Data[keys[key]]["url"], keys[key], last = true);
                }, delayInMilliseconds);
                
            } else {
                setTimeout(function() {
                    fetch_data(Imported_Data[keys[key]]["url"], keys[key]);
                }, delayInMilliseconds);

            }

            this_try_num -= 1;
        }
    }
}