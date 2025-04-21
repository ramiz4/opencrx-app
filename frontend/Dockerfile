FROM node:23-slim AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=build /app/dist/opencrx-ui /usr/share/nginx/html
