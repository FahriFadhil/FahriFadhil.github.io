import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor (params) {
        super(params)
        this.setTitle('Arcade Games')
    }

    GAMES = [
        { name: 'match', url: '/match', art: 'https://source.unsplash.com/601x601?playing cards' },
        { name: 'tri-peaks', url: '/tri-peaks', art: 'https://source.unsplash.com/600x600?playing cards' },
        { name: 'pyramid', url: '/pyramid', art: 'https://source.unsplash.com/602x602?playing cards' }
    ]

    async getHtml () {
        return `
        <div class="game-container">
            ${this.GAMES.map(game => 
                `
                <a class="game-card" href="${game.url}">
                    <h3>${game.name.toUpperCase()}</h3>
                    <div class="game-bg-img" style="background-image: url('${game.art}')"></div>
                </a>
                `
            ).join('')}
        </div>
        `    
    }
}