export default class Card {
    constructor(suit, value) {
        this.suit = suit 
        this.value = value 
    }

    append(element, suit, value) {
        element.appendChild(
            this.makeCard(suit, value)
        )
    }

    makeCard(suit, value) {
        const a = document.createElement('div')
        a.innerHTML = 
        `
        <div class="card">
            <div class="card-front" data-suit="${suit}" data-value="${value}">
                <div class="corner-number top">
                    <p>${value}</p>
                    <div class="pip">${suit}</div>
                </div>
                <div class="corner-number bottom">
                    <p>${value}</p>
                    <div class="pip">${suit}</div>
                </div>
                <div class="pip-container">
                    ${Array.from({length: typeof value == 'string' ? 1 : value}, () => `<div class="pip">${suit}</div>`).join('')}
                </div>
            </div>
            <div class="card-back"></div>   
        </div>
        `
        return a.firstElementChild
    }
}