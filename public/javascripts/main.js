
function logout() {
  window.location.href = 'http://localhost:3000/customers/login';
}

function popitup(url) {
  popup = window.open(url, 'popup', 'height=600, width=800, left=25, top=25, resizable=yes, scrollbars=yes, toolbar=yes, menubar=no, location=no, directories=no, status=yes')
}