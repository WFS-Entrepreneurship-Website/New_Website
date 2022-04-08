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
        //"url": "https://wfs-e.herokuapp.com/proxy.php",
        "url": "proxy.php",
        //"url": "http://localhost:3000/proxy.php",
        "data": null
    }
}

function fetch_data(url, data_key, last = false) {
    fetch(url, {
        mode: "cors"
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else if(response.status === 404) {
            return Promise.reject("error 404");
        } else {
            return Promise.reject("some other error: " + response.status);
        }
    })
    .then(data => {
        Imported_Data[data_key]["data"] = data;
        if (last) {
            main(Imported_Data);
        }
    })
    .catch(error => console.log(error));
}

function start() {
    var keys = Object.keys(Imported_Data);
    
    for (var key in keys) {
        /*
        setTimeout(function() {

        }, delayInMilliseconds);
        */
        var pass_key = keys[key];
        
        if (keys.indexOf(pass_key) == keys.length - 1) {
            fetch_data(Imported_Data[pass_key]["url"], pass_key, last = true);
            
        } else {
            fetch_data(Imported_Data[pass_key]["url"], pass_key);

        }
    }
}



//// Main Function ////

function main(data) {
    console.log("data:\n");
    console.log(data);
    
    
    //// Mutator Calls ////
    document.getElementById("days_founded").innerText = Age_Of_Club();
    document.getElementById("instagram_followers").innerText = Instagram_Follower_Count();
    document.getElementById("instagram_posts").innerText = Instagram_Post_Count();
    // IG.data.graphql.user.edge_followed_by.count
    //document.getElementsByClassName("counter")[0].innerText = Age_Of_Club();
}



//// Accessor Functions: ////

// Calculate the age of the club:
function Age_Of_Club() {
    // TODO, change the date to sheets values
    
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
function Instagram_Follower_Count() {
    return Imported_Data.IG.data.graphql.user.edge_followed_by.count
}

function Instagram_Post_Count() {
    return Imported_Data.IG.data.graphql.user.edge_owner_to_timeline_media.count
}




//// Initiator ////
window.onload = function() {
    start();
}


