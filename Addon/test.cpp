#include <stdio.h>
#include <iostream>
// #include "SimpleAnomalyDetector.h"

class test{
    public:
    test(double* x, double y) {
        *x+=y;
    }
    double addTwo(double x, double y) {
        return x+y;
    }

};
// #include <stdio.h>
// #include <iostream>
// #include "SimpleAnomalyDetector.h"

// class test{
//     public:
//     test() {
//         TimeSeries timeSeries("anomalyTrain.csv");
//         SimpleAnomalyDetector sad;
//         sad.learnNormal(timeSeries);

//     }

//     int testing() {
//         return 1;
//     }


// };