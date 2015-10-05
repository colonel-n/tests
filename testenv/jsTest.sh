#!/bin/sh
DIR=$(cd $(dirname $0); pwd)
# coffeescriptコンパイル
coffee -o ${DIR}/js/ -c ${DIR}/src/js/
coffee -o ${DIR}/spec/ -c ${DIR}/src/spec/


# テスト対象ファイル定義生成
output=""
files=${DIR}"/spec/*Spec.js"

for filepath in ${files}
do
  filename=`basename ${filepath}`
  output=\'spec/${filename%.*}\',${output}
done
output="specs = ["${output/%?/}"];"
echo ${output} > def/specs.js

# UnitTest実行
phantomjs ${DIR}/phantomjs_jasminexml_runner.js ${DIR}/phantomRunner.html ${DIR}/reports