# Project: Refactor

這是一個[原生查詢網頁](https://codepen.io/tariso/pen/LyoaRM)轉 Vue3 版本

# Demo

[github page](https://lualextest1995.github.io/refactorDemo/)

# Features

- Vue3 Composition API
- TypeScript
- axios
- cache
- debounce
- xss
- docker

# Technologies

- [Vue3](https://vuejs.org/)
- [axios](https://axios-http.com/)
- [docker](https://www.docker.com/)

更多詳細資訊，請點擊 client 資料夾的 [package.json](https://github.com/lualextest1995/refactorDemo/blob/master/package.json)

# Getting Started

## development

1. Clone this repositories.

```
$ git clone https://github.com/lualextest1995/refactorDemo.git
```

2. Install NPM.

```
$ cd refactorDemo
$ npm install
```

3. Run the client and server.

```
$ npm run dev
```

4. Open Web Browser.

```
http://localhost:5173/
```

## production

1. Clone this repositories.

```
$ git clone https://github.com/lualextest1995/refactorDemo.git
```

2. Install NPM.

```
$ cd refactorDemo
$ npm install
```

3. build

```
$ npm run build
```

4. Open Web Browser.

```
$ npm run preview

http://localhost:4173/
```

## docker build

1. build docker image

```
$ docker build -t refactorapp .
```

2. run web

```
$ docker run -d --name refactorApp -p 3887:80 refactorapp
```

3. Open Web Browser.

```
http://localhost:3887/
```

---

## Copyright © 2023 Alex Lu. All rights reserved.
