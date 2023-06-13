/**
 * Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail 
 * generare 10 indirizzi email e stamparli in pagina 
 * all'interno di una lista usando Vue e Axios come visto a lezione.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
NOTA BENE:
Le mail posso anche essere uguali tra di loro, non è necessario verificare che siano diverse.

 */



const { createApp } = Vue;

createApp({
    data() {
        return {
            emailList: [],
         
            
        }
    },

     created () {
            axios.get ('https://flynn.boolean.careers/exercises/api/random/mail' )
            .then(( response) => {
                for(let index = 0 ; index < 10 ; index++){
                    const result = response.data ;
                this.emailList.push(result.response);
                console.log(this.emailList)
                }
                

            

        })
     }

}).mount('#app');