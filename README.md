# Serverless Task Management REST API on AWS

A production-grade, event-driven REST API built using *Node.js, **AWS Lambda, **Amazon API Gateway (HTTP API v2), and **Amazon DynamoDB, deployed declaratively via the **Serverless Framework (v3)*.

---

## 📌 Architecture Overview

```text
[Client / curl] 
       │
       ▼
[Amazon API Gateway (HTTP API v2)]
       │
       ├── GET  /            ──► [AWS Lambda: hello]
       ├── POST /tasks       ──► [AWS Lambda: createTask] ──► [Amazon DynamoDB: TasksTable]
       ├── GET  /tasks       ──► [AWS Lambda: getTasks]   ──► [Amazon DynamoDB: TasksTable]
       └── PUT  /tasks/{id}  ──► [AWS Lambda: updateTask] ──► [Amazon DynamoDB: TasksTable]

- Compute: AWS Lambda (nodejs18.x, modular handlers)

- API Management: Amazon API Gateway (HTTP API v2)

- Database: Amazon DynamoDB (NoSQL, On-Demand / Pay-Per-Request billing mode)

- Infrastructure as Code (IaC): Serverless Framework v3

- Primary Region: us-east-1

*****API Endpoints & Usage*****
1. Health Check

curl -X GET https://<api-id>[.execute-api.us-east-1.amazonaws.com/](https://.execute-api.us-east-1.amazonaws.com/)

2. Create Task

curl -X POST https://<api-id>[.execute-api.us-east-1.amazonaws.com/tasks](https://.execute-api.us-east-1.amazonaws.com/tasks) \
  -H "Content-Type: application/json" \
  -d '{"title": "Complete Cloud Project", "description": "Deploy Serverless REST API on AWS"}'

3. List All Tasks

curl -X GET https://<api-id>[.execute-api.us-east-1.amazonaws.com/tasks](https://.execute-api.us-east-1.amazonaws.com/tasks)

4. Update Task Status

curl -X PUT https://<api-id>[.execute-api.us-east-1.amazonaws.com/tasks/](https://.execute-api.us-east-1.amazonaws.com/tasks/){id} \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'

*****Local setup & Development*****
Prerequisites
    - Node.js (v18+) & npm

    - AWS CLI configured with valid credentials (aws configure)

    - Serverless Framework v3 globally installed (npm install -g serverless)

****STEPS****
1. Clone the repository:

git clone [https://github.com/Ranjith-Kumar-Edagottu/aws-node-http-api-project.git](https://github.com/Ranjith-Kumar-Edagottu/aws-node-http-api-project.git)
cd aws-node-http-api-project

2. Install dependencies

   Bash: npm install

3. Deploy to AWS:

   Bash: serverless deploy

4. Tear down AWS resourses:

   Bash: serverless remove

*****Best Practices Implemented*****

- Least Privilege IAM: Lambda functions are scoped strictly to necessary DynamoDB         actions (PutItem, Scan, UpdateItem, GetItem).

- Cost Hygiene: Utilizes DynamoDB PAY_PER_REQUEST billing mode and Serverless teardown    commands to maintain zero idle costs.

- Clean Git Workflow: Maintained structured main and dev branching strategies.
