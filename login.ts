

// class User {
//   id: string;
//   constructor(public username: string, public movesCount:number,public timeValue:number ) {
//     this.id = `id-${Math.random()}`;
//   }
// }

// let Userarray: User[] = [];

// function handleAddUser(event: Event) {
//   try {
//     event.preventDefault();
//     const target = event.target as HTMLFormElement;
//     const username = target.username.value;
//     const user = new User(username);
//     Userarray.push(user);
//     localStorage.setItem("users", JSON.stringify(Userarray));
//     target.reset();
//     window.location.href = "index.html";
//   } catch (error) {
//     console.error(error);
//   }
// }

// document.getElementById("userForm")?.addEventListener("submit", handleAddUser);

// function updateMovesCount(userId: string, movesCount: number) {
//   const user = Userarray.find((u) => u.id === userId);
//   if (user) {
//     user.movesCount = movesCount;
//   }
// }


// function updateTimeValue(userId: string, timeValue: number) {
//   const user = Userarray.find((u) => u.id === userId);
//   if (user) {
//     user.timeValue = timeValue;
//   }
// }



// function createResultsTable() {
//   const resultsTableBody = document.getElementById("resultsTableBody");

//   Userarray.forEach((user) => {
//     const row = document.createElement("tr");
//     const usernameCell = document.createElement("td");
//     const movesCountCell = document.createElement("td");
//     const timeValueCell = document.createElement("td");

//     usernameCell.textContent = user.username;
//     movesCountCell.textContent = user.movesCount.toString();
//     timeValueCell.textContent = user.timeValue.toString();

//     row.appendChild(usernameCell);
//     row.appendChild(movesCountCell);
//     row.appendChild(timeValueCell);

//     resultsTableBody?.appendChild(row);
//   });
// }

// // Call the function to populate the table when the page loads
// window.onload = createResultsTable;


