function calc(event)
    {
        event.preventDefault();

        var nota1 = parseInt(document.getElementById('nota1').value);
        
        var nota2 = parseInt(document.getElementById('nota2').value);
        
        var nota3 = parseInt(document.getElementById('nota3').value);

        var media = (nota1+nota2+nota3)/3;

        if( media >=7 )
        {
            document.getElementById('result').innerHTML = ` ): Parabéns você foi aprovado, média: ${media} `;
            document.getElementById('result').style.color = 'green';
        }   else if( media >=1)
        {
            document.getElementById('result').innerHTML = ` (: Lamentamos mas você pegou recuperação, média: ${media}`;
            document.getElementById('result').style.color = 'red';
        }   else 
        {
            document.getElementById('result').innerHTML = "";
        }
        
    };