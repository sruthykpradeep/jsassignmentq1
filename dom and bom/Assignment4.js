//1.write a javascript program to remove items from a dropdown list.
document.getElementById('removedropdownlist').addEventListener('click',function(){
    document.getElementById('Languages').removeChild(document.getElementById('Languages').lastElementChild)
})

//2.write a javascript programe to change the colour of given text in p tag.
function changecolor(){
let selectedcolor = document.getElementById('colorselect').value
let text = document.getElementById('paratext');
text.style.color=selectedcolor;
}

//3.write a javascript function to get the values of first and last names of the following form.
function getformValues(){
    let firstName = document.getElementById('form1').elemnts['fname'].value;
    let lastName = document.getElementById('form1').elements['1name'].value;
    console.log(firstName);
    console.log(lastName);
}

//4.write a javascript program to calculate sphere volume.
function volume_sphere()
 {
  var volume;
  var radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;
  return false;
 } 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

//5. Write a javascript program to dispaly a random image(clicking on a button)from the following list.
document.getElementById('jsstyle').addEventListener('click',changeImage)

function changeImage(){
    document.getElementById('change').src='https://th.bing.com/th/id/OIP.r6ZlFGWZmzdrK5xxzjgrAgHaE8?w=222&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' 
}
   


//6.Write a javascript program to open a new browser window with a specific URL.
const NewTab = (Event)=>{
    window.open('https://facebook.com')
}

//7.write a program that redirects the user to a different URL when a button is clicked.
function clickHere(){
  window.location.href="https://lenovo.com/"
};
    

  //8.Develop a script to extract and display the current URL's protocol,hostname,and query parameters.
 function displayEvent(){
   
  const protocol ="page URL's protocol is "  + window.location.protocol  ; 
  const host = "host name is " + window.location.hostname ;
  const searchParams = new URLSearchParams(window.location.search);

  console.log(protocol  ,host, searchParams);
}

 //9.Implement a function that reloads the current page.
 function reloadPage(){
    history.go(0);
}

//10.Develop a script that displays the screen width and height.
 function screenMeasures () {
    document.getElementById("width").innerHTML ="Width of the screen : " + screen.width;
    document.getElementById("height").innerHTML ="Height of the screen : " + screen.height;
 };

 //11.Implement a coundown timer that alerts the user when it reaches zero.
 function countTimer(){
    let count = 10;
    const timer = setInterval(function(){
      count--;
      console.log(count);
      if (count === 0) {
        clearInterval(timer);
        alert("Time's up!");
      }
    },1000)
    };
