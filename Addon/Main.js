const learn = require('./build/Release/learnNormal')

// send path, followed by client id
console.log(learn.learnN("anomalyTrain.csv",76))
learn.detect("anomalyTest.csv", 12345432)