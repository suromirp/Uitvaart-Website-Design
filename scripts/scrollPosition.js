// Functie om scrollpositie op te slaan
export function saveScrollPosition() {
    localStorage.setItem("scrollPosition", window.scrollY);
}

// Event listeners om de functies aan te roepen
window.addEventListener("beforeunload", saveScrollPosition);
window.addEventListener("load", restoreScrollPosition);

// Functie om scrollpositie te herstellen
export function restoreScrollPosition() {
    const scrollPosition = localStorage.getItem("scrollPosition");
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
    }
}

console.log("main.js is running!");