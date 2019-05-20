var VerifyButton = document.getElementById("btn_verificar");

var GenerateButton = document.getElementById("btn_gerar");

VerifyButton.addEventListener("click", Event);

GenerateButton.addEventListener("click", GenerationEvent);

function GenerationEvent()
{

    var RandomCPF = "";
    for (let index = 0; index < 9; index++) {

        RandomCPF = RandomCPF + Math.floor( Math.random() * 10 );

    }

    RandomCPF = RandomCPF + CalculateDigit1(RandomCPF);

    RandomCPF = RandomCPF + CalculateDigit2(RandomCPF);

    document.getElementById("CPF").value = RandomCPF;

    document.getElementById("output").innerHTML = "CPF Gerado";
    document.getElementById("divOutput").setAttribute("class","w3-panel w3-blue");
    document.getElementById("divOutput").style.visibility = "visible";
    
}

function Event() 
{
    var CPFInput = document.getElementById("CPF");

    var CPF = CPFInput.value ;  

    if( VerifyCPF(CPF) )
    {

        alert("CPF válido");

    }else
    {

        alert("CPF inválido");

    }
    
}

/**
 *  var Valid = VerifyCPF("11144477733");
    console.log(Valid);
 */


/**
 * Verifica se o CPF é válido a partir do dígito validador
 * @param {*} CPF
 * return true|false;
 *  
 */
function VerifyCPF(CPF)
{

    var DV1 = CalculateDigit1(CPF), DV2 = CalculateDigit2(CPF);

    if(DV1 == CPF[9] && DV2 == CPF[10])
    {
        return true;
    }else
    {
        return false;
    }

}

/**
 * Verifica se o primeiro dígito do CPF é válido
 * @param {*} CPF 
 * Return a int
 */
function CalculateDigit1(CPF) 
{
    var Weight = [10, 9, 8, 7, 6, 5, 4, 3, 2];

    var Sum = 0;

    for (let index = 0; index < 9; index++) 
    {

        Sum += ( Weight[index] * Number( CPF[index] ) );
        
    }

    var Rest = Sum %  11;

    if( Rest < 2 )
    {

        return 0;

    }else
    {

        return 11 - Rest;

    }

}

/**
 * Verifica se o segundo dígito do CPF é válido
 * @param {*} CPF 
 * Return a int
 */
function CalculateDigit2(CPF) 
{
    var Weight = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

    var Sum = 0;

    for (let index = 0; index < 10; index++) 
    {

        Sum += ( Weight[index] * Number( CPF[index] ) );
        
    }

    var Rest = Sum %  11;

    if( Rest < 2 )
    {

        return 0;

    }else
    {

        return 11 - Rest;

    }

}