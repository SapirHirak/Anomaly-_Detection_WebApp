{
    "libraries": [
    "timeseries.h",
    "SimpleAnomalyDetector.h",
    "minCircle.h",
    "HybridAnomalyDetector.h",
    "CircleAnomalyDetector.h",
    "AnomalyDetector.h",
    "anomaly_detection_util.h",
    ],
    "include_dirs": [
      "<!(node -e \"require('nan')\")"
    ],
  "targets": [
    {
      "target_name": "calculate",
      "sources": [ "./calculate.cpp" ]
    },
    {
      "target_name": "learnNormal",
      "sources": [ "./learnNormal.cpp" ]
    }
  ]
}