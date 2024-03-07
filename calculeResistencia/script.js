function calc(){
        let F01 = document.getElementById("faixa01").value;
        let F02 = document.getElementById("faixa02").value;
        let F03 = document.getElementById("faixa03").value;
        let multip = document.getElementById("multi").value;
        let tol= parseFloat(document.getElementById("tol").value);
                let operacao = parseFloat(F01+F02+F03) * parseFloat(multip);
                parseFloat(document.getElementById("result").value = operacao);
                let tol1=operacao+tol
                let tol2=operacao-tol
                document.getElementById("tol1").value=tol2;
                document.getElementById("tol2").value=tol1;

}
  
                                    