var teamList = [
    {
        "teams": [
          {
            "name": "Egypt",
            "code": "EGY",
            "continent": "Africa",
            "assoc": {
              "key": "egy",
              "name": "Egyptian Football Association",
              "continental": {
                "name": "Confédération Africaine de Football (CAF)",
                "code": "CAF"
              }
            }
          },
          {
            "name": "Morocco",
            "code": "MAR",
            "continent": "Africa",
            "assoc": {
              "key": "mar",
              "name": "Fédération Royale Marocaine de Football",
              "continental": {
                "name": "Confédération Africaine de Football (CAF)",
                "code": "CAF"
              }
            }
          },
          {
            "name": "Tunisia",
            "code": "TUN",
            "continent": "Africa",
            "assoc": {
              "key": "tun",
              "name": "Fédération Tunisienne de Football",
              "continental": {
                "name": "Confédération Africaine de Football (CAF)",
                "code": "CAF"
              }
            }
          },
          {
            "name": "Senegal",
            "code": "SEN",
            "continent": "Africa",
            "assoc": {
              "key": "sen",
              "name": "Fédération Sénégalaise de Football",
              "continental": {
                "name": "Confédération Africaine de Football (CAF)",
                "code": "CAF"
              }
            }
          },
          {
            "name": "Nigeria",
            "code": "NGA",
            "continent": "Africa",
            "assoc": {
              "key": "nga",
              "name": "Nigeria Football Federation",
              "continental": {
                "name": "Confédération Africaine de Football (CAF)",
                "code": "CAF"
              }
            }
          },
          {
            "name": "Japan",
            "code": "JPN",
            "continent": "Asia",
            "assoc": {
              "key": "jpn",
              "name": "Japan Football Association",
              "continental": {
                "name": "Asian Football Confederation (AFC)",
                "code": "AFC"
              }
            }
          },
          {
            "name": "South Korea",
            "code": "KOR",
            "continent": "Asia",
            "assoc": {
              "key": "kor",
              "name": "Korea Football Association",
              "continental": {
                "name": "Asian Football Confederation (AFC)",
                "code": "AFC"
              }
            }
          },
          {
            "name": "Costa Rica",
            "code": "CRC",
            "continent": "Central America",
            "assoc": {
              "key": "crc",
              "name": "Federación Costarricense de Fútbol",
              "continental": {
                "name": "Confederation of North, Central American and Caribbean Association Football (CONCACAF)",
                "code": "CONCACAF"
              }
            }
          },
          {
            "name": "Panama",
            "code": "PAN",
            "continent": "Central America",
            "assoc": {
              "key": "pan",
              "name": "Federación Panameña de Fútbol",
              "continental": {
                "name": "Confederation of North, Central American and Caribbean Association Football (CONCACAF)",
                "code": "CONCACAF"
              }
            }
          },
          {
            "name": "Belgium",
            "code": "BEL",
            "continent": "Europe",
            "assoc": {
              "key": "bel",
              "name": "Koninklijke Belgische Voetbalbond",
              "continental": {
                "name": "Union of European Football Associations (UEFA)",
                "code": "UEFA"
              }
            }
          },
          {
            "name": "Germany",
            "code": "GER",
            "continent": "Europe",
            "assoc": {
              "key": "ger",
              "name": "Deutscher Fußball-Bund",
              "continental": {
                "name": "Union of European Football Associations (UEFA)",
                "code": "UEFA"
              }
            }
          },
          {
            "name": "Spain",
            "code": "ESP",
            "continent": "Europe",
            "assoc": {
              "key": "esp",
              "name": "Real Federación Española de Fútbol",
              "continental": {
                "name": "Union of European Football Associations (UEFA)",
                "code": "UEFA"
              }
            }
          },
          {
            "name": "France",
            "code": "FRA",
            "continent": "Europe",
            "assoc": {
              "key": "fra",
              "name": "Fédération Française de Football",
              "continental": {
                "name": "Union of European Football Associations (UEFA)",
                "code": "UEFA"
              }
            }
          },
          {
            "name": "Portugal",
            "code": "POR",
            "continent": "Europe",
            "assoc": {
              "key": "por",
              "name": "Federação Portuguesa de Futebol",
              "continental": {
                "name": "Union of European Football Associations (UEFA)",
                "code": "UEFA"
              }
            }
          },
          {
            "name": "Denmark",
            "code": "DEN",
            "continent": "Europe",
            "assoc": {
              "key": "den",
              "name": "Dansk Boldspil-Union",
              "continental": {
                "name": "Union of European Football Associations (UEFA)",
                "code": "UEFA"
              }
            }
          },
          {
            "name": "Poland",
            "code": "POL",
            "continent": "Europe",
            "assoc": {
              "key": "pol",
              "name": "Polski Związek Piłki Nożnej",
              "continental": {
                "name": "Union of European Football Associations (UEFA)",
                "code": "UEFA"
              }
            }
          },
          {
            "name": "Sweden",
            "code": "SWE",
            "continent": "Europe",
            "assoc": {
              "key": "swe",
              "name": "Svenska Fotbollförbundet",
              "continental": {
                "name": "Union of European Football Associations (UEFA)",
                "code": "UEFA"
              }
            }
          },
          {
            "name": "Switzerland",
            "code": "SUI",
            "continent": "Europe",
            "assoc": {
              "key": "sui",
              "name": "Association Suisse de Football",
              "continental": {
                "name": "Union of European Football Associations (UEFA)",
                "code": "UEFA"
              }
            }
          },
          {
            "name": "Croatia",
            "code": "CRO",
            "continent": "Europe",
            "assoc": {
              "key": "cro",
              "name": "Hrvatski Nogometni Savez",
              "continental": {
                "name": "Union of European Football Associations (UEFA)",
                "code": "UEFA"
              }
            }
          },
          {
            "name": "Serbia",
            "code": "SRB",
            "continent": "Europe",
            "assoc": {
              "key": "srb",
              "name": "Fudbalski Savez Srbije",
              "continental": {
                "name": "Union of European Football Associations (UEFA)",
                "code": "UEFA"
              }
            }
          },
          {
            "name": "Russia",
            "code": "RUS",
            "continent": "Europe",
            "assoc": {
              "key": "rus",
              "name": "Russian Football Union",
              "continental": {
                "name": "Union of European Football Associations (UEFA)",
                "code": "UEFA"
              }
            }
          },
          {
            "name": "Iceland",
            "code": "ISL",
            "continent": "Europe",
            "assoc": {
              "key": "isl",
              "name": "Knattspyrnusamband Íslands",
              "continental": {
                "name": "Union of European Football Associations (UEFA)",
                "code": "UEFA"
              }
            }
          },
          {
            "name": "England",
            "code": "ENG",
            "continent": "Europe"
          },
          {
            "name": "Iran",
            "code": "IRN",
            "continent": "Middle East",
            "assoc": {
              "key": "irn",
              "name": "Football Federation Islamic Republic of Iran",
              "continental": {
                "name": "Asian Football Confederation (AFC)",
                "code": "AFC"
              }
            }
          },
          {
            "name": "Saudi Arabia",
            "code": "KSA",
            "continent": "Middle East",
            "assoc": {
              "key": "ksa",
              "name": "Saudi Arabian Football Federation",
              "continental": {
                "name": "Asian Football Confederation (AFC)",
                "code": "AFC"
              }
            }
          },
          {
            "name": "Mexico",
            "code": "MEX",
            "continent": "North America",
            "assoc": {
              "key": "mex",
              "name": "Federación Mexicana de Fútbol Asociación",
              "continental": {
                "name": "Confederation of North, Central American and Caribbean Association Football (CONCACAF)",
                "code": "CONCACAF"
              }
            }
          },
          {
            "name": "Australia",
            "code": "AUS",
            "continent": "Pacific",
            "assoc": {
              "key": "aus",
              "name": "Football Federation Australia",
              "continental": {
                "name": "Asian Football Confederation (AFC)",
                "code": "AFC"
              }
            }
          },
          {
            "name": "Argentina",
            "code": "ARG",
            "continent": "South America",
            "assoc": {
              "key": "arg",
              "name": "Asociación del Fútbol Argentino",
              "continental": {
                "name": "Confederación Sudamericana de Fútbol (CONMEBOL)",
                "code": "CONMEBOL"
              }
            }
          },
          {
            "name": "Brazil",
            "code": "BRA",
            "continent": "South America",
            "assoc": {
              "key": "bra",
              "name": "Confederação Brasileira de Futebol",
              "continental": {
                "name": "Confederación Sudamericana de Fútbol (CONMEBOL)",
                "code": "CONMEBOL"
              }
            }
          },
          {
            "name": "Uruguay",
            "code": "URU",
            "continent": "South America",
            "assoc": {
              "key": "uru",
              "name": "Asociación Uruguaya de Fútbol",
              "continental": {
                "name": "Confederación Sudamericana de Fútbol (CONMEBOL)",
                "code": "CONMEBOL"
              }
            }
          },
          {
            "name": "Colombia",
            "code": "COL",
            "continent": "South America",
            "assoc": {
              "key": "col",
              "name": "Federación Colombiana de Fútbol",
              "continental": {
                "name": "Confederación Sudamericana de Fútbol (CONMEBOL)",
                "code": "CONMEBOL"
              }
            }
          },
          {
            "name": "Peru",
            "code": "PER",
            "continent": "South America",
            "assoc": {
              "key": "per",
              "name": "Federación Peruana de Fútbol",
              "continental": {
                "name": "Confederación Sudamericana de Fútbol (CONMEBOL)",
                "code": "CONMEBOL"
              }
            }
          }
        ]
      }
];

var divOfList = document.getElementById("teamList");

for (var key in teamList) {
console.log(teamList[key].teams)

for(var i in teamList[key].teams) {

    console.log(teamList[key].teams[i].assoc.key)
    // creating main div
    var div = document.createElement('div')
    div.setAttribute("class", "list")
    div.setAttribute("key", teamList[key].teams[i].assoc.key)
    // creating user id in a parent
    var divId = document.createElement('div')
    divId.setAttribute("class", 'left-box')
    var spanId = document.createElement('span')
    var spanIdText = document.createTextNode(++i + ":")
    // creating user name in a parent
    var divName = document.createElement('div')
    divName.setAttribute("class", 'center-box')
    var spanName = document.createElement('span')
    var spanNameText = document.createTextNode(teamList[key].teams[i].name)
    //creating a button which is getting detail of sepecific data
    var btn = document.createElement('button')
    btn.setAttribute("onClick", `details(${teamList[key].teams[i].assoc.key})`)
    var btnText = document.createTextNode('Details')
    // creating id in a DOM list
    spanId.appendChild(spanIdText)
    divId.appendChild(spanId)
    div.appendChild(divId)
    // creating name of users in a DOM list
    spanName.appendChild(spanNameText)
    divName.appendChild(spanName)
    div.appendChild(divName)
    // adding button in dom list
    btn.appendChild(btnText)
    div.appendChild(btn)

    divOfList.appendChild(div)
}
    
}
var getDiv = document.getElementById("mainofInfo");
var detailsDiv = document.createElement("div");
detailsDiv.setAttribute("id","detail-box");
getDiv.appendChild(detailsDiv);
var closeHead = document.createElement("div");
closeHead.setAttribute("id","close-head");
detailsDiv.appendChild(closeHead);
var close_btn = document.createElement("button");
close_btn.setAttribute("id", "close-btn")
close_btn.appendChild(document.createTextNode("X"));
close_btn.setAttribute("onClick", "closeTab()")
closeHead.appendChild(close_btn);

function details(el){
    getDiv.style.display = "flex";
    console.log(el)
    for (var x in teamList){
        if (teamList[x].assoc.key === el){
            alert(teamList[x].assoc.key)

        }
    }
}