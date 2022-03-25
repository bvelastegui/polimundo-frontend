FROM node:alpine AS compiler

COPY . .

RUN npm i && npm run build

FROM nginx

COPY --from=compiler /dist /usr/share/nginx/html

EXPOSE 80

STOPSIGNAL SIGQUIT

CMD ["nginx", "-g", "daemon off;"]