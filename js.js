var all_button = document.getElementsByTagName('button')

var copyAllButton = [];
for(let i=0; i<all_button.length;i++)
{
    copyAllButton.push(all_button[i].classList[1]);
}
function buttonColorChange(buttonThinny)
{
    if(buttonThinny.value == 'red')
    {
        buttonRed();
    }
    else if(buttonThinny.value == 'green')
    {
        buttonGreen();
    }
    else if(buttonThinny.value == 'reset')
    {
        buttonReset();
    }
    else if(buttonThinny.value == 'random')
    {
        buttonRandom();
    }
}

function buttonRed()
{
    for(let i=0; i < all_button.length; i++)
    {
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-danger');

    }
}
function buttonGreen()
{
    for(let i=0; i <all_button.length; i++)
    {
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-success');

    }
}

function buttonReset()
{
    for(let i=0; i <all_button.length; i++)
    {
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(copyAllButton[i]);

    }

}

function buttonRandom()
{
    let Choice = ['btn-primary','btn-danger','btn-success','btn-warning'];

    for(let i =0 ; i < all_button.length; i++)
    {
        let randomNumber =  Math.floor(Math.random() * 4);
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(Choice[randomNumber]);
    }
   
}

