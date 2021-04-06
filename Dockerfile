# deno image
FROM hayd/deno:alpine-1.7.1

# set working directory
WORKDIR /app

# copy files from current directory to working dir
COPY ./data ./data
COPY ./src ./src
COPY ./deps.ts .
COPY ./lock.json .

# default port exposure
EXPOSE 80

# these are passed as deno arguments when run with docker
CMD ["run", "--allow-env=PORT", "--allow-net=api.spacexdata.com,0.0.0.0:80", "--allow-read=data/kepler_exoplanets_nasa.csv", "src/server.ts"]
