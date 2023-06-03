// Async, Callback, Promises
// Async == asynchronous == tidak berurutan
// Sync == synchronous == berurutan
// Callback == function yang dipanggil oleh function lain
// Promises == janji

// async function asyncFunction(){
//     console.log("1")
    
//     // await setTimeout(() => {
//     //     console.log("2")
//     // }, 2000);
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         // .then((response) => console.log(response))
//         .then((response) => response.json())
//         .then((json) => console.log(json));

//     console.log("3")
// }
// // function sum(a){
// //     return a
// // }
// asyncFunction()
// sum(asyncFunction())

// Kapan pake Async Await?
// Kalo ada proses yang butuh waktu lama, misalnya:
// - Ambil data dari database atau API

// REST API
// GET == ambil data dari url/database
// POST == kirim data ke url/database
// PUT == update data di url/database
// DELETE == hapus data di url/database

// GET
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // .then((response) => console.log(response))
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
// };
  
// fetch("https://jsonplaceholder.typicode.com/todos/1", requestOptions)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

// POST
const button = document.getElementById("button")
const testObject = {
    title: 'foo',
    body: 'bar',
    userId: 1,
}
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', // Kalau tidak diisi, dia default GET
//   body: "test",
//   body: 1,
//   body: button,
  body: JSON.stringify(testObject),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'Authorization': 'apikey 123456789',
    'Bearer': 'token123'
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// PUT
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'INI',
    body: 'PUT',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// DELETE
fetch('https://jsonplaceholder.typicode.com/posts/2', {
    method: 'DELETE',
})
    .then((response) => console.log(response))