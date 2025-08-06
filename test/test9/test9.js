var requestOptions = {
  method: 'GET',
  redirect: 'follow'
}

fetch("https://v2.xxapi.cn/api/englishwords?word=cancel",requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))