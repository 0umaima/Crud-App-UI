import { useEffect, useState } from "react";
import axios from "axios";

const AdminPage = () => {

    const [ Employees, setEmployees] = useState([]);
    const [ isLoading, setIsLoading] = useState(false);

    const getEmployees = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get('http://localhost:5500/employees');
            console.log(response.data);
            setEmployees(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    //When application first loads get this 

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <div>
            This is Home Page
        </div>
    )
}

export default AdminPage;