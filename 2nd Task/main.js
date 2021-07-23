function showDetails(age,name) {
  name = prompt('what is your name?');
  age = prompt('How old are you ?','');
 

    if ( age > 18 ){
         age = 'you are above 18 years'
    }
    else{
        age = 'you are below 18 years'
    }
    console.log("Hi " + name +" " + age);
}
showDetails();

function checkAge(age)
{
    if (age>18){
        return true;
    }
    else{
        return false;
    }
} 


  let _gender = '';
    
    if(gender =='male'||gender =='Male')
    {
         _gender = console.log('M');
    }
    else if(gender=='female'||gender=='Female')
    {
        _gender= console.log('F');
    }
    else{
        _gender = console.log('Gender is only female (F) or (M) male')
    }

  
    console.log("Hi, " + name + " (Gender) here("+ gender +")"+age);
}








/*Create an array that receives [ name, surname, gender, age]
o Prompt user to enter those variables.
o Display list of users
Headings
• Name | Surname | Gender | Age
*/


int mixedArray[4];
var array[]={"Name","Surname","Gender",Age};

for(let i = 0; i < mixedArray.length; i++)
{
	for(let j = 0; j < array.length; j++)
	{
		prompt= mixedArray[j];
	}
}



//Create an arrow function that receives three arguments (num1 , num2 , num3 )
//o Calculate total and return sum, display on a console.


let num1 = Number(prompt('input a 1st number'));
let num2 = Number(prompt('input a 2nd number'));
let num3 = Number(prompt('input a 3rd number'));

let sum = (num1, num2, num3) =>num1 + num2 + num3;
console.log(sum(num1, num2, num3));
