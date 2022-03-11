let gasolineConsumption;
let distanceTraveled;
let galons = 0;
let res = 0;

while (gasolineConsumption !== "stop") {
  gasolineConsumption = prompt("Մուտքագրեք բենզինի ծախսը");
  if (gasolineConsumption === "stop") {
    break;
  } else {
    distanceTraveled = prompt("Մուտքագրեք անցած ճանապրհը");
    res = res + milVsGalons(distanceTraveled, gasolineConsumption);
    galons++;
  }
}
console.log("Վառելիքի միջին ծախսը։ " + averageFuelConsumption(res, galons));

function milVsGalons(distanceTraveled, gasolineConsumption) {
  return distanceTraveled / gasolineConsumption;
}

function averageFuelConsumption(res, galons) {
  return res / galons;
}
