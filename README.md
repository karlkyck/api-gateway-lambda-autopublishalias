# API Gateway Lambda AutoPublishAlias Example

Use Lambda AutoPublishAlias with API Gateway API

## AWS Costs

By following these instructions you will create an S3 bucket, API Gateway API and one Lambda in your AWS account.
Storage of files in the S3 bucket, consumption of the API Gateway endpoint and invocation of the Lambdas will result in AWS costs.
It is recommended that you delete the CloudFormation for this example once you have finished experimenting with it.

## Getting Started

### Prerequisites

1. [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
2. [Node.js 10.x](https://nodejs.org/dist/latest-v10.x/)

### Installing

Install the NPM dependencies.

```
npm i
```

### Building

Build the application.

```
npm run build
```

This will:

1. Clean the output directory
2. Run linting on the code
3. Run NPM audit on the dependencies
4. Run the TypeScript compiler
5. Run the Jest unit tests
6. Copy any runtime dependencies to the dist folder

## Deploying to AWS

### Create the Deployment Bucket

You'll need a deployment bucket in order to deploy your Serverless Application Model (SAM) stack.
Perform this one time task in your target AWS account.

```
aws cloudformation deploy \
--stack-name api-gateway-lambda-autopublishalias-artifact-bucket \
--template-file cloudformation/artifact-bucket.yaml
```

Take note of the auto generated [bucket name](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-view-stack-data-resources.html), you'll need it later when deploying.

### Packaging

Use the AWS CLI to package your application and copy it to the deployment bucket.

#### Upload the OpenAPI Spec

```
aws s3 cp openapi.yaml s3://<YOUR DEPLOYMENT BUCKET NAME GOES HERE>
```

#### Package the Application

```
aws cloudformation package \
--template-file sam.yaml \
--output-template-file sam-generated.yaml \
--s3-bucket <YOUR DEPLOYMENT BUCKET NAME GOES HERE>
```

### Deployment

```
aws cloudformation deploy \
--template-file sam-generated.yaml \
--stack-name api-gateway-lambda-autopublishalias \
--capabilities CAPABILITY_IAM \
--parameter-overrides \
DeploymentBucket=<YOUR DEPLOYMENT BUCKET NAME GOES HERE>
```

## Consume the API

Retrieve your API Gateway URL using the [AWS Console](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-call-api.html#apigateway-how-to-call-rest-api)

The following will retrieve a list of Posts

```
curl https://<YOUR API GATEWAY URL GOES HERE>/live/api/posts
```