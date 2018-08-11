// Direction
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"] 

// Nambahin El sharawy, provinsi, pria, SMA 
function dataHandling2(input) {
    input.splice(1, 2, "Roman Alamsyah El Sharawy", "Provinsi Bandar Lampung")
    input.splice(4, 1, "Pria", "SMA international Metro")
    console.log(input)
    var bulan = input[3].split("/")
    //console.log(bulan)
    var bulan1 = bulan[1]
    var bulan2 = Number(bulan1)
    //console.log(bulan2)
    var bulanStrip = bulan.join("-")
    //console.log(bulanStrip)
    // jadiin 05 -> MAY
    switch (bulan2) {
        case 1: bulan2 = "Januari"; break;
        case 2: bulan2 = "Februari"; break;
        case 3: bulan2 = "Maret"; break;
        case 4: bulan2 = "April"; break;
        case 5: bulan2 = "Mei"; break;
        case 6: bulan2 = "Juni"; break;
        case 7: bulan2 = "Juli"; break;
        case 8: bulan2 = "Agustus"; break;
        case 9: bulan2 = "September"; break;
        case 10: bulan2 = "Oktober"; break;
        case 11: bulan2 = "November"; break;
        case 12: bulan2 = "Desember"; break;
        default: { console.log("Invalid Month number\nPlease try again ...."); break; }
    }
    console.log(bulan2)

    bulan.sort(function(value1, value2){
      return value1[1] < value2[2]}
      )
    console.log(bulan)

    console.log(bulanStrip)

    var nama = input[1]
    //console.log(nama)
    var irisanNama = nama.slice(0,15)
    console.log(irisanNama)
}
dataHandling2(input)