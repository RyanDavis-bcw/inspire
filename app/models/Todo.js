import { ProxyState } from '../AppState.js'


export default class Todo {
  constructor({ id, completed, description }) {
    this.id = id;
    this.completed = completed
    this.description = description



  }

  static Card() {
    let template = ''
    ProxyState.todos.forEach(t => template += t.Template)
    return `
        <div class = "card">
          <div class = "card-body">   
            <h5 class="card-title">Your To Dos</h5>
            <h6> Tasks Done: 0/${ProxyState.todos.length}</h6>
            <ul>
               ${template}
           </ul>
           <form onsubmit="app.todoController.addTodo(event)"><input type="text" name="newTodo" id="newTodo"></form>
          </div>
        </div>
         `
  }

  get Template() {
    return `
  <div class="row">
    <div class="col flex-row">
      <input class="form-check-input" onclick="app.todoController.toggleTodoStatus('${this.id}')" type="checkbox"
        ${this.completed ? "checked" : ""} value="" id="${this.id}">
      <li> ${this.description} </li>
      <i class="fa fa-trash text-danger" onclick="app.todoController.removeTodo('${this.id}')" aria-hidden="true"></i>
    </div>
  </div>
    
    `
  }
}
