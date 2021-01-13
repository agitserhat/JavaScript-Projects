const bands = ['The Dark Side of the Moon', 'Pink Floyd Wish You Were Here', 'The Wall', 'Animals', 'The Division Bell', 'P•U•L•S•E', 'Delicate Sound of Thunder', 'Meddle', 'Atom Heart Mother', 'Ummagumma', 'The Endless River', 'Live At Pompeii'];

function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML =
  sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');

console.log(sortedBands);
