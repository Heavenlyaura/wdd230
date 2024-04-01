const url = "https://raw.githubusercontent.com/Heavenlyaura/wdd230/380e579f6c882ae1287de90c04d996a42ac0c56c/final-project/data/rentals.json"
const table = document.querySelector('table');
// const reservationHead = document.querySelector('.reserve');
// const walkInHead = document.querySelector('.walk-in');




async function getRentals(url) {
  const response = await fetch(url);
  const data = await response.json();

  displayRentals(data)
  console.table(data)
};



function displayRentals(data) {

  let rentalsData = data.Rentals;
  console.log(rentalsData)

  rentalsData.forEach(data => {
    let type = data.Type;
    let maxPersons = data.MaxPersons

  });

}

getRentals(url)