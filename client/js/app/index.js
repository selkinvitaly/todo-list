"use strict";

import angular from "angular";

// services
import TodoStore from "../services/todo-store";

// components
import appContainerComponent from "./app-container/app-container.component";
import todoListComponent from "./app-container/todo-list/todo-list.component";
import todoItemComponent from "./app-container/todo-list/todo-item/todo-item.component";

const app = angular.module("app", []);

app.factory("TodoStore", TodoStore);

app.component("appContainer", appContainerComponent);
app.component("todoList", todoListComponent);
app.component("todoItem", todoItemComponent);

export default app;
