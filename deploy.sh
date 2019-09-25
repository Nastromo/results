#!/bin/bash

npm run build
cp devempr.pem build
cd build
mkdir prod

cp -R static prod
cp asset-manifest.json prod
cp favicon.ico prod
cp index.html prod
cp manifest.json prod
cp service-worker.js prod

tar czf app.tar.gz static/ asset-manifest.json favicon.ico index.html manifest.json service-worker.js

sftp -i "devempr.pem" ubuntu@192.168.20.216 << 'ENDSSH'
put app.tar.gz
exit
ENDSSH

rm app.tar.gz

ssh -i "devempr.pem" ubuntu@192.168.20.216 << 'ENDSSH'
rm -rf results_e/* results_e/.*
tar xf app.tar.gz -C results_e
rm app.tar.gz
ENDSSH