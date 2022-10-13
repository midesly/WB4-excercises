function parsePartCode(text){
    const supplier = text.slice(0,text.indexOf(";"));
    const number = text.slice(0,text.indexOf(":")+1, text.indexOf("-"));
    const size = text.slice(0,text.indexOf("-"));

    return{
        supplierCode: supplier,
        productNumber: number,
        size: size,
    }
}

let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);
console.log("Supplier: " + part1.supplierCode +
 " Product Number: " + part1.productNumber +
 " Size: " + part1.size);
