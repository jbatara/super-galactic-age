import {SuperGalacticAge} from './../src/super-galactic-age';
import {Lifestyle} from './../src/lifestyle';

describe('SuperGalacticAge', function () {
  beforeEach(function () {
    const newerBaby = new SuperGalacticAge(0);
    const baby = new SuperGalacticAge(1);
    const mom = new SuperGalacticAge(30);
    //lifestyle: gender, country, diet, smoking, physical activity, alcohol consumption, bmi
    const momLifestyle = new Lifestyle('f', 'usa', '5d', '5s', '5p', '5a', '5b');
  });

  it('should not be able to create an object with an argument of <0') {
    expect(new SuperGalacticAge(-20)).toEqual("Error");
    expect(new SuperGalacticAge(-63)).toEqual("Error");
  }

  it('should not be able to create an object with an argument of imaginary numbers or non-number inputs') {
    expect(new SuperGalacticAge(math.i)).toEqual("Error");
    expect(new SuperGalacticAge("sixty-three")).toEqual("Error");
  }

  it('should not be able to create an object with an argument of imaginary numbers or non-number inputs') {
    expect(new SuperGalacticAge(math.i)).toEqual("Error");
    expect(new SuperGalacticAge("sixty-three")).toEqual("Error");
  }

  it('should create a new Super Galactic Age object for any paramater >=0') {
    expect(newerBaby).toBeDefined();
    expect(baby).toBeDefined();
    expect(mom).toBeDefined();
  }

  it('should be able to calculate the person\'s mercury age from earth age') {
    let galacticAge = 0.24;
    let momGalacticAge = mom.earth / galacticAge;
    expect(newerBaby.venus).toEqual(0);
    expect(baby.venus).toEqual(galacticAge);
    expect(mom.venus).toEqual(momGalacticAge);
  }

  it('should be able to calculate the person\'s venus age from earth age') {
    let galacticAge = 0.62;
    let momGalacticAge = mom.earth / galacticAge;
    expect(newerBaby.venus).toEqual(0);
    expect(baby.venus).toEqual(galacticAge);
    expect(mom.venus).toEqual(momGalacticAge);
  }

  it('should be able to calculate the person\'s mars age from earth age') {
    let galacticAge = 1.88;
    let momGalacticAge = mom.earth / galacticAge;
    expect(newerBaby.venus).toEqual(0);
    expect(baby.venus).toEqual(galacticAge);
    expect(mom.venus).toEqual(momGalacticAge);
  }

  it('should be able to calculate the person\'s jupiter age from earth age') {
    let galacticAge = 11.86;
    let momGalacticAge = mom.earth / galacticAge;
    expect(newerBaby.venus).toEqual(0);
    expect(baby.venus).toEqual(galacticAge);
    expect(mom.venus).toEqual(momGalacticAge);
  }
});

describe('Lifestyle', function () {
  beforeEach(function () {
    const newerBaby = new SuperGalacticAge(0);
    const baby = new SuperGalacticAge(1);
    const mom = new SuperGalacticAge(30);
    //lifestyle: gender, country, diet, smoking, physical activity, alcohol consumption, bmi
    const momLifestyle = new Lifestyle('f', 'usa', '5d', '5s', '5p', '5a', '5b');
    const momL_badEverythingA = new Lifestyle(2, '', 5035492346, -1, -12, 1.273, 12039);
    const momL_badEverythingB = new Lifestyle('w', 'mars', 'ga','food','bar','foo','chicken');
    const momL_badEverythingC = new Lifestyle();


  });

  it('should return an error if an invalid entry was given for the user gender') {
    expect(momLifestyle.checkGender()).toEqual(true);
    expect(momL_badGenderA.checkGender()).toEqual(false);
    expect(momL_badGenderB.checkGender()).toEqual(false);
    expect(momL_badGenderC.checkGender()).toEqual(false);
  }

  it('should return an error if an invalid entry was given for the user country') {
    expect(momLifestyle.checkCountry()).toEqual(true);
    expect(momL_badGenderA.checkCountry()).toEqual(false);
    expect(momL_badGenderB.checkCountry()).toEqual(false);
    expect(momL_badGenderC.checkCountry()).toEqual(false);
  }

   it('should return an error if an invalid entry was given for the user input') {
     expect(momLifestyle.checkInput()).toEqual(true);
     expect(momL_badGenderA.checkInput()).toEqual(false);
     expect(momL_badGenderB.checkInput()).toEqual(false);
     expect(momL_badGenderC.checkInput()).toEqual(false);
   }

   it('should return false when attempting to add a lifesytle that is invalid'){
    expect(mom.addLifestyle(momLifestyle)).toEqual(true);
    expect(mom.addLifestyle(momL_badGenderA)).toEqual(false);
    expect(mom.addLifestyle(momL_badGenderB)).toEqual(false);
    expect(mom.addLifestyle(momL_badGenderC)).toEqual(false);
   }

  

});