FROM --platform=linux/amd64 node:18.9.0
RUN mkdir -p /frontend
COPY . /frontend
WORKDIR /frontend
RUN npm install && \
    npm run build
ENV HOST 0.0.0.0
EXPOSE 3000
CMD ["npm", "run", "start"]