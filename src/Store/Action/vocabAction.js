import axios from "../../utils/mongoAxios";
import aaxios from "axios";


export const readvocabAction = ()=> dispatch=>{
    axios.get('vocab/read')
    .then(response=>{
        return dispatch({
            type:"READ",
            payload:response.data.vocabFound
        })
    })

}

export const findvocabAction = (id)=> dispatch=>{
    axios.post(`vocab/singlevocab/${id}`)
    .then(response=>{
        return dispatch({
            type:"FIND",
            payload:response.data.vocabFound
        })
    })

}

export const findbysearch = (name)=>{
    return{
        type:"FINDS",
        payload:name
    }
}


export const addVocab = (name)=> dispatch=>{
    let Vocabu = ''
    let etymologies = ''
    let definitions = ''
    let examples = ''
    let synonyms = ''
    let iddd = ''

    // oxford.get(`en-us/${name}`)
    aaxios.get(`https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${name}`,
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'app_id': '62ec954a',
            'app_key': '2595dc96251d3a4759ba8ed829107928',
        }
    })
    .then(response => {
        if(response.data.results[0].lexicalEntries[0].entries[0].etymologies[0])
        etymologies = response.data.results[0].lexicalEntries[0].entries[0].etymologies[0]
       
       if(response.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0])
       definitions = response.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]
       
       if(response.data.results[0].lexicalEntries[0].entries[0].senses[0].examples[0].text)
       examples = response.data.results[0].lexicalEntries[0].entries[0].senses[0].examples[0].text
        
       if(response.data.results[0].lexicalEntries[0].entries[0].senses[0].synonyms[0].text)
       synonyms = response.data.results[0].lexicalEntries[0].entries[0].senses[0].synonyms[0].text
       
       if(response.data.id)
       iddd = response.data.id

       Vocabu = {etymologies, definitions, examples, synonyms,iddd}

    });  
    setTimeout(() => {
        axios.post(`vocab/create`,{...Vocabu})
        .then(response=>{
            return dispatch(readvocabAction())
    })      
    }, 2500);
    

}