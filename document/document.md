## CURL send notification
Send messages to device with token
```
curl -X POST \
  https://fcm.googleapis.com/fcm/send \
  -H 'authorization: key=AAAA9kAm6nQ:APA91bEYnEyLYLJ6DQ9oz8HOFfwUFhUSNY6uXeU5ACjpN6zxNrzNQs0kwOvRC8woE1ZgjV_babqOPaMobCochs3l8R4OUqUyAlq8vY98e41mmMhtqHF5NakspLCApAaJAoLYeXFRv-3K' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 1ad6c6eb-4dfa-843a-8fbf-a910667c3314' \
  -d '{
    "to": "ehSSxFZ1B6U:APA91bEGLEd0Q05ka9CFUCpwUzZEemfAhkdMQ78blh0632cTFgYhpcZqwXugPT38ECHc44y84VVM7DOpzHPp8gpCHIchWd8LEwqwsSJZQdmGzuZXbvEzmktO5eQwJFfjWojQb6eRIjdA",
    "notification": {
      "title": "Background Message Title",
      "body": "Background message body",
      "click_action": "/profile",
      "icon": "pwa-192x192.png"
    },
    "data": {
    	"score":"3x1"
    }
}'
```

## Command Babel convert a file to ES 5
[https://codeburst.io/es6-in-cloud-functions-for-firebase-959b35e31cb0](https://codeburst.io/es6-in-cloud-functions-for-firebase-959b35e31cb0)
```$xslt
babel server/server.js --require=ignore-styles,babel-register --presets=es2015,react --out-file=server/server-es5.js
```