import $ from 'jquery'

export async function sendForm(form, id) {
  Object.keys(form).forEach(key => {
    if(form[key] === ''){
      alert('Please fill in your '+key);
      const properKey = key.charAt(0).toUpperCase() + key.slice(1);
      throw new Error(properKey + ' field is blank.');
    }
    if(key === 'email') {
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!regex.test(form[key])) {
        alert('Email is invalid')
        throw new Error('Email is invalid');
      }
    }
  })
  const link = 'https://script.google.com/macros/s/' + id + '/exec';
  return await $.ajax(link, {
    type: 'GET',
    data: form,
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
  });
}