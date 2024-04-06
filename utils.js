function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function replacePuntuationToUnderscore(str) {
    return str.replace(/[\s!@#$%^&*()\-_=+[\]{};:'",.<>/?\\|`~]/g, "_");
}

export { sleep, replacePuntuationToUnderscore}