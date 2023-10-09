class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }

    hasSameOwner(otherPet) {
      return this.ownerName === otherPet.ownerName;
    }
  }

  const petList = [];

  document.addEventListener('DOMContentLoaded', () => {
    const petForm = document.getElementById('petForm');
    const petListElement = document.getElementById('petList');

    petForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const petName = document.getElementById('petName').value;
      const ownerName = document.getElementById('ownerName').value;
      const species = document.getElementById('species').value;
      const breed = document.getElementById('breed').value;

      const newPet = new Pet(petName, ownerName, species, breed);
      petList.push(newPet);

      displayPetList();
      petForm.reset();
    });

    function displayPetList() {
        petListElement.innerHTML = '';
        petList.forEach((pet, index) => {
          const listItem = document.createElement('li');
          listItem.textContent = `Pet ${index + 1} - Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
          petListElement.appendChild(listItem);
        });
  
        // Visualizza i risultati nella console
        for (let i = 0; i < petList.length - 1; i++) {
          for (let j = i + 1; j < petList.length; j++) {
            console.log(`Gli animali ${petList[i].petName} e ${petList[j].petName} condividono lo stesso proprietario? ${petList[i].hasSameOwner(petList[j])}`);
          }
        }
      }
    });


