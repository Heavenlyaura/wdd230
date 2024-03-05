// copyright
const copyrightSymbol = '\u00A9';
const copyright = document.querySelector("#copyright");
const visits = document.querySelector('.visit');
const footer = document.querySelector('footer');
let numVisits = Number(localStorage.getItem('numVisit') || 0)



// footer.style.backgroundColor = 'black'

// footer.textContent = 'thi os breewjds'
if (numVisits !== 0) {
    visits.textContent = `Visited: ${numVisits}`;
}
else {
    visits.textContent = 'This is your first visit! Welcome!!'
}

numVisits++;

localStorage.setItem('numVisit', numVisits)

copyright.textContent = `Goodness A. Okafor ${copyrightSymbol} 2024`;

// last modified
const lastModified = document.lastModified;

// console.log(lastModified)

document.querySelector('#last-modified').innerText = `Last Modified: ${lastModified}`;