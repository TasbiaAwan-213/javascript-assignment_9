//q1.

 function power(a,b) {
     alert("The value of a raised to b is "+Math.pow(a,b));
 }

 power(4,3);


 //Q2.
function year() {
     var a = +prompt("Enter Year IN Numbers","2012");
     if (a == 2004 || a == 2008 || a == 2012 || a == 2016 || a == 2020) {
         alert("The year you enter is a leap year");
     } else {
         alert("The year you enter is not a leap year");
     }
    
 }
 year();


 //Q 3.

 function triangle(a,b,c) {
     return (a+b+c)/2
 }
 var s = triangle(6,6,6);
 function area(a,b,c) {
     return s*(s-a)*(s-b)*(s-c)
 }
 document.write("The area of triangle is "+area(6,6,6));

//Q4

var eng = +prompt("Enter Your Marks IN English Out OF 100","0");
 var urdu = +prompt("Enter Your Marks Marks IN Urdu Out OF 100","0");
 var math = +prompt("Enter Your Marks Marks IN Math Out OF 100","0");

 function percent(eng,urdu,math) {
     return (eng+urdu+math)/300*100
 }

 function avr(eng,urdu,math) {
     return (eng+urdu+math)/3
 }
 function main() {
     document.write("Marks obtained in English out of Hundred is : "+eng+"<br>"+"Marks obtained in Urdu out of Hundred is : "+urdu+"<br>"+"Marks obtained in Math out of Hundred is : "+math+"<br>"+"Average marks obtained in three subjects is : "+avr(eng,urdu,math)+"<br>"+"Percentege in all subjects is : "+percent(eng,urdu,math));
 }
 main()


 //Q5 

 function learnIndex (){
     var fruits = ['w','x','y','z'];
     var result = fruits.indexOf('z');
     console.log('Index is :',result);
 }
 learnIndex();

 //Q6 

function vowelDel() {
    var ip = prompt("Enter string");
    var res = ip.replace(/[aeiou]/gi,'');
    document.write("After deleting vowels "+ res);
}
vowelDel();

//Q7

function occuranceCount(){
    var ip = prompt("enter string");
    var s = ip.split('');
    var cnt = 0;
    for (var i = 0; i < s.length -1; i++){
        if (isVowel (s[i]) && isVowel(s[i + 1]))
        cnt++;

    }
    console.log(cnt);
}
function isVowel(ch)
{
    switch (ch){
        case 'a':
            case 'e':
            case 'i':
                case 'o':
                    case 'u':

           return true;
           default:
               return false;         
    }
}
occuranceCount();

//Q8

function distance(){
    var distance = Number(prompt('Distance betwen Two cities in km :'));

    alert (' distance in Meters : ' +distance/1000 +  '/n distance in foot'
    +distance/3280.84 + '/n in inches :' +distance/39370.1 + '/n in centimeters :' + distance/10000)

}
distance();

//Q9
function OT() {
    var ip =  prompt("enter working hours ");
    if (ip > 40){
        var entraHr = ip -40;
        var extrapay = extraHr *12;
        document.write ("ur extra pay :"+ extrapay);
    }
}
OT();

function notes (){
    var ip = prompt("enter currency ");
    var cur = ip.split('');
    if (cur .length== 3) {
        op = cur[0] +" hundreds" + cur[1] +" tens "+ cur[2] +" ones ";
    } else if (cur.length == 2) {
        op = cur[0] +" tens "+ cur[1] +" ones ";
    } else if(cur.length == 1) {
        op = cur[0] +" ones ";
    }
    document.write("u have "+ op);
}

    //chapter 43-48 

    //Q1
    function click_link() {
        alert("how r u ");
    }
click_link();

//Q2 
function imgClck() {
    alert("Hello, This is img");
}
imgClck();
//Q3
function del(row) {
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById("tbl").deleteRow(i);
}
 
//Q4 

function enter() {
    document.getElementById("imgHover").setAttribute("src","download (2).jpg")
}
function out() {
    document.getElementById("imgHover").setAttribute("src","download (1).jpg")
}
enter();
out();

//Q5 

function inc() {
    var val = document.getElementById('counter');
    val.innerText++;
}
function dec() {
    var val = document.getElementById('counter');
    val.innerText--;
}

inc();
dec();




/// chapter 49-52

//Q1

function signup() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    document.write("Your email address is "+email+" and password is "+password);

}

//Q2

function readmore() {
    document.getElementById("a").style.display = "none";
    document.getElementById("det").setAttribute("class", "");
}

//Q3



function del(row) {
    var ind = row.parentNode.parentNode.rowIndex;
    document.getElementById("tblWithEdit").deleteRow(ind);
}
function edit(row) {
    var nameRow = row.parentNode.parentNode.childNodes[3];
    var clsRow = row.parentNode.parentNode.childNodes[5];
console.log(row.parentNode.parentNode);
    document.getElementById("form-edit").style.display = "block";

    document.getElementById("save").onclick =  function() {
        var name = document.getElementById("name").value;
        var cls = document.getElementById("class").value;
        nameRow.innerHTML = name;
        clsRow.innerHTML = cls
    }

}

// chapter 58 - 67 



//Q1
function abc() {
    var mains = document.getElementById("main-content");
    console.log(mains.children);

    var render = document.getElementsByClassName("render");
    var i = 0;

    while(i < render.length-1) {
        console.log(render[i].innerHTML);
        i++;
    }
    
    document.getElementById("first-name").value = "tasbia";
    document.getElementById("last-name").value = "Awan";
    document.getElementById("email-id").value = "tasbiaawan213@gmail.com";

}





//Q2



function xyz() {
    var frm = document.getElementById("form-content");
    console.log(frm.nodeType);
    
    var LName = document.getElementById("lastName");
    console.log(LName.nodeType);
    console.log(LName.childNodes.nodeType);

    LName.innerHTML = "Awan";

    var mains = document.getElementById("main-content");
    console.log(mains.firstChild);
    console.log(mains.lastChild);

    console.log(LName.nextSibling);
    console.log(LName.previousSibling);

    var email = document.getElementById("email-id");
    console.log(email.parentNode);
    console.log(email.nodeType);
}