
function chageDarkMode(){
   let dark = document.body;
   let icon = document.getElementById("img");
   
    dark.classList.toggle("para");
 if(dark.classList.contains("para")){
       icon.src = "https://w7.pngwing.com/pngs/763/299/png-transparent-button-on-control-touch-interface-power-off.png";   // dark mode icon
   } else {
       icon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStd2zLWAHSKoqvfQSkoaeiZUyMiHCGgaF5SA&s";  // light mode icon
   }
    
    
   
}