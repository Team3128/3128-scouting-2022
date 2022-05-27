

let api_url = 
      "https://www.thebluealliance.com/api/v3/event/2022hop/matches?X-TBA-Auth-Key=IDfrcwNnw87od77An1oZ4TlPYYEjyZloF98XRZx5jE7FsRKMnr06rnOBYX2KUKIO";
let numQuals = 125;
let learray = new Array(numQuals+1);
let finaldata = ''
let finalali=[]
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    let datastr = JSON.parse(JSON.stringify(data))
    for(i=0; i<numQuals; i++){
      let ledata = datastr[i]
      let teamR = ledata.alliances.red.team_keys
      let teamB = ledata.alliances.blue.team_keys
      let matchNum = ledata.match_number;
      learray[matchNum] = teamB + "," + teamR;
      learray[matchNum] = learray[matchNum].replaceAll('frc','');
    }
    let bigboy = '';
    for (let bruh = 1; bruh < learray.length; bruh++) {
      bigboy+=learray[bruh];
      bigboy+=",";
    }
    bigboy = bigboy.replaceAll(",", "\n");
    console.log(bigboy)
    

  //console.log(learray);    
}
// Calling that async function


function copy(){
  getapi(api_url);

  
}
  
