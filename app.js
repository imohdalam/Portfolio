const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

// Function for page transition by using icons.
function PageTransitions(){
    // Button click active class
    for(let i=0; i<sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn'; 
        })
    }

    // Section active
    allSections.addEventListener('click', (e)=>{
        const id = e.target.dataset.id;
        if(id){
            // Remove selected from the other Btns
            sectBtns.forEach((sectBtn)=>{
                sectBtn.classList.remove('active-btn');
            })
            //e.target.classList.add('active');

            // Hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

PageTransitions();