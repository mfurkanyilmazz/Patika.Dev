let deger=prompt("Faktoriyel Hesabı için Değer giriniz");
    function Faktoriyel(deger)
    {
       
        let toplam=deger
        for(let i=1;i<deger;i++){
            toplam*=(deger-i)
            console.log(deger-i)
            
        }
        return toplam
        
     
    }
    function fakGoster(){
        var fak = document.getElementById("Faktoriyel");
        fak.innerHTML=`${deger}! = `+Faktoriyel(deger);
    }
    Faktoriyel(deger);
    fakGoster();