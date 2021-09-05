var index=0;
        Slider();

        function Slider(){
            var i;
            var text= document.getElementsByClassName("headline");
            for(i=0; i<text.length; i++){
                text[i].style.display= "none";
            }

            index++;
            if(index>text.length){index=1;}
            text[index-1].style.display= "block";
            setTimeout(Slider, 2000);
        }