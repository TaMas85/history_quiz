
function ellenorzes() {
    
    let ellenorzes;
    let a = false;
    let b =false;
    let c = false;
    let e = false;
    let d = Date.now();
    let neve = document.getElementById("nev").value;
    let szhely = document.getElementById("szulhely").value;
    let szdate = document.getElementById("szuldate").value;
    let mail = document.getElementById("email").value;
    let isk = document.getElementById("isko").value;

    let szd = Date.parse(szdate);
    const mintanev = /^[a-zöüóőúűéáí-]{2,}\s+[a-zöüóőúűéáí]{3,}/gi;
    const mintaszhely = /^[A-ZÖÜÓŐÚŰÁÉÍ]/g;
    const mintaemail = /[a-z0-9_-]+@[a-z0-9]{2,}./gi;

    if(mintanev.test(neve)) {
        document.getElementById("nev").style.backgroundColor = "green";
        a = true;
    }else {
        alert("Hibásan kitöltött név mező!");
        document.getElementById("nev").style.backgroundColor = "red";
        a = false;
    }

    if(mintaszhely.test(szhely)) {
        document.getElementById("szulhely").style.backgroundColor = "green";
        b = true;
    }else {
        alert("Hibásan kitöltött születési hely mező!");
        document.getElementById("szulhely").style.backgroundColor = "red";
        b = false;
    }
    
    if(d - szd > 0) {
        document.getElementById("szuldate").style.backgroundColor = "green";
        c = true;
    }else {
        alert("Hibásan kitöltött születési dátum mező!");
        document.getElementById("szuldate").style.backgroundColor = "red";
        c = false;
    }

    if(mintaemail.test(mail)) {
        document.getElementById("email").style.backgroundColor = "green";
        e = true;
    }else {
        alert("Hibásan kitöltött e-mail mező!");
        document.getElementById("email").style.backgroundColor = "red";
        e = false;
    }
    
    if(a && b && c && e) {
        ellenorzes = true;
        document.getElementById("ind").style.display = "inline";
    }else {
        ellenorzes = false;
        document.getElementById("ind").style.display = "none";
    }

    //document.getElementById("proba").innerHTML = ellenorzes;
}



function tesztindul() {
    document.getElementById("bef").style.display = "inline";
    document.getElementById("ind").style.display = "none";
    document.getElementById("kerdesek").style.display = "block";
    let oramind = new Date();
    let ora = oramind.toLocaleTimeString();
    document.getElementById("ido").innerHTML = `A teszt megkezdésének időponja: ${ora}`;
}

let idoszamol = 0;
function szamolas() {
    let s = setInterval("orasz()", 1000);
    
}

let percek = 0;
function orasz(){
    idoszamol++;
    if(idoszamol%60 == 0) {
        percek = idoszamol/60;
        idoszamol = 0;
    }
    document.getElementById("idoszamolas").innerHTML = `Az eltelt idő: ${percek} perc ${idoszamol} másodperc!`;
    if(percek == 120) {
        befejezes();
    }
}

function befejezes() {
    document.getElementById("bef").style.display = "none";
    document.getElementById("idoszamolas").style.display = "none";
    document.getElementById("kerdesek").style.display = "none";
    document.getElementById("ertek").style.display = "inline";
    let oramind = new Date();
    let ora = oramind.toLocaleTimeString();
    document.getElementById("ennyi").innerHTML = `A teszt befejezésének időponja: ${ora}`;
    let neve = document.getElementById("nev").value;
    let szhely = document.getElementById("szulhely").value;
    let szdate = document.getElementById("szuldate").value;
    let mail = document.getElementById("email").value;
    let isk = document.getElementById("isko").value;
    let kul = Date.now()-Date.parse(szdate);
    
    let ki = "";
    ki += "<h3>A teszt kitöltőjének adatai: </h3>";
    ki += "Név: " + neve + "<br>";
    ki += "Születési hely: " + szhely + "<br>";
    ki += "Kor: " + Math.floor(kul/31556952000) + "<br>";
    ki += "E-mail cím: " + mail + "<br>";
    ki += "Legmagasabb iskolai végzettség: " + isk + "<br><br>";
    ki += "<table><caption>Teszt kiértékelése</caption><tr><th>Feladat száma</th><th>Feladat szövege</th><th>Megoldás</th><th>Max. pont</th><th>Adott válasz</th><th>Kapott pontszám</th></tr>";
     

    let adegy;
    let elso = document.getElementById("egy").value;
    if(elso == "Holló" || elso == "holló") {
        adegy = 2;
        
    }else{
        adegy = 0;
        
    }
    
    ki += "<tr><td>1. feladat</td><td>Hunyadi címer madár</td><td>Holló</td><td>2</td><td id='one'>" + elso + "</td><td>" + adegy + "</td></tr>";
    let adketto;
    let masodik = document.getElementById("ketto").value;
    if(masodik == 2) {
        adketto = 2;
    }else{
        adketto = 0;
    }
    
    ki += "<tr><td>2. feladat</td><td>Mátyás király feleségeinek száma</td><td>2</td><td>2</td><td id='two'>" + masodik + "</td><td>" + adketto + "</td></tr>";
    
    let adharom = 0;
    var harmadik = document.getElementById('harom').value;
    if(harmadik.includes("Várna")) {
        adharom += 1;
    }
    if (harmadik.includes("Rigómező")){
        adharom += 1;
    }
    if (harmadik.includes("Nándorfehérvár")){
        adharom += 1;
    }
    ki += "<tr> <td>3. feladat</td><td>Csaták helyszínei</td><td>Várna, Rigómező, Nándorfehérvár</td><td>3</td><td id='three'>"+ harmadik +"</td><td>"+ adharom +"</td> </tr>";
    
    
    let n;
    let adnegy;
    let negyedik = document.getElementsByName("rad");
    let checkedRadio = Array.from(negyedik).find((radio) => radio.checked);
    n =  checkedRadio.value;
    if(n == "Nápoly"){
        adnegy = 2;
    }else{
        adnegy =0;
    }
    ki += "<tr><td>4. feladat</td><td>Beatrix királyné származása</td><td>Nápoly</td><td>2</td><td id='four'>" + n + "</td><td>" + adnegy + "</td></tr>";
    
    let adot = 0;
    let otvalasz = "";
    let ot = document.querySelectorAll("[id=a]");
    for (x in ot){
        if (ot[x].checked && (ot[x].value=="Cillei Ulrik" || ot[x].value=="Újlaki Miklós")){
            adot += 2;
        }
        else if (ot[x].checked && (ot[x].value!="Cillei Ulrik" || ot[x].value!="Újlaki Miklós")) {
            adot -= 2;
        }
        if (ot[x].checked){
            otvalasz += ot[x].value;
        }
    }
       
    ki += "<tr><td>5. feladat</td><td>Magyarországi ellenfelek</td><td>Újlaki Miklós, Cillei Ulrik</td><td>4</td><td id='five'>"+ otvalasz +"</td><td>"+ adot +"</td></tr>";
    
    let adhat;
    let hat = document.getElementById("hat").value;
    if (hat == "Szilágyi Erzsébet"){
        adhat = 2;
    }else{
        adhat = 0;
    }
    ki += "<tr><td>6. feladat</td><td>Mátyás király édesanyja</td><td>Szilágyi Erzsébet</td><td>2</td><td id='six'>"+ hat +"</td><td>"+ adhat +"</td></tr>";
    let ossz = adegy+adketto+adharom+adnegy+adot+adhat;
    ki += "<tr><td colspan='3'>Összesen: </td><td>15</td><td id='szin'></td><td>"+ ossz +"</td></tr>";

    let ertekeles;
    let szazalek = (ossz*100)/15;
    if(szazalek < 40){
        ertekeles = "Nem megfelelt";
    }
    else if(szazalek >= 40 && szazalek < 65){
        ertekeles = "Megfelelt"
    }
    else if(szazalek >= 65 && szazalek < 85){
        ertekeles = "Jól megfelelt"
    }
    else if(szazalek >= 85 && szazalek < 95){
        ertekeles = "Kiemelkedően megfelelt"
    }
    else if(szazalek >= 95){
        ertekeles = "Kitűnően megfelelt"
    }

    ki += "<tr><td colspan='6'>"+ ertekeles +"</td></tr></table>";
    document.getElementById("ertek").innerHTML = ki;
    
    if (adegy==2){
        document.getElementById("one").style.backgroundColor = "green";
    }
    if (adketto==2){
        document.getElementById("two").style.backgroundColor = "green";
    }
    if (adnegy==2){
        document.getElementById("four").style.backgroundColor = "green";
    }
    if (adhat==2){
        document.getElementById("six").style.backgroundColor = "green";
    }
    if (adharom==3){
        document.getElementById("three").style.backgroundColor = "green";
    }else if (adharom==2 || adharom==1){
        document.getElementById("three").style.backgroundColor = "orange";
    }
    if (adot==4){
        document.getElementById("five").style.backgroundColor = "green";
    }else if (adot==2){
        document.getElementById("five").style.backgroundColor = "orange";
    }
}