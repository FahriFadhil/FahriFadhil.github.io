import Lobby from "./views/Lobby.js";
import Match from "./views/Match.js";
import TriPeaks from "./views/TriPeaks.js";
import Pyramid from "./views/Pyramid.js";

const navigateTo = url => {
    history.pushState(null, null, url)
    router()
}

const router = async () => {
    const routes = [
        { path: "/", view: Lobby },
        { path: "/match", view: Match },
        { path: "/tri-peaks", view: TriPeaks },
        { path: "/pyramid", view: Pyramid },
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    const view = new match.route.view()

    document.querySelector('#app').innerHTML = await view.getHtml()
};

window.addEventListener("popstate", router)

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', ev => {
        if(ev.target.matches("[data-link]")) {
            ev.preventDefault()
            navigateTo(ev.target.href)
        }
    })
    router()
})