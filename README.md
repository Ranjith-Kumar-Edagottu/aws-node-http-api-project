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
