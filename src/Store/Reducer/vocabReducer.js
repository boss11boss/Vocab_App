let initial = {
    vocabs:[
        {name:'Vaibhav', class:11}
    ],
    activeVocab:null
}

let vocabReducer = (state = initial,action) =>{
    switch(action.type){
        case "READ":
            return{
                vocabs:action.payload,
                activeVocab:null
            }
        case "FIND":
            return{
                ...state,
                activeVocab:action.payload
            }    
        case "FINDS":
            const C3 = [...state.vocabs]  
            let C4 = C3.filter(r=>r.iddd === action.payload)
            if (C4.length>0){
                return{
                    
                    vocabs:C4,
                    activeVocab:null

                }
            }
            else{
                return{
                    vocabs:C3,
                    activeVocab:null
                }
            }
        default:   
            return state
    }
}

export default vocabReducer