var tanya = true;
while(tanya){

    // Menangkap Pilihan Player
    var p = prompt("Pilih : Gajah, Semut, Orang");
    
    // Menangkap Pilihan Computer
    
    // Membangkitkan Bilangan Random
    var comp = Math.random();
    
    if(comp < 0.34){
        comp = 'Gajah';
    } else if(comp >= 0.34 && comp < 0.67){
        comp = 'Semut';
    }else{
        comp = 'Orang';
    }
    
    
    // Menulis Rules
    Hasil = '';
    if(p == comp){
        Hasil = 'SERI';
    }else if(p == 'Gajah'){
        // if(comp == 'Orang'){
        //     Hasil = 'MENANG';
        // }else{
        //     Hasil = 'KALAH'
        // }
        Hasil = (comp == 'Orang') ? 'MENANG' : 'KALAH';
    } else if(p == 'Semut'){
        Hasil = (comp == 'Orang') ? 'MENANG' : 'KALAH';
    } else if(p == 'Orang'){
        Hasil = (comp == 'Gajah') ? 'KALAH' : 'MENANG';
    } else {
        Hasil = 'Memasukan Pilihan Yang Salah';
    }
    
    // Menampilkan Hasil
    alert('Kamu Memilih : '+p+ '\ndan Komputer Memilih : '+comp+ '\nDan Hasilnya Kamu : '+Hasil );

    tanya = confirm('Main Lagi?? ');
}

alert('Terimakasih Sudah Bermain');