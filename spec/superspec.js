import {SuperGalacticAge} from '../src/super-galactic-age';
import {Lifestyle} from '../src/lifestyle';

describe('SuperGalacticAge', function () {
  let newerBaby;
  let baby;
  let mom;
  let momLifestyle;
  const mercuryRatio = 0.24;
  const venusRatio = 0.62;
  const marsRatio = 1.88;
  const jupiterRatio = 11.86;
  beforeEach(function () {
     newerBaby = new SuperGalacticAge(0);
     baby = new SuperGalacticAge(1);
     mom = new SuperGalacticAge(30);
    //lifestyle: gender, country, diet, smoking, physical activity, alcohol consumption, bmi
     momLifestyle = new Lifestyle('f', 'usa', '5d', '5s', '5p', '5a', '5b');
  });

  it('should not be able to create an object with an argument of <0',function() {
    expect(new SuperGalacticAge(-20).age).toBeUndefined();
    expect(new SuperGalacticAge(-63).age).toBeUndefined();
  });

  it('should not be able to create an object with an argument of imaginary numbers or non-number inputs', function() {
    expect(new SuperGalacticAge(Math.i).earth).toBeUndefined();
    expect(new SuperGalacticAge("sixty-three").earth).toBeUndefined();
  });

  it('should create a new Super Galactic Age object for any paramater >=0',function() {
    expect(newerBaby).toBeDefined();
    expect(baby).toBeDefined();
    expect(mom).toBeDefined();
  });

  it('should be able to calculate the person\'s mercury age from earth age', function() {
    expect(newerBaby.mercury).toEqual(0);
    expect(baby.mercury).toEqual(baby.earth/mercuryRatio);
    expect(mom.mercury).toEqual(mom.earth/mercuryRatio);
  });

  it('should be able to calculate the person\'s venus age from earth age',function() {
    expect(newerBaby.venus).toEqual(0);
    expect(baby.venus).toEqual(baby.earth/venusRatio);
    expect(mom.venus).toEqual(mom.earth/venusRatio);
  });

  it('should be able to calculate the person\'s mars age from earth age',function() {
    expect(newerBaby.mars).toEqual(0);
    expect(baby.mars).toEqual(baby.earth/marsRatio);
    expect(mom.mars).toEqual(mom.earth/marsRatio);
  });

  it('should be able to calculate the person\'s jupiter age from earth age', function(){
    expect(newerBaby.jupiter).toEqual(0);
    expect(baby.jupiter).toEqual(baby.earth/jupiterRatio);
    expect(mom.jupiter).toEqual(mom.earth/jupiterRatio);
  });
});

describe('SuperGalacticAge.addLifestyle', function () {
  let newerBaby;
  let baby;
  let mom;
  let dad;
  let momLifestyle;
  let momLifestyle_poor;
  let momLifestyle_nonUSA;
  let momL_badEverythingA;
  let momL_badEverythingB;
  let momL_badEverythingC;
  let dadLifestyle;
  let dadLifestyle_poor;
  let dadLifestyle_nonUSA;
  beforeEach(function () {
    newerBaby = new SuperGalacticAge(0);
    baby = new SuperGalacticAge(1);
    mom = new SuperGalacticAge(30);
    dad = new SuperGalacticAge(25);
    //lifestyle: gender, country, diet, smoking, physical activity, alcohol consumption, bmi
    momLifestyle = new Lifestyle('f', 'usa', 5, 1, 5, 2, 1);
    momLifestyle_poor = new Lifestyle('f', 'usa', 1, 5, 1, 5, 5);
    momLifestyle_nonUSA = new Lifestyle('f', 'china', 5, 1, 5, 2, 1);
    momL_badEverythingA = new Lifestyle(2, '', 5035492346, -1, -12, 1.273, 12039);
    momL_badEverythingB = new Lifestyle('w', 'mars', 'ga', 'food', 'bar', 'foo', 'chicken');
    momL_badEverythingC = new Lifestyle();

    dadLifestyle = new Lifestyle('m', 'usa', 5, 1, 5, 2, 1);
    dadLifestyle_poor = new Lifestyle('m', 'usa', 1, 5, 1, 5, 5);
    dadLifestyle_nonUSA = new Lifestyle('m', 'china', 5, 1, 5, 2, 1);



  });

  it('should return false when attempting to add a lifesytle that is invalid', function () {
    expect(mom.addLifestyle(momLifestyle)).toEqual(true);
    expect(mom.addLifestyle(momL_badGenderA)).toEqual(false);
    expect(mom.addLifestyle(momL_badGenderB)).toEqual(false);
    expect(mom.addLifestyle(momL_badGenderC)).toEqual(false);
  });
});
