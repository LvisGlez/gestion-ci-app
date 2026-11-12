FROM jenkins/jenkins:lts
USER root
RUN apt-get update && apt-get install -y nodejs npm && rm -rf /var/lib/apt/lists/*
USER jenkins
