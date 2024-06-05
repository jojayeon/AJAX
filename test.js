const a = `
https://apis.data.go.kr/6300000/eventDataService/eventDataListJson
?
serviceKey
=
dpEPUK36yqhSZNgzBL5MGZgpiVG2Q12SzEbTGv0kFXlqDuOKTFrOvaih2%2BBHmcBEMp%2Fhqy5qSaLYvVAG%2Fw75pw%3D%3D&`

const b = 'endpoint 주소' +  "주소 값";

const endPoint = 'http://apis.data.go.kr/6300000/eventDataService'

const keyname = `dpEPUK36yqhSZNgzBL5MGZgpiVG2Q12SzEbTGv0kFXlqDuOKTFrOvaih2%2BBHmcBEMp%2Fhqy5qSaLYvVAG%2Fw75pw%3D%3D
`

const example = `http://apis.data.go.kr/6300000/eventDataService/
eventDataListJson
?
serviceKey=${keyname}
&
numOfRows=10
&
pageNo=1`


console.log(example);