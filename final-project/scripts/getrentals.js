const url = "https://raw.githubusercontent.com/Heavenlyaura/wdd230/main/final-project/data/rentals.json"
const table = document.querySelector('table');
const tBody = document.querySelector('.tbody');
const typeHead = document.querySelector('.type')
const personsHead = document.querySelector('.persons')
const reservationHead = document.querySelector('.reserve');
const walkInHead = document.querySelector('.walk-in');
const walkinHead = document.querySelector('.walk-in')
const reserveHead = document.querySelector('.reserve')



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
    let reserveFull = data.Reservations.fullDay;
    let reserveHalf = data.Reservations.halfDay;
    let walkFull = data.Walkin.halfDay;
    let walkHalf = data.Walkin.fullDay;

    let row = `<tr> 
    <td data-cell="name" >${type}</td>
    <td data-cell="maxpersons" >${maxPersons}</td>
    <td data-cell="reservefull" >${reserveFull}</td>
    <td data-cell="reserveHalf" >${reserveHalf}</td>
    <td data-cell="walkFull" >${walkFull}</td>
    <td data-cell="walkHalf" >${walkHalf}</td>
    </tr>`
          
        tBody.innerHTML += row
  });

}

getRentals(url)