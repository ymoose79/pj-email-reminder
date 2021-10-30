<script>

import "../app.css";
// import '../global.scss';
import {page} from '$app/stores';


// SUPER EASY way of mounting endpoints <-----------------------------

const routes = [
    { href: '/', name: 'Email Reminder'},
    { href: '/emails', name: 'Stored Emails'},
]

</script>



<slot/>
