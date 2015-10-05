#!/bin/sh
DIR=$(cd $(dirname $0); pwd)
TARGETENV=${DIR}/targetfiles
# coffeescriptコンパイル
coffee -o ${TARGETENV}/js/ -c ${DIR}/coffee/
coffee -o ${TARGETENV}/spec/ -c ${DIR}/spec/

# テスト対象ファイル定義生成
output=
files=${TARGETENV}"/spec/*Spec.js"

for filepath in ${files}
do
  filename=`basename ${filepath}`
  output=\'spec/${filename%.js}\',${output}
done

output="specs = ["${output/%?/}"];"
echo ${output} > ${TARGETENV}/def/specs.js

# UnitTest実行
phantomjs ${TARGETENV}/phantomjs_jasminexml_runner.js ${TARGETENV}/phantomRunner.html ${DIR}/reports