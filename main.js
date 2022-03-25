

window.addEventListener('load', ()=>{
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el =document.getElementById('tasks');
    const mssg = document.querySelector('.msg');
    const taskList = document.querySelector('.task-list')
    const deleteAll = document.querySelector('delete_all')

    
    
 

    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const task = input.value;
        if(task == ""){
            mssg.classList.add('error');
            mssg.innerHTML = '<h4>Please enter a task</h4>';
            input.focus()
            setTimeout(()=>mssg.remove(), 3000)
            return false;
        }else{
            
        }


        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const  task_content_el = document.createElement('div');
        
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        

        const content_input_el = document.createElement('input');
        content_input_el.classList.add('text');
        content_input_el.type = 'text';
        content_input_el.value = task;
        content_input_el.setAttribute('readonly', 'readonly')
        task_content_el.appendChild(content_input_el)


        localStorage.setItem('content', JSON.stringify(task_content_el))
        localStorage.setItem('content1', JSON.stringify(content_input_el))
        localStorage.setItem('content2', content_input_el.value)


        const action_el = document.createElement('div')
        action_el.classList.add('actions')

        const edit_el = document.createElement('button')
        edit_el.classList.add('edit')
        edit_el.innerHTML = 'Edit'
        action_el.appendChild(edit_el)

        const delete_el = document.createElement('button')
        delete_el.innerHTML ='Delete'
        delete_el.classList.add('delete')

        action_el.appendChild(delete_el)
        
        task_el.appendChild(action_el)
        list_el.appendChild(task_el);

    

        

        
        input.value = "";  
       

        edit_el.addEventListener('click', ()=>{
            if(edit_el.innerText.toLowerCase() == 'edit'){
                content_input_el.removeAttribute('readonly')
                content_input_el.focus()
                edit_el.innerHTML = 'Save'
                
            } else{
                content_input_el.setAttribute('readonly', 'readonly')
                edit_el.innerHTML = 'Edit'
            }
        })

        delete_el.addEventListener('click', ()=>{
            list_el.removeChild(task_el)
        })


        // deleteAll.addEventListener('click', ()=>{
        //     // list_el = ''
        //     // console.log('hello')
            
        // })
    })  


})




