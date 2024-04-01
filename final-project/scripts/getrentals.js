const url = "https://raw.githubusercontent.com/Heavenlyaura/wdd230/main/final-project/data/rentals.json"
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
    let maxPersons = data.MaxPersons;
    let reserveFull = data.Reservations;

  });

}

getRentals(url)