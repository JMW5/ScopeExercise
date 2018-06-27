/* 
  1. Fix the following Javascript so that the countdown displays
      ---the fix was the remove the variables that was in init function. When the variable wre inside the init() function it was
          only scoped to that function. Functions create their own scope.
      
  2. Replace "var" declaration statements with more appropriate declaration statements (you can just replace the obvious ones)
      ---Replaced var declarations with const
    
  3. Give any anonymous functions names
      ---Removed anoymous function from setInterval and named it isCountdownComplete and passed it into setInterval function.
  
  4. Identify any usage of closures
      ---A closure is basically the variables being accessible to the functions within this scope. *need better explanation*
  
*/

(function() {

    const millisecondsInDay = 86400000;
    const millisecondsInHour = 3600000;
    const millisecondsInMinute = 60000;
    const millisecondsInSecond = 1000;
  
    const countdownEl = document.querySelector('.js-countdown');  
    const currentYear = new Date().getFullYear() + 1;
    const theFinestDayOfTheYear = new Date(currentYear, 2, 17);
  
    function init() {
      
      startInterval();
      
    }
  
    function startInterval() {
        var intervalId = setInterval(isCountdownComplete, millisecondsInSecond);
    }
    
    function isCountdownComplete() {
       var isCountdownComplete = updateCountdown(countdownEl);
         if(isCountdownComplete) {
           clearInterval(intervalId);
         }
    }
  
    function updateCountdown(countdownEl) {
        const now = new Date();
        const timeRemaining = calcTimeDiff(theFinestDayOfTheYear, now);
  
        if(timeRemaining < 0) {
          timeRemaining = 0;
        }
  
        countdownEl.textContent = formatTime(timeRemaining);
  
        return (timeRemaining === 0);
    }
  
    function calcTimeDiff(date1, date2) {
      return date1.getTime() - date2.getTime();
    }
  
    function formatTime(time) {
      var days = Math.floor(time/millisecondsInDay);
      var hours = Math.floor((time % millisecondsInDay) / millisecondsInHour);
      var minutes = Math.floor((time % millisecondsInHour) / millisecondsInMinute);
      var seconds = Math.floor((time % millisecondsInMinute) / millisecondsInSecond);
  
      return padNumber(days) + ':' + padNumber(hours) + ':' + padNumber(minutes) + ':' + padNumber(seconds);
    }
  
    function padNumber(num) {
      return num < 10 ? '0' + num.toString() : num.toString();
    }
  
    
    init();
    
  })();