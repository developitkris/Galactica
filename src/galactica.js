import $ from 'jquery';

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

  //arbitrarily assigned LE, depending on duration of planet's solar yr
  getLifeExp(planet){
    let avgLifeExp = 0;

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

  function ageIntoSec(age) {
    let yrs = age;
    let days = 365;
    let hours = 24;
    let mins = 60;
    let secs = 60;

    return Math.floor(yrs*days*hours*mins*secs);
  }

  function earthDateDiff() {
    let currDate = new Date(`${currYr}/${currMo}/${currDy}`);
    let birthDate = new Date(`${birthYr}/${birthMo}/${birthDy}`);

    return Math.abs((Date.parse(currDate) - Date.parse(birthDate))/ 1000);
  }

  function getYrsLeft() {
    if (this.getAge<this.getLifeExp) {
      return (this.getAge - this.getLifeExp);
    } else {
      console.log("You've surpassed the average life expectancy in your planet!  May you live long & prosper!!");
    }
    }
