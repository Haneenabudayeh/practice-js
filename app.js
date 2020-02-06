var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hournow > 18){greeting ='good evening!';}
else if (hourNow >12){greeting ='good afternoon!';}
else if (hourNOW > 0){greeting ='good morning!';}
else {greeting = 'welcome!';}
document.write('h3'+ greeting +'</h3>' );
