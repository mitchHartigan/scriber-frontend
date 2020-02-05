export function login (userEmail, userPassword) { 
  console.log('attempting login!');
  return new Promise((resolve, reject) => {
    fetch('http://165.22.58.28:9000/login', {
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
    fetch('http://165.22.58.28:9000/register', {
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
      console.log('res from register: ', res);
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
    console.log('attempting to fetchNotes!')
    fetch('http://165.22.58.28:9000/fetchNotes', {
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
   fetch('http://165.22.58.28:9000/postNotes', {
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