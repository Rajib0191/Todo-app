import React, { Component } from 'react'
import shortid from 'shortid'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import ListView from '../ListView/Index'
import TableView from '../TableView/Index'
import Controller from '../controllers/Index'
import CreateTodoForm from '../Create_Todo_Form/Index'

class Todos extends Component {

    state = {
        todos: [
            {
                id: 'abc1',
                text: 'Rajib',
                description: 'Learner',
                time: new Date(),
                isComplete: false,
                isSelect: false
            },
            {
                id: 'abc2',
                text: 'Shorif',
                description: 'Learner',
                time: new Date(),
                isComplete: false,
                isSelect: false
            },
            {
                id: 'abc3',
                text: 'Arif',
                description: 'Learner',
                time: new Date(),
                isComplete: false,
                isSelect: false
            }
        ],
        isOpenTodoForm: false,
        searchTerm: '',
        view: "list",
        filter: "all"
    }

    toggleSelect = todoId => {
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id === todoId)
        todo.isSelect = !todo.isSelect;
        this.setState({ todos })
    }
    toggleComplete = todoId => {
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id === todoId)
        todo.isComplete = !todo.isComplete;
        this.setState({ todos })
    }
    handleSearch = (value) => {
        this.setState({
            searchTerm: value
        })
    }
    toggleForm = () => {
        this.setState({
            isOpenTodoForm: !this.state.isOpenTodoForm
        })
    }
    createTodo = (todo) => {
        todo.id = shortid.generate()
        todo.time = new Date()
        todo.isComplete = false
        todo.isSelect = false

        const todos = [todo, ...this.state.todos]
        this.setState({ todos })
        this.toggleForm();
    }
    handleFilter = (filter) => {
        this.setState({ filter })
    }
    performFilter = (todos) => {
        const { filter } = this.state
        if (filter === "completed") {
            return todos.filter(todo => todo.isComplete)
        } else if (filter === "running") {
            return todos.filter(todo => !todo.isComplete)
        } else {
            return todos
        }
    }

    changeView = (event) => {
        this.setState({
            view: event.target.value
        })
    }
    clearSelected = () => {
        const todos = this.state.todos.filter(todo => !todo.isSelect)
        this.setState({
            todos
        })
    }
    clearCompleted = () => {
        const todos = this.state.todos.filter(todo => !todo.isComplete)
        this.setState({
            todos
        })
    }
    reset = () => {
        this.setState({
            isOpenTodoForm: false,
            searchTerm: '',
            view: "list",
            filter: "all"
        })
    }

    getView = () => {
        let todos = this.searchPerform() //Search thake todos pabar jonne
        todos = this.performFilter(todos)
        return this.state.view === 'list' ? (
            <ListView
                todos={todos}        //this.state.todos dile state thake sob todos gulo show korbe 
                toggleComplete={this.toggleComplete}
                toggleSelect={this.toggleSelect}
            />
        ) : (
            <TableView
                todos={todos}
                toggleComplete={this.toggleComplete}
                toggleSelect={this.toggleSelect}
            />
        )
    }
    searchPerform = () => {
        return this.state.todos.filter(todo =>
            todo.text
                .toLocaleLowerCase()
                .includes(this.state.searchTerm.toLocaleLowerCase())
        );
    }

    render() {
        return (
            <div>
                <h1 className="display-4 text-center nb-5">
                    Stack Todos
                </h1>
                <Controller
                    term={this.state.searchTerm}
                    toggleForm={this.toggleForm}
                    handleSearch={this.handleSearch}
                    view={this.state.view}
                    handleFilter={this.handleFilter}
                    changeView={this.changeView}
                    clearSelected={this.clearSelected}
                    clearCompleted={this.clearCompleted}
                    reset={this.reset}
                />
                {/* <div>
                    <ListView
                        todos={this.state.todos}
                        toggleComplete={this.toggleComplete}
                        toggleSelect={this.toggleSelect}
                    />
                </div>
                <div>
                    <TableView
                        todos={this.state.todos}
                        toggleComplete={this.toggleComplete}
                        toggleSelect={this.toggleSelect}
                    />
                </div> */}
                <div>
                    {this.getView()}
                </div>
                <Modal
                    isOpen={this.state.isOpenTodoForm}
                    toggle={this.toggleForm}
                >
                    <ModalHeader toggle={this.toggleForm}>
                        Create New Todo Item
                    </ModalHeader>
                    <ModalBody>
                        <CreateTodoForm createTodo={this.createTodo} />
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
export default Todos