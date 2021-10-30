
<script>
import Modal from "./Modal.svelte";
import { get } from '$lib/stores';


// these var are setable FROM OUTSIDE this component in the file which the comopnent is embeded *** (<Card/>)--> index.svelte ***
    export let date;
    export let subject;
    export let importance;
    export let description;
    export let contact;
    export let id;
    export let saved;
    let openModal = false;

let action;


function confirmation(_action){
    openModal = true;
    action = _action;
}

// -----    add ECard to the saved emails DB -----  -----  <-----  
async function addECard(){
    try{
        const eCard = {
            date,
            subject,
            importance,
            description,
            contact,
            id,
            saved: true
        }
        await fetch('../emails', {
            method: 'POST',
            body: JSON.stringify(eCard)
        })
        get();
    } catch(e) {
        alert('error sucka', e)
    }
}

// -----  -----  -----    DELETE email from DB  -----  -----  <-----  
async function delECard(){
    try{
        await fetch('../emails', {
            method: 'DELETE',
            body: JSON.stringify(id)
        })
        get();
    } catch(e){
        alert('error somewhere or another', e)
    }
}
// -----  -----  -----    refresh email from DB  -----  -----  <-----  
// async function refresh(){
//       const res = await fetch('../emails')
//         const jsonRes = await res.json()
//         console.log('a');
//         return savedEmails = jsonRes.emails
//   }


// ----     determine wether email is to be saved or deleted from DB
function saveOrDeleteEmail(_action){
    action = _action;
    if (action === 'SAVE'){
        addECard()
    } else {
        delECard()
    }
    return openModal = false;
}

// -----  -----  -----    format description for email -----  -----  <-----  



</script>

    <section class="title" id="saved-box">
        <header>
            {#if saved === true}
            <h1 id="saved">🐣 Saved</h1>
            {/if}
            <h1>{importance}</h1>
            <h1>{date}</h1>
            <h1>Send to: {contact}</h1>
            <h1>{subject}</h1>
        </header>
        <div class="content">
            <p style="white-space: pre-line">{description}</p>
        </div>
        <footer>
            <div class="button">
                <button class='email' mode="outline" type='button'><a href="mailto:{contact}?subject={subject} &body={description}"  method="post">email
                </button>
                <button class='delete' type='button' on:click={() => confirmation("DELETE")}>delete</button>
                <button class='save' type='button' on:click={() => confirmation("SAVE")}>save</button>
            </div>
        </footer>
    </section>  

    {#if openModal}
    <Modal on:cancel={() => (openModal = false)}
            on:no={() => (openModal = false)}
            on:yes={saveOrDeleteEmail(action)}
            >
        <p>Are you sure you want to {action}</p>
        </Modal>
    {/if}

    <style>
        section{
            /* position: relative; */
            box-shadow: 0 2px 8px rgba(0,0,0,0.26);
            border-radius: 5px;
            border: .25em solid #5988C2;
            background: rgb(253, 253, 253);
            margin: 1rem;
        } 
/*         
        #saved-box{
            border: .25em solid rgb(75, 110, 84);
        } */
        header,
        .content,
        footer{
            padding: 1rem;
        }
        h1{
            margin-bottom: 0;
        }
        p{
            margin-top: 0;
        }
        .delete{
            margin: 0 .5rem;
        }
        #saved{
            background-color: #AFC5B4;
            padding: 1.5rem;
            background: rgb(253,253,253);
            background: linear-gradient(90deg, rgba(253,253,253,1) 24%, rgba(244,224,190,1) 85%);       
            text-align: right;
            margin-top: 0;
            margin-right: 0;            
            margin-left: auto;
            width: 20vw;
        }
      
    </style>

