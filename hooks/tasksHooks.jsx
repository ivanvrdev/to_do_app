import { useState, useEffect } from "react";

export const useGetTasks = (userId) => {
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then(response => response.json())
        .then(data => {
            setTasks(data)
        })
    }, [])

    return tasks
}