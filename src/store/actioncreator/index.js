import {LocalCity} from '../../utis/mapHelper'

export const localcityaction=()=>{
    return (dispatch)=>{
            LocalCity()
            .then(res=>{
                console.log(res);
                
                const action={
                    type:'initcity',
                    value:res
                }
                dispatch(action)
            })
    }
}