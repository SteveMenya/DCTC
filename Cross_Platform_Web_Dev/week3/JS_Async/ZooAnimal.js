/*

{
    "name": "Common Eider",
    "latin_name": "Somateria mollissima",
    "animal_type": "Bird",
    "active_time": "Diurnal",
    "length_min": "1.7",
    "length_max": "2",
    "weight_min": "4",
    "weight_max": "4.5",
    "lifespan": "20",
    "habitat": "Marine waters near rocky seacoasts",
    "diet": "Fish, crustaceans, small animals",
    "geo_range": "Northern coasts of Europe, North America and eastern Siberia",
    "image_link": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Common_eider_male_at_Jones_Beach_%2804702%29.jpg",
    "id": 56
}
*/

async function App() {
  const response = await fetch(
    "https://zoo-animal-api.herokuapp.com/animals/rand"
  );
  const data = await response.json();
  const section = document.createElement("section");
  section.innerHTML = `
    <img src="${data.image_link}"</img>
    <div>
        <h1>${data.name}</h1>
        <h2>${data.latin_name}</h1>
        <p>${data.name} lives in ${data.habitat} and eats ${data.diet}
    </div>
  `;

  document.body.appendChild(section);
}
App();
