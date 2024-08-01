#!/bin/bash
./gradlew wrapper
./gradlew clean installDist copyConfig
chmod +x ./build/install/api/bin/api