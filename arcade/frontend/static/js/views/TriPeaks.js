import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor (params) {
        super(params)
        this.setTitle('Tri-Peaks Games')
    }

    async getHtml () {
        return `
        <h1>Tri-Peaks</h1>
        `    
    }
}