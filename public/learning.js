let natural = require('natural');
let compromise = require('compromise')

// singularise/pluralise language
var nounInflector = new natural.NounInflector();
// console.log(nounInflector.pluralize("mouse"))
// console.log(nounInflector.singularize("stimuli"))

// //string distance
let string1 = "zoe"
let string2 = "zozo"
let string3 = "lizard"

// console.log("1 vs 2: ", natural.JaroWinklerDistance(string1,string2))
// console.log("1 vs 3: ", natural.JaroWinklerDistance(string1,string3))

//classify with ML
var classifier = new natural.BayesClassifier();

var trainingData = [
    {text: 'So many sneakers starting at $40', label: 'promotion'},
    {text: 'BOGO FREE. 2 days only', label: 'promotion'},
    {text: 'Top picks, Made For You', label: 'promotion'},
    {text: 'Last call for $50 off', label: 'promotion'},
    {text: 'Last chance: Leather & Suede under $60', label: 'promotion'},
    {text: 'Don\'t miss out. Surprise Sale ends Friday', label: 'promotion'},
    {text: 'Your statement is available online', label: 'inbox'},
    {text: 'Confirm your account on Heroku', label: 'inbox'},
    {text: 'Project next steps', label: 'inbox'},
    {text: 'Order confirmation', label: 'inbox'},
    {text: 'Action Required: Survey due Friday', label: 'inbox'},
    {text: 'Your tickets for Justin Bieber', label: 'inbox'}
]

var testData = [
    {text: 'Files due today', label: 'inbox'},
    {text:'Sale on tops', label: 'promotion'},
    {text: 'Getting started on Heroku', label: 'inbox'},
    {text: 'Prices drop Friday on your favourite looks', label: 'promotion'}
]

trainingData.forEach (item => {
    classifier.addDocument(item.text, item.label)
})

classifier.train();

testData.forEach(item => {
    var labelGuess = classifier.classify(item.text)
    // console.log('text : ', item.text)
    // console.log('label: ', labelGuess)
    // console.log(classifier.getClassifications(item.text))
})

//Term frequency invert document frequency 
Tf = natural.TfIdf;
tf = new Tf();

tf.addDocument('this document is about node');
tf.addDocument('this document is about ruby');
tf.addDocument('this is a document about ruby and node')
tf.addDocument('this document is about node, it has node examples')

// console.log('node ---------------------------------');
// tf.tfidfs('node', function(i, measure) {
//     console.log('document #' + i  + ' is ' + measure)
// });

// console.log('node ---------------------------------');
// tf.tfidfs('ruby', function(i, measure) {
//     console.log('document #' + i  + ' is ' + measure)
// });
// normalises text, no capitals or symbols, seperates sentences
var docx = nlp("Hey this is me ZOZO writing a message. Alg tho.")
console.log(docx.sentences().terms())