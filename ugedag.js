// Array af objects for hver dag af ugen
const daysOfWeek = [
  {
    day: "Sunday",
    photo: "",
    text: "LUKKET",
    description: "Bolognaise"

  },
  {
    day: "Monday",
    photo: "imgs/cheeseburger.jpg",
    text: "Cheeseburger",
    beskrivelse: "Bolognaise"

  },
  {
    day: "Tuesday",
    photo: "imgs/bolognaise.jpg",
    text: "Bolognaise",
    beskrivelse: "Bolognaise er godt"

  },
  {
    day: "Wednesday",
    photo: "imgs/hamburger.jpg",
    text: "Hamburger",
    beskrivelse: "Bolognaise"

  },
  {
    day: "Thursday",
    photo: "imgs/boller.jpg",
    text: "Boller i karry",
    beskrivelse: "Bolognaise"

  },
  {
    day: "Friday",
    photo: "imgs/fried.jpg",
    text: "Fried kylling",
    beskrivelse: "Bolognaise"

  },
  {
    day: "Saturday",
    photo: "",
    text: "LUKKET",
    beskrivelse: "Bolognaise"

  }
];

// tag den specifike dag af ugen
const today = new Date().getDay();
const todayObject = daysOfWeek[today];

// Viser billedet og teksten fra den specifike dag af ugen
document.getElementById("photo").src = todayObject.photo;
document.getElementById("text").innerHTML = todayObject.text;
document.getElementById("beskrivelse").innerHTML = todayObject.beskrivelse;