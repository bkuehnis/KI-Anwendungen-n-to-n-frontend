import { writable } from "svelte/store";

// user 
export const base_url = writable({});
//base_url.set('http://127.0.0.1:5000')
base_url.set('https://kuhs.pythonanywhere.com')