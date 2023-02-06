# Base on offical Node.js Alpine image
FROM node
WORKDIR /app
RUN npm install --global pm2
COPY ./package*.json ./
RUN npm install --production
COPY ./ ./
RUN npm run build
EXPOSE 3000
USER node
CMD [ "pm2-runtime", "npm", "--", "start" ]


FROM nginx:alpine
# Remove any existing config files
RUN rm /etc/nginx/conf.d/*
# Copy config files
# *.conf files in "conf.d/" dir get included in main config
COPY ./nginx/default.conf /etc/nginx/conf.d/
# Expose the listening port
EXPOSE 80
EXPOSE 443
# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]