/*
console.log('nomeVariabile', nomeVariabile, typeof nomeVariabile);

document.getElementById('idHtml').innerHTML = noveVariabileJS;

//valore input 
    userName = document.getElementById('userName');
    userNameValue = userName.value;

//controllare se il valore è Nan
    if(isNaN(kmValue))

*/
const { createApp } = Vue;

createApp({
    data() {
        return {
            h1Content: 'Titolo pagina',
        };
    },
    methods: {
        esempiofunzione() {
            console.log(this.faiQualcosa(3));
        },
        
    }
}).mount('#app');