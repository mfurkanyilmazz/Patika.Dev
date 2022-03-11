   let name=prompt("Ad Soyad:");
   let tarih =new Date();
   let gun=tarih.getDay();
   if(gun==1)
   {
   gun="Pazartesi"
   }
   else if(gun==2)
   {
   gun="Salı"
   }
   else if(gun==3)
   {
   gun="Çarşamba"
   }
   else if(gun==4)
   {
   gun="Perşembe"
   }
   else if(gun==5)
   {
   gun="Cuma"
   }
   else if(gun==6)
   {
   gun="Cumartesi"
   }
   else{gun=Pazar}

document.getElementById("today").innerHTML = `Hoşgeldin ${name} Bu gün ${gun}`;


function verSaat()
{
var simdi = new Date();
return simdi.toLocaleTimeString();    // return 23:59:59
}

function saatGoster()
{
   var saat = document.getElementById("saatKutu");


   
   saat.innerHTML = verSaat();      
   
}

saatGoster();
setInterval("saatGoster()",1000)