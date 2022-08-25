let btn = document.getElementById('btn');

btn.addEventListener('click',function(){
    let billAmount = document.getElementById('bill-amount').value;
    //console.log(billAmount);
    
    //let serviceReview = document.getElementById('services').value;
    let tipPercentage = document.getElementById('tip-percent').value;
    
    let numberofPersons = document.getElementById('persons').value;

    //validate
    if(billAmount === '' || tipPercentage == 0 || numberofPersons == 0){
        alert('Please enter all values');
        return;
    }
    let tip = billAmount * tipPercentage/numberofPersons;
    tip = total.tofixed(2);
    document.getElementById('tip-amount').innerHTML = tip;
    console.log(tipAmount);
    //document.getElementById('total-bill').value = parseFloat(billAmount) + parseFloat(tipAmount);
})

