// console.log('Connected');

const allSeats = document.getElementsByClassName('kbd-lg'); 

for(const seats of allSeats)
    {
       seats.addEventListener('click', function(event) {
    
       const seat = event.target.innerText;
       const seatClass = 'Economy';
       const price = 550;
    //    console.log(seatClass);

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


       })
    }
