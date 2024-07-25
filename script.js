function resultat()
{
    var matricule = document.getElementById('matricule').value;
    const loader = document.getElementById('loader');
    const loader2 = document.getElementById('loader2');
    const result = document.getElementById('result')
    const messageErreur = document.getElementById('message_derreur');
    const button = document.getElementById('button')
    const again =document.getElementById('again');
    loader.style.display="block";
    loader2.style.display="block";
    button.style.display="none";
   
   if(matricule=="")
    {
        loader2.style.display="none";
        messageErreur.style.display="block"
        again.style.display="block";
        again.innerHTML="Recommencer"
        return;
    }
    
    setTimeout(()=>{
        loader.style.display="none";
        loader2.style.display="none";
        result.style.display="block"

        if(matricule=='24IIB2594')
            {
                result.innerHTML=`
            <p><strong>${matricule}</strong></p>
            <p><strong>Nom: </strong><span>MATE FANEM</span></p>
            <p><strong>Prenom: </strong><span>Esther Stacy</span></p>
            <p><strong>Mention: </strong><span>Bien</span></p>
            <p><strong>Decision: </strong><span class="decision">ADMIS(E)</span></p>
                
                `;
                again.style.display="block";
            }
   

    },4000)
   


}