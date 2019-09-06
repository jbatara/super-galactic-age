export class Lifestyle{
  constructor(gender,country, diet, smoking, activity, alcohol, bmi){
    this.gender = gender;
    this.country = country;
    this.diet = diet;
    this.smoking = smoking;
    this.activity = activity;
    this.alcohol = alcohol;
    this.bmi = bmi;
  }

  checkGender(){
    if(this.gender === ('m' || 'f')){
      return true;
    }else{
      return false;
    }
  }
}