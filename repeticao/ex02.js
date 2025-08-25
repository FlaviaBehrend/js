var tab, i, result
tab=parseInt(prompt("Digite a tabuada que deseja: "))
i=0
while(i<11){
    result=tab*i
    document.write("<h2>"+tab+" * "+i+" = "+result+"</h2>")
    i++
}
