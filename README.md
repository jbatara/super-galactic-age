# _Super Galactic Age_

#### _A Planetary Age and Estimated Lifespan Calculator, September 7th, 2019_

#### _By **Jennifer Batara**_

## Description

This application asks for a user's information and determines what their age would be on many different planets in our solar system. Also, if the person is from the USA, they will be prompted to fill out a lifestyle survey to determine their estimated lifespan.

All Earth age to other plantary/animal years were converted using ratios provided by the original problem prompt by _Epicodus_.

The estimated lifespans by country and gender were obtained from the [World Health Organization](http://apps.who.int/gho/data/node.main). Lifestyle dependent lifepsans for those living in the United States were loosely based on the following article:

[Li, Yanping, et al. "Impact of healthy lifestyle factors on life expectancies in the US population." _Circulation_ 138.4 (2018): 345-355.](https://www.ahajournals.org/doi/full/10.1161/CIRCULATIONAHA.117.032047)

## Specifications

|Spec | Input | Output|
|:---:|:------|:------|
|All ages must be a real number 0 or greater|Age: -20| _undefined_|
|All ages must be a real number 0 or greater|Age: "f"| _undefined_|
|All ages must be a real number 0 or greater|Age: 3i| _undefined_|
|If age is valid, will return Mercury, Venus, Mars, and Jupiter Age|Age: 30| Earth years: 25 <br> Mercury Years: 125 <br> Venus Years: 48.38 <br> Mars Years: 15.95<br> Jupiter Years: 2.52 |
|If country other than USA selected, return expected life span from birth| 'china'<br>'f' | 77.02|
|If USA chosen, return expected life span based on lifestyle factors| 'usa'<br>'f'<br>Diet: Excellent<br> Smoking: Never <br> Physical Activity: Great <br> Alcohol: A few times a week <br> BMI: Normal|93.1|
|If USA chosen, return expected life span based on lifestyle factors| 'usa'<br>'f'<br>Diet: Poor<br> Smoking: 1-2packs/day <br> Physical Activity: Sedentary <br> Alcohol: Multiple drinks a day <br> BMI: Obese|79.0|


## Setup/Installation Requirements

-   Internet Connection
-   Internet browser
-   Unix Terminal (optional)

To view locally please copy the link to [this repo](https://github.com/jbatara/super-galactic-age) and type the following command into your unix terminal:

$git clone repo_url

with repo_url being the url that was just copied. Open index.html using your internet browser of choice (not compatible with Safari) and determine your Super Galactic Age!

This project is currently not hosted online.

## Known Bugs

_No known bugs have been reported._

## Support and contact details

Please feel free to contact the developer by raising a new [issue](https://github.com/jbatara/super-galactic-age/issues/new) on the github repo. You can browse the current issues [here](https://github.com/jbatara/super-galactic-age/issues).

## Technologies Used

* html
* CSS
* Bootstrap
* ES6
* jQuery
* webpackConfig
* Jasmine
* Karma

### License

_MIT_

Copyright (c) 2019 **_Jennifer Batara_**
