# Brainly Scraper

Library to scrape ```www.brainly.com```

## Installation

```
npm install @defrindr/brainly-scraper
```
or
```
npm i brainly-scraper
```

## Parameters

| Name | Nullable | Description |
|------|----------|-------------|
| query|    ✖     | The keywords you want to find |
| count|    ✔     | Total data to be displayed |

## Example

### Simple Usage

```javascript
const brainly = require('brainly-scraper');

brainly("nkri").then(res => {
	console.log(res);
});
```

Or

```javascript
import brainly from 'brainly-scraper';

brainly("nkri").then(res => {
	console.log(res);
});
```

Output : 

```javascript
{
    "success": true,
    "length": 5,
    "message": "Request Success",
    "data": [{
        "pertanyaan": "pengertian NKRI, tujuan NKRI, unsur NKRI, dan fungsi NKRI",
        "jawaban": [{
            "text": "pengertian Negara Kesatuan Republik Indonesia",
            "media": []
        }],
        "questionMedia": []
    }, {
        "pertanyaan": "NKRI adalah \n\n NKRI adalah",
        "jawaban": [{
            "text": "NKRINegara Kesatuan Republik Indonesia (NKRI) adalah bentuk negara yang terdiri atas banyak wilayah/kepulauan yang tersebar dengan keanekaragaman adat, suku, budaya, dan keyakinan yang memiliki tujuan dasar menjadi bangsa yang merdeka, berdaulat, bersatu, adil, dan makmur dengan pemerintah yang melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia serta mewujudkan kesejahteraan umum, mencerdaskan kehidupan bangsa, dan melaksanakan ketertiban dunia Faktor-faktor penting pembentukan bangsa indonesia sebagai berikutAdanya persamaan nasibAdanya keinginan bersama untuk merdeka, melepaskan diri dari belenggu penjajahan.Adanya kesatuan tempat tinggal.Adanya cita-cita bersama untuk mencapai kemakmuran dan keadilan sebagai suatu bangsa.Pelajari Lebih Lanjut  \nTujuan NKRIhttps://brainly.co.id/tugas/8551985NKRI diperoleh melaluihttps://brainly.co.id/tugas/13703138\n================\nDetail Jawaban  Mapel :  PPKnKelas :  12Materi :  Bab 7 - Dinamika Penyelenggaraan Negara dalam Konteks NKRI dan Negara FederalKata Kunci :  Kelas 12 PPKn Bab 7 - Dinamika Penyelenggaraan Negara dalam Konteks NKRI dan Negara FederalKode Soal :  9Kode Kategorisasi :  12.9.7\n#Jefanya14",
            "media": []
        }],
        "questionMedia": []
    }, {
        "pertanyaan": "NKRI NKRI diperoleh melalui... ",
        "jawaban": [{
            "text": "Negara Kesatuan Republik Indonesia diperoleh melalui perjuangan para pahlawan mengusir penjajah",
            "media": []
        }],
        "questionMedia": []
    }, {
        "pertanyaan": "Apa yang dimaksud dengan NKRI ? (NKRI adalah...)",
        "jawaban": [{
            "text": "Negara Kesatuan Republik Indonesia",
            "media": []
        }],
        "questionMedia": []
    }, {
        "pertanyaan": "Apa yang dimaksud dengan NKRI ? (NKRI adalah...)",
        "jawaban": [{
            "text": "Nkri adalah negara kesatuan republik indonesia",
            "media": []
        }, {
            "text": "negara kesatuan republik indonesia",
            "media": []
        }],
        "questionMedia": []
    }]
}
```

### Error Response
```javascript
import brainly from 'brainly-scraper';

brainly().then(res => {
	console.log(res);
});
```

Output:

```javascript
{ 
  success: false,
  message: 'Param cant be blank'
}
```
	Tips :
	You can use JSON.stringify() to get string output

## Contribution
Contributions are welcome.
