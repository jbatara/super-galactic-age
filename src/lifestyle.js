const countryList = {
  afghanistan: {
    m: 58.67,
    f: 61.06
  },
  australia: {
    m: 80.33,
    f: 86.56
  },
  canada: {
    m: 79.69,
    f: 83.78
  },
  china: {
    m: 73.97,
    f: 77.02
  },
  france: {
    m: 78.76,
    f: 84.87
  },
  malaysia: {
    m: 72.21,
    f: 76.88
  },
  usa: {
    0:{
      m: 75.5,
      f: 79.0
    },
    1:{
      m:77.7,
      f:81.5
    },
    2:{
      m:80.4,
      f:84.0
    },
    3:{
      m:82.2,
      f:86.7
    },
    4:{
      m:85.4,
      f: 88.9
    },
    5:{
      m:87.6,
      f:93.1
    }
  }
};
export class Lifestyle {
  constructor(gender, country, diet, smoking, activity, alcohol, bmi) {
    this.gender = gender;
    this.country = country;
    this.diet = diet;
    this.smoking = smoking;
    this.activity = activity;
    this.alcohol = alcohol;
    this.bmi = bmi;
  }

  checkGender() {
    const genderA = ['m', 'f'];
    if (genderA.includes(this.gender)) {
      return true;
    } else {
      return false;
    }
  }

  checkCountry() {
    if (Object.keys(countryList).includes(this.country)) {
      return true;
    } else {
      return false;
    }
  }

  checkInput() {
    const array = [this.diet, this.smoking, this.activity, this.alcohol, this.bmi];

    for (let i = 0; i < array.length; i++) {
      if (!Number.isInteger(array[i])) {
        return false;
      }else if(array[i]>5 || array[i]<0) {
        return false;
      }
    }
    return true;
  }

  expectedLifeSpan(){
    const usaBestLifestyleFactors = {
      diet: [4,5],
      smoking: [1],
      activity: [4,5],
      alcohol: [2],
      bmi: [1,2]
    };
    const lifestyle = this;
    if(lifestyle.checkGender() && lifestyle.checkCountry() && lifestyle.checkInput()){
      if(lifestyle.country === 'usa'){
        let lifestyleFactorCounter = 0;
        Object.keys(usaBestLifestyleFactors).forEach(function(key){
          if(usaBestLifestyleFactors[key].includes(lifestyle[key])){
            lifestyleFactorCounter++;
          }
        });
        return countryList.usa[lifestyleFactorCounter][lifestyle.gender];
      }else{
        return countryList[lifestyle.country][lifestyle.gender];
      }
    }else{
      return "Invalid Input";
    }
  }

}
