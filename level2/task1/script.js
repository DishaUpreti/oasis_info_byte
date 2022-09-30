let screen=document.getElementById('screen');
let screenvalue='';
buttons=document.querySelectorAll('button');
for(item of buttons)
{
    item.addEventListener('click',(e)=>{
        buttontext=e.target.innerText;
        if(buttontext=='X')
        {
            buttontext='*';
            screenvalue +=buttontext;
            screen.value =screenvalue;
        }
        else if(buttontext=='C')
        {
            screenvalue='';
            screen.value=screenvalue;
        }
        else if(buttontext=='=')
        {
            screen.value=eval(screenvalue);
        }
        else if(buttontext=='√')
        {
            screen.value=Math.sqrt(screen.value,2)
            screenvalue=screen.value;
        }
        else if(buttontext=='²')
        {
            screen.value=Math.pow(screen.value,2)
            screenvalue=screen.value;
        }
        else if(buttontext=='³')
        {
            screen.value=Math.pow(screen.value,3)
            screenvalue=screen.value;
        }
        else if(buttontext=='DEL')
        { 

            screenvalue = screenvalue.substr(0, screenvalue.length - 1);
            screen.value=screenvalue;
        }
        else
        {
            screenvalue +=buttontext;
            screen.value =screenvalue;
        }
    })
}