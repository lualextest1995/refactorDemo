# 使用 node Alpine 版本作為建構階段
FROM node:lts-alpine AS builder

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json 至工作目錄
COPY package*.json ./

# 依照指定版本安裝依賴
RUN npm ci --verbose 

# 複製所有文件
COPY . .

# 執行 build 命令
RUN npm run build

# 使用 Nginx Alpine 版作為基礎映像
FROM nginx:alpine

# 清除 Nginx 預設的內容
RUN rm -rf /usr/share/nginx/html/*

# 複製資料夾的內容到 Nginx 容器的目錄
COPY --from=builder /app/dist /usr/share/nginx/html

# 開放 80 端口
EXPOSE 80

# 啟動 Nginx
CMD ["nginx", "-g", "daemon off;"]
