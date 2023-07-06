 docker login  -u casino -p casinoEHAcf6pTU https://docker.flct.io/

## api
sudo docker network create casino --driver bridge
sudo docker rm -f casino-web

sudo docker run  --restart=always --network casino --name casino-web -p 8082:9001 -d docker.flct.io/casino/casino-web:1.0.0-1