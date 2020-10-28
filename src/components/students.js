import React, {Component} from 'react';

class Students extends Component {

     constructor(props) {
        // Required step: always call the parent class' constructor
        super(props);
        // Set the state directly. Use props if necessary.
        this.state = {
          students: []
        }
     }


    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ students: data })
            })
            .catch(console.log)
    }

    render() {
       return (
            <div>
                <center><h1>Studnet List</h1></center>
                {this.state.students.map((student) => (
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">
                              <li key={student.id}>
                                <a href={`/subjects/${student.id}/list`}>{student.name}</a>
                              </li>
                            </h5>
                            <h6 class="card-subtitle mb-2 text-muted">{student.email}</h6>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
};

export default Students