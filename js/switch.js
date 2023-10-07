var nama =  prompt('masukkan nama planet : \n (ex: venus, bumi, dll)');

switch( nama ) {
    case 'merkurius' :
        alert('Merkurius adalah salah satu planet terkecil dalam tata surya.');
        break;
    case 'venus' :
        alert('Permukaan Venus terdiri dari dataran tinggi berbatuan, lembah-lembah dalam, dan banyak gunung berapi.');
        break;
    case 'bumi' :
        alert('Bumi memiliki satu satelit alami, yang kita sebut Bulan.');
        break;
    case 'mars' :
        alert('Mars memiliki gunung tertinggi di tata surya, yakni Gunung Olympus (Olympus Mons).');
        break;
    case 'jupiter' :
        alert('Jupiter adalah planet terbesar dalam tata surya.');
        break;
    case 'saturnus' :
        alert('Saturnus memiliki periode rotasi yang cepat.');
        break;
    case 'uranus' :
        alert('Yang paling mencolok dari Uranus adalah rotasinya yang terbalik.');
        break;
    case 'neptunus' :
        alert('Neptunus adalah planet terjauh dari Matahari dalam tata surya.');
        break;
    default :
        alert('kamu salah memasukkan nama planet dalam tata surya kita!');
        break;
}