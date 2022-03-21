//// Define variables ////
var try_num = 1
var delayInMilliseconds = 500;





//// Import Functions: ////
// Variables:
//     "Sheets"
//     "IG"

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



//// Main Function ////

function main(data) {
    console.log("data:\n");
    console.log(data);
    
    
    //// Mutator Calls ////
    document.getElementsByClassName("counter")[0].innerText = Age_Of_Club();
}






//// Accessor Functions: ////

// Calculate the age of the club:
function Age_Of_Club() {
    var date1 = new Date("11/1/2020"); // Date Format = (MM/DD/YYYY)
    var date2 = new Date();
        
    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();
        
    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    
    // The | 0 causes a bitwise conversion... Returning only integers
    return Difference_In_Days | 0;
}

// Find number of IG posts:
function Instagram_Post_Count() {
    
}



//// Initiator ////
window.onload = function() {
    start();
}