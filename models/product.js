
const fs=require("fs")
const path=require("path")

const pathBuilt=path.join(
    path.dirname(require.main.filename),
'data',
'products.json'
)

const getProductFromFile =(callbackFn)=> {
    fs.readFile(pathBuilt,(err,fileContent)=>{
        if(err)
        {
            return callbackFn([])
        }
         callbackFn(JSON.parse(fileContent))
    })
}

module.exports = class Product {
    constructor(incommingtitle){
        this.title=incommingtitle
    }

    save()
    {
        getProductFromFile((products)=>{
            products.push(this)
            fs.writeFile(pathBuilt,JSON.stringify(products),(err)=>{
                console.log("err",err)
            })
        })
        
    }

    static fetchAll(callbackFn)
    {     
        getProductFromFile(callbackFn)
    }

}