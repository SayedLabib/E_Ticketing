// console.log('Connected');


const allSeats = document.getElementsByClassName('kbd-lg'); 

let seatCount = 0;

for(const seats of allSeats)
    {
       seats.addEventListener('click', function(event) {


      if(event.target.classList.contains('disabled'))
         {
           alert('The seat is already booked please choose another one');
           return;
         }

    
       const seat = event.target.innerText;
       const seatClass = 'Economy';
       const price = 550;
      
     
      if(seatCount < 4)
      {
               
       const selectedSeats = document.getElementById('selected-seats');

       const div = document.createElement('div');
       div.classList.add('flex');
       div.classList.add('flex-row');
       div.classList.add('justify-around');

       const p1 = document.createElement('p');
       const p2 = document.createElement('p');
       const p3 = document.createElement('p');

       p1.innerText = seat;
       p2.innerText = seatClass;
       p3.innerText = price;

       div.appendChild(p1);
       div.appendChild(p2);
       div.appendChild(p3);

       selectedSeats.appendChild(div); 

       seatCount++;
      
       event.target.classList.add('disabled');
      //  event.target.style.pointerEvents = 'none';
       event.target.style.backgroundColor = '#1DD100';
       
       updateTotalPrice(price); 
      }

            
      
      
      UpdateSeatCount();
      UpdateSeatLeft();
      updateGrandTotal();

       })
    }


  const btnApply = document.getElementById('Apply-btn').setAttribute('disabled',false);  
 
  
  function showNextPage()
  {
   hideElement('header');
   hideElement('main');
   hideElement('footer');
   showElement('Success');
  }

  function showPreviousPage()
  {
   hideElement('Success');
   showElement('header');
   showElement('main');
   showElement('footer');
  }

   