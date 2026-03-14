# Build stage para o Frontend
FROM node:20-alpine AS frontend-build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage final (PocketBase + Frontend estático)
FROM alpine:latest

# Instalar dependências básicas
RUN apk add --no-cache \
    ca-certificates \
    unzip \
    wget \
    bash

WORKDIR /app

# Copiar o binário do PocketBase da sua pasta local (já que baixamos)
# Ou podemos baixar direto no Docker para garantir que é a versão linux
RUN wget https://github.com/pocketbase/pocketbase/releases/download/v0.22.21/pocketbase_0.22.21_linux_amd64.zip \
    && unzip pocketbase_0.22.21_linux_amd64.zip -d /app/ \
    && rm pocketbase_0.22.21_linux_amd64.zip \
    && chmod +x /app/pocketbase

# Copiar os arquivos gerados do frontend (Vite)
COPY --from=frontend-build /app/dist /app/pb_public

# Copiar migrações para o banco rodar automático no deploy
COPY pb/pb_migrations /app/pb_migrations

# Expor a porta padrão do PocketBase
EXPOSE 8080

# Comando para rodar o PocketBase servindo o frontend estático na pasta pb_public
CMD ["/app/pocketbase", "serve", "--http=0.0.0.0:8080", "--dir=/app/pb_data"]
