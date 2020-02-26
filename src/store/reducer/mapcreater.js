const defaultState={
    city:{

    }
}
export default (state=defaultState,action)=>{
    let newstate=JSON.parse(JSON.stringify(state))
    if(action.type==='initcity'){
        
        newstate.city=action.value
        return newstate
    }
    return state
}