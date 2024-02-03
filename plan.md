## 首頁

- fn
  - [link] 立即訂房
  - [link] 會員登入
  - [link] 客房旅宿
  - [UI] swipper

    - [pic] *5
  - [pic] logo
  - [action] 最新消息

    - [api] GET /api/v1/home/news/{id}
  - [UI] 關於我們

    - [text]
  - [action] 客房旅宿

    - [api] GET /api/v1/rooms/{id}
  - [action] 佳肴美饌

    - [api] GET /api/v1/home/culinary/{id}
  - [UI] 交通方式

    - [pic] map
    - [text] *3
  - [UI] footer
  - [UI] RWD

## 登入註冊

- [action] 註冊

  - [api] POST /api/v1/user/signup
  - [api] POST /api/v1/verify/email
  - [api] POST /api/v1/verify/generateEmailCode
  - [service] mail
- [action] 忘記密碼

  - [api] POST /api/v1/verify/generateEmailCode
  - [api] POST /api/v1/user/forgot
  - 
- [action] 記住帳號

  - [storage] local storage / cookie
- [action] 登入

  - [api]	POST /api/v1/user/login
- 

## 客房旅宿列表


## 客房旅宿詳目


## 客房預約

- [link] 請先登入


## 會員基本資料



## 會員訂單管理
