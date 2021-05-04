const api = require('./build/Release/API')

let modelId1 = 12345
let modelId2 = 56789

// send path for learning, ID for storing normalModel, and tpye of detection we want
api.learn("reg_flight.csv", modelId1, "regression")
api.learn("anomalyTrain.csv", modelId2, "hybrid")
// test invalid id
api.learn("anomalyTrain.csv", 90, "oopsie")

// send path for detecting continuous anomalies and ID for the normalModel we want
let anomaliesJSON1 = api.detect("anomaly_flight.csv", modelId1)
console.log(anomaliesJSON1)
let anomaliesJSON2 = api.detect("anomalyTest.csv", modelId2)
console.log(anomaliesJSON2)

// test invalid id
let anomaliesJSON3 = api.detect("anomalyTest.csv", 90)
console.log(anomaliesJSON3)

// test delete
api.deleteModel(modelId1);
// test deleted id
console.log(api.detect("anomaly_flight.csv", modelId1));
// try deleting invalid is
api.deleteModel(190);

