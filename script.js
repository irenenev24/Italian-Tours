const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
//const places = [
    {
  //      name: 'Rome',
    //    description:"Home to the Eternal city and such manmade wonders as the sistine chapel and the trevi fountain Rome is Italy's vibrant capital, a must see for any lover of Italian culture.",
      //  image_location: 'assets/images/colosseum-small.jpg',
    //},
    //{
      //  name: 'Abruzzo',
        //description:"Featuring unspoilt beaches, natural lakes, beautiful landscapes and authentic villages, Abruzzo has everything needed to help you relax in a tranquil setting.",
        //image_location: 'assets/images/abruzzo-mountain-small.jpg',
    //},
    //{
     //   name: 'Sicily',
       // description:"Eternal crossroads of the Mediterranean, the gorgeous island of Sicily continues to seduce travellers with its dazzling diversity of landscapes and cultural treasures.",
        //image_location: 'assets/images/sicily-beach-small.jpg',
    //},
//]


//console.log(places[i])






//let img = document.createElement("img");
//let elem = document.getElementById("the tag you want to change code of");
//elem.innerHTML = "<p>Hello</p>";
//document.innerHTML += '<a href=\"youtue.com\">click me !</a>';
 
//img.src = "assets/images/pescara-beach.jpg";
//let src = document.getElementById("places");
 
//src.appendChild(img);

//var tag = document.createElement("p"); 
  //var text = document.createTextNode("Featuring unspoilt beaches, natural lakes, beautiful landscapes and authentic villages, Abruzzo has everything needed to help you relax in a tranquil setting."); 
  //tag.appendChild(text); 
  //var element = document.getElementsByTagName("body")[0];
  //element.appendChild(tag);