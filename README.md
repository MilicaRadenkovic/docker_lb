Usage:

1. Building the image 

$ docker build -t node-redis-image .


OR 

$ docker pull 1701996/node-redis-image (this requires modification in docker-compose.yml file to change the image name)



2. Running containers

$ docker-compose up -d --scale web=3 (if you want to increase or decrease number of instances this requires modification in nginx.conf file)


3. Check if instance are running 

$ docker-compose ps
$ docker-compose logs 


4. Testing 

$ curl localhost:80 

the output should look like:

I've been visited n times, and my hostname is .......
