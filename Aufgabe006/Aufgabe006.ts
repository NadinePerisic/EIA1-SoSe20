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

    
var weltgesamt = 31116.50;
var europa2018 = 4209.30;
var europa2 = europa2018 * 100 / weltgesamt;
var europa2008 = 4965.70;
var europa3 = europa2018 / europa2008 - 1;
var europa4 = europa2008 - europa2018;
console.group('Europa');
console.log("Die Emission von Europa ist " + europa2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verusacht Europa damit " + europa2 + "%.");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + europa3 + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + europa4 + "kg CO2.");
console.groupEnd();
var afrika2018 = 1235.50;
var afrika2008 = 1028;
var afrika2 = afrika2018 * 100 / weltgesamt;
var afrika3 = afrika2018 / afrika2008 - 1;
var afrika4 = afrika2018 - afrika2008;
console.group('Afrika');
console.log("Die Emission von Afrika ist " + afrika2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + afrika2 + "%.");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + afrika3 + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + afrika4 + "kg CO2.");
console.groupEnd();
var süda2018 = 1261.50;
var süda2008 = 1132.60;
var süda2 = süda2018 * 100 / weltgesamt;
var süda3 = süda2018 / süda2008 - 1;
var süda4 = süda2018 - süda2008;
console.group('Südamerika');
console.log("Die Emission von Südamerika ist " + süda2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der welt verursach Südamerika damit " + süda2 + "%.");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emmission um " + süda3 + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + süda4 + "kg CO2.");
console.groupEnd();
var nora2018 = 6035.60;
var nora2008 = 6600.40;
var nora2 = nora2018 * 100 / weltgesamt;
var nora3 = nora2018 / nora2008 - 1;
var nora4 = nora2018 - nora2008;
console.group('Nordamerika');
console.log("Die Emission von Nordamerika ist " + nora2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + nora2 + "%.");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + nora3 + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + nora4 + "kg CO2.");
console.groupEnd();
var asien2018 = 16274.10;
var asien2008 = 12954.40;
var asien2 = asien2018 * 100 / weltgesamt;
var asien3 = asien2018 / asien2008 - 1;
var asien4 = asien2018 - asien2008;
console.group('Asien');
console.log("Die Emission von Asien ist " + asien2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + asien2 + "%.");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + asien3 + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + asien4 + "kg CO2.");
console.groupEnd();
var aust2018 = 2100.50;
var aust2008 = 1993.00;
var aust2 = aust2018 * 100 / weltgesamt;
var aust3 = aust2018 / aust2008 - 1;
var aust4 = aust2018 - aust2008;
console.group('Australien');
console.log("Die Emission von Australien ist " + aust2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + aust2 + "%.");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + aust3 + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + aust4 + "kg CO2.");
console.groupEnd();
