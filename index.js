document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
  var elems1 = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems1);
  var elems2 = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems2);
  const form = document.querySelectorAll('#submit-form')
  submit-form.addEventListener("click",function(){
    event.preventDefault()
  })
})
