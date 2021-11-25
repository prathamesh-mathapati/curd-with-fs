const fs=require('fs')

if (a==''){
    fs.writeFileSync('crad.json',JSON.stringify([]))
}
// creat
function creat(){
var a=require('prompt-sync')(),dic={}
var a2=JSON.parse(fs.readFileSync('crad.json','utf-8'))
dic["id"]=a('enter your id:-'),dic["name"]=a('enter your name:-'),dic["mob"]=a('enter your MO.NO:-')
a2.push(dic)
fs.writeFileSync('crad.json',JSON.stringify(a2,null,4))}

//appadet
function apppade_(){
    var read=JSON.parse(fs.readFileSync('crad.json','utf-8'))
    let b2=(require('prompt-sync')())
    let b3=b2('enter id name:-')
    for (i of read){
        if (i['id']===b3){
            let dict={},name1=b2('enter your name:-'),MO=b2('enter your MO.NO:-')
            dict['name']=name1,dict['id']=i['id'],dict['MO.no']=MO
            read.shift(i)
            read.push(dict)
            fs.writeFileSync('crad.json',JSON.stringify(read,null,4))
        }
    }
}

//delete
function delet(){
    var read=JSON.parse(fs.readFileSync('crad.json','utf-8'))
    let b2=(require('prompt-sync')())
    let b3=b2('enter id name:-')
    for (i of read){
        if (i['id']===b3){
            read.shift(i)
            fs.writeFileSync('crad.json',JSON.stringify(read,null,4))
        }
    }
}
let s=require('prompt-sync')()
console.log('1. creat the new file\n2. upadet your data\n3. delete your data\n4. Out of crud opration');
let option=s('select your option:-')
if (option==1 || option==2 || option==3){
    // while(true){
        if (option==1){
            creat()
        }else if (option==2){
            apppade_()
        }else if(option==3){
            delet()
        // }

    }
}else {
    console.log('you are out of crud opration');
}
  
