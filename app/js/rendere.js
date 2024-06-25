
document.addEventListener('DOMContentLoad', function(){
    let linkSobre = document.querySelector('#link-sobre');
    if(linkSobre){
        linkSobre.addEventListener('click',function(){
            window.api.send('abrir-janela-sobre')
        })  
    }
})