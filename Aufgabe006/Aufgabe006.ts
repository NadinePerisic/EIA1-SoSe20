var weltgesamt:number = 31116.50;
var europa2018:number = 4209.30;
var europa2:number = europa2018*100/weltgesamt;
var europa2008:number = 4965.70;
var europa3:number = europa2018/europa2008-1;
var europa4:number = europa2008-europa2018;
console.group('Europa');
console.log("Die Emission von Europa ist " + europa2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verusacht Europa damit " + europa2 + "%.");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + europa3, "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + europa4, "kg CO2.");
console.groupEnd();
var afrika2018:number = 1235.50;
var afrika2008:number = 1028
var afrika2:number = afrika2018*100/weltgesamt;
var afrika3:number = afrika2018/afrika2008-1;
var afrika4:number = afrika2018-afrika2008;
console.group('Afrika');
console.log("Die Emission von Afrika ist " + afrika2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + afrika2 + "%.");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + afrika3 + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + afrika4 + "kg CO2.");
console.groupEnd();
var süda2018:number = 1261.50;
var süda2008:number = 1132.60;
var süda2:number = süda2018*100/weltgesamt;
var süda3:number = süda2018/süda2008-1;
var süda4 = süda2018-süda2008;
console.group('Südamerika');
console.log("Die Emission von Südamerika ist " + süda2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der welt verursach Südamerika damit " + süda2 + "%.");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emmission um" + süda3 + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + süda4 + "kg CO2.");
console.groupEnd();
var nora2018:number = 6035.60;
var nora2008:number = 6600.40;
var nora2:number = nora2018*100/weltgesamt;
var nora3:number = nora2018/nora2008-1;
var nora4:number = nora2018-nora2008;
console.group('Nordamerika');
console.log("Die Emission von Nordamerika ist " + nora2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + nora2 + "%."); 
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um" + nora3 + "% verändert.")
console.log("2018 im Vergleich zu 2008 sind das " + nora4 + "kg CO2.");
console.groupEnd();
var asien2018:number = 16274.10;
var asien2008:number = 12954.40;
var asien2:number = asien2018*100/weltgesamt;
var asien3:number = asien2018/asien2008-1;
var asien4:number = asien2018-asien2008;
console.group('Asien'); 
console.log("Die Emission von Asien ist " + asien2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + asien2 + "%."); 
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um" + asien3 + "% verändert.")
console.log("2018 im Vergleich zu 2008 sind das " + asien4 + "kg CO2.");
console.groupEnd()
var aust2018:number = 2100.50;
var aust2008:number = 1993.00;
var aust2:number = aust2018*100/weltgesamt;
var aust3:number = aust2018/aust2008-1;
var aust4 :number= aust2018-aust2008;
console.group('Australien'); 
console.log("Die Emission von Australien ist " + aust2018 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + aust2 + "%."); 
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um" + aust3 + "% verändert.")
console.log("2018 im Vergleich zu 2008 sind das " + aust4 + "kg CO2.");
console.groupEnd(); 


function norafunction(){
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#p1").innerHTML = "Emission absolute of North America in 2018";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h1e").innerHTML = "Carbon Dioxide Emissions in North America";
    document.querySelector("#h2e").innerHTML = nora2018.toFixed(2);
    document.querySelector("#h3e").innerHTML = nora2.toFixed(2) + "%";
    document.querySelector("#h4e").innerHTML = nora3.toFixed(2) + "%";
    document.querySelector("#h5e").innerHTML = nora4.toFixed(2) + "Kg";
}
function südafunction(){
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#h1e").innerHTML = "Carbon Dioxide Emissions in South America";
    document.querySelector("#p1").innerHTML = "Emission absolute of South America in 2018";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h2e").innerHTML = süda2018.toFixed(2);
    document.querySelector("#h3e").innerHTML = süda2.toFixed(2) + "%";
    document.querySelector("#h4e").innerHTML = süda3.toFixed(2) + "%";
    document.querySelector("#h5e").innerHTML = süda4.toFixed(2) + "Kg";
}

function afrikafunction(){
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#h1e").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector("#p1").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h2e").innerHTML = afrika2018.toFixed(2);
    document.querySelector("#h3e").innerHTML = afrika2.toFixed(2) + "%";
    document.querySelector("#h4e").innerHTML = afrika3.toFixed(2) + "%";
    document.querySelector("#h5e").innerHTML = afrika4.toFixed(2) + "Kg"
    document.querySelector("div.chart")?.setAttribute("style", "height: 4%");
    document.querySelector("div.prz").innerHTML = "4%";
}
function asienfunction(){
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#h1e").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector("#p1").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h2e").innerHTML = asien2018.toFixed(2);
    document.querySelector("#h3e").innerHTML = asien2.toFixed(2) + "%";
    document.querySelector("#h4e").innerHTML = asien3.toFixed(2) + "%";
    document.querySelector("#h5e").innerHTML = asien4.toFixed(2) + "Kg"

}
function australienfunction () {
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#h1e").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector("#p1").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h2e").innerHTML = aust2018.toFixed(2);
    document.querySelector("#h3e").innerHTML = aust2.toFixed(2) + "%";
    document.querySelector("#h4e").innerHTML = aust3.toFixed(2) + "%";
    document.querySelector("#h5e").innerHTML = aust4.toFixed(2) + "Kg"
}

function europafunction() {
    document.querySelector("#h1e").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector("#p1").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector("#h2e").innerHTML = europa2018.toFixed(2);
    document.querySelector("#h3e").innerHTML = europa2.toFixed(2) + "%";
    document.querySelector("#h4e").innerHTML = europa3.toFixed(2) + "%";
    document.querySelector("#h5e").innerHTML = europa4.toFixed(2) + "Kg";
}

window.addEventListener("load", function() {
    document.querySelector(".europe").addEventListener("click", europafunction);
    document.querySelector(".northamerica").addEventListener("click", norafunction);
    document.querySelector(".southamerica").addEventListener("click", südafunction);
    document.querySelector(".africa").addEventListener("click", afrikafunction);
    document.querySelector(".asia").addEventListener("click", asienfunction);
    document.querySelector(".australia").addEventListener("click", australienfunction);


}