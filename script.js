const matrizAnimais = [
  ["Leão", "Felino", 5],
  ["Elefante", "Mamífero", 10],
  ["Girafa", "Herbívoro", 7],
  ["Tigre", "Felino", 4],
  ["Urso", "Onívoro", 6],
  ["Cachorro", "Onívoro", 8],
];

for (let i = 0; i < matrizAnimais.length; i++) {
  let animal = matrizAnimais[i];
  console.log(`Animal ${i + 1}:`);
  console.log(`Nome: ${animal[0]}`);
  console.log(`Espécie: ${animal[1]}`);
  console.log(`Idade: ${animal[2]}`);
  console.log("------------");
}