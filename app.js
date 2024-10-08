// Q-1

// var firstName = prompt ("Enter your first name");
// var lastName = prompt ("Enter your last name");

// var fullName = firstName + "" + lastName;
// alert ("Hello, " + fullName + "!");



// Q-2

// var mobile = prompt ("Enter your favourite mobile phone");

// var length = mobile.length;
// document.write ( "You entered: " + mobile );



// Q-3

// var pak = "pakistani";

// var index = pak.indexOf("n");
// document.write ("pak: " + pak + "" );
// document.write(" index of 'n': " + index );



// Q-4


// var Hello = "Hello world";

// var lastindex = Hello.lastIndexOf("l");
// document.write ("last index of letter 'l' : " + lastindex );


// Q-5

// var pak = "pakistani";

// var index = pak.indexOf("i");
// document.write ("pak: " + pak + "" );
// document.write(" index of 'i': " + index );



// Q-6


// var word = "Hyderabad";
// var newWord = word.replace ("Hyder", "Islam");

// document.write ("original Word : " + word + "" + "<br>" );
// document.write ("New Word : " + newWord );


// Q_9

// var str = "472"
// var num = parseInt (str);

// document.write ("string Value : " + str + "Type :" + "typeof str" ,"<br>" );
// document.write ( "Number value :" + num + "(Type :" + typeof num + " ) ");



// Q-10

// var word = "Peanut";
// var word = word.toUpperCase()

// document.write (word);



// Q-11

// var title = "javaScript";
// var js = title.slice (0,1).toUpperCase();
// var remainig = title.slice (1,).toLowerCase();

// var complete = js + remainig;

// document.write (complete);



// Q-12

// var num = 35.36;
// var str = num.toString().replace ("." , "" );

// document.write ("Original Number :" + num + "", "<br>" )
// document.write ("converted string : " + str );



// Q-13

// var userName = prompt ("Enter username")
// var specialChar = ["@", "!", ",", ".", "#", "*" ];

// for (var i = 0; i < userName.length; i++){
//     if (specialChar.includes(userName[i])){
//         document.write ("Correct password ..!")
//     }

//     else{
//         document.write ("Wrong password... Try again!")
//     }
// }



// Q-14



// Q-15


// var input = +prompt(" Enter passsword ");


// var randomValues =
//   "ABCDMNOPQRSTUVWXYZbacdefghijklmtuvwxyz156790";

// var password = "";

// for (var i = 0; i <= 7; i++) {
//   var randomNumbers = Math.floor(Math.random() * randomValues.length);
//   password += randomValues[randomNumbers];
// }

// if (password) {
//     alert ( " Okk correct password..! " )

// }else {

//     alert ( "Enter a valid password" );
// }




// Q-16

// var uni = "University of karachi";
// var uniArray = uni.split();

// for (var i = 0 ; i<uniArray.length; i++ ){
//     document.write (uniArray);
// }


// Q-17


// var pak = "pakistani";

// var index = pak.lastIndexOf("n");
// document.write ("pak: " + pak + "" );
// document.write(" index of 'n': " + index );



// Q-18

var str = "The quick brown fox jumps over the lazy dog"

str = str.toLowerCase() ;
var count = str.split ("the").length-1;

document.write (  "Number of occurances of word 'the:" + count );



