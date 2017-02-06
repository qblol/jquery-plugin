$.fn.checkMail = function() {
    var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
    return regex.test(this.val())
}

$('input').keyup(function(){
  if($('input').checkMail()) {
    $('input').css('border-color', 'green')
  } else {
    $('input').css('border-color', 'red')
  }
})
