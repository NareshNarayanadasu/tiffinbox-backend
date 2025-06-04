# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app

# Only copy package.json to avoid missing lock file error
COPY package.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html

# (Optional: add nginx.conf if you're using custom SPA routing)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
