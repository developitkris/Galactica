export class Galactica {

  constructor (earth, mercury, venus, mars, jupiter) {
    this.earth = earth;
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;
  }

  getAge(age){
    if(this.mercury){
      return Math.floor(age/.24);
    }
    else if(this.venus){
      return Math.floor(age/.62);
    }
    else if(this.mars){
      return Math.floor(age/1.88);
    }
    else if(this.jupiter){
      return Math.floor(age/11.86);
    }
    else {
      return age;
    }
  }

  let avgLifeExp = 0;
  getLifeExp(planet){

    if(this.planet === mercury){
      return avgLifeExp = 407;
    }
    else if(this.planet === venus){
      return avgLifeExp = 202;
    }
    else if(this.planet === mars){
      return avgLifeExp = 125;
    }
    else if(this.planet === jupiter){
      return avgLifeExp = 19;
    }
    else{
      return avgLifeExp = 72;
    }
    }
  }

  function ageMillisec(age) {
    let yrs = age;
    let days = 365;
    let hours = 24;
    let mins = 60;
    let secs = 60;

    return Math.floor(yrs*days*hours*mins*secs);
  }

  //use JS date object here
  function dateDiffMillisec() {
    let currentDate = new Date();
    let inputDate = new Date();

    console.log(currentDate.setMilliseconds, inputDate.setMilliseconds);
    return Math.abs(currentDate.setMilliseconds - inputDate.setMilliseconds);
  }

  function getYrsLeft(x) {
    if (x<x.getLifeExp) {
      return (x.getAge - x.getLifeExp);
    } else {
      console.log("You surpassed the average life expectancy in your planet!");
    }
    }
