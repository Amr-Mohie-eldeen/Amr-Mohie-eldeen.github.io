#! /bin/bash
docker build --platform linux/amd64 -t cloud-resume-repo .
docker tag cloud-resume-repo:latest 049685205518.dkr.ecr.us-east-1.amazonaws.com/cloud-resume-repo:latest
docker push 049685205518.dkr.ecr.us-east-1.amazonaws.com/cloud-resume-repo:latest