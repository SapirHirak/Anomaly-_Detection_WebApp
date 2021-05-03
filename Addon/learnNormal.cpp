#include <stdio.h>
#include <iostream>
#include "timeseries.cpp"
#include "SimpleAnomalyDetector.cpp"
#include "anomaly_detection_util.cpp"
#include "minCircle.cpp"
#include <node.h>
#include <sstream>
 
namespace learnNormal {
    using v8::Context;
    using v8::Function;
    using v8::FunctionCallbackInfo;
    using v8::FunctionTemplate;
    using v8::Isolate;
    using v8::Local;
    using v8::Number;
    using v8::Object;
    using v8::Persistent;
    using v8::String;
    using v8::Value;
    using v8::Array;
    using v8::Exception;

    SimpleAnomalyDetector sad;

    void Learn(const FunctionCallbackInfo<Value>&args) {
        Isolate* isolate = args.GetIsolate();
        TimeSeries tsTrain(*v8::String::Utf8Value(args[0])); 
	    sad.learnNormal(tsTrain);
        args.GetReturnValue().Set(args[1]->NumberValue());;
    }

    void Detect(const FunctionCallbackInfo<Value>&args) {
	    TimeSeries tsTest(*v8::String::Utf8Value(args[0]));
	    std::vector<AnomalyReport> anomalyReportVec = sad.detect(tsTest);

	    ofstream file("Anomalies-" + to_string((int)args[1]->NumberValue()) + ".json");
	    if (file.is_open()) {
	    	for (int i = 0; i < anomalyReportVec.size(); i++) {
	    		file << anomalyReportVec[i].timeStep<< "," << anomalyReportVec[i].description << std::endl;
	    	}
	    	file.close();
	    }
        
        args.GetReturnValue().Set(args[1]->NumberValue());
    }



    void Initialize(Local<Object> exports) {
        NODE_SET_METHOD(exports, "learnN", Learn);
        NODE_SET_METHOD(exports, "detect", Detect);
    }

    NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize);


}
