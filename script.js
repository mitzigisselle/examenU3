function calcular(){
    

    //sueldo
    let sueldo = parseInt($('#sueldo').val());
    if (sueldo < 1) {
        swal("La cantidad debe ser mayor a cero");
        return false;
    }

    //edad
    let edad = parseInt($('#edad').val());
    if (edad < 1) {
        swal("debes agregar tu edad");
        return false;
    }

    //sexo
    let sexo = $('#sexo').val();
    if (sexo == "") {
        swal("Debes seleccionar el sexo");
        return false;
    }


    //nacionalidad
    let nacionalidad = $('#nacionalidad').val();
    if (nacionalidad == "") {
        swal("Debes seleccionar una nacionalidad");
        return false;
    }


    //obtenemos el valor del radio 
    let antiguedad = $('input:radio[name=antiguedad]:checked').val();
    if (antiguedad == undefined) {
        swal("Debes seleccionar la antiguedad");
        return false;
    }

    let php = 0;
    php = document.getElementById("php").checked;
    if(php==true){
        php= 20*3;
    }
    
    let java = 0;
    java = document.getElementById("java").checked;
    if(java==true){
        java= 35*3;
    }
    
    let asp = 0;
    asp = document.getElementById("asp").checked;
    if(asp==true){
        asp= 40*3;
    }
    
    let oracle = 0;
    oracle = document.getElementById("oracle").checked;
    if(oracle==true){
        oracle= 60*3;
    }
    
    let vb = 0;
    vb = document.getElementById("vb").checked;
    if(vb==true){
        vb= 55*3;
    }
    
    let bd = 0;
    bd = document.getElementById("bd").checked;
    if(bd==true){
        bd= 15*3;
    }

    let curso = php + java + asp + oracle + vb + bd;


    //calculamos el resultado
    obtenerResultado = calcularPrecio(sueldo, sexo, nacionalidad, antiguedad,edad,curso);
    $('#cantidadPagar').val("La cantidad a pagar es $" + obtenerResultado);
    return false;
}   







function calcularPrecio(sueldo, sexo, nacionalidad, antiguedad,edad,curso) {
    let resultado = 0;
    if(edad < 45){//menor de 45
        if(nacionalidad == "nacional"){
            if (sexo == "femenino") {
                switch (antiguedad) {
                    case "1a5":
                        resultado = sueldo * 0.23;
                        resultado = resultado + curso;
                        break;
                    case "6a10":
                        resultado = sueldo * 0.28;
                        resultado = resultado + curso;
                        break;
                    case "10":
                        
                        resultado = sueldo * 0.33;
                        resultado = resultado + curso;
                        break;
                }
            } else if(sexo == 'masculino'){
                switch(antiguedad){
                    case "1a5":
                        
                        resultado = sueldo * 0.20;
                        resultado = resultado + curso;
                        break;
                    case "6a10":
                        
                        resultado = sueldo * 0.25;
                        resultado = resultado + curso;
                        break;
                    case "10":
                        resultado = sueldo * 0.30;
                        resultado = resultado + curso;
                        break;
                }
            }
        }else if(nacionalidad == "extranjero"){
            if (sexo == "femenino") {
                switch (antiguedad) {
                    case "1a5":
                        
                        resultado = sueldo * 0.18;
                        resultado = resultado + curso;
                        break;
                    case "6a10":
                        
                        resultado = sueldo * 0.23;
                        resultado = resultado + curso;
                        break;
                    case "10":
                        
                        resultado = sueldo * 0.28;
                        resultado = resultado + curso;
                        break;
                }
            } else if(sexo == 'masculino'){
                switch(antiguedad){
                    case "1a5":
                        
                        resultado = sueldo * 0.15;
                        resultado = resultado + curso;
                        break;
                    case "6a10":
                        
                        resultado = sueldo * 0.20;
                        resultado = resultado + curso;
                        break;
                    case "10":
                        
                        resultado = sueldo * 0.25;
                        resultado = resultado + curso;
                        break;
                }
            }
        }
    }else{//mayor a 45
        if(nacionalidad == "nacional"){
            if (sexo == "femenino") {
                switch (antiguedad) {
                    case "1a5":
                        resultado = sueldo * 0.25;
                        resultado = resultado + curso;
                        break;
                    case "6a10":
                        resultado = sueldo * 0.30;
                        resultado = resultado + curso;
                        break;
                    case "10":
                        resultado = sueldo * 0.35;
                        resultado = resultado + curso;
                        break;
                }
            } else if(sexo == 'masculino'){
                switch(antiguedad){
                    case "1a5":
                        resultado = sueldo * 0.22;
                        resultado = resultado + curso;
                        break;
                    case "6a10":
                        resultado = sueldo * 0.27;
                        resultado = resultado + curso;
                        break;
                    case "10":
                            resultado = sueldo * 0.32;
                            resultado = resultado + curso;
                        break;
                }
            }
        }else if(nacionalidad == "extranjero"){
            if (sexo == "femenino") {
                switch (antiguedad) {
                    case "1a5":
                        resultado = sueldo * 0.20;
                        resultado = resultado + curso;
                        break;
                    case "6a10":
                        resultado = sueldo * 0.25;
                        resultado = resultado + curso;
                        break;
                    case "10":
                        resultado = sueldo * 0.30;
                        resultado = resultado + curso;
                        break;
                }
            } else if(sexo == 'masculino'){
                switch(antiguedad){
                    case "1a5":
                        resultado = sueldo * 0.17;
                        resultado = resultado + curso;
                        break;
                    case "6a10":
                        resultado = sueldo * 0.22;
                        resultado = resultado + curso;
                        break;
                    case "10":
                            resultado = sueldo * 0.27;
                            resultado = resultado + curso;
                        break;
                }
            }
        }
    }

    return resultado;
}

function limpiarFormulario(){
    $('#bono')[0].reset();
}