import React, {Component} from 'react';

class Subjects extends Component {
	constructor(props) {
    	// Required step: always call the parent class' constructor
	    super(props);
	    // Set the state directly. Use props if necessary.
		this.props = props;
	    this.state = {
		  student: {},
	      subjects: [],
		  teachers: []
	    }
 	 }

 	 componentDidMount() {
 	 	// props.match.params.student_id
        fetch(`http://192.168.1.2:8080/students/${this.props.match.params.student_id}`)
            .then(res => res.json())
            .then((data) => {
				console.log(data.teachers);
				console.log(data.subjects);
                this.setState({ student: data.student, subjects: data.subjects, teachers: data.teachers })
            })
            .catch(console.log)
    }


    render() {
       return (
	    <div class="container-fluid">
			<h1>Student Details</h1>
			<p>{this.state.student.name}</p>
			<div class="row">
				<div class="col-sm">
					<center><h1>Teachers List</h1></center>
					{this.state.teachers.map((teacher) => (
						<div class="card">
							<div class="card-body">
								<h5 class="card-title">{teacher.name}</h5>
							</div>
						</div>
					))}
				</div>
				<div class="col-sm">
					<center><h1>Subjects List</h1></center>
	            {this.state.subjects.map((subject) => (
	                <div class="card">
	                    <div class="card-body">
	                        <h5 class="card-title">{subject.name}</h5>
	                    </div>
	                </div>
	            ))}
				</div>
			</div>
		</div>
    	)
    }

}

export default Subjects;