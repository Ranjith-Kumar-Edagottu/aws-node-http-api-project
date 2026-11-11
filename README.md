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

