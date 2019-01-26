window.addEventListener('load', ()=> {

let diary = new EventDiary();
window.e = diary._eventList;
let button = document.getElementById('event_create_button')

button.addEventListener('click', ()=> {
  makeEvent();
});


let data = JSON.parse(this.response)

let weather_button = document.getElementById('get_weather')
weather_button.addEventListener('click',()=>{
  var request = new XMLHttpRequest();
  request.open('GET', '', true)
})


//creates event & push to an event diary
function makeEvent() {
  let content = document.getElementById('user_input').value
  let date = document.getElementById('date_input').value
  let time = document.getElementById('time_input').value
  let event = new Event;
  event.createEvent(content, date, time);
  diary.saveEvent(event);
  displayEvent()
}

//displays upcoming events in event diary
  const displayEvent = ()=> {
    let eventlistings = document.getElementById('eventlistings');
    events = diary.displayEvent();
    eventlistings.innerText = " ";
    eventlistings.appendChild(events);
  }

})
