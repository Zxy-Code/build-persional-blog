
//node

var fs = require('fs');
var path = require('path');

fs.readdir('./marked',function(error,files){
    console.log(files)

    for ( var i =0; i < files.length; i++ ){
        console.log(files[i])

        var markedPath = path.join('./marked', files[i]);
        var markdownContent = fs.readFileSync(markedPath).toString();
        var template = fs.readFileSync('./template.html').toString();
        var htmlText = template.replace('%markdown%',markdownContent);
        fs.writeFileSync(files[i]+'.html',htmlText);
    }
})