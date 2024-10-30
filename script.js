function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let christmasDate = new Date(currentYear, 11, 24, 0, 0, 0);

    if (now > christmasDate) {
        christmasDate = new Date(currentYear + 1, 11, 24, 0, 0, 0);
    }

    const difference = christmasDate - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        ${days} dní ${hours} hodin ${minutes} minut ${seconds} sekund
    `;
}

// Funkce pro kopírování odkazu
function copyLink() {
    const currentUrl = window.location.href.split('?')[0];
    const shareUrl = `${currentUrl}?share=true`;
    navigator.clipboard.writeText(shareUrl).then(() => {
        const alert = document.getElementById("copy-alert");
        alert.style.display = "block";
        setTimeout(() => alert.style.display = "none", 2000);
    });
}

// Kontrola, zda je URL sdílená a aktualizace každou sekundu
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('share')) {
    setInterval(updateCountdown, 1000);
}
