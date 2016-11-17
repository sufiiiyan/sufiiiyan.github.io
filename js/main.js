(function(){
    'use strict';
    
    $(document).ready(function(){
        console.log('in main.js');
        
        $("#typeElement").typed({
            strings: ["First sentence.", "Second sentence."],
            typeSpeed: 0
        });
    });
})();