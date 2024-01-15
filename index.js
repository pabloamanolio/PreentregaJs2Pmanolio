/*  <---ESTA ES LA FUNCION DEL SIMULADOR DE COMPRA Y CUOTAS QUE NO INCLUI EN ESTA ENTREGA--->

function calcularCuota(monto, meses, interes) {
    console.log ("Detalle mensual ⬇")
let importeCuotas = []
    for (let i = 0; i <= meses-1 ; i++ ) { 
        importeCuotas[i] = ("Cuota nro " + (i+1) + " $" + ((monto * interes) / meses).toFixed(2))
    }
console.table (importeCuotas)
      
}

function simularCompra() {
    let tamanox = prompt("¿Qué palestra quieres comprar? (grande, chica, mediana)");
    let tamano = tamanox.toLowerCase()

    if (tamano !== "grande" && tamano !== "mediana" && tamano !== "chica") {
        alert("La opción indicada no es válida, por favor intenta nuevamente.");
        simularCompra();
    } else {
        console.log(tamano);
        let cuotas = prompt("¿En cuántos meses nos quieres pagar?");
        console.log (typeof(cuotas))
        if (cuotas > 12) {
            console.log(cuotas)
            console.log(cuotas > 12)
            alert("Si necesitas una financiación tan larga, por favor contáctanos por teléfono. De lo contrario, intenta nuevamente.");
        
            simularCompra();
        } else {
            let monto;

            switch (tamano) {
                case "grande":
                    monto = 200000;
                    break;
                case "mediana":
                    monto = 150000;
                    break;
                case "chica":
                    monto = 100000;
                    break;
                default:
                    monto = 0;
                    alert("La opción elegida no es válida.");
            }

            console.log(monto + "$ con interés del 1.4");
            calcularCuota(monto, cuotas, interes);
            
        }
    }
} */

const interes = 1.4 
 //FUNCION DEL FORMULARIO PARA CALCULAR LA ALTURA DE INSTALACION
function calcularAltura(edad) {
    console.log(edad)
    let Altura;
switch (edad){
	case "1":
    case "2":
    case "3":    
		Altura = "Pone la pale a 10cm del suelo";
		break;
	case "4":
    case "5":
    case "6":        
		Altura = "Pone la pale a 20cm del suelo"
        break
	case "7":
    case "8":
    case "9":        
		Altura = "Pone la pale a 30cm del suelo"
		break
	default:
		Altura = "Si tiene 10 años o mas podes ponerla a cualquier altura"
		break
    }
    document.getElementById("devolucionAltura").innerText= `${Altura}!`
    document.getElementById("devolucionAltura").style= "display: yes"
}


        //USER LOGIN

         document.getElementById("loginForm").addEventListener("submit", function (event) {
            event.preventDefault(); 

           
            const username = document.getElementById("usuario").value;
            const password = document.getElementById("password").value;

            
            const loginData = {
                usuario: username,
                password: password
            };

            localStorage.setItem("loginData", JSON.stringify(loginData));

            
            alert(`Bienvenidx, ${username}!`); 

            console.log("Stored Login Information:", JSON.parse(localStorage.getItem("loginData")));
        });


        //CALCULAR ALTURA
    document.getElementById("altura").addEventListener("submit", function (event) {
            event.preventDefault(); 
            const edad = document.getElementById("edad").value
            calcularAltura(edad); 
        })