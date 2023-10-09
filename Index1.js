class NewUser {
    constructor(UserName, UserSurname, UserAge, UserLocation) {
      this.Name = UserName;
      this.Surname = UserSurname;
      this.age = UserAge;
      this.location = UserLocation;
    }
  }
  
  const usersByAge = {};  // Oggetto per raggruppare gli utenti per età
  
  document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('Register');
  
    userForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const UserName = document.getElementById('Username').value;
      const UserSurname = document.getElementById('UserSurname').value;
      const UserAge = parseInt(document.getElementById('UserAge').value);  // Parsiamo come intero
      const UserLocation = document.getElementById('UserLocation').value;
  
      const newUser = new NewUser(UserName, UserSurname, UserAge, UserLocation);
  
      // Raggruppa gli utenti per età
      if (!(UserAge in usersByAge)) {
        usersByAge[UserAge] = [];
      }
  
      usersByAge[UserAge].push(newUser);

    
        console.log('Tutti gli utenti registrati:');
        for (const age in usersByAge) {
          displayUsersByAge(age);
        }
    });
  
      userForm.reset();
    });
  
    // Funzione per visualizzare utenti con la stessa età
    function displayUsersByAge(age) {
      if (usersByAge[age]) {
        console.log(`Utenti con età ${age}:`);
        usersByAge[age].forEach(user => {
          console.log(`- Nome: ${user.Name}, Cognome: ${user.Surname}, Età: ${user.age}, Indirizzo: ${user.location}`);
        });
      } else {
        console.log(`Nessun utente trovato con età ${age}.`);
      }
    }
  
    // Esempio di chiamata alla funzione per visualizzare gli utenti con la stessa età
   
  