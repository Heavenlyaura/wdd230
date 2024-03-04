const linksURL = "https://heavenlyaura.github.io/wdd230/chamber/data/company.json";
const layout = document.querySelector('.layout');


async function getCompany(url) {
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        console.table(data);

        displayCompany(data.company);
    }
}

function displayCompany(companies) {

   companies.forEach(company => {
    console.log(company)
    let image = document.createElement('img');
    let card = document.createElement('div');
    let address = document.createElement('p');
    let contact = document.createElement('p');
    let website = document.createElement('a')

    // console.log(company.logo)
    /* set website attribute */
    website.setAttribute('href', company.website)
    website.textContent = company.website

    /* set image attribute */ 
    image.setAttribute('src', company.logo)
    image.setAttribute('alt', `${company.name} logo`)
    image.setAttribute('width', '200')

    /* set address and contact */
    address.textContent = company.address
    contact.textContent = company.contact;;

    card.appendChild(image)
    card.appendChild(address)
    card.appendChild(contact)
    card.appendChild(website)

    layout.appendChild(card)

   });
}

getCompany(linksURL)
