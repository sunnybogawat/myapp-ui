import React, {Component} from 'react';

class Subjects extends Component {
	constructor(props) {
    	// Required step: always call the parent class' constructor
	    super(props);
	    // Set the state directly. Use props if necessary.
	    this.state = {
	      subjects: []
	    }
 	 }

 	 componentDidMount() {
 	 	// props.match.params.student_id
        fetch('https://reqres.in/api/unknown')
            .then(res => res.json())
            .then((data) => {
                this.setState({ subjects: data.data })
            })
            .catch(console.log)
    }


    render() {
       return (
	        <div>
	           <center><h1>Subject List</h1></center>
	            {this.state.subjects.map((subject) => (
	                <div class="card">
	                    <div class="card-body">
	                        <h5 class="card-title">{subject.name}</h5>
	                    </div>
	                </div>
	            ))}
	        </div>
    	)
    }

}

export default Subjects;