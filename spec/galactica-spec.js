import {Galactica} from "./../src/galactica.js";

describe('Galactica', function() {
  const newGalacticCalc = new Galactica();

  it('should test that age has a default to age on Earth', function(){
    expect(newGalacticCalc.getAge(21)).toEqual(21);
  });
  it('should test that age can be converted to milliseconds', function(){
    expect(newGalacticCalc.ageMillisec(21)).toEqual(6.623e+11);
  });
  it('should test that age can be converted to Mercury age', function(){
    expect(newGalacticCalc.getAge(21)).toEqual(87);
  });
  it('should test that age can be converted to Venus age', function(){
    expect(newGalacticCalc.getAge(21)).toEqual(33);
  });
  it('should test that age can be converted to Mars age', function(){
    expect(newGalacticCalc.getAge(21)).toEqual(11);
  });
  it('should test that age can be converted to Jupiter age', function(){
    expect(newGalacticCalc.getAge(21)).toEqual(1);
  });
  it('should test that age and planet calculates years left', function(){
    expect(newGalacticCalc.getYrsLeft(earth, 21)).toEqual(51);
  });
  it('should test that age and planet calculates years left', function(){
    expect(newGalacticCalc.getYrsLeft(mercury, 21)).toEqual(320);
  });
  it('should test that age and planet calculates years left', function(){
    expect(newGalacticCalc.getYrsLeft(venus, 21)).toEqual(169);
  });
  it('should test that age and planet calculates years left', function(){
    expect(newGalacticCalc.getYrsLeft(mars, 21)).toEqual(114);
  });
  it('should test that age and planet calculates years left', function(){
    expect(newGalacticCalc.getYrsLeft(jupiter, 21)).toEqual(18);
  });
  it('should test that difference in two dates can be expressed in milliseconds', function(){
    expect(newGalacticCalc.dateDiffMillisec(2018, 05, 25, 2018, 05, 27)).toEqual(172800);
  });
  it('should test if the person outlived the average life expectancy in their planet', function(){
    expect(newGalacticCalc.getYrsLeft(88, earth)).toEqual("You surpassed the average life expectancy in your planet!");
  });
});
