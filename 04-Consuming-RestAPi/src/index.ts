import axios from "axios";

async function fetchData() {
    try {
        const response = await axios.get(`http://localhost:3000/employees`);
        const data = response.data;
        console.log('List of Employees: ');
        console.log(data);
    } catch (error) {
        console.error('Error while fetching the data', error);
    }   
}

fetchData();

/**
 * axios
 * node-fetch
 * isomorphic-fetch
 */