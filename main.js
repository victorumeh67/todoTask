window.addEventListener('load', ()=>{
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');
    const mssg = document.querySelector('.msg');

    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const task = input.value;
        if(task == ""){
            mssg.classList.add('error');
            mssg.innerHTML = '<h4>Please enter a task</h4>';
            input.focus();
            setTimeout(()=> mssg.remove(),3000);

        }

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const  task_content_el = document.createElement('div');
        task_content_el.innerText = task
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        list_el.appendChild(task_el);

        const content_input_el = document.createElement('input');
        content_input_el.classList.add('text');
        content_input_el.value = task;
        content_input_el.setAttribute('readonly', 'readonly')
        task_content_el.appendChild(content_input_el)
    })


})


