"use strict";

export default function() {

  class Store {

    constructor() {
      this._todoList = [];
    }

    get todoList() {
      return this._todoList;
    }

    add(title) {
      let newTodoItem = this._create(title);

      this._todoList.push(newTodoItem);
    }

    toggleCompleted(todoId) {
      let foundIndex = this._getIndexById(todoId);
      let isCompleted = this._todoList[foundIndex].completed;

      this._todoList[foundIndex].completed = !isCompleted;
    }

    remove(todoId) {
      this._todoList = this._todoList.filter(todoItem => todoItem.id !== todoId);
    }

    _create(title) {
      return {
        id: Date.now(),
        completed: false,
        title
      };
    }

    _getIndexById(todoId) {
      for (let i = 0; i < this._todoList.length; i++) {
        if (this._todoList[i].id !== todoId) {
          continue;
        }

        return i;
      }

      return null;
    }

  }

  return new Store();

};
