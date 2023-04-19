// Array af objects for hver dag af ugen
const daysOfWeek = [
  {
    day: "Sunday",
    photo: "",
    text: "LUKKET",
    beskrtivelse: " "

  },
  {
    day: "Monday",
    photo: "imgs/cheeseburger.jpg",
    text: "Cheeseburger",
    beskrtivelse: "Lækker bygselv cheeseburger består af hakkebøf, ost, selvalgt salat og ketchup."

  },
  {
    day: "Tuesday",
    photo: "imgs/bolognaise.jpg",
    text: "Bolognaise",
    beskrivelse: "En ægte italiensk klassiker serveret med spaghetti af hakket oksekøbt, tomatsauce og grøntsager"
   

  },
  {
    day: "Wednesday",
    photo: "imgs/hamburger.jpg",
    text: "Hamburger",
    beskrivelse: "Simpel men utrolig lækker bygselv hamburger, består af hakkebød, selvvalgt salat og ketchup."

  },
  {
    day: "Thursday",
    photo: "imgs/boller.jpg",
    text: "Boller i karry",
    beskrivelse: "En hverdagsklassiker i Danmark. Består af hakket kød, ris og karrysovs."

  },
  {
    day: "Friday",
    photo: "imgs/fried.jpg",
    text: "Fried kylling",
    beskrivelse: "Fra sydstasterne selv, FRIED CHICKEN lækker sprød kylling, med hotsauce på eget ansvar"

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