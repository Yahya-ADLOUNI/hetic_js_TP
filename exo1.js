class Parser {
    static splitter;
    static str;

    constructor(spliter) {
        this.spliter = spliter
    }

    parse() {
        const split = phrase.split(this.spliter);
        const array = split.filter(element => element.trim().match(/^\d+$/))
        let result = "";
        array.forEach(e => result += e.trim() + " ")
        this.str = result.trim();
    }
}

const phrase = "8790: bonjour le monde:8987:7777:Hello World:    9007";
const p = new Parser(":");
p.parse(phrase);
console.log(p.str);
