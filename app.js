$(document).ready(function() {
  $('.box').on('click', function() {
    $(this).addClass(color);
  })
  var colors = 'red green blue yellow white';
  $('.box').on('dblclick', function() {
    $(this).removeClass(colors);
  })
  $('#reset').on('click', function() {
    $('.box').removeClass(colors)
  })
  var color = 'white';
    $('#red').on('click', function() {
    color = 'red';

    $('#blue').on('click', function() {
      color = 'blue';
    })

    $('#green').on('click', function() {
      color = 'green';
    })

    $('#yellow').on('click', function() {
      color = 'yellow';
    })

    $('#white').on('click', function() {
      color = 'white';
    })
  });
})
