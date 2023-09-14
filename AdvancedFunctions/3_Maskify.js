function maskify([...cc])
{
    const length = cc.length - 4;
    const masker = cc.map((item,index)=>{
        if (index < length)
        {
            return "#"
        }
        return item;
    })
    console.log(masker.join(''));
}
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
console.log(maskify("bipul"))
