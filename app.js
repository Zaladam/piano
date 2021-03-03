var colorBlanc = 'darkturquoise';
var colorNoire = 'gold';

function changeColor(item){
    

    if(item.getAttribute('class')== 'key' && item.style.backgroundColor==colorBlanc){
        item.style.backgroundColor = 'white';
    }else if(item.getAttribute('class')== 'key sharp' &&item.style.backgroundColor==colorNoire){
        item.style.backgroundColor = 'black';
    }else{
        if(item.getAttribute('class')== 'key'){
            item.style.backgroundColor = colorBlanc;
        }else{
            item.style.backgroundColor = colorNoire;
        }
        
    }
    
    
}


