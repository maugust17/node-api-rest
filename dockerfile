# Etapa de build
FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# RUN npm run build

# Etapa de deploy
FROM node:24-alpine AS deploy

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app ./dist

EXPOSE 3000

CMD ["node", "dist/index.js"]