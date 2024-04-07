import { parse, format } from "date-fns";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function replacePuntuationToUnderscore(str) {
    return str.replace(/[\s!@#$%^&*()\-_=+[\]{};:'",.<>/?\\|`~]/g, "_");
}

function parseNZDate(dateString) {
    const match = dateString.match(/on\s+(\d{1,2}\s+\w+\s+\d{4})/);
    const extractedDate = match ? match[1] : null;
    if (extractedDate) {
        const date = parse(extractedDate, "d MMMM yyyy", new Date());
        const formattedDate = format(date, "yyyy-MM-dd");
        return formattedDate;
    } else {
        return null;
    }
}

export { sleep, replacePuntuationToUnderscore, parseNZDate };
