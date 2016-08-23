"use strict";

import template from "./todo-list.component.html";
import "./todo-list.component.styl";

export default {
  controller: function($filter, TodoStore) {

    Object.defineProperty(this, "todoList", {
      get: function() {
        return this._filterByType(TodoStore.todoList);
      }
    });

    this.newTodo = "";
    this.searchQuery = {};
    this.currentType = "all";

    this.addTodo = function(e) {
      e.preventDefault();

      TodoStore.add(this.newTodo);
      this.newTodo = "";
    };

    this.removeTodo = function(todoId) {
      TodoStore.remove(todoId);
    };

    this.toggleCompleted = function(todoId) {
      TodoStore.toggleCompleted(todoId);
    };

    this.changeType = function(typeName) {
      this.currentType = typeName;
    };

    this._filterByType = function(todoList) {
      let currentType = this.currentType;

      if (currentType === "completed") {
        return $filter("filter")(todoList, { completed: true });
      } else if (currentType === "active" ) {
        return $filter("filter")(todoList, { completed: false });
      } else {
        return todoList;
      }
    };

  },
  template: template
};
