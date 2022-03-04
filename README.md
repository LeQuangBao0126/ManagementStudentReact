
#apis 
- https://js-post-api.herokuapp.com/api/cities?_limit=10&page=1
- https://js-post-api.herokuapp.com/api/students?_limit=10&page=1
get,getbyId , add , update remove
 
Hook Component, validation , HOC ( function wrapper , component wraper  ) , typescript , react-hook-form 
MaterialUI 

routes-dom  v5
    auth 
    - /login
    layout 
    - /admin 
    feature :    /admin/dashboard
    feature :    /admin/students

    Auth saga => khi login dispatch những gì . những effect nào 
    - Login 
        call login api to get token + user 
        => success settoken to localstorage 
        => redirect to admin page
        AuthSlice (reducer + actions ) , 
        AuthSaga
    - Logout 
        remove token + redirect to login page   

### Students
 . nên cân nhắc có nên cho lên state chính ko hay component state

- /admin/students           : liet kê ,search by name , filter by city , sort by name mark , pagination 
- /admin/students/add       : them .   
- /admin/students/edit/:id  : sửa rồi xem chi tiết luôn  .
- /admin/   

---- 29 
