<script context="module">
    export async function load({fetch}) {
        const res = await fetch('../emails')
        const jsonRes = await res.json()
        console.log(jsonRes.emails);
        // passes keys: as props
        return {props: { emails: jsonRes.emails}}
    }
</script>

<script>

import Header from '../UI/Header.svelte';
import TextInput from '../UI/TextInput.svelte';
import CardGrid from '../UI/CardGrid.svelte';
import Headroom from "svelte-headroom";

export let emails;


// we set Var for the bind f{} via the form inputs
let date ='';
let subject ='';
let importance ="❗️❗️ important❗️❗️";
let description ='';
let email ='';


function reset(){
    date = '';
     subject ='';
    description ='';
    email ='';
}


const importance_levels = [
      "🖕 kind of important ",
      "❗️❗️ important❗️❗️",
      "💀 This is a Priority 💀",
  ];


// array with "form inputs" 
// let emails = []
let contactList = ['joeblow@hotmail.com', 'suzyderkins@springfield.com']


// populates emails with data from "form inputs" on:submit
function addEventCard() {
    const newCard = {
      id: Math.random().toString(),
      date: date,
      subject: subject,
      description: description,
      importance: importance,
      email: email,
      saved: false
    };
    emails = [newCard, ...emails];
    console.log(emails);
    // store T/F variable
    let x = false;



// --------------- Part 1: ---- build a contact list ---------
    // loop over contactList[arr] to see if contact exists
    contactList.forEach(function(contact) {
        
        if(contact !== email){
             reset();
            return console.log(contact);
        } else {
    // if contact exists, change x to true and return
            x = true;
            return
        }
    })
// --------------- Part 2: ----- build a contact list -------
    // if x = false, add contact to list
    if (x === false) {
        contactList = [email, ...contactList]
        return x = false;
    }
    reset();
  }

</script>


<main>
<Header/>

    <div class="form-page">
        <form class='form-entry' autocomplete="off" on:submit|preventDefault={addEventCard} >
            <TextInput 
            controlType='text'
            id="date"
            label="date"
            type="date"
            value={date}
            on:input={(event) => (date = event.target.value)}
            />
            <TextInput 
            controlType='text'
            id="email"
            label="email to"
            type="email"
            value={email}
            placeholder="example@applesauce.com"
            on:input={(event) => (email = event.target.value)}
            />
            <TextInput 
            controlType='text'
            id="subject"
            label="subject"
            type="text"
            value={subject}
            placeholder="subject"
            on:input={(event) => (subject = event.target.value)}
            />
            <TextInput 
            id="description"
            label="description"
            controlType="textarea"
            value={description}
            placeholder="enter body"
            on:input={(event) => (description = event.target.value)}
            />
            <!-- <h1>Level of Importance</h1> -->
            <TextInput
            type="range"
            id="range"
            label="low -- medium -- high"
            value={importance}
            min=0
            max=2
            on:change={(event) => (importance = importance_levels[event.target.value])}
            />
            </form>
        </div>
        <CardGrid {emails}/>
</main>
    
            
 <style>
    .form-page {
         margin: 10rem 5rem 1rem;
          }
  @media (max-width: 768px) {
    .form-page {
        margin: 10rem 1rem 1rem 1rem;
        /* opacity: 99%; */
        }          
    }
 </style>
    

