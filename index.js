// Write your code in this file!

  function scuberGreetingForFeet(ride) {
    let result
    if (ride <= 400) {
      result = 'This one is on me!';
    } else if (2000 < ride && ride < 2500) {
      result = 'I will gladly take your thirty bucks.';
    } else {
      result = 'No can do.';
    }
    return result
  }

  function ternaryCheckCity(city) {
    let result;
    (city === 'NYC') ? result = 'Ok, sounds good.' : result = 'No go.';
    return result
  }

  function switchOnCharmFromTip(tip) {
    let result;
    switch (tip) {
      case 'generous':
        result = 'Thank you so much.';
        break;
      case 'not as generous':
        result = 'Thank you.';
        break;
      case 'thanks for everything':
        result = 'Bye.';
        break;
    }
    return result;
  }
