import {
  Lifestyle
} from './lifestyle';
import {
  SuperGalacticAge
} from './super-galactic-age';
import $ from 'jquery';
import 'bootstrap';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles.css';

$(document).ready(function(event) {

  $(document).change(function(event) {
    console.log(event.target.value);
  });

  $('select[name=country]').change(function() {
    if ($(this).val() === 'usa') {
      $('.lifestyle').show();
    } else {
      $('.lifestyle').hide();
    }
  });

  $("form").submit(function(event) {
    event.preventDefault();
    const userAge = parseInt($('input[name=age]').val());
    const userGender = $('select[name=gender]:selected').val();
    const userCountry = $('select[name=country]:selected').val();
    let superAge = new SuperGalacticAge(userAge);
    if (userCountry === 'usa') {
      const userDiet = $('input[name=diet]:selected').val();
      const userSmoking = $('input[name=smoking]:selected').val();
      const userActivity = $('input[name=activity]:selected').val();
      const userAlcohol = $('input[name=alcohol]:selected').val();
      const userBMI = $('input[name=bmi]:selected').val();
      const userLifestyle = new Lifestyle(userGender, userCountry, userDiet, userSmoking, userActivity, userAlcohol, userBMI);
      superAge.addLifestyle(userLifestyle);
      $('.age span').html("You're usa diet is: " + userDiet);
      $('.age').show();
    } else {
      $('.age span').html("You're age is: " + superAge.earth);
      $('.age').show();

    }
  });
});
