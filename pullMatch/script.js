// have fun future developer trying to figure out how this works :)))
async function getapi(eventId) {
        let api_url = 
          "https://www.thebluealliance.com/api/v3/event/" + eventId + "/matches?X-TBA-Auth-Key=IDfrcwNnw87od77An1oZ4TlPYYEjyZloF98XRZx5jE7FsRKMnr06rnOBYX2KUKIO";
        
        const response = await fetch(api_url);

        var data = await response.json();
        var qmData = []
        var bots = []
        for(let i=0; i<data.length; i++){
            if(data[i].key.includes("qm")){
                qmData.push(data[i])
            }
        }
        data = []
        for(let i=0; i<qmData.length; i++){
            var match = qmData[i].match_number;
            data[match-1] = qmData[i];
        }
        for(let i=0; i<data.length; i++){
            
            let b = data[i].alliances.blue.team_keys
            let r = data[i].alliances.red.team_keys
            for(j=0; j<3; j++){
                b[j] = b[j].replaceAll("frc", "")
                bots.push(b[j])
                
            }
            for(j=0; j<3; j++){
                r[j] = r[j].replaceAll("frc", "")
                bots.push(r[j])
                
            }
            
        }
        
        return new Promise((resolve, reject)=>{
            resolve(bots);
        })
    
    
    }



    //how to call (e.g. CA San Diego Regional 2022)

//getapi("2022caph").then((data) => {
//    console.log(data)
//})
