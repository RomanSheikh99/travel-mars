document.getElementById('mars-plus').addEventListener('click', function(){
    let marsTicket = document.getElementById('mars-ticket');
    let marsTicketValue = Number(marsTicket.value) + 1;
    marsTicket.value = marsTicketValue;
    let marsCost = Number(marsTicket.value) * 75;
    let mars = document.getElementById('mars-cost');
    mars.innerText = marsCost;
    let total = document.getElementById('total-cost');
    let moon = document.getElementById('moon-cost');
    let totalcost = Number(mars.innerText) + Number(moon.innerText);
    total.innerText = totalcost;
})

document.getElementById('mars-mainus').addEventListener('click', function(){
    let marsTicket = document.getElementById('mars-ticket');
    if(marsTicket.value > 0){
    let marsTicketValue = Number(marsTicket.value) - 1;
    marsTicket.value = marsTicketValue;
    let marsCost = Number(marsTicket.value) * 75;
    let mars = document.getElementById('mars-cost');
    mars.innerText = marsCost;
    let total = document.getElementById('total-cost');
    let moon = document.getElementById('moon-cost');
    let totalcost = Number(mars.innerText) + Number(moon.innerText);
    total.innerText = totalcost;
    }
})

document.getElementById('moon-plus').addEventListener('click', function(){
    let moonTicket = document.getElementById('moon-ticket');
    if(moonTicket.value >= 0){
        let moonTicketValue = Number(moonTicket.value) + 1;
        moonTicket.value = moonTicketValue;
        let moonCost = Number(moonTicket.value) * 49;
        let moon = document.getElementById('moon-cost');
        moon.innerText = moonCost;
        let total = document.getElementById('total-cost');
        let mars = document.getElementById('mars-cost');
        let totalcost = Number(mars.innerText) + Number(moon.innerText);
        total.innerText = totalcost;
    }
})

document.getElementById('moon-mainus').addEventListener('click', function(){
    let moonTicket = document.getElementById('moon-ticket');
    if(moonTicket.value > 0){
        let moonTicketValue = Number(moonTicket.value) - 1;
        moonTicket.value = moonTicketValue;
        let moonCost = Number(moonTicket.value) * 49;
        let moon = document.getElementById('moon-cost');
        moon.innerText = moonCost;
        let total = document.getElementById('total-cost');
        let mars = document.getElementById('mars-cost');
        let totalcost = Number(mars.innerText) + Number(moon.innerText);
        total.innerText = totalcost;
    }
})


document.getElementById('mars-ticket').addEventListener('keyup',function(event){
    let cost = Number(event.target.value) * 75
    let mars = document.getElementById('mars-cost');
    mars.innerText = cost;
    let total = document.getElementById('total-cost');
    let moon = document.getElementById('moon-cost');
    let totalcost = Number(mars.innerText) + Number(moon.innerText);
    total.innerText = totalcost;
})


document.getElementById('moon-ticket').addEventListener('keyup',function(event){
    let cost = Number(event.target.value) * 49;
    let moon = document.getElementById('moon-cost');
    moon.innerText = cost;
    let total = document.getElementById('total-cost');
    let mars = document.getElementById('mars-cost');
    let totalcost = Number(moon.innerText) + Number(mars.innerText);
    total.innerText = totalcost;
})