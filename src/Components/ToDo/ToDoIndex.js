import React, { Component } from "react";
import { Form, Button, Input, ListGroup, ListGroupItem, Card} from "reactstrap";

let styles = {
    card: {
        width: "40%",
        margin: "auto"
    }
}

export default class ToDoIndex extends Component {
    constructor(props) {
		super(props);
		this.state = {
			taskName: "",
			taskList: [],
		};
	}

	addTask = (e) => {
        e.preventDefault();
		this.setState({ 
            taskList: [...this.state.taskList, this.state.taskName],
            taskName: ""
		});
	};

    changeHandler = (e) => {
		this.setState({ taskName: e.target.value });
	};

	displayTasks = () => {
		return this.state.taskList.map((task, index) => (
			<ListGroup key={index}>
				<Input type="checkbox" onClick={(e) => this.deleteTask(index)}/>
				<ListGroupItem>{task}</ListGroupItem>
			</ListGroup>
		));
	};

    deleteTask = (index) => {
        this.state.taskList.splice(index, 1)
        this.setState({
            taskList: this.state.taskList,
        })
    }

	render() {
        console.log(this.state);
		return (
			<div>
                <Form onSubmit={(e) => this.addTask(e)}>
                    <Input required placeholder="Add New Task" value={this.state.taskName} onChange={this.changeHandler} />
                    <br />
                    <Button type="submit">Add Task</Button>
                </Form>
                <br />
				<div>
					<Card style={styles.card}>{this.displayTasks()}</Card>
				</div>
			</div>
		);
	}
}