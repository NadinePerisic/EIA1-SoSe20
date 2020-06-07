var namer: number = 6035.6;
var samer: number = 1261.5;
var afr: number = 1235.5;
var asia: number = 16274.1;
var aus: number = 2100.5;
var eur: number = 4209.3;
var eur08: number = 4965.7;
var gesamt: number = eur + afr + samer + namer + asia + aus;
var proz1: number = gesamt * 0.01;
var eurorel: number = eur / proz1;
var eurov: number = eur08 * 0.01;
var eurov2: number = eur08 - eur;
var eurov3: number = eurov2 / eurov;
var afr08: number = 1028;
var samer08: number = 1132.6;
var asia08: number = 12954.7;
var namer08: number = 6600.4;
var aus08: number = 1993;
var afrrel: number = afr / proz1;
var asiarel: number = asia / proz1;
var ausrel: number = aus / proz1;
var samerrel: number = samer / proz1;
var namerrel: number = namer / proz1;
var namerv: number = namer08 * 0.01;
var namerv2: number = namer08 - namer;
var namerv3: number = namerv2 / namerv;
var asiav: number = asia08 * 0.01;
var asiav2: number = asia08 - asia;
var asiav3: number = asiav2 / asiav;
var samerv: number = samer08 * 0.01;
var samerv2: number =  samer08 - samer;
var samerv3: number = samerv2 / samerv;
var ausv: number =  aus08 * 0.01;
var ausv2: number = aus08 - aus;
var ausv3: number = ausv2 / ausv;
var afrv: number = afr08 * 0.01;
var afrv2: number = afr08 - afr;
var afr3: number = afrv2 / afrv;



function namerfunction(){
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#p1").innerHTML = "Emission absolute of North America in 2018";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h1e").innerHTML = "Carbon Dioxide Emissions in North America";
    document.querySelector("#h2e").innerHTML = namer.toFixed(2);
    document.querySelector("#h3e").innerHTML = namerrel.toFixed(2) + "%";
    document.querySelector("#h4e").innerHTML = namerv3.toFixed(2) + "%";
    document.querySelector("#h5e").innerHTML = namerv2.toFixed(2) + "Kg"
    document.querySelector("div.chart")?.setAttribute("style", "height: 19%");
    document.querySelector("div.prz").innerHTML = "19%";

}

function samerfunction(){
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#h1e").innerHTML = "Carbon Dioxide Emissions in South America";
    document.querySelector("#p1").innerHTML = "Emission absolute of South America in 2018";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h2e").innerHTML = samer.toFixed(2);
    document.querySelector("#h3e").innerHTML = samerrel.toFixed(2) + "%";
    document.querySelector("#h4e").innerHTML = samerv3.toFixed(2) + "%";
    document.querySelector("#h5e").innerHTML = samerv2.toFixed(2) + "Kg"
    document.querySelector("div.chart")?.setAttribute("style", "height: 4%");
    document.querySelector("div.prz").innerHTML = "4%";

    
    console.log("Die Emission von Südamerika ist : "  + samer + "kg C02");
    console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit :  " + samerrel + "%" );
    console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + samerv3 + "% verändert "  );
    console.log("2018 im Vergleich zu 2008 sind das" + samerv2 + "kg C02" );
    console.log("______________________________________________________" );


}

function afrfunction(){
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#h1e").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector("#p1").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h2e").innerHTML = afr.toFixed(2);
    document.querySelector("#h3e").innerHTML = afrrel.toFixed(2) + "%";
    document.querySelector("#h4e").innerHTML = afrv3.toFixed(2) + "%";
    document.querySelector("#h5e").innerHTML = afrv2.toFixed(2) + "Kg"
    document.querySelector("div.chart")?.setAttribute("style", "height: 4%");
    document.querySelector("div.prz").innerHTML = "4%";


console.log("Die Emission von Afrika ist : "  + afr + "kg C02");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit :  " + afrrel + "%" );
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + afrv3 + "% verändert "  );
console.log("2018 im Vergleich zu 2008 sind das" + afrv2 + "kg C02" );
console.log("______________________________________________________" );


}
function asiafunction(){
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#h1e").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector("#p1").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h2e").innerHTML = asia.toFixed(2);
    document.querySelector("#h3e").innerHTML = asiarel.toFixed(2) + "%";
    document.querySelector("#h4e").innerHTML = asiav3.toFixed(2) + "%";
    document.querySelector("#h5e").innerHTML = asiav2.toFixed(2) + "Kg"
    document.querySelector("div.chart")?.setAttribute("style", "height: 52%");
    document.querySelector("div.prz").innerHTML = "52%";



}

function ausfunction(){
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#h1e").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector("#p1").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h2e").innerHTML = aus.toFixed(2);
    document.querySelector("#h3e").innerHTML = ausrel.toFixed(2) + "%";
    document.querySelector("#h4e").innerHTML = ausv3.toFixed(2) + "%";
    document.querySelector("#h5e").innerHTML = ausv2.toFixed(2) + "Kg"
    document.querySelector("div.chart")?.setAttribute("style", "height: 7%");
    document.querySelector("div.prz").innerHTML = "7%";



}

function eurofunction() {
    document.querySelector("#h1e").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector("#p1").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector("#h2e").innerHTML = eur.toFixed(2);
    document.querySelector("#h3e").innerHTML = eurorel.toFixed(2) + "%";
    document.querySelector("#h4e").innerHTML = eurov3.toFixed(2) + "%";
    document.querySelector("#h5e").innerHTML = eurov2.toFixed(2) + "Kg";
    document.querySelector("div.chart")?.setAttribute("style", "height: 14%");
    document.querySelector("div.prz").innerHTML = "14%";



    console.log("Die Emission von Europa ist : "  + eu.toFixed(2)r + "kg");
    console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit :  " + eurorel.toFixed(2) + "%" );
    console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + eurov3.toFixed(2) + "% verändert "  );
    console.log("2018 im Vergleich zu 2008 sind das" + eurov2.toFixed(2) + "kg C02" );
    console.log("______________________________________________________" );
    }

window.addEventListener("load", function() {
    document.querySelector(".europe").addEventListener("click", eurofunction);
    document.querySelector(".northamerica").addEventListener("click", namerfunction);
    document.querySelector(".southamerica").addEventListener("click", samerfunction);
    document.querySelector(".africa").addEventListener("click", afrfunction);
    document.querySelector(".asia").addEventListener("click", asiafunction);
    document.querySelector(".australia").addEventListener("click", ausfunction);


}
