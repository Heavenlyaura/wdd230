// copyright
const copyrightSymbol = '\u00A9';
const copyright = document.getElementById("copyright").innerText;
const visits = document.querySelector('.visit');
let numVisits = Number(localStorage.getItem('numVisit') || 0)


if (numVisits !== 0) {
    visits.textContent = `Visited: ${numVisits}`;
}
else {
    visits.textContent = 'This is your first visit! Welcome!!'
}

numVisits++;

localStorage.setItem('numVisit', numVisits)

document.getElementById('copyright').innerText = `Goodness A. Okafor ${copyrightSymbol} 2024 ${copyright}`;

// last modified
const lastModified = document.lastModified;

document.getElementById('last-modified').innerText = `Last Modified: ${lastModified}`;