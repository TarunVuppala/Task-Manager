import fetch from 'node-fetch';
export const getUserData = async () => {
    console.log('in user');
    const data = await fetch('http://localhost:5000/login');
    console.log(data);
    console.log("user" );
    return data;
}

export async function getTasks() {
    console.log('in task');
    const user = await getUserData();
    if(!user ||user.user===null) return
    const response = await fetch(`http://localhost:5000/task/${user.user._id}`);
    const data = await response.json();
    console.log(data.tasks+'tasks');
    return data.tasks;
}
// getTasks();