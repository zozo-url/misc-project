let natural = require('natural');
var compromise = require('compromise')
//normalises text, all lowercase + no symbols + splits by sentences
var docx = nlp("Hey this is me Zoe Claasen writing a message from New Zealand. Alg tho.")
console.log(docx.data())
// result == [
//     {text: "Hey this is me ZOZO writing a message. ", normal: "hey this is me zozo writing a message"}, 
//     {text: "Alg tho.", normal: "alg tho"}
// ]

//Tokenisation
console.log(docx.sentences().terms().out('array'))
// result == ["hey", "this", "is", "me", "zozo", "writing", "a", "message", "alg", "tho"]

//Parts of speech tagging 
//includes lots of info including tags about what kind of word each one is etc
console.log(docx.sentences().terms().out('tags'))

//Named-entity recognition
// important words like names and places
console.log(docx.topics().text())
console.log(docx.places().text())
console.log(docx.people().text())
console.log(docx.people().lastNames().text())
// .organizations

//Noun Chunks + Verbs
//Noun Chunks + Verbs
console.log(docx.nouns().text());
console.log(docx.verbs().out('html'));
var hi = docx.sentences().terms().out('tags')
for(let i = 0; i <100; i ++){
    document.getElementById('test').innerHTML += hi.toString()   
}
