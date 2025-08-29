# Three-Tier Cloud Application (AWS + Azure)

## 📖 Overview
This project demonstrates how to design and deploy a **3-tier cloud application** using **AWS and Azure**, with automation, monitoring, and security enabled.  

**Architecture**
- **Frontend**: React app (Vite) hosted on AWS S3 + CloudFront and Azure Static Web Apps.  
- **Backend**: Node.js API (Express) deployed on AWS Elastic Beanstalk (or ECS Fargate) and Azure App Service.  
- **Database**: AWS RDS (MySQL/PostgreSQL) and Azure SQL Database.  
- **Automation**: Terraform for Infrastructure as Code, GitHub Actions for CI/CD.  
- **Security & Monitoring**: IAM roles, Security Groups, Azure NSGs, WAF, CloudWatch, Azure Monitor.  

---

## 🚀 Current Progress
✅ **Frontend**
- React app scaffolded with Vite  
- Running locally at `http://localhost:5173`

✅ **Backend**
- Node.js + Express server with `/api/health` route  
- Running locally at `http://localhost:8080/api/health`

✅ **Infrastructure (AWS)**
- VPC created with CIDR `10.0.0.0/16`  
- Public subnet (`10.0.1.0/24`) with Internet Gateway  
- Private subnets (`10.0.2.0/24` & `10.0.3.0/24`) across 2 AZs  
- NAT Gateway in public subnet for outbound internet  
- Route tables for public & private subnets  
- Security groups:  
  - `backend_sg`: backend services  
  - `db_sg`: allows DB access only from `backend_sg`  
- DB Subnet Group spanning 2 AZs (for RDS)

⏸️ **Next Step**
- Create RDS instance (MySQL) with Terraform:  
  ```bash
  terraform plan -var="db_password=ChangeMe123!"
  terraform apply -var="db_password=ChangeMe123!"
