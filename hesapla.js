class Calculator {
    static main() {
        console.log("Cebir Hesaplayıcıya Hoş Geldiniz!");
        console.log("Lütfen yapmak istediğiniz işlemi seçin:");
        console.log("1. Toplama");
        console.log("2. Çıkarma");
        console.log("3. Çarpma");
        console.log("4. Bölme");

        const secim = parseInt(prompt("Seçiminizi girin:"));

        const sayi1 = parseFloat(prompt("Birinci sayıyı girin:"));
        const sayi2 = parseFloat(prompt("İkinci sayıyı girin:"));

        let sonuc = 0;

        switch (secim) {
            case 1:
                sonuc = Calculator.topla(sayi1, sayi2);
                break;
            case 2:
                sonuc = Calculator.cikar(sayi1, sayi2);
                break;
            case 3:
                sonuc = Calculator.carp(sayi1, sayi2);
                break;
            case 4:
                sonuc = Calculator.bol(sayi1, sayi2);
                break;
            default:
                console.log("Geçersiz seçim!");
                return;
        }

        console.log("Sonuç: " + sonuc);
    }

    static topla(a, b) {
        return a + b;
    }

    static cikar(a, b) {
        return a - b;
    }

    static carp(a, b) {
        return a * b;
    }

    static bol(a, b) {
        if (b === 0) {
            console.log("Bölme hatası: Sıfıra bölme!");
            return 0;
        }
        return a / b;
    }
}

// To run the calculator
Calculator.main();
