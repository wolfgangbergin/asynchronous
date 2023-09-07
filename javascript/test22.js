Promise.reject(new Error('test22 error'))
  .then('wolf', error => {
    return 'test22 error' 
  })
  .then(data => l(data))
.catch(error => l(error.message))

export default 'test22';
