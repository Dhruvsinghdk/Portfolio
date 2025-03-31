const resumebtns = document.querySelectorAll('.resume-btn');

resumebtns.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{
        resumebtns.forEach(btn =>{
            btn.classList.remove('active')
        });
        btn.classList.add('active');
    });
});


