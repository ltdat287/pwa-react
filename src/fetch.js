export function sendTokenApi(token) {
  const data = {
    token: token
  };

  fetch("api/add-token-topic", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}

export function sendNotify() {
  fetch('api/send-message', {
    accept: 'application/json'
  }).then(resp => {
    return resp.json();
  }).then((data) => console.log(data))
    .catch((err) => console.log(err));
}