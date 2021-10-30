<script>

export let controlType;

export let value;
export let id;
export let rows;
export let label;
export let type;
export let min;
export let max;
export let placeholder;


</script>


<div class="container">
    <div class="form-entry">
        <!-- description -->
        {#if controlType === 'textarea'}
            <label for={id}>{label}</label>
            <textarea {rows} {id} {value} {placeholder} on:input />
        <!-- subj / date -->
        {:else if controlType === 'text'}
        <!--    date     -->
            {#if id ==='date'}
                <div class="dateBox">
                    <div class="dateLabel">
                        <label for={id}>{label}</label>
                    </div>
                    <div class="dateInput">
                        <input {type} {id} {value} on:input />  
                    </div>
                </div>
        <!--    email    -->
            {:else if id === 'email'}
                 <label for={id}>{label}</label>
                 <input {type} {id} {value} {placeholder} on:input />  
            {:else }
                <label for={id}>{label}</label>
                <input {type} {id} {value} {placeholder} on:input />  
            {/if}
        {:else}
        <!-- range w/ button -->
        <h2>Level of Importance</h2>
        <div class="rangeBox">
            <div class="lowMedHighBox">
                <label for={id} id={id}>{label}</label>
                <input {type}  {min} {max}  on:change />
            </div>
            <div class="buttonBox">
                <button type="submit" id="confirm">Confirm</button>
            </div>
        </div>
        {/if}
    </div>
</div>


<style>
    .container{
        background-color: #9BB1CC;
    }

    label {
        display: flex;
        margin-bottom: 0.5rem;
        width: 100%;
        font-size: 1rem;
    }
    .form-entry {
        margin: auto;
        padding: 0.5rem 0;
        width: 70%;
        /* margin: 0.25rem 0; */
    }
    #email,
    #subject,
    #description{
        width: 100%;
       color: #806C47;
       font-size: 1.75rem;
    }
    #description{
        height: 4rem;
    }

    #description:focus,
    #email:focus,
    #subject:focus,
    #date:focus {
	outline: none;
  	border: 2px solid #806C47;
}

    ::placeholder{
    color: #806C47;
    opacity: 30%;
    z-index: -1;
}


    /* date <-------------------------------*/


    #date{
        color: #806C47;
        font-size: 1.75rem;
    }
    .dateBox{
        display: flex;
        flex-flow: column;
        margin-top: 2em;
    }
    

    /* range <-------------------------------*/

    .rangeBox{
        display: flex;
        flex-flow: row;

    }
    .buttonBox{
        margin: -1rem 6rem 1rem;

    }


    /* button <-------------------------------*/


    #confirm{
        margin: 0 0 1rem 5rem;
        font-size: 1.5em;
        color:  rgb(150, 131, 47);
        position: relative;
        padding: .5rem 1rem;
        border-radius: .25em;
        border-color:  rgb(231, 203, 43);
        z-index: 0;
    }

    /* media            <-------------------------------*/


    @media (max-width: 768px) {
        #confirm {
                margin:  0 1.25rem 3rem;
                align-items: center;
                font-size: 1em;

            } 
            #date {
                font-size: 1rem;
            }
            .dateBox {
                flex-direction: row;
                margin-top: 1rem;
            }
            .dateLabel {
                margin: 1.25em 1em 0 0;
            }
            .dateInput {
                margin-top: 1em;
            }
        }


    /* media (425) <-------------------------------*/

        @media (max-width: 425px){
            #confirm {
                margin: .65rem;
                
            }
            .buttonBox{
                 margin:auto;
                 padding-left: 1.5rem;
    }

    /* media (425) <-------------------------------*/


        }
        @media (max-width: 320px){
            .rangeBox,
            #range{
                text-align: center;
            }
            #confirm {
                margin: auto;
                margin-bottom: 1em;
                }
        }
</style>
        