import Deck from './utils/Deck.js'

const deck = new Deck();
// document.querySelectorAll('.card').forEach(card => card.addEventListener('click', (ev) => ev.target.style.transform = 'rotateY(180deg)'))

const router = async () => {
    const routes = [
        { path: '/match', view: MatchGame },
        { path: '/tri-peaks', view: TriPieaksGame },
        { path: '/pyramid', view: PyramidGame }
    ]
    const 
}