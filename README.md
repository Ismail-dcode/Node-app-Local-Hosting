# 🚀 Node.js Application Deployment using Docker & AWS EC2

## 📌 Project Overview

This project demonstrates a complete end-to-end DevOps workflow:

1. Created a simple Node.js application  
2. Containerized the application using Docker  
3. Built a Docker image  
4. Pushed the image to DockerHub  
5. Launched an AWS EC2 instance  
6. Pulled the Docker image inside EC2  
7. Ran the container using port mapping  

The application is successfully deployed and accessible via the EC2 public IP.

---

## 🛠️ Technologies Used

- Node.js
- Docker
- DockerHub
- AWS EC2
- Linux

---

## 🏗️ Architecture Diagram

![Deployment Architecture](https://github.com/Ismail-dcode/Node-app-Local-Hosting/blob/main/Local%20hosting.png)


## 📦 Step 1: Create Simple Node.js App

Example `server.js`:

```js
const http = require('http');

http.createServer((req, res) => {
  res.write("Hello from Node App!");
  res.end();
}).listen(8080);


```

## Step 2: Create Dockerfile

```
FROM node:18

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8080

CMD ["node", "server.js"]
```

## 🏗️ Step 3: Build Docker Image

``` 

docker build -t Ismaildcode/nodeapp:latest .

```

## ☁️ Step 4: Push Image to DockerHub

```
docker login
docker push Ismaildcode/nodeapphosting:latest

 ```


## 🖥️ Step 5: Launch AWS EC2 Instance

Created EC2 instance from AWS Console

Connected using SSH

Installed Docker

Opened port 8080 in Security Group


## 📥 Step 6: Pull Image on EC2

```
docker pull Ismaildcode/nodeapphosting:latest

```
## ▶️ Step 7: Run Container with Port Mapping

```
docker run -d -p 8000:8080 Ismaildcode/nodeapphosting:latest

```

## Now access the application in browser:

http://EC2_PUBLIC_IP:8000


## 🔄 Deployment Flow

```
Local Machine
    │
    ▼
Node.js App Created
    │
    ▼
Dockerfile Written
    │
    ▼
Docker Image Built
    │
    ▼
Image Pushed to DockerHub
    │
    ▼
AWS EC2 Launched
    │
    ▼
Image Pulled on EC2
    │
    ▼
Container Run with Port Mapping
    │
    ▼
Application Live on Public IP
```
