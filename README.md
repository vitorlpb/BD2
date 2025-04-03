# BD2

Run docker compose -> docker compose up -d

Enter mysql database -> mysql -h 127.0.0.1 -u root -p

docker stop $(docker ps -aq)  # Para todos os containers
docker rm $(docker ps -aq)    # Remove todos os containers
docker volume rm $(docker volume ls -q)  # Remove todos os volumes
docker network rm $(docker network ls -q)  # Remove todas as redes (exceto padrão)
docker rmi $(docker images -q)  # Remove todas as imagens