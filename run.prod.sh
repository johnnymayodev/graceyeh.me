# build production files
bun run build

# run production docker compose
docker compose -f docker-compose.prod.yml up --build 
