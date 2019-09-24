const cf = require('aws-cloudfront-sign');
const AWS = require('aws-sdk');
const NodeRSA = require('node-rsa');

var privateKeyStr = '-----BEGIN RSA PRIVATE KEY-----\n'+
'MIIEpQIBAAKCAQEA+cG41r26YapHKrCw9j5mnjlR+Lj9rnbN8WghR9cFygomwee4\n'+
'wolqKbdCc+hWBZlmBjmGR6NY9OoVFdzfbWgYDA+6y1qoa7klHqJSbWYJlZcJ/U04\n'+
'D1ND+Z07abowpZKNsnI/ak8g6Fg1LjeZWcaGXPakCrHsNTBl1lz7E/gELDMIDBzm\n'+
'4F4/LV3GRzP/7whge9poSdlZKHq3yYgFPTXZPYfJLf+y+mdwJ0fktjSz29b4wMQe\n'+
'1U5R8kZnz1wrMUJ4RHpJdMYj2mg/eVaQXcty27ufNsR0MlS+RavHSDMcw/Ww8cX+\n'+
'1X8eAMdZZ3+Hf+E3BJ+DHT12hjOURO5CEQTWaQIDAQABAoIBAQDz15hQSGKdEfNz\n'+
'kZjkgZ4M4qfOb0Z2PFXrWKANlLh5PpoCfOtdO25kFiESKwc5ZkA+2ZDphmjGjXhS\n'+
'pReaqKO5uu3DttpyegvsscxKNPIsk49UOD0AcWoPXdxw6DCwprojO/oAIAtf7SbW\n'+
'3b+h7/qk7sTQEFAuyfbTaGpWX7IrNyXiL5yGcZxL7vCUuKfDt3xAyp7BWAGaSNxm\n'+
'Vzjse6LMjWBUexwLvyk/Jd3LslrwNbZmySyoi+VF7SBfrvx+NekIDa49eQM6XN98\n'+
'vizAnlOxk8jZe/467VcB4Q0ayg52KVULMY4WyQvhv7QOVS/f6qr5jH8fV/PqrB1o\n'+
'U2GCs7dRAoGBAP8kfaPOiYuqUYS9Mm0JMPs4uxVmcPR++eEOHWYW2RjrTfwndHTA\n'+
'iyQz9L04C8PgeUqS+VuOIvtwt/FyFnTENWypiTk2tEcAYFMjTjlaocr9I8eNQnRr\n'+
'VLw7JJY0yjEzlH2pKvZa6OIlICaKe9rMNFky1drtI2A1mW82J2TA0kBFAoGBAPqY\n'+
'mP1bamKlkzShIXB45htsfRJSQjuD661WbB3x2xNjThoj5J4vYZmWYvdY5w84DbYR\n'+
'FUAf14PWYPdsYN/PlqP/QiEYAwhM5Lo/9vpT1E1vyxKebxBXb4OtuuhrX7JvCF7l\n'+
'TtSDaItgokpSGMlnd5xFcOGpeVtApGs5cpn2DjnVAoGAGwOnFd/5akNHTFGn9CmD\n'+
'+SWBkXt+PDTxiiWvcS68H8pSQH+A8hes49FoeVxkyoGK9h1nr4z2IT9HCpZ00Doy\n'+
'GeY9dERZhCcDC+pyDtqMxOxWjHtlbOQsXZ25evnt6pW2hDOUK+9mNwONSudgw8LZ\n'+
'TBR41ixDkZ07OK44L4/G8y0CgYEA+mqXJ0a8rssqqQMDeXM27tygtzhAO1z+m/6q\n'+
'l9nhxCQOHg0UHgbXDzW6u9W5P/oRqYi0pZmsMXB/AYDp5X152XPwz0VBcn/0aTIW\n'+
'SdyPYLqAQaDU942IQBvRlQQHYzWVNc8L0U1noS/1vTMA1fJxElZKERbb0JZuNz/3\n'+
'B2dcm+kCgYEAuXl3Do+Fwo8WP+9pnXWALjaqUuTSxGKEMFs/aApEQMCEC/CNTfz9\n'+
'rfewmJwTFT5Yh/CrvPC48cqCtCkXpsPQcNGO6fEPlgAao7RhNeSAp1fOQxdxwR5m\n'+
'1pSRBoISWCHHkqGVCUdNWOt0upQsmBeuOeD7F3R/uHrRVp/AH40Zk+M=\n'+
'-----END RSA PRIVATE KEY-----';

const options = {keypairId: 'APKAIB6Q65U2PGANUIAQ', privateKeyString: privateKeyStr};

var s3 = new AWS.S3();
var exports = (module.exports = {});

var cloudfront = new AWS.CloudFront();

exports.getCloudfrontCookie = () => {
    return cf.getSignedCookies('http://d2c2rhfqxs9fwp.cloudfront.net', options);
};
