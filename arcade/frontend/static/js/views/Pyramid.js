import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor (params) {
        super(params)
        this.setTitle('Pyramid Games')
    }

    async getHtml () {
        return `
        <h1>Pyramid</h1>
        `    
    }
}