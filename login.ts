class User {
    id: string;
    constructor(public username: string, public movesCount:number,public timeValue:number ) {
      this.id = `id-${Math.random()}`;
    }
  }
  
  let Userarray: User[] = [];
  
  const users = localStorage.getItem('users');

  const newArray: User[] = JSON.parse(users);
  
  if (newArray) {
    Userarray = newArray;
  } 
  function handleAddUser(event: Event) {
    try {
      event.preventDefault();
      const target = event.target as HTMLFormElement;
      const username = target.username.value;
      const user = new User(username);
      Userarray.push(user);
      localStorage.setItem("users", JSON.stringify(Userarray));
      target.reset();
      window.location.href = "index.html";
    } catch (error) {
      console.error(error);
    }
  }
  console.log(newArray)

