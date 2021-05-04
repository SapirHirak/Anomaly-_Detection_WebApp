const learn = require('./build/Release/learnNormal')

// let clientId = 12345

// send path for learning
// console.log(learn.learnN("anomalyTrain.csv"))
learn.learnN("reg_flight.csv")

// send path, followed by client id
// let anomaliesJSON = learn.detect("anomalyTest.csv", clientId)

// send path for detecting continuous anomalies
let anomaliesJSON = learn.detect("anomaly_flight.csv")
console.log(anomaliesJSON)

//print json to make sure it's valid
// const a = require(`./Anomalies-${clientId}.json`)
// console.log(a)