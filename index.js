document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
  var elems2 = document.querySelectorAll('.modal');
  var instances2 = M.Modal.init(elems2);
  let form1 = document.getElementById('submit-form')
  form1.addEventListener("submit", function () {
    event.preventDefault()
    let form = document.getElementById('email-input').value
    localStorage.setItem('email', form)
    let savedEmail = localStorage.getItem("email")
    console.log(savedEmail);
    M.toast({html: `${savedEmail}`})

  })
})
