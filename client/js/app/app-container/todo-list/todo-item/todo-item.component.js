"use strict";

import template from "./todo-item.component.html";

export default {
  bindings: {
    todoTitle: "<",
    isCompleted: "<",
    toggleCompleted: "&",
    removeTodo: "&"
  },
  template: template
};
