import Deck from './utils/Deck'
// import MatchGame from './views/Match.js'
// import TriPieaksGame from './views/TriPeaks.js'
// import PyramidGame from './views/Pyramid.js'

console.log('JS is loaded');

const deck = new Deck();
// document.querySelectorAll('.card').forEach(card => card.addEventListener('click', (ev) => ev.target.style.transform = 'rotateY(180deg)'))

const router = async () => {
    const routes = [
        { path: '/match', view: MatchGame },
        { path: '/tri-peaks', view: TriPieaksGame },
        { path: '/pyramid', view: PyramidGame }
    ]
    const possibleMatch = routes.map(route => {
        return {
            route: route,
            result: location.pathname === route.path
        }
    })
}