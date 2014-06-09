#!/bin/bash
# Ember app kit version update
APPDIR="/Users/fayimora/Code/brutehack-frontend"
PATCHDIR="/tmp/eakpatch"
EAKDIR="/tmp/ember-app-kit-master"

git clone stefanpenner/ember-app-kit /tmp/ember-app-kit-master
cd ${EAKDIR}
git pull origin master
cd ${APPDIR}

# first generate patches of important files
FILES="bower.json package.json Gruntfile.js testem.json .jshintrc .bowerrc" # app/app.js app/adapters/application.js"

echo "Patching application code with updates"
mkdir -p ${PATCHDIR}

for i in ${FILES}
do
  mkdir -p ${PATCHDIR}/$(dirname ${i})
  diff -Nau ${APPDIR}/${i} ${EAKDIR}/${i} > ${PATCHDIR}/${i}
  patch ${APPDIR}/${i} ${PATCHDIR}/${i}
done

echo "Updating tasks directory"
rm -rf ${APPDIR}/tasks/*
cp -r ${EAKDIR}/tasks/* ${APPDIR}/tasks/

cd ${APPDIR}
echo "Running npm update"
npm update

echo "Running bower update"
bower update
