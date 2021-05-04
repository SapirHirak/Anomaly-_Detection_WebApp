const learn = require('./build/Release/learnNormal')

let modelId1 = 12345
let modelId2 = 56789

// send path for learning and ID for storing normalModel
learn.learnN("reg_flight.csv", modelId1, "regression")
learn.learnN("reg_flight.csv", 100, "hybrid")
learn.learnN("anomalyTrain.csv", modelId2, "hybrid")
learn.learnN("anomalyTrain.csv", 90, "oopsie")

// send path for detecting continuous anomalies and ID for the normalModel we want
let anomaliesJSON1 = learn.detect("anomaly_flight.csv", modelId1)
let anomaliesJSON2 = learn.detect("anomalyTest.csv", modelId2)
let anomaliesJSON3 = learn.detect("anomalyTest.csv", 190)
console.log(anomaliesJSON1)
console.log(anomaliesJSON2)
console.log(anomaliesJSON3)