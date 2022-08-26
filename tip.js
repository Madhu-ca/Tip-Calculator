let btn = document.getElementById('btn');

btn.addEventListener('click',function(){
    let billAmount = parseInt(document.getElementById('bill-amount').value, 10);
    //console.log(billAmount);
    
    let serviceReview = document.getElementById('services').value;
    let tipPercentage = parseInt(document.getElementById('tip-percent').value,10);
    
    let numberofPersons = parseInt(document.getElementById('persons').value,10);

    //console.log(typeof billAmount , typeof tipPercentage,typeof numberofPersons);
    
    //validate
    if(billAmount === '' || tipPercentage == 0 || numberofPersons == 0){
        alert('Please enter all values');
        return;
    }

    let tip = billAmount * (tipPercentage/100) / numberofPersons;
    tip = tip.toFixed(2);
    document.getElementById('tip-amount').innerHTML = tip;
    //console.log(tip);
    document.getElementById('total-bill').innerHTML = parseFloat(billAmount) + parseFloat(tip);
})

