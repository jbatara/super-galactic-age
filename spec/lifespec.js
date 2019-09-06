import {
  SuperGalacticAge
} from '../src/super-galactic-age';
import {
  Lifestyle
} from '../src/lifestyle';

describe('Lifestyle.checkGender', function () {
  let momLifestyle;
  let momL_badEverythingA;
  let momL_badEverythingB;
  let momL_badEverythingC;

  beforeEach(function () {
    //lifestyle: gender, country, diet, smoking, physical activity, alcohol consumption, bmi
    momLifestyle = new Lifestyle('f', 'usa', 5, 1, 5, 2, 1);
    momL_badEverythingA = new Lifestyle(2, '', 5035492346, -1, -12, 1.273, 12039);
    momL_badEverythingB = new Lifestyle('w', 'mars', 'ga', 'food', 'bar', 'foo', 'chicken');
    momL_badEverythingC = new Lifestyle();
  });


  it('should return an error if an invalid entry was given for the user gender', function () {
    expect(momLifestyle.checkGender()).toEqual(true);
    expect(momL_badEverythingA.checkGender()).toEqual(false);
    expect(momL_badEverythingB.checkGender()).toEqual(false);
    expect(momL_badEverythingC.checkGender()).toEqual(false);
  });
});

describe('Lifestyle.checkCountry', function () {

  let momLifestyle;
  let momL_badEverythingA;
  let momL_badEverythingB;
  let momL_badEverythingC;

  beforeEach(function () {
    //lifestyle: gender, country, diet, smoking, physical activity, alcohol consumption, bmi
    momLifestyle = new Lifestyle('f', 'usa', 5, 1, 5, 2, 1);

    momL_badEverythingA = new Lifestyle(2, '', 5035492346, -1, -12, 1.273, 12039);
    momL_badEverythingB = new Lifestyle('w', 'mars', 'ga', 'food', 'bar', 'foo', 'chicken');
    momL_badEverythingC = new Lifestyle();
  });
  it('should return an error if an invalid entry was given for the user country', function () {
    expect(momLifestyle.checkCountry()).toEqual(true);
    expect(momL_badEverythingA.checkCountry()).toEqual(false);
    expect(momL_badEverythingB.checkCountry()).toEqual(false);
    expect(momL_badEverythingC.checkCountry()).toEqual(false);
  });
});

describe('Lifestyle.checkInput', function () {
  let momLifestyle;

  let momLifestyle_nonUSA;
  let momL_badEverythingA;
  let momL_badEverythingB;
  let momL_badEverythingC;
  let dadLifestyle;
  let dadLifestyle_poor;
  let dadLifestyle_nonUSA;
  beforeEach(function () {
    //lifestyle: gender, country, diet, smoking, physical activity, alcohol consumption, bmi
    momLifestyle = new Lifestyle('f', 'usa', 5, 1, 5, 2, 1);
    momLifestyle_nonUSA = new Lifestyle('f', 'china', 5, 1, 5, 2, 1);
    momL_badEverythingA = new Lifestyle(2, '', 5035492346, -1, -12, 1.273, 12039);
    momL_badEverythingB = new Lifestyle('w', 'mars', 'ga', 'food', 'bar', 'foo', 'chicken');
    momL_badEverythingC = new Lifestyle();
  });

  it('should return an error if an invalid entry was given for the user input', function () {
    expect(momLifestyle.checkInput()).toEqual(true);
    expect(momL_badEverythingA.checkInput()).toEqual(false);
    expect(momL_badEverythingB.checkInput()).toEqual(false);
    expect(momL_badEverythingC.checkInput()).toEqual(false);
  });
});

describe('Lifestyle.expectedLifeSpan', function () {
  let momLifestyle;
  let momLifestyle_poor;
  let momLifestyle_nonUSA;
  let dadLifestyle;
  let dadLifestyle_poor;
  let dadLifestyle_nonUSA;
  beforeEach(function () {
    //lifestyle: gender, country, diet, smoking, physical activity, alcohol consumption, bmi
    momLifestyle = new Lifestyle('f', 'usa', 5, 1, 5, 2, 1);
    momLifestyle_poor = new Lifestyle('f', 'usa', 1, 5, 1, 5, 5);
    momLifestyle_nonUSA = new Lifestyle('f', 'china', 5, 1, 5, 2, 1);
    dadLifestyle = new Lifestyle('m', 'usa', 5, 1, 5, 2, 1);
    dadLifestyle_poor = new Lifestyle('m', 'usa', 1, 5, 1, 5, 5);
    dadLifestyle_nonUSA = new Lifestyle('m', 'china', 5, 1, 5, 2, 1);



  });

  it('should return the lifespan of those outside the USA with an average lifespan depending on gender', function () {
    expect(momLifestyle_nonUSA.expectedLifeSpan()).toEqual(77.6);
    expect(dadLifestyle_nonUSA.expectedLifeSpan()).toEqual(74.6);
  });

  it('should return the lifespan of those inside the USA depending on lifestyle factors', function () {
    expect(momLifestyle.expectedLifeSpan()).toEqual(93.1);
    expect(momLifestyle_poor.expectedLifeSpan()).toEqual(79);
    expect(dadLifestyle.expectedLifeSpan()).toEqual(87.6);
    expect(dadLifestyle_poor.expectedLifeSpan()).toEqual(75.5);
  });
});