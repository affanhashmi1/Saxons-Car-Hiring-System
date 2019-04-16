
function logout() {
  window.location.href = 'http://localhost:3000/customers/login';
}

function popitup(url) {
  popup = window.open(url, 'popup', 'height=600, width=800, left=0, top=0, resizable=yes, scrollbars=yes, toolbar=yes, menubar=no, location=no, directories=no, status=yes');
}

if (sessionStorage.getItem('isPostBack') === null && window.location.href === 'http://localhost:3000/customers/portal') {
  $('.help-modal').modal('show');
  sessionStorage.setItem('isPostBack', 'true');
}