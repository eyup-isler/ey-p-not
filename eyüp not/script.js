document.getElementById("hesapla").addEventListener("click" , notHesaplama)
function notHesaplama(){
    let yazili1=document.getElementById("y1").value;
    let yazili2=document.getElementById("y2").value;
    let performans=document.getElementById("p1").value;
    let ortalama=(Number(yazili1) +  Number(yazili2) + Number(performans) )/3;
    let durum="heaplama";
    if (ortalama<=50){
        document.body.style.backgroundColor="red"
        durum="KALDI";
        
    }
    else{
        durum="GEÇTİ";
        document.body.style.backgroundColor="green"
        
    }
    document.getElementById("sonuc").innerHTML = durum + " " + ortalama.toFixed(1);
}

   
            
        
    
    

