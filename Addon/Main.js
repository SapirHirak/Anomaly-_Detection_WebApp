const learn = require('./build/Release/learnNormal')

let clientId = 12345

// send path for learning
console.log(learn.learnN("anomalyTrain.csv"))
// send path, followed by client id
learn.detect("anomalyTest.csv", clientId)

//print json to make sure it's valid
const a = require(`./Anomalies-${clientId}.json`)
console.log(a)