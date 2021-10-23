/* Shiv Bindra
     Student #  300758190
     Assignment 2
     COMP 229- SECTION 001
     DATE - OCTOBER, 22, 2021


 */
(function(){

    function Start()
    {
        console.log("App Started....");

        let deleteButtons = document.querySelectorAll('.btn-danger')

        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure"))
                {
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);
})();