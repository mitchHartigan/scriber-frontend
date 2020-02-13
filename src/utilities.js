export function login (userEmail, userPassword) { 
  return new Promise((resolve, reject) => {
    fetch('https://lit-wildwood-71440.herokuapp.com/login', {
      method: 'POST',
      body: JSON.stringify({ email: userEmail, password: userPassword}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => resolve(res))
    .catch((err) => {
      if (err) console.error(err);
      reject();
    })
  })
 }


 export function register (userFirstName, userLastName, userEmail, userPassword) {
  return new Promise((resolve, reject)=> {
    fetch('https://lit-wildwood-71440.herokuapp.com/register', {
      method: 'POST',
      body: JSON.stringify({
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
        password: userPassword,
       }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      resolve(res);
    })
    .catch((err) => {
      if (err) console.error(err);
      reject();
    })
  })
 }

 export function fetchNotes (token) {
   return new Promise((resolve, reject)=> {
    fetch('https://lit-wildwood-71440.herokuapp.com/fetchNotes', {
      method: 'POST',
      body: JSON.stringify({
        token: token,
       }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res)=> resolve(res))
    .catch((err)=> {
      if(err) console.error(err);
    })
   })
 }

 export function postNotes (token, notes) {
  return new Promise((resolve, reject)=> {
   fetch('https://lit-wildwood-71440.herokuapp.com/postNotes', {
     method: 'POST',
     body: JSON.stringify({
       token: token,
       notes: notes,
      }),
     headers: {
       'Content-Type': 'application/json'
     }
   })
   .then((res)=> {
     if(res.status === 200){
       resolve(true);
     } else {
       resolve(false);
     }
   });
  })
 }