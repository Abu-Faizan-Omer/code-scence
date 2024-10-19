const path=require("path")

//console.log("PATH==",require.main.filename)
//console.log("dirname",path.dirname(require.main.filename))
//  path.dirname(require.mainModule.filename) older way
const rootDir=path.dirname(require.main.filename)
const viewPath=(view) => {
    return path.join(rootDir,"views",view)
}
module.exports=viewPath