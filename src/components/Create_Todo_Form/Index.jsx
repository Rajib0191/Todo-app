import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

class CreateTodoForm extends Component {

    state= {
        text: '',
        description: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createTodo(this.state)
        event.target.reset()
        this.setState({text: '', description: ''})
    }
    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>Enter Task</Label>
                    <Input 
                        placeholder='abcd'
                        name="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Description</Label>
                    <Input 
                        type='textarea'
                        placeholder='Description'
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button type="submit">Craete Task</Button>
            </Form>
        )
    }
}

CreateTodoForm.propTypes = {
        createTodo:PropTypes.func.isRequired
    }

export default CreateTodoForm