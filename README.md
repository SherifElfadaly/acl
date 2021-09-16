# Courses

## Run

Via Docker

Run the following commands:
``` bash
sudo cp ./.env.example ./.env
sudo docker-compose build
sudo docker-compose up -d
docker exec courses npm run migration:run
```

Api doc
[http://localhost:4000/api][link]

[link]: http://localhost:4000/api