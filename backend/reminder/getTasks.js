import fetch from 'node-fetch';
export const getUserData = async () => {
    const response = await fetch('http://localhost:5000/login');
    const data = await response.json();
    console.log(data);
    return data;
}

export async function getTasks() {
    const user = await getUserData();
    if(!user ||user.user===null) return
    const response = await fetch(`http://localhost:5000/task/${user.user._id}`);
    const data = await response.json();
    console.log(data.tasks);
    return data.tasks;
}
getTasks();