
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