 docker login  -u casino -p casinoEHAcf6pTU https://docker.flct.io/

## api
sudo docker network create casino --driver bridge

sudo docker rm -f casino-web
sudo docker run  --restart=always --network casino --name casino-web -p 8082:9001 -d docker.flct.io/casino/casino-web:1.0.0-5


sudo docker rm -f casino-admin
sudo docker run  --restart=always --network casino --name casino-admin -p 8083:9001 -d docker.flct.io/casino/casino-admin:1.0.0-8


sudo docker rm -f casino-api
sudo docker run -d --name casino-api --network casino --restart=always -v /etc/localtime:/etc/localtime  docker.flct.io/casino/casino-api:1.0.0-6

sudo docker rm -f casino-socket
sudo docker run -d --name casino-socket -p 3000:3000 --network casino --restart=always -v /etc/localtime:/etc/localtime  docker.flct.io/casino/casino-socket:1.0.0-2


sudo docker rm -f gateway
sudo docker run \
--name gateway \
--restart=always \
--network casino \
-d -p 443:443 -p 80:80 \
-v ~/gateway:/var/log/nginx \
docker.flct.io/casino/gateway-huangjia:1.0.0-7