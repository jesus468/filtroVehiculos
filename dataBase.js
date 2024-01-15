

const autos = [
    {//1
        marca: "BMW" ,
        modelo: "M3" ,
        year: 1990 ,
        precio: 5000 ,
        puertas: 2 ,
        color: "rojo" ,
        transmision: "manual" ,
        img: "./assets/img/bmwM3Rojo1990.jpg"
    },
    {//2
        marca: "audi" ,
        modelo: "tt" ,
        year: 2000 ,
        precio: 3000 ,
        puertas: 2 ,
        color: "negro" ,
        transmision: "automatica" ,
        img: "./assets/img/audiTtNegro2000.png"

    },
    {//3
        marca: "chevrolet" ,
        modelo: "cavalier",
        year: 1997,
        precio: 2000 ,
        puertas: 2 ,
        color: "gris" ,
        transmision: "automatica" ,
        img: "./assets/img/chevroletCavalierGris1997.png"

    },
    {//4
        marca: "toyota" ,
        modelo: "corolla" ,
        year: 2006 ,
        precio: 4500 ,
        puertas: 4 ,
        color: "blanco" ,
        transmision: "automatica" ,
        img: "./assets/img/toyotaCorollaBlanco2006.png"

    },
    {//5
        marca: "toyota" ,
        modelo: "corolla" ,
        year: 2022 ,
        precio: 8800 ,
        puertas: 4 ,
        color: "blanco" ,
        transmision: "automatica" ,
        img: "./assets/img/toyotaCorollaBlanco2022.png"

    },
    {//6
        marca: "toyota" ,
        modelo: "corolla" ,
        year: 2022 ,
        precio: 8800 ,
        puertas: 4 ,
        color: "rojo" ,
        transmision: "automatica" ,
        img: "./assets/img/toyotaCorollarojo2022.png"

    },
    {//7
        marca: "toyota" ,
        modelo: "corolla" ,
        year: 2022 ,
        precio: 15000 ,
        puertas: 4 ,
        color: "negro" ,
        transmision: "automatica" ,
        img: "./assets/img/toyotaCorollaNegro2022.png"

    },
    {//8
        marca: "toyota" ,
        modelo: "camry" ,
        year: 2020 ,
        precio: 8000 ,
        puertas: 4 ,
        color: "blanco" ,
        transmision: "automatica" ,
        img: "./assets/img/toyotaCamryBlanco2020.png"

    },
    {//9
        marca: "Toyota",
        modelo: "RAV4 XLE",
        year: 2022, 
        precio: 30000,
        puertas: 5,
        color:"rojo",
        transmision: "automatica",
        img: "./assets/img/toyotaRav4xleRojo2022.png"

    },
    {//10
        marca: "Toyota",
        modelo: "Prius Prime",
        year: 2023,
        precio: 28000,
        puertas: 2,
        color: "verde",
        transmision: "automatica",
        img: "./assets/img/ToyotaPriusPrimeVerde2022.png"

    },
    {//11
        marca: "Ford",
        modelo: "Mustang Shelby GT500",
        year: 2022,
        precio: 45000,
        puertas: 2,
        color: "rojo",
        transmision: "automatica",
        img: "./assets/img/fordMustangShelbyGt500Rojo2022.png"

        
    },
    {//12
        marca: "Ford",
        modelo: "F-150",
        year: 2023,
        precio: 35000,
        puertas: 4,
        color: "azul",
        transmision: "automatica",
        img: "./assets/img/FordF150Azul2023.png"

    },
    {//13
        marca: "Ford",
        modelo: "Explorer",
        year: 2022,
        precio: 40000,
        puertas: 5,
        color: "blanco",
        transmision: "automatica",
        img: "./assets/img/FordExplorerBlanca2022.png"

    },
    {//14
        marca: "Ford",
        modelo: "Escape",
        year: 2023,
        precio: 30000,
        puertas: 4,
        color: "plateado",
        transmision: "automatica",
        img: "./assets/img/fordEscapePlateada2023.png"

    },
    {//15
        marca: "Ford",
        modelo: "Ranger",
        year: 2022,
        precio: 32000,
        puertas: 4,
        color: "gris",
        transmision: "manual",
        img: "./assets/img/FordRangerGris2023.png"

    },
    {//16   
        marca: "Ford",
        modelo: "Bronco",
        year: 2023,
        precio: 40000,
        puertas: 4,
        color: "negro",
        transmision: "automatica",
        img: "./assets/img/FordBroncoNegra2023.png"

    },
    {//17
        marca: "Ford",
        modelo: "Edge",
        year: 2022,
        precio: 35000,
        puertas: 5,
        color: "verde",
        transmision: "automatica",
        img: "./assets/img/fordEdge2022Verde.png"
    },
    {//18
        marca: "Ford",
        modelo: "Fusion",
        year: 2023,
        precio: 28000,
        puertas: 4,
        color: "azul",
        transmision: "automatica",
        img: "./assets/img/fordFusionAzul2023.png"

    },
    {//19
        marca: "Ford",
        modelo: "Expedition",
        year: 2022,
        precio: 55000,
        puertas: 5,
        color: "blanco",
        transmision: "manual",
        img: "./assets/img/fordExpedition2023blanco.png"

    },
    {//20
        marca: "Ford",
        modelo: "EcoSport",
        year: 2023,
        precio: 25000,
        puertas: 4,
        color: "naranja",
        transmision: "manual",
        img: "./assets/img/fordEcosportNaranja2023.png"

    },
    {//21
        marca: "BMW",
        modelo: "3 Series",
        year: 2023,
        precio: 45000,
        puertas: 4,
        color: "plateado",
        transmision: "automatica",
        img: "./assets/img/bmwSeriePlateado2023.png"

    },
    {//22
        marca: "BMW",
        modelo: "X5",
        year: 2023,
        precio: 60000,
        puertas: 5,
        color: "azul",
        transmision: "automatica",
        img: "./assets/img/bmwX5Azul2023.png"

    },
    {//23
        marca: "BMW",
        modelo: "5 Series",
        year: 2022,
        precio: 55000,
        puertas: 4,
        color: "negro",
        transmision: "automatica",
        img: "./assets/img/bmw5seriesNegro2022.png"

    },
    {//24
        marca: "BMW",
        modelo: "X3",
        year: 2022,
        precio: 45000,
        puertas: 5,
        color: "rojo",
        transmision: "automatica",
        img: "./assets/img/bmwx3Roja2022.png"

    },
    {//25
        marca: "BMW",
        modelo: "7 Series",
        year: 2022,
        precio: 80000,
        puertas: 4,
        color: "blanco",
        transmision: "automatica",
        img: "./assets/img/BMWSerie7Blanco2022.png"
    },
    {//26
        marca: "BMW",
        modelo: "4 Series",
        year: 2023,
        precio: 50000,
        puertas: 2,
        color: "gris",
        transmision: "automatica",
        img: "./assets/img/bmwSerie4Gris2023.png"
    },
    {//27
        marca: "BMW",
        modelo: "X7",
        year: 2022,
        precio: 90000,
        puertas: 5,
        color: "verde",
        transmision: "automatica",
        img: "./assets/img/BMW-X7Verde2022.png"

    },
    {//28
        marca: "BMW",
        modelo: "2 Series",
        year: 2023,
        precio: 35000,
        puertas: 2,
        color: "amarillo",
        transmision: "manual",
        img: "./assets/img/BMWSerie2Amarillo2022.png"

    },
    {//29
        marca: "BMW",
        modelo: "M5",
        year: 2022,
        precio: 95000,
        puertas: 4,
        color: "azul",
        transmision: "automatica",
        img: "./assets/img/bmwm5Azul2023.png"

    },
    {//30
        marca: "BMW",
        modelo: "i3",
        year: 2023,
        precio: 45000,
        puertas: 4,
        color: "naranja",
        transmision: "automatica",
        img: "./assets/img/BMW-i3Naranja2023.png"

    },
    {//31
        marca: "Mercedes-Benz",
        modelo: "C-Class",
        year: 2022,
        precio: 50000,
        puertas: 4,
        color: "plateado",
        transmision: "automatica",
        img: "./assets/img/mercedes-clase-cPlateada2022.png"

    },
    {//32
        marca: "Mercedes-Benz",
        modelo: "GLE",
        year: 2023,
        precio: 65000,
        puertas: 5,
        color: "azul",
        transmision: "automatica",
        img: "./assets/img/mercedes-gle-Azul2023.png"

    },
    {//33
        marca: "Mercedes-Benz",
        modelo: "E-Class",
        year: 2022,
        precio: 60000,
        puertas: 4,
        color: "blanco",
        transmision: "automatica",
        img: "./assets/img/mercedesBenzClassEBlanco2022.png"

    },
    {//34
        marca: "Mercedes-Benz",
        modelo: "GLC",
        year: 2023,
        precio: 55000,
        puertas: 5,
        color: "rojo",
        transmision: "automatica",
        img: "./assets/img/mercedesBenzGlcRojo2023.png"

    },
    {//35
        marca: "Mercedes-Benz",
        modelo: "S-Class",
        year: 2022,
        precio: 90000,
        puertas: 4,
        color: "blanco",
        transmision: "automatica",
        img: "./assets/img/mercedesBenzClaseSBlanco2022.png"

    },
    {//36
        marca: "Mercedes-Benz",
        modelo: "A-Class",
        year: 2023,
        precio: 55000,
        puertas: 4,
        color: "gris",
        transmision: "automatica",
        img: "./assets/img/mercedes-benz-clase-a-Gris2022.png"

    },
    {//37
        marca: "Mercedes-Benz",
        modelo: "GLA",
        year: 2017,
        precio: 45000,
        puertas: 5,
        color: "verde",
        transmision: "automatica",
        img: "./assets/img/mercedes-benz-gla-verde2017.png"

    },
    {//38
        marca: "Mercedes-Benz",
        modelo: "CLA",
        year: 2023,
        precio: 48000,
        puertas: 4,
        color: "amarillo",
        transmision: "automatica",
        img: "./assets/img/mercedesBenzClaAmarillo2023.png"

    },
    {//39
        marca: "Mercedes-Benz",
        modelo: "G-Class",
        year: 2017,
        precio: 120000,
        puertas: 5,
        color: "negro",
        transmision: "automatica",
        img: "./assets/img/mercedes-amg-claseGNEgro2017.png"

    },
    {//40
        marca: "Mercedes-Benz",
        modelo: "GLB",
        year: 2023,
        precio: 48000,
        puertas: 4,
        color: "plateado",
        transmision: "automatica",
        img: "./assets/img/MercedesBenzGlbPlateada2023.png"


    },
    {//41
        marca: "Volvo",
        modelo: "S60",
        year: 2022,
        precio: 45000,
        puertas: 4,
        color: "negro",
        transmision: "automatica",
        img: "./assets/img/Volvo-S60Negro2022.png"

    },
    {//42
        marca: "Volvo",
        modelo: "XC90",
        year: 2023,
        precio: 60000,
        puertas: 5,
        color: "azul",
        transmision: "automatica",
        img: "./assets/img/VolvoXC90Azul2023.PNG"

    },
    {//43
        marca: "Volvo",
        modelo: "V60",
        year: 2022,
        precio: 50000,
        puertas: 4,
        color: "negro",
        transmision: "automatica",
        img: "./assets/img/volvoV60Negro2022.png"

    },
    {//44
        marca: "Volvo",
        modelo: "XC60",
        year: 2022,
        precio: 55000,
        puertas: 5,
        color: "rojo",
        transmision: "automatica",
        img: "./assets/img/volvoXc60Rojo2022.png"

    },
    {//45
        marca: "Volvo",
        modelo: "S90",
        year: 2022,
        precio: 70000,
        puertas: 4,
        color: "blanco",
        transmision: "automatica",
        img: "./assets/img/volvoS90Blanco2022.png"

    },
    {//46
        marca: "Volvo",
        modelo: "XC40",
        year: 2023,
        precio: 45000,
        puertas: 4,
        color: "gris",
        transmision: "automatica",
        img: "./assets/img/volvoXC40Gris2023.png"

    },
    {//47
        marca: "Volvo",
        modelo: "V90",
        year: 2022,
        precio: 55000,
        puertas: 5,
        color: "verde",
        transmision: "automatica",
        img: "./assets/img/vovlo-v90Verde2022.jpg"

    },
    {//48
        marca: "Volvo",
        modelo: "XC70",
        year: 2007,
        precio: 48000,
        puertas: 5,
        color: "negro",
        transmision: "automatica",
        img: "./assets/img/volvoXc70Verde2007.png"

    },
    {//49
        marca: "Volvo",
        modelo: "V40",
        year: 2023,
        precio: 42000,
        puertas: 4,
        color: "plateado",
        transmision: "automatica",
        img: "./assets/img/volvoV40Plateado2024.png"

    }
]