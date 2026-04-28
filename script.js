function findRashi() {
    let dob = document.getElementById("dob").value;

    if (!dob) {
        document.getElementById("result").innerHTML = "Please select your DOB";
        return;
    }

    let date = new Date(dob);
    let day = date.getDate();
    let month = date.getMonth() + 1;

    let zodiac = "";
    let symbol = "";

    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        zodiac = "Aries";
        symbol = "♈";
    }
    else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        zodiac = "Taurus";
        symbol = "♉";
    }
    else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        zodiac = "Gemini";
        symbol = "♊";
    }
    else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        zodiac = "Cancer";
        symbol = "♋";
    }
    else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        zodiac = "Leo";
        symbol = "♌";
    }
    else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        zodiac = "Virgo";
        symbol = "♍";
    }
    else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        zodiac = "Libra";
        symbol = "♎";
    }
    else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        zodiac = "Scorpio";
        symbol = "♏";
    }
    else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        zodiac = "Sagittarius";
        symbol = "♐";
    }
    else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        zodiac = "Capricorn";
        symbol = "♑";
    }
    else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        zodiac = "Aquarius";
        symbol = "♒";
    }
    else {
        zodiac = "Pisces";
        symbol = "♓";
    }

    document.getElementById("result").innerHTML =
        `Your Rashi is <br><span class="sign">${zodiac} ${symbol}</span>`;
}
