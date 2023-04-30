// // classes and object
// // Classes, object, properities, and method
// class UnilagHostelRoom {
//   constructor(hostelPreson, hostelWallDrobe, hostelBunks, hostelSquatter, hostelCompleted) {
//     this.person = hostelPreson;
//     this.wallDrobe = hostelWallDrobe;
//     this.bunks = hostelBunks;
//     this.squater = hostelSquatter;
//     this.isCompleted = hostelCompleted;
//     this.shoes = [];
//   }


//   person;
//   wallDrobe;
//   bunks;
//   squater;
//   isCompleted;
//   shoes;

//   checkHosteleCompletionStatus(){
//     return this.isCompleted ? "COMPLETED" : "IN PROGRESS";
//   }
//     updateHouseStatus(){
//     this.isCompleted = true;
//     }
//     getWallDrobeLength(){
//     return this.wallDrobe;
//     }
//     set IndividualShoes(shoes){
//     this.shoes = shoes;
//     }

// }
// const farukRooMate = new UnilagHostelRoom("Faruk", "2 Walldrobe", "1 bunk", 3);
// const praiseRooMate = new UnilagHostelRoom("Praise", "1 Walldrobe", "None", 0);
// // farukRooMate.updateHouseStatus();
// // console.log(farukRooMate.checkHosteleCompletionStatus());
// // console.log(farukRooMate.getWallDrobeLength());
// // farukRooMate.shoes = ["Nike", "Palm", "Addidas", "Joddans"];
// // console.log(farukRooMate)
// // praiseRooMate.updateHouseStatus()
// praiseRooMate.updateHouseStatus();
// console.log(praiseRooMate.checkHosteleCompletionStatus())
// praiseRooMate.IndividualShoes = ["Nike", "Palm", "Addidas", "Joddans", "cooprateshoe"];
// console.log(praiseRooMate)


const person = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  get fullName() {
return `I am ${person.firstName} ${person.lastName}`
  }
}
console.log(person.fullName);