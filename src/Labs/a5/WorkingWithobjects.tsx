import React, {useEffect, useState} from "react";
import axios from "axios";
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id : "0",
        name: "mod",
        description: "My mod",
        course: "Courses"
    });


        const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"
    const MODULE_URL = "http://localhost:4000/a5/module"
    const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
    };
    const updateTitle = async () => {
        const response = await axios
            .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };
    useEffect(() => {
        fetchAssignment();
    })
    return (
        <div>
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <h3>Modifying Properties</h3>
            <input onChange={(e) => setAssignment({
                ...assignment, title: e.target.value })}
                   value={assignment.title} type="text" />
            <button onClick={updateTitle} >
                Update Title to: {assignment.title}
            </button>
            <button onClick={fetchAssignment} >
                Fetch Assignment
            </button>
            <a href={`${MODULE_URL}/name/${module.name}`}>
                Update Module Name
            </a>
            <input type="text"
                   onChange={(e) => setModule({ ...module,
                       name: e.target.value })}
                   value={module.name}/>
            <a href={`${MODULE_URL}/description/${module.description}`}>
                Update Module Description
            </a>
            <input type="text"
                   onChange={(e) => setModule({ ...module,
                       description: e.target.value })}
                   value={module.description}/>
            <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
                Update Score
            </a>
            <input type="number"
                   onChange={(e) => setAssignment({ ...assignment,
                       score: Number(e.target.value)})}
                   value={assignment.score}/>
            <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
                Update Completed
            </a>
            <input type="checkbox"
                   onChange={(e) => setAssignment({ ...assignment,
                       completed: Boolean(e.target.checked)})}/>
            <h4>Retrieving Objects</h4>
            <a href="http://localhost:4000/a5/assignment">
                Get Assignment
            </a>
            <a href="http://localhost:4000/a5/module">
                Get Module
            </a>
            <h4>Retrieving Properties</h4>
            <a href="http://localhost:4000/a5/assignment/title">
                Get Title
            </a>
            <a href="http://localhost:4000/a5/module/name">
                Get Module Name
            </a>
        </div>
);
}
export default WorkingWithObjects;