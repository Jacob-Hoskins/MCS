const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const calendar = document.getElementById('calendar')

function load(){
    const dt = new Date();

    const day = dt.getDay();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1);


    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    })

    const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);
    document.getElementById('monthDisplay').innerText = `${dt.toLocaleDateString('en-us', {month: 'long'})} ${year}`
    calendar.innerHTML = '';

    //adds days to the page
    for(let i = 1; i <= paddingDays + daysInMonth; i++){
        //creates div to adds days of month too
        daySquare = document.createElement('div')
        daySquare.classList.add('day')

        if(i > paddingDays){
            daySquare.innerText = i - paddingDays
            //event listener for days in month
            daySquare.addEventListener('click', ()=>{console.log('clicked')})
        }

        calendar.append(daySquare)
    }
}

function addJob(){
    
}

load();