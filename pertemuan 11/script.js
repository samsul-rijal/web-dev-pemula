let count = 0
let counter = document.getElementById("counter");

// console.log(counter.textContent);

function increment(){
    count++
    counter.textContent = count
}

// increment()

function decrement(){
    if(count > 0){
        count--
        counter.textContent = count
        document.getElementById("decrement").style.cursor = "pointer"
    } else {
        document.getElementById("decrement").style.cursor = "not-allowed"
    }
}


function reset(){
    count = 0
    counter.textContent = count
}



// function
// mesin kopi

// regular function

function mesinKopi(){

    let namaKopi = "Americano"
    let gula = "2 sendok"
    let harga = 2000

    // console.log(`kopi ${namaKopi} dengan ${gula} harganya ${harga}`);
    return `kopi ${namaKopi} dengan ${gula} harganya ${harga}`
}

// console.log(mesinKopi())
// console.log(mesinKopi())
// console.log(mesinKopi())



// arrow function
const mesinIndomie = () => {
    let namaMie = "Indomie Goreng"
    let rasa = "Soto"
    let harga = 2500
    return `mie ${namaMie} dengan rasa ${rasa} harganya ${harga}`
}

// console.log(mesinIndomie());
// document.write(mesinIndomie())



// function with parameter
function mesinKopiAuto(namaKopi, gula, harga){
    // let namaKopi = "Americano"
    // let gula = "2 sendok"
    // let harga = 2000

    // console.log(`kopi ${namaKopi} dengan ${gula} harganya ${harga}`);
    return `kopi ${namaKopi} dengan ${gula} harganya ${harga}`
}

// document.writeln(mesinKopiAuto("Americano", "1 Sendok", 20000))
// document.writeln(mesinKopiAuto("Espresso", "tanpa gula", 15000))
// document.writeln(mesinKopiAuto("Capucino", "2 sendok", 20000))

