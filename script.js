import { persons } from "./data.js";

function createPersonCard(person) {
  // Generere et html element
  const articleElement = document.createElement("article");

  // Lage alle elementene
  const firstName = document.createElement("p");
  const ageElement = document.createElement("p");
  const profileLinkElement = document.createElement("a");

  // Legg til innholdet i elementene
  articleElement.className = "person-card";
  firstName.textContent = sigrid.Name;
  ageElement.textContent = sigrid.Age;
  profileLinkElement.textContent = "Profile";
  profileLinkElement.href = sigrid.homePage;

  // Lagt de til containeren
  articleElement.appendChild(firstName);
  articleElement.appendChild(ageElement);
  articleElement.appendChild(profileLinkElement);

  return articleElement;
}

// Hvilken data har vi
const sigrid = {
  Name: "Sigrid",
  Age: 28,
  homePage: "http://www.github.com/misskluck",
};

// Kall funksjonen med persons objektet vårt
const sigridElement = createPersonCard(sigrid);

// Sette inn elementet i dokumentet
// 1. Finn ut hvor vi skal sette elementet inn
const container = document.getElementById("single-person");
// 2. Sett inn det nye elementet som et underelement
container.appendChild(sigridElement);

// === Rendring av lister ===
const listElement = document.getElementById("person-list");

for (let index = 0; index < persons.length; index++) {
  console.log(persons[index]);
  const newPerson = createPersonCard(persons[index]);
  console.log(newPerson);
  listElement.appendChild(newPerson);
}

async function logMovies() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const movies = await response.json();
  console.log(movies);
}

logMovies();
