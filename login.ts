class User {
    id:string
    constructor(public username: string,) {
        this.id = `id-${Math.random()}`;
    }
}

let Uzerarray: User[] = [];

function handleAddUser(event){
    
    try {
        event.preventDefault();
        const username = event.target.username.value;
        const user = new User(username);
        Uzerarray.push(user);
        localStorage.setItem(`user`, JSON.stringify(Uzerarray));
        event.target.reset();
        window.location.href = "index.html";

    } catch (error) {
        console.error(error);
    }
}