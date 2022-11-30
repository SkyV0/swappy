# Creation of base docker image
FROM node:16 AS base
WORKDIR /app
EXPOSE 5173

ARG PAT
COPY . ./
RUN touch .npmrc
RUN echo "registry=https://pkgs.dev.azure.com/Quadax/_packaging/Quadax/npm/registry/ \n always-auth=true \n //pkgs.dev.azure.com/Quadax/_packaging/Quadax/npm/registry/:username=Quadax \n //pkgs.dev.azure.com/Quadax/_packaging/Quadax/npm/registry/:_password=${PAT} \n //pkgs.dev.azure.com/Quadax/_packaging/Quadax/npm/registry/:email=itdevops@quadax.com \n //pkgs.dev.azure.com/Quadax/_packaging/Quadax/npm/:username=Quadax \n //pkgs.dev.azure.com/Quadax/_packaging/Quadax/npm/:_password=${PAT} \n //pkgs.dev.azure.com/Quadax/_packaging/Quadax/npm/:email=itdevops@quadax.com" > .npmrc


ADD . .

RUN npm install && npm run build
RUN rm -f .npmrc && rm -f package-lock.json && rm -f DockerFile && rm -f variables-dev.yaml && rm -f .gitignore && rm -rf /.git


CMD ["npm", "start"]