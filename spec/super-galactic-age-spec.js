import { SuperGalacticAge } from './../src/super-galactic-age';

describe('SuperGalacticAge', function(){
  beforeEach(function(){
    const newerBaby = new SuperGalacticAge(0);
    const baby = new SuperGalacticAge(1);
    const mom = new SuperGalacticAge(30);
  });

  it('should not be able to create an object with an argument of <0'){
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

  it('should create a new Super Galactic Age object for any paramater >=0'){
    expect(newerBaby).toBeDefined();
    expect(baby).toBeDefined();
    expect(mom).toBeDefined();
  }

  it('should be able to calculate the person\'s mercury age from earth age'){
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