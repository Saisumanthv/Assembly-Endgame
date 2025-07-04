import { words } from "./words"

export function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

export function getFarewellText(language) {
    const options = [
        `Farewell, ${language}`,
        `Adios, ${language}`,
        `R.I.P., ${language}`,
        `We'll miss you, ${language}`,
        `Oh no, not ${language}!`,
        `${language} bites the dust`,
        `Gone but not forgotten, ${language}`,
        `The end of ${language} as we know it`,
        `Off into the sunset, ${language}`,
        `${language}, it's been real`,
        `${language}, your watch has ended`,
        `${language} has left the building`,
        `So long, ${language}`,
        `Catch you later, ${language}`,
        `${language} takes a bow`,
        `Hasta la vista, ${language}`,
        `${language} rides off`,
        `Goodbye forever, ${language}`,
        `${language} sails away`,
        `Time to part, ${language}`
    ];

    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

export function getCorrectGuessMsg(letter) {
    const options = [
        `Boom! '${letter}' nails it!`,
        `Sweet! '${letter}' is spot on!`,
        `'${letter}' shines bright!`,
        `Nice one! '${letter}' is in!`,
        `'${letter}' for the win!`,
        `You rock! '${letter}' is perfect!`,
        `'${letter}' is your lucky pick!`,
        `Oh yeah, '${letter}' scores!`,
        `'${letter}' is pure gold!`,
        `High five! '${letter}' hits the mark!`,
        `'${letter}' is unstoppable!`,
        `Wow, '${letter}' is on fire!`,
        `'${letter}' makes it happen!`,
        `Bingo! '${letter}' is the one!`,
        `'${letter}' leads the way!`,
        `Great call! '${letter}' is awesome!`,
        `'${letter}' steals the show!`,
        `You're killing it with '${letter}'!`,
        `'${letter}' is a game-changer!`,
        `Look at that! '${letter}' rules!`
    ];

    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}