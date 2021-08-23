const address = ["Quartier foo 457", "Marrakech", "Morocco"];

const [street, city, country] = address;

console.log(`${street} ${city} ${country}`);

// const [street, , country] = address; // skipping city

// const [, city, country] = address; // skipping street

// onst [, city="Rabat", country] = address; // defaulting city var to Rabat
