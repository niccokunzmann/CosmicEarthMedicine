/* Hide and show elements that have the class subscription with a class matching the newsletter uid.
 *
 */


function getJSONStorage(key, default_) {
    const content = localStorage.getItem(key);
    const defaultValue = (default_ == undefined) ? null : default_;
    if (!content) {
        return defaultValue;
    }
    try {
        return JSON.parse(content);
    } catch (e) {
        console.log(e);
        return defaultValue;
    }
}

function setJSONStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getSubscriptions() {
    return getJSONStorage("subscriptions", []);
}


function addSubscription() {
    // see https://stackoverflow.com/a/901144/1320237
    const urlParams = new URLSearchParams(window.location.search);
    let newList = urlParams.get('subscribed');
    if (newList) {
        let uid = newList.toLowerCase();
        const subscriptions = getSubscriptions();
        if (!subscriptions.includes(uid)) {
            subscriptions.push(uid);
            setJSONStorage("subscriptions", subscriptions);
        }
    }
    unhideSubscriptions();
}

function unhideSubscriptions() {
    let elements = document.getElementsByClassName("subscription");
    const subscriptions = getSubscriptions();
    if (!document.body) {
        window.setTimeout(unhideSubscriptions, 10);
        return;
    }
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.classList.add("hidden");
        for (let subscription of subscriptions) {
            for (let j = 0; j < element.classList.length; j++) {
                if (element.classList[j].toLowerCase() == subscription.toLowerCase()) {
                    element.classList.remove("hidden");
                }
            }
        }
    }
}


window.addEventListener("load", addSubscription());
window.addEventListener("load", unhideSubscriptions());

