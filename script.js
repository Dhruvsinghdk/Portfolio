const resumebtns = document.querySelectorAll('.resume-btn');

resumebtns.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{

        const resumedetails = document.querySelectorAll('.resume-detail');

        resumebtns.forEach(btn =>{
            btn.classList.remove('active')
        });
        btn.classList.add('active');

        resumedetails.forEach(details =>{
            details.classList.remove('active');
        });
        resumedetails[idx].classList.add('active')
    });
});


const arrowright = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowleft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activeportfolio = ()=>{
    const imgslide = document.querySelector('.portfolio-carousel .img-slide');

    imgslide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
}

arrowright.addEventListener('click', ()=>{
    if(index < 4){
        index++;
        arrowleft.classList.remove('disabled')
    }
    else{
        index = 5;
        arrowright.classList.add('disabled');
    }

    activeportfolio();
});

arrowleft.addEventListener('click', ()=>{
    if(index > 1){
        index--;
        arrowright.classList.remove('disabled')
    }
    else{
        index = 0;
        arrowleft.classList.add('disabled');
    }

    activeportfolio();
});