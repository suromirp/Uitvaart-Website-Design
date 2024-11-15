// Functie om scrollpositie op te slaan
export function saveScrollPosition() {
    localStorage.setItem("scrollPosition", window.scrollY);
}

// Functie om scrollpositie te herstellen
export function restoreScrollPosition() {
    const scrollPosition = localStorage.getItem("scrollPosition");
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
    }
}

// Event listeners om de functies aan te roepen
window.addEventListener("beforeunload", saveScrollPosition);
window.addEventListener("load", restoreScrollPosition);

console.log("main.js is running!");