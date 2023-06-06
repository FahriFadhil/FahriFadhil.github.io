import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor (params) {
        super(params)
        this.setTitle('Match Games')
    }

    async getHtml () {
        return `
        <h1>Match</h1>
        `    
    }
}