import { readFileSync } from 'fs';

const test = readFileSync('test.txt', 'utf8');
const final = readFileSync('final.txt', 'utf8');

const sortLanternFish: (lanternfishs: string) => number[] = (
  lanternFish: string,
): number[] => {
  const lanternFishArray = lanternFish.split(',');
  let result: number[] = [];

  for (let age = 0; age <= 8; age++) {
    const ageCount = lanternFishArray.filter(
      (fish: string) => fish === age.toString(),
    ).length;
    result[age] = ageCount;
  }

  return result;
};

const createNewLanternFish = (lanternFish: number[], newCount: number) => {
  console.log('🚀 ~ createNewLanternFish ~ lanternFish[8]:', lanternFish[8]);
  console.log('🚀 ~ createNewLanternFish ~ newCount:', newCount);
  lanternFish[8] += newCount;
  return lanternFish;
};

const countTotalFish = (lanternFish: number[]) => {
  return lanternFish.reduce((acc, val) => acc + val, 0);
};

const playDays = (dayCount: number) => {
  let lanternFish = sortLanternFish(test);
  for (let day = 0; day < dayCount; day++) {
    let newFishCount = 0;
    for (let age = 0; age <= 8; age++) {
      const countOfFishWithAge = lanternFish[age];
      console.log('🚀 ~ playDays ~ age:', age);
      console.log('🚀 ~ playDays ~ lanternFish[age]:', lanternFish[age]);
      if (age === 0) {
        newFishCount = countOfFishWithAge;
        console.log('🚀 ~ playDays ~ newFishCount:', newFishCount);
        lanternFish[0] = 0;
      } else {
        lanternFish[age - 1] = countOfFishWithAge;
      }
    }

    if (newFishCount !== 0)
      lanternFish = createNewLanternFish(lanternFish, newFishCount);
    console.log('🚀 ~ End of the day :', lanternFish);
  }
  console.log(
    '🚀 ~ End of the days, Total fish count :',
    countTotalFish(lanternFish),
  );
};

playDays(4);
