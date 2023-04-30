// // classes and object
// class BluePrint {
//   constructor(
//     buildingLen: string,
// buildingHeight: string,
// buildingWidth: string,
// buildingFoundationType: string
//   ) {

// this.length = buildingLen;
// this.height = buildingHeight;
// this.width = buildingWidth;
// this.foundationType = buildingFoundationType;
// this.isCompleted = false;

//   }

//   length: string;
//   width: string;
//   height: string;
//   foundationType: string;
//   isCompleted: boolean;
// }
// const olaideHouse = new BluePrint("5 km", "3 km", "2 km", "PILE")
// const anonymousHouse = new BluePrint("393 miles", "290 miles", "903 miles", "STRIP");
// const goldenHouse = new BluePrint("1 cm", "1 cm", "1 cm", "PILE")

// classes and object

class BluePrint {
  constructor(
    buildingOwner: string,
    builderGender: string,
    builderStatus: string,
    buildingLen: string,
    buildingHeight: string,
    buildingWidth: string,
    buildingFoundationType: string
  ) {
    this.landloard = buildingOwner;
    this.gender = builderGender;
    this.status = builderStatus;
    this.length = buildingLen;
    this.height = buildingHeight;
    this.width = buildingWidth;
    this.foundationType = buildingFoundationType;
    this.isCompleted = false;
    this.ownerr = "";
    this.buildingMatreials = [];
  }
  landloard: string;
  gender: string;
  status: string;
  length: string;
  width: string;
  height: string;
  foundationType: string;
  isCompleted: boolean;
  ownerr: string;
  buildingMatreials: string[]; //could also be any[] it accept's any data type

  //   getters and setters
  get houseLength(): string {
    return this.length;
  }
  get houseStatus(): string {
    return this.isCompleted ? "COMPLETED" : "IN PROGRESS";
  }
  // Setters are used to update properities of an existing but empty properity
  set houseOwnerr(name: string) {
    this.ownerr = name;
  }

  checkHouseCompletionStatus(): string {
    return this.isCompleted ? "COMPLETED" : "IN PROGRESS";
  }
  updateHouseStatus(): void {
    this.isCompleted = true;
  }
  getHouseLength(): string {
    return this.length;
  }
}
const olaideHouse = new BluePrint(
  "Olaide",
  "Female",
  "Single",
  "5 km",
  "3 km",
  "2 km",
  "PILE"
);
const anonymousHouse = new BluePrint(
  "Anonymous",
  "Male",
  "Single",
  "393 miles",
  "290 miles",
  "903 miles",
  "STRIP"
);
const goldenHouse = new BluePrint(
  "Golden",
  "Male",
  "Married",
  "1 cm",
  "1 cm",
  "1 cm",
  "PILE"
);
const paschalHouse = new BluePrint(
  "Paschal",
  "Male",
  "Student",
  "667 cm",
  "985 cm",
  "345 cm",
  "PILER"
);
const topeHouse = new BluePrint(
  "Tope",
  "Female",
  "Married",
  "14 cm",
  "18 cm",
  "10 cm",
  "PILER"
);
const adelHouse = new BluePrint(
  "Adel",
  "Female",
  "Student",
  "19 cm",
  "12 cm",
  "11 cm",
  "PILER"
);

olaideHouse.buildingMatreials = ["Shovel", "stone", "sand"];
console.log(olaideHouse);
olaideHouse.houseOwnerr = "king";
console.log(olaideHouse);




