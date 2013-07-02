$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
    $('.toolbox .add').on('click', function () {
      var todo = $('input').val();
      addTodo(buildTodo(todo));
    });

    $('.todo_list').on('click', '.complete', function(evnt) {
      // debugger;
      evnt.preventDefault();
      console.log($(this).parents('.todo'));
      // console.log($(this).closest('.todo'));
      var $this_todo = $(this).parents('.todo');
      completeTodo($this_todo);
    });

    $('.todo_list').on('click', '.delete', function(evnt) {
      // debugger;
      evnt.preventDefault();
      console.log($(this).parents('.todo'));
      // console.log($(this).closest('.todo'));
      var $this_todo = $(this).parents('.todo');
      removeTodo($this_todo);
    });
  }
  //Create functions to add, remove and complete todos
  function addTodo (todo) {
    $('.todo_list').append(todo);
  }

  function removeTodo (todo) {
    todo.remove();
  }

  function completeTodo (todo) {
    // debugger;
    todo.toggleClass('complete');
  }

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }
  bindEvents();
});
