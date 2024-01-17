//-----------------------------------------------------------------------------
//-----------------------------variables animacion-----------------------------
//-----------------------------------------------------------------------------

//--------------- mclaren ---------------
mclaren = document.querySelector(".mclaren");
cauchos = document.querySelectorAll(".caucho");
//--------------- phone menu ---------------

lineCont = document.querySelector(".lines-container")
line1 = document.querySelector("#l1");
line2 = document.querySelector("#l2");
line3 = document.querySelector("#l3");

firstSectionBuscador = document.querySelector(".section-buscador");

//-----------------------------------------------------------------------------
//-----------------------------variables filtrado -----------------------------
//-----------------------------------------------------------------------------

/* %%%%%%%%%%%%%%% adding the hide-up class for the phone menu animation %%%%%%%%%%%%%%%*/ 
firstSectionBuscador.classList.add("hide-up");

const cant1={
    1:{
        min:1200,
        max:6999,
    },
    2:{
        min:7000,
        max:11999,
    },
    3:{
        min:12000,
        max:17999,
    },
    4:{
        min:18000,
        max:24999,
    },
    5:{
        min:25000,
        max:999999999,   
    } 
}

const result = document.querySelector(".resultado");
const model = document.querySelector("#modelo");
const marca = document.querySelector("#marca");
const Year = document.querySelector("#year");
const puer = document.querySelector("#puertas");
const colores = document.querySelector("#color");
const transmi = document.querySelector("#transmision");
const preci = document.querySelector("#precio-rango");

const listaResult = [];
let modelList = [];
let yearList = [];
let doorList = [];
let colorList = [];
let transmissionList = [];

//let boo = false ;

//let modelosMarca = [];


const carsSearch = {
    Mar: "",
    Model: "",
    Yea: "",
    Dor:"",
    Col:"",
    Transm: "",
    Prec: ""
}

document.addEventListener("DOMContentLoaded",()=>{
    mostrarAutos(autos);
})
marca.addEventListener("change", (e)=>{
    console.log(e.target.value);
    carsSearch.Mar = e.target.value;
    filtrarAuto(autos);
})
model.addEventListener("change", (e)=>{
    console.log(e.target.value);
    carsSearch.Model = e.target.value;
    //boo=true;
    filtrarAuto(autos);
})
Year.addEventListener("change", (e)=>{
    console.log(e.target.value);
    carsSearch.Yea = parseInt(e.target.value);
    filtrarAuto(autos);

    /*
    if(!boo){
        filtrandoYear();
    }else{
        filtrarAuto(autos);
    }*/
    

})
puer.addEventListener("change", (e)=>{
    console.log(e.target.value);
    carsSearch.Dor = parseInt(e.target.value);
    filtrarAuto(autos);

})
colores.addEventListener("change", (e)=>{
    console.log(e.target.value);
    carsSearch.Col = e.target.value;
    filtrarAuto(autos);

})
transmi.addEventListener("change", (e)=>{
    console.log(e.target.value);
    carsSearch.Transm = e.target.value;
    filtrarAuto(autos);

})
preci.addEventListener("change", (e)=>{
    console.log(e.target.value);
    carsSearch.Prec = parseInt(e.target.value);
    filtrarAuto(autos);

})


//#########################################################################################################
//########################################### llenar los campos ###########################################
//######################################################################################################### 

function mostrarAutos(e){
    //mostrando todos los autos en la seccion de resultado
    e.map(auto =>{
        //adding the cars img 
        carroImg= document.createElement("IMG");
        carroImg.setAttribute("src",auto.img);
        carroImg.setAttribute("class", "car-images");


        //creating the cars div and the text
        carrosContainer = document.createElement("DIV");
        carrosContainer.setAttribute("class", "carros-container")
        carros = document.createElement("P");
        carros.textContent = `Marca: ${auto.marca}\n
        Modelo: ${auto.modelo}
        Año: ${auto.year}
        color: ${auto.color}
        Puertas: ${auto.puertas}
        Transmision: ${auto.transmision}
        Precio: ${auto.precio}`;

        //adding attribute year
        carros.setAttribute("ann", auto.year);

                                                    //listaResult.push(auto);

        //adding the car div on the result section                                                    
        result.appendChild(carrosContainer);
        carrosContainer.appendChild(carroImg);
        carrosContainer.appendChild(carros);

        //updating the info since database.js
        
        modelosDisponibles(auto);
        yearDisponibles(auto);
        doorsDisponibles(auto);
        coloresDisponibles(auto);
        transDisponibles(auto);

    })
}

function modelosDisponibles(e){
    //añadiendo al select las opciones disponibles para buscar
    
    if(!modelList.includes(e.modelo)){
        modelList.push(e.modelo);
        
        modelos = document.createElement("option");
        modelos.textContent = `${e.modelo} `; 
        model.appendChild(modelos); 
    }
    
}
function yearDisponibles(e){
    //añadiendo al select las opciones disponibles para buscar
    if(!yearList.includes(e.year)){
        yearList.push(e.year);
        yearList.sort( (a,b) =>{
            if(a == b){
                return(0);
            }
            if(a > b){
                return(-1);
            }
            return(1);
        } )
        size=yearList.length
        limpiarResultado(year);
        if(carsSearch.Yea){
            auxO1 = document.createElement("option");
            auxO1.textContent=carsSearch.Yea;
            yearList.push(carsSearch.Yea);
            Year.appendChild(auxO1);
        }
        y = document.createElement("option");
        y.textContent = "seleccione"; 
        y.value = "";
        Year.insertBefore(y,Year.firstChild);

        if(!carsSearch.Yea){
            for(j=0;j<size;j++){
                yr = document.createElement("option");
                yr.textContent = `${yearList[j]}`; 
                year.appendChild(yr);
            }
        }
    }
}
function doorsDisponibles(e){
    //añadiendo al select las opciones disponibles para buscar

    if(!doorList.includes(e.puertas)){
        doorList.push(e.puertas);
        
        doo = document.createElement("option");
        doo.textContent = `${e.puertas} `; 
        puer.appendChild(doo); 
    }
    
}
function coloresDisponibles(e){
    //añadiendo al select las opciones disponibles para buscar
    if(!colorList.includes(e.color)){
        colorList.push(e.color);
        colorList.sort( (a,b) =>{
            if(a == b){
                return(0);
            }
            if(a < b){
                return(-1);
            }
            return(1);
        } )
        size=colorList.length

        limpiarResultado(colores);

        if(carsSearch.Col){
            auxO3 = document.createElement("option");
            auxO3.textContent=carsSearch.Col;
            colorList.push(carsSearch.Col);
            colores.appendChild(auxO3);
        }
        //creating the first option "selection"
        yr = document.createElement("option");
        yr.textContent = "seleccione"; 
        yr.value = "";
        colores.appendChild(yr);

        //writting the color options 
        if(!carsSearch.Col){
            for(j=0;j<size;j++){
                yr = document.createElement("option");
                yr.textContent = `${colorList[j]}`; 
                colores.appendChild(yr);
            }
        }
    }
    
}
function transDisponibles(e){
    //añadiendo al select las opciones disponibles para buscar

    if(!transmissionList.includes(e.transmision)){
        transmissionList.push(e.transmision);
        
        tra = document.createElement("option");
        tra.textContent = `${e.transmision} `; 
        transmi.appendChild(tra); 
    }
    
}

                                                    /*
                                                    function actualizarModelos(lista, lugar){
                                                        limpiarResultado(lugar);
                                                        def = document.createElement("option");
                                                        def.textContent="seleccione";
                                                        lugar.appendChild(def);
                                                        lista.forEach(function(carro){
                                                            mod = document.createElement("option");
                                                            mod.textContent=carro;

                                                            lugar.appendChild(mod);
                                                        })
                                                        modelosMarca=[];
                                                    }*/
                                

//######################################################################################################
//######################################### Filtrar campos #############################################
//######################################################################################################
function filtrarAuto(f){
    const esto = [...f];
    let resto = esto.filter(filtrarMarca).filter(filtrarModelo).filter(filtrarYear).filter(filtarPrecio).filter(filtrarPuertas).filter(filtrarColor).filter(filtrarTransmision);

    limpiarResultado(result);
    console.log(resto);
    //console.log(resto[1].modelo, resto[1].color);

    //cleaning the options, adding the first option value"" , updating the options 
    modelList=[];
    yearList=[];
    doorList=[];
    colorList=[];
    transmissionList=[];

    limpiarResultado(model);
    limpiarResultado(Year);
    limpiarResultado(puer);
    limpiarResultado(colores);
    limpiarResultado(transmi);

    if(carsSearch.Model){
        auxO0 = document.createElement("option");
        auxO0.textContent=carsSearch.Model;
        modelList.push(carsSearch.Model);
        model.appendChild(auxO0);
    }
    if(carsSearch.Dor){
        auxO2 = document.createElement("option");
        auxO2.textContent=carsSearch.Dor;
        doorList.push(carsSearch.Dor);
        puer.appendChild(auxO2);
        //puer.insertBefore(auxO2,puer.firstChild);

    }
    if(carsSearch.Transm){
        auxO4 = document.createElement("option");
        auxO4.textContent=carsSearch.Transm;
        transmissionList.push(carsSearch.Transm);
        transmi.appendChild(auxO4);
    }

    firtOpt = document.createElement("option");
    firtOpt.textContent = "seleccione"; 
    firtOpt.value = "";
    console.log(firtOpt.value)

    firtOpt2 = document.createElement("option");
    firtOpt2.textContent = "seleccione"; 
    firtOpt2.value = "";

    firtOpt3 = document.createElement("option");
    firtOpt3.textContent = "seleccione"; 
    firtOpt3.value = "";

    firtOpt4 = document.createElement("option");
    firtOpt4.textContent = "seleccione"; 
    firtOpt4.value="";

    firtOpt5 = document.createElement("option");
    firtOpt5.textContent = "seleccione"; 
    firtOpt5.value = "";

    model.appendChild(firtOpt);
    Year.appendChild(firtOpt2);
    puer.appendChild(firtOpt3);
    colores.appendChild(firtOpt4);
    transmi.appendChild(firtOpt5);

    mostrarAutos(resto);

    if(!result.firstChild){
        menss = document.createElement("P");
        menss.textContent = "NO DISPONIBLE";
        result.appendChild(menss);
    }
}



function filtrarMarca(car){
    if(carsSearch.Mar){
        return(car.marca.toLowerCase()===carsSearch.Mar.toLowerCase());
    }

    return car
    
}
function filtrarModelo(car){
    if(carsSearch.Model){

        auxO = document.createElement("option");
        auxO.textContent = carsSearch.Mar; 
        model.appendChild(auxO)
        return(car.modelo.toLowerCase()===carsSearch.Model.toLowerCase());
    }
    return car;
    
}
function filtrarYear(car){

    if(carsSearch.Yea){
        return car.year === carsSearch.Yea;
    }
    return car;
}
function filtarPrecio(car){
    if(carsSearch.Prec){
        return(car.precio>=cant1[carsSearch.Prec].min && car.precio<=cant1[carsSearch.Prec].max)
    }
    return car;
    
}
function filtrarPuertas(car){
    if(carsSearch.Dor){
        return car.puertas===carsSearch.Dor;
    }
    return car;
}
function filtrarColor(car){
    if(carsSearch.Col){
        return car.color === carsSearch.Col;
    }
    return car;
}
function filtrarTransmision(car){
    if(carsSearch.Transm){
        return car.transmision === carsSearch.Transm;
    }
    return car;
}


function limpiarResultado(e){
    while(e.firstChild){
        e.removeChild(e.firstChild);
    }
}
//######################################################################################################
//########################################## Animaciones ###############################################
//######################################################################################################



//################################# Animacion Baja mclaren #############################################
window.addEventListener("scroll", ()=>{
    

    if(window.innerWidth<=480){
        porcentajeVentana = (parseInt((window.scrollY * 100 )/ (document.body.clientHeight - window.outerHeight)))*3.5;     
    }else{
        porcentajeVentana = (parseInt((window.scrollY * 100 )/ (document.body.clientHeight - window.outerHeight)))*9;

    }

    mclaren.style.marginLeft = porcentajeVentana + "%";
    cauchos[0].style.marginLeft = porcentajeVentana + "%";
    cauchos[1].style.marginLeft = porcentajeVentana + "%";

    cauchos[0].style.transform = "rotate("+porcentajeVentana+"deg)";
    cauchos[1].style.transform = "rotate("+porcentajeVentana+"deg)";
    
})


//################################## Animacion phone menu  #############################################
lineCont.addEventListener("click",()=>{
    line1.classList.toggle("first-rotation")
    line1.classList.toggle("first-rotationB")

    line2.classList.toggle("less-width");
    line2.classList.toggle("less-widthB");

    line3.classList.toggle("second-rotation")
    line3.classList.toggle("second-rotationB")
    
    firstSectionBuscador.classList.toggle("hide-up");

})