
function burger (){
    alert("1 ta burger narxi 15000 so'm")
    const zakas = prompt("Nechta zakas qilqsz")

    if(zakas === null || zakas.trim() === ""  || isNaN(zakas) || zakas <= 0){
        alert("Iltimos, to'g'ri miqdorni kiriting");
        return;
    }
    const result = zakas * 15000;
    const inConfirmed = confirm(`${zakas} ta burger ${result} so'm bo'ladi. Zakas qilasizmi`)

    if (inConfirmed){
        alert("zakas qabul qilindi!");
    }else{
        alert("Zakas bekor qilindi ")
    }
}