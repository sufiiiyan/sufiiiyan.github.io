(function(){
    'use strict';
    
    $(document).ready(function(){
        console.log('in main.js');
        
        $("#typeElement").typed({
            strings: ["First sentence.", "Second sentence."],
            typeSpeed: 0
        });
        
     

        var button = document.getElementById('cn-button'),
        wrapper = document.getElementById('cn-wrapper');

        //open and close menu when the button is clicked
        var open = false;
        button.addEventListener('click', handler, false);

        function handler(){
          if(!open){
            this.innerHTML = "-";
            classie.add(wrapper, 'opened-nav');
          }
          else{
            this.innerHTML = "+";
            classie.remove(wrapper, 'opened-nav');
          }
          open = !open;
        }
        function closeWrapper(){
            classie.remove(wrapper, 'opened-nav');
        }


    });
})();