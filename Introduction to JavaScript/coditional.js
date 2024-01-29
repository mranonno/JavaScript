// **********Practice task-01  Free Drinks***************

/*let burger=600;
if(burger>500){
    console.log('Free Coke with burger')
}
else{
    console.log('you need to buy coke by extra pay 30 taka')
}*/
// ***********Practice task-02 BMI Calculator********

/*let yourWeight=79;
let yourHeight=1.62;
let BMI=yourWeight/ (yourHeight*yourHeight);
if(BMI<18.5){
    console.log('You are underweight');
}
else if(BMI>=18 && BMI<=24.9){
    console.log('You are normal');
}
else if(BMI>=25 && BMI<=29.9){
    console.log('You are overweight');
}
else{
    console.log('You are obese');
}*/
// **********Practice Task-03 Grade System**************

/*let yourResult=98;
if(yourResult<=100 && yourResult>=90){
    console.log('Your grade is: A');
}
else if(yourResult<=89 && yourResult>=80){
    console.log('Your grade is: B');
}
else if(yourResult<=79 && yourResult>=70){
    console.log('Your grade is: C');
}
else if(yourResult<=69 && yourResult>=60){
    console.log('Your result is: D');
}
else if(yourResult<=59 && yourResult>=0){
    console.log('Your grade is: F');
}*/
// **********Practice Task-04 
/*let yorScore=89;
let friendScore=100;
(yorScore>80)? (friendScore>80)?console.log('go for lunch'):
    (friendScore<80 && friendScore>=60)?console.log('good luck next time'):
        (friendScore<60 && friendScore>=40)?console.log('friend message unseen'):
            (friendScore<40)?console.log('block friend'):0
:console.log('go to home  and sleep and act sad');*/

// Nested
/*let yorScore=60;
let friendScore=100;
if (yorScore>80){
    if (friendScore>80){
        console.log('go for lunch')
    }
    else if (friendScore<80 && friendScore>=60){
        console.log('good luck next time')
    }
    else if(friendScore<60 && friendScore>=40){
        console.log('friend message unseen')
    }
    else if (friendScore<40){
        console.log('block friend')
    }

}
else{
    console.log('go to home  and sleep and act sad')
}*/

// *********Practice Task-05
/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age=9;
let isStudent=false;
if (age < 10){
    console.log('Free')
}
else if(isStudent==true){
    console.log('get a 50% discount')
}
else if(age >= 60){
    console.log('gets a 15% Discount')
}
else{
    console.log('Regular ticket fare 800 tk')
}
return 0;