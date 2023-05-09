
const words = {
    number: "",
    adjective: "",
    pluralNoun: "",
    adverb: "",
    anotherAdjective: ""
}

function startMadlib() {
    words.number = prompt ("give me a number");
    words.adjective = prompt ("give me an adjective");
    words.pluralNoun = prompt("give me an plural noun");
    words.adverb = prompt ("give me an adverb");
    words.anotherAdjective = prompt ("give me another adjective");
    return words;
}

console.log(startMadlib());

function createmadlib() {
    return `Once upon a time a group of ${words.number} General Assembly graduates
    got together and made a startup called ${words.adjective} Technologies.
    Their goal was to create smart ${words.pluralNoun}.
    They approached the challenge ${words.adverb}
    which ultimately lead them to ${words.anotherAdjective} fame.`

}
alert (createmadlib());
 console.log(createmadlib());


 
