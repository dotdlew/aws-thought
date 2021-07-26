// load AWS SDK for NodeJS
const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
// create s3 service object
const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

// set region
AWS.config.update({ region: "us-east-2" });

// create params for calling createBucket
var bucketParams = {
  Bucket: "user-images-" + uuidv4(),
};

// call S3 to create bucket
s3.createBucket(bucketParams, (err, data) => {
  if (err) {
    console.log("Error!", err);
  } else {
    console.log("Success!");
  }
});
