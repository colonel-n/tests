#!/bin/sh
DIR=$(cd $(dirname $0); pwd)
TARGETENV=${DIR}/js
# coffeescriptコンパイル
coffee -o ${TARGETENV}/ -c ${DIR}/coffee/

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
phantomjs ${TARGETENV}/phantomjs_jasminexml_runner.js ${DIR}/phantomRunner.html ${DIR}/reports

# mimify & 1本化
r.js -o app.build.js 