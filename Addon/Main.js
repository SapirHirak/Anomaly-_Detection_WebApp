const api = require('./build/Release/API')

let modelId1 = 12345
let modelId2 = 56789

// send path for learning and ID for storing normalModel
api.learn("reg_flight.csv", modelId1, "regression")
api.learn("reg_flight.csv", 100, "hybrid")
api.learn("anomalyTrain.csv", modelId2, "hybrid")
// test invalid id
api.learn("anomalyTrain.csv", 90, "oopsie")

// send path for detecting continuous anomalies and ID for the normalModel we want
let anomaliesJSON1 = api.detect("anomaly_flight.csv", modelId1)
let anomaliesJSON2 = api.detect("anomalyTest.csv", modelId2)
let anomaliesJSON3 = api.detect("anomalyTest.csv", 190)
console.log(anomaliesJSON1)
console.log(anomaliesJSON2)
// test invalid id
console.log(anomaliesJSON3)

// test delete
api.deleteModel(modelId1);
// test deleted id
console.log(api.detect("anomaly_flight.csv", modelId1));

