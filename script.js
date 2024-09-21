document.getElementById('button').addEventListener('click', function (e) {
e.preventDefault()

    const amountValue = document.getElementById('amount').value
    const realValue = parseFloat(amountValue)
    const passwordValue = document.getElementById('password').value

    console.log(amountValue, passwordValue);

    if(passwordValue === '1234'){
       const balance = document.getElementById('balance').innerText
       const realValueBalance = parseFloat(balance)
       
       const totalValue = realValue + realValueBalance

    //    const totalValue = realValueBalance - realValue       **cashOut**

       console.log(totalValue);
       
       document.getElementById('balance').innerText = totalValue
        
    }else{
        alert('sorry')
    }
    
    
})

