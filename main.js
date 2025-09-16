let eventVar = document.querySelector(".event");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let show = document.querySelector(".show");
let id = document.querySelector(".id");
let fact = document.querySelector(".fact");

let i = 0;
let events = []; // store JSON here

// Load JSON once
async function loadData() {
  const response = await fetch("Mottos.json");
  events = await response.json();
  showEvent(0); // show the first event
}

function showEvent(index) {
  i = index;
  const item = events[i];
  eventVar.innerHTML = item.event;
  id.innerHTML = item.id;
  fact.innerHTML = ""; // clear fact until user clicks "show"
}

// Next button
function nextClick() {
  i = (i + 1) % events.length; // cycle forward
  showEvent(i);
}

// Previous button
function prevFact() {
  i = (i - 1 + events.length) % events.length; // cycle backward
  showEvent(i);
}

// Show fact button
function showFact() {
  fact.innerHTML = events[i].motto;
}

next.onclick = nextClick;
prev.onclick = prevFact;
show.onclick = showFact;

// Load data when the page starts
loadData();
