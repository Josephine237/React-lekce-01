'use strict';
console.log('%c JavaScript funguje! ', 'background-color: black; color: lime;');


// Template string Ahoj ${x} světe!

    let firstName = "Josie";
    let age = 23;

    console.log("Ahoj, jmenuji se " + firstName + ", a je mi " + age + " let.");
     
    // pomocí teplate stringu, to lze napsat o dost jednodušejí ... píšeme ho pomocí zpětných uvozovek

    console.log(`Ahoj, jmenuji se ${firstName}, a je mi ${age} let.`)

// Ternární operátor

    let favoritePhrase = "Love That";

    if (favoritePhrase === "Love That") {
        console.log("I Love That!");
    } else {
        console.log("I don't like That");
    }

        // toto se dá napsat pomocí ternárního operátoru
        favoritePhrase === "Love That" ? console.log("I love That!") : console.log("I Don't Like That")

    let userName = " "

    userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

