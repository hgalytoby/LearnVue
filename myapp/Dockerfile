# 選擇 node 14 版本並賦予自定義名稱
FROM node:14 as vue-test
# 大家都用 docker 都會將工作路徑移動到 /usr/src/app
WORKDIR /usr/src/app
# 複製套件需求 json 到當前目錄
COPY package.json .
# 下指令安裝 node 套件包
RUN npm i
# 複製整個資料夾下的檔案到當前目錄
COPY . .
# 下指令 build Vue
RUN npm run build


# 選擇 nginx 映像檔
FROM nginx:1.21.1

# 大家都用 docker 都會將工作路徑移動到 /usr/src/app
WORKDIR /usr/src/app
# 從 vue-test (這是上面 node 自定義的名稱) 的 /usr/src/app/dist 底下的所有檔案 (這是 build 後會產生的資料夾) 複製到當前目錄
COPY --from=vue-test /usr/src/app/dist ./
# 複製 test.conf(nginx 要用的.conf) 到 /etc/nginx/conf.d/default.conf (nginx 要 load 此.conf)
COPY test.conf /etc/nginx/conf.d/default.conf
# 下指令 service nginx start，啟動 nginx，因為用陣列包著指令，所以空白處分隔。
CMD ["service", "nginx", "start"]
# 下指令 nginx -g daemon off;，防止 Docker 一起動 nginx 就關閉的問題，因為用陣列包著指令，所以空白處分隔。
# CMD ["nginx", "-g", "daemon off;"]
# EXPOSE 導出 port
# EXPOSE 8080
# 這段是網路 Copy 來的，主要是 heroku 部屬網頁時會隨機分發 port ，看起來是抓到 heroku 給的 port值，再將 port 給 default.conf。
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'

