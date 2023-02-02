const char_rot = (number, char) => String.fromCharCode(char.charCodeAt(0) + number);

console.log(char_rot(0, 'Z'));

const cesear = (number, phrase) => {
    const split = phrase.split("");
    let returned = "";
    split.forEach(letter => returned += char_rot(number, letter));
    return returned;
}
const mashed = cesear(2, 'Bonjour tout le monde') ;

console.log(mashed);

const augustus = (number, mashed) => {
    const split = mashed.split("");
    let returned = "";
    split.forEach(letter => returned += char_rot(-number, letter));
    return returned;
}

const unmashed = augustus(2, mashed);

console.log(unmashed);
