#! /bin/bash

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 049685205518.dkr.ecr.us-east-1.amazonaws.com