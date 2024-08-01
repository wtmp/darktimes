#!/bin/bash
cd ../api
./gradlew clean installDist copyConfig
chmod +x $(pwd)/build/install/api/bin/api