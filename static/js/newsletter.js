function submitNewsletter() {
    const form = document.getElementById("newsletter-form");
    const email = document.getElementById("newsletter-email");
    if (email.checkValidity()) {
        // subscribe
        localStorage.setItem("subscribed", email.value);
        showVideoIfSubscribed();
        form.submit();
    } else {
        alert("Please enter a valid email address!");
    }
}

function isSubscribed() {
    return localStorage.getItem("subscribed") != null;
}

function showVideoIfSubscribed() {
    if (isSubscribed()) {
        const youtubes = document.getElementsByClassName("youtube");
        for (let i = 0; i < youtubes.length; i++) {
            const youtube = youtubes[i];
            youtube.classList.remove("hidden");
        }

    }
}