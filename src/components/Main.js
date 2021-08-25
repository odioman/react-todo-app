import React from 'react'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }
    render() {
        return (
            <div>
                <h1>Todos</h1>
                <div>
                    <CreateTask/>
                    <br/>
                    <TaskList />
                </div>
            </div>
        )
    }
}