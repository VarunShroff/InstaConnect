**Login**

mutation {
login(username:"user", password: "123456"){
id
email
token
username
createdAt
}
}

**Register**

mutation {
register(registerInput:{
username:"user"
password:"123456"
confirmPassword:"123456"
email:"user@email.com"
}){
id
email
token
username
createdAt
}
}

**HTTP HEADERS**

{
"Authorization":"Bearer ""
}

**Posts and Comments fetching**

query posts{
getPosts{
id
body
createdAt
username
comments{
id
username
body
}
likes{
id
username
}
}
}

mutation comment{
createComment(postId:"6082dbfe01878fb8d8bed80e" body:"new comment on post") {
id
body
comments{
id
createdAt
username
body
}

}
}

**Create Posts**

mutation{
createPost(body:"A post for subscribers"){
id
body
createdAt
username
}
}

**Delete Comment**

mutation{
deleteComment(postId:"6082dbfe01878fb8d8bed80e" commentId: "6082f314c165e8db481c38cf") {
id
comments{
id
username
body
}
}
}

**Like Post**

mutation{
likePost(postId:"6081db2676b2073b18d0ae13") {
id
body
username
likes{
id
username
}
}
}

**Subscriptions**

subscription{
newPost{
id
body
createdAt
username
comments{
createdAt
}
likes{
createdAt
}
}
}


