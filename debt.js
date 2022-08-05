const getSleepHours = day => {
    if (day === 'monday' || day === 'tuesday' ||day === 'wednesday' || day === 'thursday' || day === 'friday' || day === 'sunday') {
      return 8;
    } else {
  return 6;
    }
  };
  
  getActualSleepHours = () => 
    getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');
  
  getIdealSleepHours = () => {
    let idealHours = 9;
    return idealHours * 7;
  }
  
  calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours =  getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('you are sleeping the ideal amount');
    } else if (actualSleepHours <= idealSleepHours) {
      console.log('you are sleeping less than is ideal');
    } else {
      console.log('you are sleeping too much');
    }
  }
  
  
  // console.log(getSleepHours("saturday"));
  console.log(getActualSleepHours("saturday"));
  console.log(getIdealSleepHours("saturday"));
  calculateSleepDebt();