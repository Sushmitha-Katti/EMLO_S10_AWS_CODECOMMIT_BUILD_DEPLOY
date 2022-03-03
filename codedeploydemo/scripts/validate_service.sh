#!/bin/bash

# verify to see app working fine or not
curl -v --silent localhost:3001/status 2>&1 | grep OK
