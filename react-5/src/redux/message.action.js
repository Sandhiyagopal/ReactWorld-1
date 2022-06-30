const GM="GM"
const GN="GN"
let gmAction=()=>{
    console.log("gmAction")
    return {typr:GM}
}
let gnAction=()=>{
    return {typr:GN}
}
export {gmAction, gnAction, GM, GN}