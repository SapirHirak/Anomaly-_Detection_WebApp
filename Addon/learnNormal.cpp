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


    void Method(const FunctionCallbackInfo<Value>&args) {
        Isolate* isolate = args.GetIsolate();
        Local<Context> context = isolate->GetCurrentContext();
        Local<Object> obj = args[0]->ToObject(context).ToLocalChecked();

        
        TimeSeries tsTrain("anomalyTest.csv");
	    TimeSeries tsTest("anomalyTest.csv");
	    SimpleAnomalyDetector sad;
	    sad.learnNormal(tsTrain);
	    std::vector<AnomalyReport> anomalyReportVec;
	    anomalyReportVec = sad.detect(tsTest);

        // double f = sad.getCorrelationThreshold();
        Local<Number> value1 = Local<Number>::Cast(args[0]);
        Local<Number> value2 = Local<Number>::Cast(args[1]);
        auto total = value2;
        // double d = args[0]->NumberValue();
        // ofstream file();

        // auto total = Number::New(isolate, f);
        args.GetReturnValue().Set(total);
        
    }

    void Initialize(Local<Object> exports) {
        NODE_SET_METHOD(exports, "learnN", Method);
    }

    NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize);


}
