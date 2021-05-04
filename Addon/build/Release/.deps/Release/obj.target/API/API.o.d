cmd_Release/obj.target/API/API.o := g++ -o Release/obj.target/API/API.o ../API.cpp '-DNODE_GYP_MODULE_NAME=API' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DBUILDING_NODE_EXTENSION' -I/usr/include/nodejs/include/node -I/usr/include/nodejs/src -I/usr/include/nodejs/deps/openssl/config -I/usr/include/nodejs/deps/openssl/openssl/include -I/usr/include/nodejs/deps/uv/include -I/usr/include/nodejs/deps/zlib -I/usr/include/nodejs/deps/v8/include  -fPIC -pthread -Wall -Wextra -Wno-unused-parameter -m64 -fPIC -O3 -fno-omit-frame-pointer -fno-rtti -fno-exceptions -std=gnu++1y -MMD -MF ./Release/.deps/Release/obj.target/API/API.o.d.raw   -c
Release/obj.target/API/API.o: ../API.cpp ../timeseries.cpp \
 ../timeseries.h ../SimpleAnomalyDetector.cpp ../SimpleAnomalyDetector.h \
 ../anomaly_detection_util.h ../AnomalyDetector.h ../minCircle.h \
 ../HybridAnomalyDetector.cpp ../HybridAnomalyDetector.h \
 ../anomaly_detection_util.cpp ../minCircle.cpp \
 /usr/include/nodejs/src/node.h /usr/include/nodejs/deps/v8/include/v8.h \
 /usr/include/nodejs/deps/v8/include/v8-version.h \
 /usr/include/nodejs/deps/v8/include/v8config.h \
 /usr/include/nodejs/deps/v8/include/v8-platform.h \
 /usr/include/nodejs/src/node_version.h
../API.cpp:
../timeseries.cpp:
../timeseries.h:
../SimpleAnomalyDetector.cpp:
../SimpleAnomalyDetector.h:
../anomaly_detection_util.h:
../AnomalyDetector.h:
../minCircle.h:
../HybridAnomalyDetector.cpp:
../HybridAnomalyDetector.h:
../anomaly_detection_util.cpp:
../minCircle.cpp:
/usr/include/nodejs/src/node.h:
/usr/include/nodejs/deps/v8/include/v8.h:
/usr/include/nodejs/deps/v8/include/v8-version.h:
/usr/include/nodejs/deps/v8/include/v8config.h:
/usr/include/nodejs/deps/v8/include/v8-platform.h:
/usr/include/nodejs/src/node_version.h:
