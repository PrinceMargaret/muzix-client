//for track search
fetch("https://muzixcloud.herokuapp.com/api/search",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        "track": "belever"
})
}).then(res=>res.json())
.then(data=>console.log(data))
.catch(err=>console.log(err))


//get top tracks of a particular artist
fetch("https://muzixcloud.herokuapp.com/api/artistSearch",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        "artist": "arjit singh"
})
}).then(res=>res.json())
.then(data=>console.log(data))
.catch(err=>console.log(err))


//get top track by tag name
fetch("https://muzixcloud.herokuapp.com/api/gettoptracksByTag",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
       
    "tag":"sad"
})
}).then(res=>res.json())
.then(data=>console.log(data))
.catch(err=>console.log(err))




//for top tracks
fetch("https://muzixcloud.herokuapp.com/api/topTracks",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({

        "track": "hum tere bin ab reh nhi skte"
})
}).then(res=>res.json())

.then(data=>console.log(data))
.catch(err=>console.log(err))
//for top albums
let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json"
   }
   
   let bodyContent = JSON.stringify({
       "album":"arjit singh"
   });
   
   fetch("https://muzixcloud.herokuapp.com/api/topAlbums", { 
     method: "POST",
     body: bodyContent,
     headers: headersList
   }).then(function(response) {
     return response.text();
   }).then(function(data) {
     console.log(data);
   })


//tag.getWeeklyChartList
fetch("https://muzixcloud.herokuapp.com/api/weeklyChartList",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({

        "tag":"sad"

    })
}).then(res=>res.json())
.then(data=>console.log(data))
.catch(err=>console.log(err))



//get similar tags

fetch("https://muzixcloud.herokuapp.com/api/getSimilarTags",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({

        "tag":"sad"

    })
}).then(res=>res.json())
.then(data=>console.log(data))
.catch(err=>console.log(err))













