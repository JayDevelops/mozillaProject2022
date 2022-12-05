const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const rightContent = document.getElementsByClassName('rightContent');

toggle.addEventListener('click',function()
{
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill'))
    {
        body.style.background = '#f0efeb';
        body.style.color = '#264653';
        body.style.transition ='2s';

        rightContent.style.color = '#000000';
    }
    else{
        body.style.background = '#264653';
        body.style.color = '#f0efeb';
        body.style.transition ='2s';

        rightContent.style.color = '#ffffff';
    }

})