<?php
$tinggi = 5; // Tinggi segitiga

for ($i = 1; $i <= $tinggi; $i++) {
    // Cetak spasi
    for ($j = $tinggi; $j > $i; $j--) {
        echo "&nbsp;";
    }
    // Cetak bintang
    for ($k = 1; $k <= (2 * $i - 1); $k++) {
        echo "*";
    }
    echo "<br>";
}
?>
