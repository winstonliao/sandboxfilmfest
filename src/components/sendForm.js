import $ from 'jquery'

export async function sendForm(form, id) {
  Object.keys(form).forEach(key => {
    if(form[key] === ''){
      alert('Please fill in your '+key);
      const properKey = key.charAt(0).toUpperCase() + key.slice(1);
      throw new Error(properKey + ' field is blank.');
    }
  })
  const link = 'https://script.google.com/macros/s/' + id + '/exec';
  console.log(link);
  return await $.ajax(link, {
    type: 'GET',
    data: form,
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
  });
}