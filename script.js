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


