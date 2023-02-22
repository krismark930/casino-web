sudo docker login  -u admin -p Fh7FSgEQ6hMn8MB7Q4URnh76eEDdIXAg https://docker.biyong.com/

## api
docker rm -f hua-admin
sudo docker run -d --name hua-admin --network coinuse --restart=always docker.biyong.com/hua/hua-admin:1.0.0-1




