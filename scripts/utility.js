
function getConvertedValue(value) 
{
    const Value = document.getElementById(value).innerText;
    const getConvertedValue = parseInt(Value);
    return getConvertedValue;
}

function UpdateSeatCount()
{
    const count = getConvertedValue('seat-count');
    
    if(count+1>4)
        {
          alert('You have reached your buy limit');
          return;
        }
    
    document.getElementById('seat-count').innerText = count + 1   

}

function UpdateSeatLeft()
{
    const seatLeft = getConvertedValue('seat-left');
    document.getElementById('seat-left').innerText = seatLeft - 1;
}

function updateTotalPrice(price)
{
    const totalPrice = getConvertedValue('total-price');
     
    document.getElementById('total-price').innerText = totalPrice + price;
}



function updateGrandTotal(applied)
{
    const totalPrice = getConvertedValue('total-price');
    
    
    
    if(applied)
        {
            const couponCode = document.getElementById('coupon-code').value;

            if(couponCode === 'New15')
                {
                    const discountedPrice = totalPrice *.15;
                    document.getElementById('grand-total').innerText = totalPrice - discountedPrice;
                }
            else if(couponCode === 'Couple20')
                {
                    const discountedPrice = totalPrice *.20;    
                    document.getElementById('grand-total').innerText = totalPrice - discountedPrice;
                }
            else
                {
                    alert('Please enter a valid coupon code');
                }        
            
        }

     else
     {
         document.getElementById('grand-total').innerText = totalPrice;
     }
    
    
}


// Buy Tickets Button event listener
    document.getElementById('buy-tickets').addEventListener('click',function(event){

        const sellingTickets = document.getElementById('Selling-Tickets');

        sellingTickets.scrollIntoView({
            behavior:"smooth",
            block: "start",
        });
    })



// Making The Apply Button enable
function applyBtn()
{
  
  const btnApply = document.getElementById('Apply-btn');
  const couponCode = document.getElementById('coupon-code').value;
  
  if(couponCode === 'New15' || couponCode === 'Couple20')
     {
        btnApply.removeAttribute('disabled');
     }


}

document.getElementById('coupon-code').addEventListener('keyup', applyBtn);