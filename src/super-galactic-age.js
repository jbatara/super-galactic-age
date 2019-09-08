import {
  Lifestyle
} from './lifestyle';
const mercuryRatio = 0.24;
const venusRatio = 0.62;
const marsRatio = 1.88;
const jupiterRatio = 11.86;

export class SuperGalacticAge {
  constructor(age) {
    if ((typeof age === 'number') && age >= 0) {
      this.earth = age;
      this.mercury = age/mercuryRatio;
      this.venus = age / venusRatio;
      this.mars = age / marsRatio;
      this.jupiter = age / jupiterRatio;
    }
  }
}
