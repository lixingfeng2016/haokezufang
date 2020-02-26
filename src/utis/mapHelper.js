const BMap = window.BMap;
export const LocalCity = () => {
    return new Promise((resolve, reject) => {
        var myCity = new BMap.LocalCity();
        myCity.get((result) => {
            result.name=result.name.replace("市",'');
            resolve(result)
        })
    })
}
