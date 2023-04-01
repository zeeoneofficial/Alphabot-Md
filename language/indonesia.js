exports.DelSetWel = `Sukses delete set welcome di grup ini`
exports.NoSetWel = `Belum ada set welcome di grup ini`
exports.DelSetLeft = `Sukses delete set goodbye di grup ini`
exports.NoSetLeft = `Belum ada set goodbye di grup ini`
exports.doneSet = `Sudah di ubah sebelumnya`
exports.serverErr = `Server sedang eror`
exports.limitLu = (m) =>{
	return`Sisa limit kamu : ${m} `
	}
	
exports.addstik = (a, b) =>{
	return`List ${a} dengan key ${b} sudah ada di database`
	}
exports.delstik = (a, b) =>{
	return`List ${a} dengan key ${b} tidak ada di database`
	}
exports.profile = (username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, limit, registered, tanggal, regTime,premium, msToDate , premiumDate, now, lastclaim) =>{
	return`📛 Nama: ${username} (@${m.sender.split`@`[0]})${about ? '\n💌 Bio: ' + about : ''}
👨‍❤️‍👨 Status: ${pasangan ? `Berpacaran @${pasangan.split`@`[0]}` : '-' }
#️⃣ Nomor: ${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}
🔗 Link: https://wa.me/${m.sender.split`@`[0]}
🤷‍♂️ XP: Total ${exp} (${exp - min} / ${xp}) [ ${math <= 0 ? `Ready to *${prefix}levelup*` : `${math} XP left to levelup`} ]
🎚️ Level: ${level}
🎢 Role: ${role}
📊 Limit: ${limit}
®️ Registered: ${registered ? '✅ (' + tanggal(regTime) + ')' : '❌'}
⛽ Premium: ${premium ? `✅\n⏰ Expired Premium : msToDate(premiumDate - now)` : '❌'}
🛄 Last claim: ${lastclaim > 0 ? tanggal(lastclaim) : '-'}`
	}

//
exports.needReg = (a, b, c) =>{
	return`🇲🇨 Daftar dulu bang

Gini : #daftar nama|umur|gender|hobi
Contoh : #daftar ${a}|18|cowo|Game

🇺🇲 Please register first

Like this : #register name|age|gender|hobby
Example : #register ${a}|18|male|Games`
}
exports.Nolimit = (prefix) =>{
	return`Limit kamu hari ini telah habis ⚠️\n\nSilahkan beli limit dengan cara ketik ${prefix}buy atau ${prefix}buyall`
	}
exports.Noseri = () =>{
	return`Nomor seri (sn) nya salah\n.ceksn -- _cek serial number_`
	}
exports.NoseriOk = () =>{
	return`Berhasil membatalkan pendaftaran!`
	}
exports.ExReg = (c) =>{
	return`🇲🇨 Gunakan tanda "|" sebagai pembatas

Gini : #daftar nama|umur|gender|hobi
Contoh : #daftar ${a}|18|cowo|Game


🇺🇲 Use the "|" sign as a barrier

Like this : #register name|age|gender|hobby
Example : #register ${a}|18|male|Games`
	}
exports.DoneReg = () =>{
	return`Kamu sudah terdaftar di database`
	}
exports.UmurReg = () =>{
	return`Umur harus berupa angka`
	}
exports.NamaReg = () =>{
	return`Nama kamu panjang banget, gunakan nama awal saja`
	}
exports.HobiReg = () =>{
	return`Hobi kamu banyak banget, cukup 1 atau 2 hobi saja`
	}
exports.RegReg = (a,b,c,d,e,f,g,h,i) =>{
	return`╭─「 *VERIFIKASI BERHASIL* 」
│\`\`\`Verifikasi Sukses Dengan\`\`\` 
│
│\`\`\`SN: ${a}\`\`\`
│\`\`\`Pada : ${b}\`\`\`
│\`\`\`Nama : ${c}\`\`\`
│\`\`\`Umur : ${d}\`\`\`
│\`\`\`Gender : ${e}\`\`\`
│\`\`\`Nomor : @${f}\`\`\`
│\`\`\`Untuk menggunakan bot silahkan \`\`\`
│\`\`\`Kirim perintah ${g}menu\`\`\`
│\`\`\`atau ${h}allmenu\`\`\`
│
│\`\`\`\Total : ${i} Users\`\`\`
╰─────────────────────`
	}
exports.genderReg = (a) =>{
	return`Pilih salah satu ( cewe / cowo)\n\n${a}`
	}
exports.UmurXReg = () =>{
	return`Umur kamu terlalu tua, bukannya mati ehh malah main bot`
	}
exports.firstChat = (a, b, c) =>{
	return`Selamat ${a} ${b} 🤗, saya adalah ${c} yaitu bot whatsapp. Ada yang bisa ${c} bantu?`
	}
exports.StartAbsen = () =>{
	return`Mulai Absen`
	}
exports.AddstikOk = (q, a, b, prefix, command) =>{
	return`Sukses Menambahkan ${q} Ke Dalam Database ${a}\n\nCek dengan cara ${prefix}${b}`
	}
	
exports.AddstikOk_ = (a,b) =>{
	return`Durasi ${a} detik, yaitu durasi maksimal ${b} yang bisa bot simpan ke dalam database`
	}
exports.Addvn = () =>{
	return`Tunggu sebentar, saya akan mencoba untuk mengupload media ini ke database`
	}
	
exports.ListStik = (a) =>{
	return`_Untuk mengambil ${a} silahkan kirim pesan sesuai dengan list ${a} yang ada di atas_`
	}
exports.noAbsen = () =>{
return `❌ Tidak ada absen berlangsung di group ini! \n.absenstart -- mulai absen`
}
exports.StartAbsen = () =>{
	return`Mulai Absen`
	}
exports.DahAbsen = () =>{
	return`Kamu sudah absen`
	}
exports.DelAbsen = () =>{
	return`✅ Berhasil menghapus absen di group ini`
	}
exports.adaAbsen = () =>{
	return`Masih ada sesi absen di group ini !`
	}
exports.SAbsen = () =>{
	return`Absen dimulai\n.absen -- mulai absen`
	}
//
exports.SetCmd = (prefix, command) =>{
	return`Reply stiker!!\nExample : ${prefix + command} .menu\n\n\n*Note : Harus disertai Prefix!!*`
	}
exports.CmdApa = () =>{
	return`Untuk Command Apa?`
	}
exports.UCmd = () =>{
	return`Anda tidak memiliki izin untuk mengubah perintah stiker ini`
	}
exports.HashCmd = () =>{
	return`Tidak ada hash`
	}
exports.DelCmd = () =>{
	return`✅ Sticker cmd telah di hapus`
	}
exports.LockCmd = () =>{
	return`Reply pesan`
	}
exports.NoCmd = () =>{
	return`Hash tidak ditemukan di database`
	}
exports.ReplyMsg = () =>{
	return`Reply Message Yang Ingin Disave Di Database`
	}
exports.NoMsg = (prefix, command) =>{
	return`Contoh : ${prefix + command} nama file`
	}
exports.AdMsg = (text) => {
    return `'${text}' telah terdaftar di list pesan`
}
exports.DoneMsg = (prefix, text) => {
    return `Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}
Lihat list Pesan Dengan ${prefix}listmsg`
}
exports.GetMsg = (prefix, command) => {
    return `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
}
exports.NoInMsg = (text) => {
    return `'${text}' tidak terdaftar di list pesan`
}
exports.DelMsg = (text) => {
    return `Berhasil menghapus '${text}' dari list pesan`
}

exports.OnBef = () => {
    return `Sudah di aktifkan sebelumnya`
}
exports.OffYaBef = () => {
    return `Sudah di nonaktifkan sebelumnya`
}
exports.OkOn = (command) => {
    return `${command} Berhasil Di Aktifkan !`
}
exports.OffBef = (command) => {
    return `${command} Berhasil Di Nonaktifkan !`
}
exports.OkMute = () => {
    return `Bot Telah Di Mute Di Group Ini`
}
exports.OkUnMute = () => {
    return `Bot Berhasil Di UnMute`
}
exports.OkUnBanC = () => {
    return `Bot Berhasil Di unban chat`
}
exports.NoMute = () => {
    return `Bot belum di ban dalam group ini`
}

exports.NoMsgBot = () => {
    return `Pesan tersebut bukan dikirim oleh bot!`
}
exports.ToimgErr = () => {
    return `Maaf Saat Ini Belum Support Sticker Gif`
}
exports.NoToImg = (prefix, command) => {
    return `Reply Sticker Dengan Caption *${prefix + command}*`
}
exports.BotPublic = () => {
    return `Sukses Ganti Ke Mode Public`
}
exports.BotSelf = () => {
    return `Sukses Ganti Ke Mode Self\n\nUntuk mengubah ke mode public silahkan gunakan nomor bot`
}
exports.NoToStik = (prefix, command) => {
    return `Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`
}
exports.NoPpBot = (prefix, command) => {
    return `Kirim/Reply Image Dengan Caption ${prefix + command}`
}
exports.ToAud = (prefix, command) => {
    return `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
}
exports.ToMp3 = (prefix, command) => {
    return `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
}
exports.ToVn= (prefix, command) => {
    return `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
}
exports.NoQouted = () => {
    return `Pesan Yang anda reply tidak mengandung reply`
}
exports.SetGcName = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks*`
}
exports.SetPpGc = (prefix, command) => {
    return `Kirim/Reply Image Dengan Caption ${prefix + command}`
}
exports.JoinGc = () => {
    return `Masukkan Link Group!`
}
exports.MauKick = () => {
    return `Kirim nomer/tag/reply target yang ingin di kick !`
}
exports.MauAdd = () => {
    return `Kirim nomer/tag/reply target yang ingin di add !`
}
exports.NakPm= () => {
    return `Kirim nomer/tag/reply target yang ingin di promote !`
}
exports.NakDm = () => {
    return `Kirim nomer/tag/reply target yang ingin di demote !`
}
exports.Family = () => {
    return `Soal ini belum selesai!`
}
exports.NoWm = (prefix, command) => {
    return `Kirim perintah ${prefix + command} packname|author`
}
exports.DoneExif = (packname, author) => {
    return `Exif Berhasil Diubah Menjadi\n\nPackname : ${packname}\nAuthor : ${author}`
}
exports.NoTeksOne = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks*\n\nContoh : ${prefix + command} WhatsApp Bot`
}
exports.NoTeksTwo = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks 1|teks 2*\n\nContoh : ${prefix + command} WhatsApp|Bot`
}
exports.OffNsfw = () => {
    return `Fitur nsfw belum di aktifkan`
}
exports.CoverBanLol = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|jinx7`
}
exports.coverbannerlol = (style) => {
    return `*Heroes Yg Kamu Masukkan Salah*\n\n_Berikut list heroes yg benar, Total_ *${style}* _heroes_\n\n`
}
exports.pubglogomaker = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|women`
}
exports.pubglogomaker_ = (style) => {
    return `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style}* _style_\n\n`
}
exports.colorfulpubg = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|color\nUsage: ${prefix + command} zeeone|gold`
}
exports.colorfulpubg_ = (style) => {
    return `*Color Yg Kamu Masukkan Salah*\n\n_Berikut list color yg benar, Total_ *${style}* _color_\n\n`
}
exports.astronotspace = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`
}
exports.wallpaperaov = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|allain`
}
exports.maketeamlogo = (style, style2, prefix, command) => {
    return `Contoh: ${prefix + command} nama|${style}\nUsage: ${prefix + command} zeeone|${style2}`
}

exports.MaketeamlogoT = (a, b, c, d, e, f, g, h) => {
    return `Contoh: ${g + h} ${a}|${b}|${c}\nUsage: ${g + h} ${e}|${f}|${d}`
}
exports.maketeamlogo_ = (style, style2) => {
    return `*${style2} Yg Kamu Masukkan Salah*\n\n_Berikut List ${style2} Yg Benar, Total_ *${style}* _${style2}_\n\n`
}

exports.KisahNabi = (prefix, command, style, style2 = "query") => {
    return `Kirim perintah: \n${prefix + command} ${style2}\n\nContoh penggunaan:\n${prefix + command} ${style}`
}
exports.quran2 = (prefix, command, juz , brp) => {
    return `Contoh : ${prefix + command} ${juz}\nUsage: ${prefix + command} ${brp}`
}

exports.quran3 = (prefix, command, surah , ayat, brp, brp2) => {
return`Contoh penggunaan : ${prefix + command} ${surah}|${ayat}\nUsage: ${prefix + command} ${brp}|${brp2}`
}

exports.JwbErr = () => {
    return `❌ Jawaban Salah`
}

exports.JwbTrue = (tebak, exp) => {
return`🎮 ${tebak} 🎮\n\nJawaban Benar 🎉\n+${exp} XP`
}
exports.TbGam = () => {
    return `Tebak Gambar`
}
exports.TbKa = () => {
    return `Tebak Kata`
}
exports.TbBe = () => {
    return `Tebak Bendera`
}
exports.TbCak = () => {
    return `Cak Lontong`
}
exports.TbSu = () => {
    return `Susun Kata`
}
exports.TbAt = () => {
    return `Tebak Kalimat`
}
exports.TbSi = () => {
    return `Tebak Siapa`
}
exports.Tbte = () => {
    return `Teka Teki`
}
exports.TbEn = () => {
    return `Tebak Kabupaten`
}
exports.TbKi = () => {
    return `Tebak Kimia`
}
exports.TbLi = () => {
    return `Tebak Lirik`
}
exports.TbKan = () => {
    return `Tebak Tebakan`
}

exports.TbFamily = (soal, jawaban, find) => {
    return `*Jawablah Pertanyaan Berikut :*\n${soal}\n\nTerdapat *${jawaban}* Jawaban ${find}`
}

exports.TbAfk = (nama, afk) => {
    return `${nama} Telah Afk Dengan Alasan ${afk ? ': ' + afk : 'Nothing'}`
}

exports.TbGambar = (desk, time, exp) => {
    return `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${desk}\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbGambar_ = (jawaban) => {
    return `Waktu Habis\nJawaban:  ${jawaban}`
}
exports.TbGambar__ = (jawaban, desk) => {
    return `Waktu Habis\nJawaban:  ${jawaban}}\nDeskripsi : ${desk}`
}
exports.TbKata = (soal, time, exp) => {
    return `Silahkan Jawab Pertanyaan Berikut\n\n${soal}\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbBendera = (time, exp) => {
    return `Silahkan Jawab Pertanyaan Diatas\n\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbKabupaten = (time, exp) => {
    return `Gambar Diatas Adalah Gambar dari Kabupaten?\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbKimia = (soal, time, exp) => {
    return `Apa Arti Dari Simbol : *${soal}*?\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbLirik = (soal, time, exp) => {
    return `Ini Adalah Lirik Dari Lagu? : *${soal}*?\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbSusun = (soal, tipe, time, exp) => {
    return `*Jawablah Pertanyaan Berikut :*\nSoal : ${soal}\nTipe : ${tipe}\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbMath = (modes, prefix, command) => {
    return `Mode: ${modes}\nContoh penggunaan: ${prefix + command} medium`
}
exports.TbMath_ = (soal, time) => {
    return `*Berapa hasil dari: ${soal}*?\n\nWaktu: ${time} detik`
}
exports.TbJail = (prefix, command) => {
    return `Kirim/Reply Foto/Sticker Dengan Caption ${prefix + command}`
}
exports.TbRepo = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *user* *repo* *branch*\n\nExp. ${prefix + command} *zeeone-ofc* *Alphabot-Md* *v12*`
}
exports.StalkIg = () => {
    return `Masukkan username`
}
exports.Tomp4 = (prefix, command) => {
    return `Reply stiker gif dengan caption ${prefix + command}`
}
exports.Tourl = (prefix, command) => {
    return `Kirim/Reply Media Dengan Caption ${prefix + command}`
}
exports.Smeme = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`
}
exports.Smeme_ = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|tesk2*`
}
exports.Bcall = (anu, time, chat) => {
    return `Mengirim Broadcast Ke ${anu} ${chat}\nWaktu Selesai ${time * 1.5} detik`
}
exports.Stag = (prefix, command) => {
    return `Reply sticker dengan caption ${prefix + command}`
}
exports.Vtag = (prefix, command, video) => {
    return `Kirim/reply ${video} dengan caption ${prefix + command}`
}
exports.TrLate = (prefix, command) => {
    return `Contoh :

1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
	• Contoh : ${prefix + command} id halo
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
	• Contoh : ${prefix + command} id halo
Daftar bahasa yang di dukung : https://cloud.google.com/translate/docs/languages`
}
exports.Addlist = () => {
    return `Key tidak boleh sama dengan fitur / command bot`
}
exports.Addlist_ = (prefix, command) => {
    return `Gunakan dengan cara ${prefix + command} *key|response*\n\n_Contoh_\n\n${prefix + command} Hi|Halo`
}
exports.Addlist__ = (arg) => {
    return `List respon dengan key : *${arg}* sudah ada di group ini.`
}
exports.AddlistDone = (arg) => {
    return `Sukses set list message dengan key : *${arg}*\n\nNote : Tunggu beberapa menit jika list tidak berubah`
}
exports.Dellist = () => {
    return `Belum ada list message di database`
}
exports.Dellist_  = (prefix, command) => {
    return `Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} Hi`
}
exports.Dellist__ = (key) => {
    return `List respon dengan key *${key}* tidak ada di database!`
}
exports.DellistDone = (key) => {
    return `Sukses delete list message dengan key *${key}*`
}
exports.ListUp = (key) => {
    return `Maaf, untuk key *${key}* belum terdaftar di group ini`
}
exports.UpList = (key) => {
    return `Sukses update list message dengan key : *${key}*\n\nNote : Tunggu beberapa menit jika list tidak berubah`
}
exports.Anonymous = (pushname, prefix) => {
    return `Hai ${pushname} Selamat Datang di Anonymous Chat\n\nKetik ${prefix}start untuk mencari Teman Chat anda, atau bisa pencet tombol Search dibawah`
}
exports.Anon = () => {
    return `Cari Teman Chat`
}
exports.StopAnon = () => {
    return `Kamu Sedang Tidak Berada Di Sesi Anonymous\n${prefix}start -- _cari pasangan baru_`
}
exports.AnonNew = () => {
    return `Cari Teman Baru`
}
exports.AnonDahStop = () => {
    return `✅ Berhasil memberhentikan chat\n${prefix}start -- _cari pasangan baru_`
}
exports.StopAnonByFren = () => {
    return `⚠️ Sesi chat ini telah diberhentikan oleh teman chat kamu_\n${prefix}start -- _cari pasangan baru_`
}
exports.AnonOn = () => {
    return `⚠️ Kamu masih dalam sesi chat dengan partner!\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan dialog ini_`
}
exports.AnonFind = (prefix) => {
    return `_Pasangan Ditemukan 🐼_\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan dialog ini_`
}
exports.AnonSearch = () => {
    return `🔎 Mohon tunggu sedang mencari teman chat\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan percarian ini_`
}
exports.NoAnon = () => {
    return `⚠️ Kamu belum pernah memulai chat!\n${prefix}start -- _cari pasangan baru_`
}
exports.NoAudRep = (prefix, command) => {
    return `Balas audio yang ingin diubah dengan caption *${prefix + command}*`
}

exports.NoTagBan = (prefix, command) => {
    return `Contoh penggunaan :\n${prefix + command} 62938828728992 \natau\n${prefix + command} @tagmember`
}
exports.getBan = (a) => {
    return `⚠️ Mohon maaf nomor kamu telah di banned oleh owner\n\nOwner 👇\nwa.me/${a}`
}
exports.Addstik = (prefix, command, t) => {
    return `Reply ${t} dengan caption ${prefix + command} text\n\nExample : ${prefix + command} bot`
}
exports.AllFitur = () => {
    return `\n_Semua fitur bot_`
}
exports.InfoMenu = () => {
    return `\n_Mencari informasi terkini melalui bot_`
}
exports.KhususOwn = () => {
    return `\n_Fitur khusus owner bot_`
}
exports.DataBor = () => {
    return `\n_Menyimpan sesuatu di database bot_`
}
exports.MenuGc = () => {
    return `\n_Menampilkan fitur khusus group_`
}
exports.MenuAni = () => {
    return `\n_Mencari random gambar anime_`
}
exports.TagMem = () => {
    return `\n_Menandai member group_`
}
exports.StalkOrk = () => {
    return `\n_Kepoin sosmed orang_`
}
exports.Hoja = () => {
    return `\n_Mencari sesuatu yang gk penting_`
}
exports.CovertWi = () => {
    return `\n_Mengkorversi sesuatu dengan bot_`
}
exports.AnuFoto = () => {
    return `\n_Mengubah gambar jadi lebih menarik_`
}
exports.HajuStik = () => {
    return `\n_Membuat stiker yang unik_`
}
exports.EloDown= () => {
    return `\n_Menampilkan fitur download_`
}
exports.StikerWibu = () => {
    return `\n_Random stiker anime_`
}
exports.ImageDewasa = () => {
    return `\n_Random image anime 18+_`
}
exports.MakeLogo = () => {
    return `\n_Untuk membuat logo menggunakan bot_`
}
exports.oterMenu = () => {
    return `\n_Menu lainnya_`
}
exports.GameBot = () => {
    return `\n_Fitur untuk bermain dengan bot_`
}
exports.RandRik = () => {
    return `\n_Random video tiktok_`
}
exports.RandCew = () => {
    return `\n_Random gambar cewe cantik_`
}
exports.RamalOi = () => {
    return `\n_Ramalan masa kini_`
}
exports.TeleStik= () => {
    return `\n_Random stiker dari telegram_`
}
exports.BuatLogoLagi = () => {
    return `\n_Membuat logo keren dengan bot_`
}
exports.SoundNih= () => {
    return `\n_Random sound_`
}
exports.KanLogoLagi = () => {
    return `\n_Membuat logo menarik_`
}
exports.TobatBro = () => {
    return `\n_Fitur islami_`
}
exports.MauJualan = () => {
    return `\n_Fitur untuk berjualan_`
}
exports.Maustorage = () => {
    return `\n_Fitur untuk menyimpan stiker, audio, foto dan video_`
}
exports.MauChanger = () => {
    return `\n_Fitur untuk mengubah suara audio / vn_`
}
exports.GadaChat = () => {
    return `\n_Fitur untuk melakukan chat random_`
}
exports.SumberBot = () => {
    return `\n_Sumber script bot ini_`
}
exports.Tqnya = () => {
    return `\n_Siapa aja yang berkontribusi di dalam bot ini_`
}
exports.SetAh = () => {
    return `Mau set menu ya ?`
}
exports.KickAh = (gc) => {
    return `*Antilink Group Terdeteksi*\n\nKamu akan dikeluarkan dari group ${gc}`
    }
    exports.GjdKick = () => {
    return `Sepertinya kamu mengirimkan link group ini, kamu tidak akan di keluarkan`
    }
/////////

/////////
exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return `⏳ Mohon tunggu sebentar`
}
exports.ok = () => {
    return `✅ Done.`
}

exports.err = () => {
    return `⚠️ Fitur Sedang Error`
}
exports.erorLink = () => {
    return `⚠️ Link nya error`
}
exports.media = () => {
    return `Silahkan pilih media yang ingin kamu download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah ❎ Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ Command ini khusus Owner`
}

exports.doneOwner = () => {
    return `✅  ️Sudah selesai, Owner ~`
}

exports.groupOnly = () => {
    return `👥  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `🙅  Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ User bukan seorang admin! ❎`
}

exports.adminAlready = () => {
    return `❎ Tidak  dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! 🙏`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Hai kak ${pushname} 👋 selamat ${salam} , 
saya ${botname}, bot ini adalah Beta Multi-Device Whatsapp.
`
}
exports.listMenu = (prefix) => {
    return `╭─❒ 「 List Menu 」 
│○ ${prefix}infomenu
│○ ${prefix}storemenu
│○ ${prefix}rpgmenu
│○ ${prefix}photooxymenu
│○ ${prefix}storagemenu
│○ ${prefix}voicemenu
│○ ${prefix}anonymouscmd
│○ ${prefix}ownermenu
│○ ${prefix}databasemenu
│○ ${prefix}groupmenu
│○ ${prefix}animemenu
│○ ${prefix}tagmenu
│○ ${prefix}stalkmenu
│○ ${prefix}searchmenu
│○ ${prefix}convertmenu
│○ ${prefix}imageeffect
│○ ${prefix}stickereffect
│○ ${prefix}downloadmenu
│○ ${prefix}randomanime
│○ ${prefix}nsfwmenu
│○ ${prefix}textpromenu
│○ ${prefix}othermenu
│○ ${prefix}gamemenu
│○ ${prefix}soundmenu
│○ ${prefix}logomenu
│○ ${prefix}islammenu
│○ ${prefix}asupanmenu
│○ ${prefix}cecanmenu
│○ ${prefix}primboncmd
│○ ${prefix}telestiker
│○ ${prefix}ephotocmd
╰❒ ${prefix}tqto
`
}
exports.listMenu2 = (prefix) => {
    return `╭─❒ 「 Bot Info 」 
│○ ${prefix}owner
│○ ${prefix}rules
│○ ${prefix}sc
│○ ${prefix}ping
│○ ${prefix}runtime
│○ ${prefix}botstatus
╰❒ ${prefix}donate


╭─❒ 「 Owner 」 
│○ ${prefix}setmenu [query]
│○ ${prefix}setmenu katalog
│○ ${prefix}setmenu katalog2
│○ ${prefix}setmenu list
│○ ${prefix}setwm packname|author
│○ ${prefix}sendsesi
│○ ${prefix}listpc
│○ ${prefix}listgc
│○ ${prefix}broadcast [text]
│○ ${prefix}bc [text]
│○ ${prefix}bcgc 
│○ ${prefix}bcimage
│○ ${prefix}bcaudio
│○ ${prefix}bcstiker
│○ ${prefix}bcvn
│○ ${prefix}bcvideo
│○ ${prefix}banuser
│○ ${prefix}unban
│○ ${prefix}banned
│○ ${prefix}listbanned
│○ ${prefix}block
│○ ${prefix}ublock
│○ ${prefix}listblock
│○ ${prefix}addpremium
│○ ${prefix}delpremium
│○ ${prefix}listpremium
│○ ${prefix}nsfw [on/off]
│○ ${prefix}mute [on/off]
│○ ${prefix}autoblok212 [on/off]
│○ ${prefix}banchat
│○ ${prefix}unbanchat
│○ ${prefix}autorespond [on/off]
│○ ${prefix}antiviewonce [on/off]
│○ ${prefix}antidelete [on/off]
│○ ${prefix}autobio [on/off]
│○ ${prefix}anticall [on/off]
│○ ${prefix}join [link]
│○ ${prefix}self
│○ ${prefix}public [only bot]
│○ ${prefix}del [reply pesan bot]
│○ ${prefix}pppanjang
│○ ${prefix}setpppanjang
╰❒ ${prefix}setppbot [reply image]

╭─❒ 「 Store Menu 」
│○ ${prefix}list
│○ ${prefix}addlist [key|respond]
│○ ${prefix}dellist [key]
│○ ${prefix}update [key|respond]
│○ ${prefix}store
│○ ${prefix}kali
│○ ${prefix}bagi
│○ ${prefix}tambah
│○ ${prefix}kurang
│○ ${prefix}kalkulator
│○ ${prefix}setproses
│○ ${prefix}updateproses
│○ ${prefix}cekproses
│○ ${prefix}delproses
│○ ${prefix}setdone
│○ ${prefix}updatedone
│○ ${prefix}cekdone
│○ ${prefix}deldone
│○ ${prefix}pay
│○ ${prefix}setcaptionpay
│○ ${prefix}setpaysewa
│○ proses
╰❒ done

╭─❒ 「 Anonymous 」
│○ ${prefix}menfess
│○ ${prefix}confess
│○ ${prefix}balasmenfess
│○ ${prefix}tolakmenfess
│○ ${prefix}stopmenfess
│○ ${prefix}anonymous 
│○ ${prefix}start
│○ ${prefix}skip
╰❒ ${prefix}stop


╭─❒ 「 Database 」 
│○ ${prefix}setcmd [reply stiker]
│○ ${prefix}delcmd [reply stiker]
│○ ${prefix}listcmd
│○ ${prefix}absen
│○ ${prefix}cekabsen
│○ ${prefix}deleteabsen
│○ ${prefix}absenstart
│○ ${prefix}addmsg [nama file]
│○ ${prefix}getmsg [nama file]
│○ ${prefix}listmsg
╰❒ ${prefix}delmsg [nama file]

╭─❒ 「 Rpg Games 」
│○ ${prefix}adventure
│○ ${prefix}weekly
│○ ${prefix}use
│○ ${prefix}transfer
│○ ${prefix}slot
│○ ${prefix}shop
│○ ${prefix}pasar
│○ ${prefix}profile
│○ ${prefix}ojek
│○ ${prefix}open
│○ ${prefix}nguli
│○ ${prefix}narik
│○ ${prefix}nabung
│○ ${prefix}monthly
│○ ${prefix}mining
│○ ${prefix}merampok
│○ ${prefix}mancing
│○ ${prefix}kolam
│○ ${prefix}koboy
│○ ${prefix}kerja
│○ ${prefix}kandang
│○ ${prefix}levelup
│○ ${prefix}judi
│○ ${prefix}inventory
│○ ${prefix}hourly
│○ ${prefix}fishop
│○ ${prefix}feed
│○ ${prefix}duel
│○ ${prefix}daily
│○ ${prefix}craft
│○ ${prefix}cooldown
│○ ${prefix}cook
│○ ${prefix}collect
│○ ${prefix}chop
│○ ${prefix}casino
│○ ${prefix}buy
│○ ${prefix}bank 
│○ ${prefix}bansos
│○ ${prefix}berdagang
│○ ${prefix}berkebon
╰❒ ${prefix}build

╭─❒ 「 Group 」 
│○ ${prefix}addsewa
│○ ${prefix}delsewa
│○ ${prefix}listsewa
│○ ${prefix}ceksewa
│○ ${prefix}register
│○ ${prefix}unregister
│○ ${prefix}ceksn
│○ ${prefix}listonline
│○ ${prefix}sider
│○ ${prefix}wm packname|author
│○ ${prefix}infochat
│○ ${prefix}setdesk [text]
│○ ${prefix}setppgrup [reply image]
│○ ${prefix}pppanjanggc
│○ ${prefix}setpppanjanggc
│○ ${prefix}revoke
│○ ${prefix}leave
│○ ${prefix}add [62***]
│○ ${prefix}kick @tag
│○ ${prefix}leave
│○ ${prefix}linkgc
│○ ${prefix}welcome [on/off]
│○ ${prefix}goodbye [on/off]
│○ ${prefix}demotedetect [on/off]
│○ ${prefix}promotedetect  [on/off]
│○ ${prefix}setwelcome
│○ ${prefix}updatewelcome
│○ ${prefix}delwelcome
│○ ${prefix}cekwelcome
│○ ${prefix}setgoodbye
│○ ${prefix}updategoodbye
│○ ${prefix}delgoodbye
│○ ${prefix}cekgoodbye
│○ ${prefix}setpromote
│○ ${prefix}updatepromote
│○ ${prefix}setdemote
│○ ${prefix}updatedemote
│○ ${prefix}cekpromote
│○ ${prefix}cekdemote
│○ ${prefix}delpromote
│○ ${prefix}deldemote
│○ ${prefix}nsfw [on/off]
│○ ${prefix}antilink [on/off]
│○ ${prefix}antiwame [on/off]
│○ ${prefix}take packname|author
│○ ${prefix}group [open/close]
│○ ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]

╭─❒ 「 Anime 」 
│○ ${prefix}quotesanime
│○ ${prefix}anime [query]
│○ ${prefix}animeinfo
│○ ${prefix}manga [query]
╰❒ ${prefix}character [query]

╭─❒ 「 Tag 」 
│○ ${prefix}stickertag
│○ ${prefix}videotag [query]
│○ ${prefix}vntag [query]
╰❒ ${prefix}imagetag [query]

╭─❒ 「 Stalking 」 
│○ ${prefix}mlstalk [id|zona id]
│○ ${prefix}ffstalk [id]
│○ ${prefix}igstalk [username]
│○ ${prefix}ghstalk [username]
╰❒ ${prefix}ytstalk [channel]


╭─❒ 「 Search 」 
│○ ${prefix}ytsearch [query]
│○ ${prefix}openai [query]
│○ ${prefix}openaiimg [query]
│○ ${prefix}chatgpt [query]
│○ ${prefix}githubsearch [query]
│○ ${prefix}kbbi [query]
│○ ${prefix}lirik [query]
│○ ${prefix}wallpaper [query]
│○ ${prefix}google [query]
│○ ${prefix}wikimedia [query]
│○ ${prefix}apksearch
│○ ${prefix}findapk
│○ ${prefix}hentai
│○ ${prefix}wattpad [query]
│○ ${prefix}webtoons [query]
│○ ${prefix}brainly [query]
╰❒ ${prefix}pinterest [query]


╭─❒ 「 Converter 」
│○ ${prefix}emoji [😭]
│○ ${prefix}emojimix [😭+💩]
│○ ${prefix}toaudio [video]
│○ ${prefix}tomp3 [video]
│○ ${prefix}tovn [video]
│○ ${prefix}stiker [reply image]
│○ ${prefix}tourl [image/video]
│○ ${prefix}ssweb [url]
│○ ${prefix}togif [sticker]
│○ ${prefix}tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]


╭─❒ 「 Image Effect 」 
│○ ${prefix}wanted [reply image/stiker]
│○ ${prefix}utatoo [reply image/stiker]
│○ ${prefix}unsharpen [reply image/stiker]
│○ ${prefix}thanos [reply image/stiker]
│○ ${prefix}sniper [reply image/stiker]
│○ ${prefix}sharpen [reply image/stiker]
│○ ${prefix}sepia [reply image/stiker]
│○ ${prefix}scary [reply image/stiker]
│○ ${prefix}rip [reply image/stiker]
│○ ${prefix}redple [reply image/stiker]
│○ ${prefix}rejected [reply image/stiker]
│○ ${prefix}posterize [reply image/stiker]
│○ ${prefix}ps4 [reply image/stiker]
│○ ${prefix}pixelize [reply image/stiker]
│○ ${prefix}missionpassed [reply image/stiker]
│○ ${prefix}moustache [reply image/stiker]
│○ ${prefix}lookwhatkarenhave [reply image/stiker]
│○ ${prefix}jail [reply image/stiker]
│○ ${prefix}invert [reply image/stiker]
│○ ${prefix}instagram [reply image/stiker]
│○ ${prefix}greyscale [reply image/stiker]
│○ ${prefix}glitch2 [reply image/stiker]
│○ ${prefix}gay [reply image/stiker]
│○ ${prefix}frame [reply image/stiker]
│○ ${prefix}fire [reply image/stiker]
│○ ${prefix}distort [reply image/stiker]
│○ ${prefix}dictator [reply image/stiker]
│○ ${prefix}deepfry [reply image/stiker]
│○ ${prefix}ddungeon [reply image/stiker]
│○ ${prefix}circle [reply image/stiker]
│○ ${prefix}challenger [reply image/stiker]
│○ ${prefix}burn [reply image/stiker]
│○ ${prefix}brazzers [reply image/stiker]
╰❒ ${prefix}beautiful [reply image/stiker]


╭─❒ 「 Sticker Effect 」 
│○ ${prefix}jail [reply image/stiker]
│○ ${prefix}red [reply image/stiker]
│○ ${prefix}gay [reply image/stiker]
│○ ${prefix}bloo [reply image/stiker]
│○ ${prefix}blue [reply image/stiker]
│○ ${prefix}sepia [reply image/stiker]
│○ ${prefix}green [reply image/stiker]
│○ ${prefix}glass [reply image/stiker]
│○ ${prefix}invert [reply image/stiker]
│○ ${prefix}blurple [reply image/stiker]
│○ ${prefix}blurple2 [reply image/stiker]
│○ ${prefix}wasted [reply image/stiker]
│○ ${prefix}passed [reply image/stiker]
│○ ${prefix}triggered [reply image/stiker]
│○ ${prefix}comrade [reply image/stiker]
│○ ${prefix}greyscale [reply image/stiker]
│○ ${prefix}threshold [reply image/stiker]
│○ ${prefix}brightness [reply image/stiker]
╰❒ ${prefix}invertgreyscale [reply image/stiker]


╭─❒ 「 Download 」 
│○ ${prefix}tiktok [link]
│○ ${prefix}tiktoknowm [link]
│○ ${prefix}tiktokwm [link]
│○ ${prefix}tiktokaudio [link]
│○ ${prefix}ytdl [link]
│○ ${prefix}play [query]
│○ ${prefix}ytmp3 [link]
│○ ${prefix}ytshortmp3 [link]
│○ ${prefix}ytmp4 [link]
│○ ${prefix}ytshorts [link]
│○ ${prefix}facebook [link]
│○ ${prefix}facebooksd [link]
│○ ${prefix}facebookhd [link]
│○ ${prefix}fbaudio [link]
│○ ${prefix}igstory [username]
│○ ${prefix}igdl [link]
│○ ${prefix}igphoto [link]
│○ ${prefix}igvideo [link]
│○ ${prefix}igreels [link]
│○ ${prefix}igtv [link]
│○ ${prefix}soundcloud [link]
│○ ${prefix}gitclone [link repo]
│○ ${prefix}gitrepo [username repo branch]
│○ ${prefix}mediafire [link]
│○ ${prefix}nhentaipdf [id]
╰❒ ${prefix}twitter link

╭─❒ 「 Primbon 」
│○ ${prefix}nomorhoki 887435047326
│○ ${prefix}artimimpi [query]
│○ ${prefix}artinama [query]
│○ ${prefix}ramaljodoh
│○ ${prefix}ramaljodohbali
│○ ${prefix}suamiistri
│○ ${prefix}ramalcinta
│○ ${prefix}cocoknama
│○ ${prefix}pasangan
│○ ${prefix}jadiannikah
│○ ${prefix}sifatusaha
│○ ${prefix}rezeki
│○ ${prefix}pekerjaan
│○ ${prefix}nasib
│○ ${prefix}penyakit
│○ ${prefix}tarot
│○ ${prefix}fengshui
│○ ${prefix}haribaik
│○ ${prefix}harisangar
│○ ${prefix}harisial
│○ ${prefix}nagahari
│○ ${prefix}arahrezeki
│○ ${prefix}peruntungan
│○ ${prefix}weton
│○ ${prefix}karakter
│○ ${prefix}keberuntungan
│○ ${prefix}memancing
│○ ${prefix}masasubur
│○ ${prefix}zodiak 
╰❒ ${prefix}shio [query]

╭─❒ 「 Random Anime 」
│○ ${prefix}loli
│○ ${prefix}neko
│○ ${prefix}waifu
│○ ${prefix}shinobu
│○ ${prefix}megumin
│○ ${prefix}bully
│○ ${prefix}cuddle
│○ ${prefix}cry
│○ ${prefix}hug
│○ ${prefix}awoo
│○ ${prefix}kiss
│○ ${prefix}lick
│○ ${prefix}pat
│○ ${prefix}smug
│○ ${prefix}bonk
│○ ${prefix}yeet
│○ ${prefix}blush
│○ ${prefix}smile
│○ ${prefix}wave
│○ ${prefix}highfive
│○ ${prefix}handhold
│○ ${prefix}nom
│○ ${prefix}bite
│○ ${prefix}glomp
│○ ${prefix}slap
│○ ${prefix}kill
│○ ${prefix}happy
│○ ${prefix}wink
│○ ${prefix}poke
│○ ${prefix}dance
╰❒ ${prefix}cringe

╭─❒ 「 Voice Change Menu 」
│○ ${prefix}bass
│○ ${prefix}blown
│○ ${prefix}deep
│○ ${prefix}earrape
│○ ${prefix}fast
│○ ${prefix}fat
│○ ${prefix}nightcore
│○ ${prefix}reverse
│○ ${prefix}robot
│○ ${prefix}slow
│○ ${prefix}smooth
╰❒ ${prefix}tupai

╭─❒ 「 Storage Menu 」
│○ ${prefix}addvn
│○ ${prefix}listvn
│○ ${prefix}delvn
│○ ${prefix}adddocument
│○ ${prefix}listdocument
│○ ${prefix}deldocument
│○ ${prefix}addtext
│○ ${prefix}listtext
│○ ${prefix}deltext
│○ ${prefix}addaudio
│○ ${prefix}listaudio
│○ ${prefix}delaudio
│○ ${prefix}addimage
│○ ${prefix}listimage
│○ ${prefix}delimage
│○ ${prefix}addvideo
│○ ${prefix}listvideo
│○ ${prefix}delvideo
│○ ${prefix}addstik
│○ ${prefix}delstik
╰❒ ${prefix}liststik

╭─❒ 「 Nsfw & Sfw 」
│○ ${prefix}ahegao
│○ ${prefix}anal
│○ ${prefix}avatar2
│○ ${prefix}baka
│○ ${prefix}bdsm
│○ ${prefix}bj
│○ ${prefix}blowjob
│○ ${prefix}boobs
│○ ${prefix}classic
│○ ${prefix}cuckold
│○ ${prefix}cuddle
│○ ${prefix}cum
│○ ${prefix}cumarts
│○ ${prefix}cumsluts
│○ ${prefix}ero
│○ ${prefix}erofeet
│○ ${prefix}erokemonomimi
│○ ${prefix}erokitsune
│○ ${prefix}eroneko
│○ ${prefix}eroyuri
│○ ${prefix}feed
│○ ${prefix}feet
│○ ${prefix}feetgif
│○ ${prefix}femdom
│○ ${prefix}foot
│○ ${prefix}foxgirl
│○ ${prefix}futanari
│○ ${prefix}gangbang
│○ ${prefix}girl-solo
│○ ${prefix}girl-solo-gif
│○ ${prefix}glasses
│○ ${prefix}hentai
│○ ${prefix}hentai
│○ ${prefix}hentai-gif
│○ ${prefix}holo
│○ ${prefix}holo2
│○ ${prefix}holoero
│○ ${prefix}hug
│○ ${prefix}jahy
│○ ${prefix}kemonomimi
│○ ${prefix}kemonomimi2
│○ ${prefix}keta
│○ ${prefix}kiss
│○ ${prefix}kitsune
│○ ${prefix}kuni
│○ ${prefix}lesbian
│○ ${prefix}lizard
│○ ${prefix}masturbation
│○ ${prefix}meowi
│○ ${prefix}neko
│○ ${prefix}neko-gif
│○ ${prefix}neko-sfw
│○ ${prefix}neko2
│○ ${prefix}nsfw-neko
│○ ${prefix}orgy
│○ ${prefix}panties
│○ ${prefix}pat
│○ ${prefix}poke
│○ ${prefix}pussyart
│○ ${prefix}pussywankgif
│○ ${prefix}slap
│○ ${prefix}smug
│○ ${prefix}spank
│○ ${prefix}tentacles
│○ ${prefix}thighs
│○ ${prefix}tickle
│○ ${prefix}tits
│○ ${prefix}trap
│○ ${prefix}woof
│○ ${prefix}yuri
╰❒ ${prefix}zettai

╭─❒ 「 Ephoto360 Menu 」
│○ ${prefix}1917text
│○ ${prefix}angelwing
│○ ${prefix}announofwin
│○ ${prefix}birthdaycake
│○ ${prefix}capercut
│○ ${prefix}cardhalloween
│○ ${prefix}cartoonstyle
│○ ${prefix}christmascard 
│○ ${prefix}christmasseason
│○ ${prefix}covergamepubg
│○ ${prefix}covergraffiti
│○ ${prefix}dragonfire
│○ ${prefix}embroider
│○ ${prefix}fabrictext
│○ ${prefix}facebookgold
│○ ${prefix}facebooksilver
│○ ${prefix}funnyanimations
│○ ${prefix}funnyhalloween
│○ ${prefix}galaxybat
│○ ${prefix}galaxywallpaper
│○ ${prefix}generalexam 
│○ ${prefix}glowingtext
│○ ${prefix}graffiti3d
│○ ${prefix}graffititext
│○ ${prefix}graffititext2
│○ ${prefix}graffititext3
│○ ${prefix}greetingcardvideo 
│○ ${prefix}halloweenbats
│○ ${prefix}heartcup
│○ ${prefix}heartflashlight
│○ ${prefix}horrorletter
│○ ${prefix}icetext
│○ ${prefix}instagramgold
│○ ${prefix}instagramsilver
│○ ${prefix}lightningpubg
│○ ${prefix}lovecard
│○ ${prefix}lovelycute
│○ ${prefix}masteryavatar
│○ ${prefix}merrycard
│○ ${prefix}messagecoffee
│○ ${prefix}metalstar
│○ ${prefix}milkcake
│○ ${prefix}moderngold
│○ ${prefix}moderngold2
│○ ${prefix}moderngold3
│○ ${prefix}moderngoldsilver
│○ ${prefix}multicolor
│○ ${prefix}nameonheart
│○ ${prefix}noeltext
│○ ${prefix}projectyasuo
│○ ${prefix}pubgbirthday
│○ ${prefix}pubgglicthvideo 
│○ ${prefix}pubgmascotlogo
│○ ${prefix}puppycute
│○ ${prefix}realembroidery
│○ ${prefix}retrotext
│○ ${prefix}rosebirthday
│○ ${prefix}shirtclub
│○ ${prefix}snowontext
│○ ${prefix}starsnight
│○ ${prefix}summerbeach
│○ ${prefix}sunglightshadow
│○ ${prefix}textcakes
│○ ${prefix}texthalloween
│○ ${prefix}textonglass
│○ ${prefix}textsky
│○ ${prefix}thundertext
│○ ${prefix}twittergold
│○ ${prefix}twittersilver
│○ ${prefix}viettel
│○ ${prefix}vintagetelevision
│○ ${prefix}watercolor2
│○ ${prefix}womansday
│○ ${prefix}writeblood
│○ ${prefix}writegalaxy
│○ ${prefix}writehorror
│○ ${prefix}youtubegold
│○ ${prefix}youtubesilver
╰❒ ${prefix}zombie3d


╭─❒ 「 Textpro Menu 」
│○ ${prefix}halloween2 text|text2
│○ ${prefix}horror text|text2
│○ ${prefix}game8bit text|text2
│○ ${prefix}layered text|text2
│○ ${prefix}glitch2 text|text2
│○ ${prefix}cool-graffiti text|text2
│○ ${prefix}cool-wall-graffiti text|text2
│○ ${prefix}realistic text|text2
│○ ${prefix}space3d text|text2
│○ ${prefix}glitch-tiktok text|text2
│○ ${prefix}stone text|text2
│○ ${prefix}marvel text|text2
│○ ${prefix}marvel2 text|text2
│○ ${prefix}pornhub text|text2
│○ ${prefix}avengers text|text2
│○ ${prefix}metal-rainbow text|text2
│○ ${prefix}metal-gold text|text2
│○ ${prefix}metal-galaxy text|text2
│○ ${prefix}halloween2 text|text2
│○ ${prefix}lion text|text2
│○ ${prefix}wolf-black-white text|text2
│○ ${prefix}wolf-galaxy text|text2
│○ ${prefix}ninja text|text2
│○ ${prefix}3dsteel text|text2
│○ ${prefix}horror2 text|text2
│○ ${prefix}lava text|text2
│○ ${prefix}bagel text|text2
│○ ${prefix}blackpink text
│○ ${prefix}rainbow2 text
│○ ${prefix}water-pipe text
│○ ${prefix}halloween text
│○ ${prefix}sketch text
│○ ${prefix}sircuit text
│○ ${prefix}discovery text
│○ ${prefix}metallic2 text
│○ ${prefix}fiction text
│○ ${prefix}demon text
│○ ${prefix}transformer text
│○ ${prefix}berry text
│○ ${prefix}thunder text
│○ ${prefix}magma text
│○ ${prefix}3dstone text
│○ ${prefix}neon text
│○ ${prefix}glitch text
│○ ${prefix}harry-potter text
│○ ${prefix}embossed text
│○ ${prefix}broken text
│○ ${prefix}papercut text
│○ ${prefix}gradient text
│○ ${prefix}glossy text
│○ ${prefix}watercolor text
│○ ${prefix}multicolor text
│○ ${prefix}neon-devil text
│○ ${prefix}underwater text
│○ ${prefix}bear text
│○ ${prefix}wonderful-graffiti text
│○ ${prefix}christmas text
│○ ${prefix}neon-light text
│○ ${prefix}snow text
│○ ${prefix}cloudsky text
│○ ${prefix}luxury2 text
│○ ${prefix}gradient2 text
│○ ${prefix}summer text
│○ ${prefix}writing text
│○ ${prefix}engraved text
│○ ${prefix}summery text
│○ ${prefix}3dglue text
│○ ${prefix}metaldark text
│○ ${prefix}neonlight text
│○ ${prefix}oscar text
│○ ${prefix}minion text
│○ ${prefix}holographic text
│○ ${prefix}purple text
│○ ${prefix}glossy-blue text
│○ ${prefix}deluxe-gold text
│○ ${prefix}glossy-carbon text
│○ ${prefix}fabric text
│○ ${prefix}neonc text
│○ ${prefix}newyear text
│○ ${prefix}newyear2 text
│○ ${prefix}metal-silver text
│○ ${prefix}xmas text
│○ ${prefix}blood text
│○ ${prefix}dark-gold text
│○ ${prefix}joker text
│○ ${prefix}wicker text
│○ ${prefix}natural text
│○ ${prefix}firework text
│○ ${prefix}skeleton text
│○ ${prefix}red-balloon text
│○ ${prefix}purple-balloon text
│○ ${prefix}pink-balloon text
│○ ${prefix}green-balloon text
│○ ${prefix}cyan-balloon text
│○ ${prefix}blue-balloon text
│○ ${prefix}gold-balloon text
│○ ${prefix}steel text
│○ ${prefix}gloss text
│○ ${prefix}denim text
│○ ${prefix}decorate text
│○ ${prefix}decorate-purple text
│○ ${prefix}peridot text
│○ ${prefix}rock text
│○ ${prefix}yellow-glass text
│○ ${prefix}purple-glass text
│○ ${prefix}orange-glass text
│○ ${prefix}green-glass text
│○ ${prefix}cyan-glass text
│○ ${prefix}blue-glass text
│○ ${prefix}red-glass text
│○ ${prefix}purple-shiny-glass text
│○ ${prefix}captain-as2 text
│○ ${prefix}robot text
│○ ${prefix}equalizer text
│○ ${prefix}toxic text
│○ ${prefix}pink-sparkling text
│○ ${prefix}blue-sparkling text
│○ ${prefix}green-sparkling text
│○ ${prefix}purple-sparkling text
│○ ${prefix}gold-sparkling text
│○ ${prefix}red-sparkling text
│○ ${prefix}cyan-sparkling text
│○ ${prefix}decorative text
│○ ${prefix}chocolate text
│○ ${prefix}strawberry text
│○ ${prefix}koifish text
│○ ${prefix}bread text
│○ ${prefix}matrix text
│○ ${prefix}blood2 text
│○ ${prefix}neonligth2 text
│○ ${prefix}thunder2 text
│○ ${prefix}3dbox text
│○ ${prefix}neon2 text
│○ ${prefix}road-warning text
│○ ${prefix}bokeh text
│○ ${prefix}green-neon text
│○ ${prefix}advanced text
│○ ${prefix}dropwater text
│○ ${prefix}wall text
│○ ${prefix}chrismast text
│○ ${prefix}honey2 text
│○ ${prefix}drug text
│○ ${prefix}marble text
│○ ${prefix}marble2 text
│○ ${prefix}ice text
│○ ${prefix}juice text
│○ ${prefix}rusty text
│○ ${prefix}abstra text
│○ ${prefix}biscuit text
│○ ${prefix}wood text
│○ ${prefix}scifi text
│○ ${prefix}metal-rainbow text
│○ ${prefix}metal-rose-gold text
│○ ${prefix}purple-gem text
│○ ${prefix}shiny text 
│○ ${prefix}yellow-jewelry text
│○ ${prefix}silver-jewelry text
│○ ${prefix}red-jewelry text
│○ ${prefix}purple-jewelry text
│○ ${prefix}orange-jewelry text
│○ ${prefix}green-jewelry text
│○ ${prefix}cyan-jewelry text
│○ ${prefix}blue-jewelry text
│○ ${prefix}hot-metal text
│○ ${prefix}golden text
│○ ${prefix}blue-glitter text
│○ ${prefix}purple-glitter text
│○ ${prefix}pink-glitter text
│○ ${prefix}green-glitter text
│○ ${prefix}silver-glitter text
│○ ${prefix}gold-glitter text
│○ ${prefix}bronze-glitter text
│○ ${prefix}eroded-metal text
│○ ${prefix}carbon text
│○ ${prefix}candy text
│○ ${prefix}blue-metal text
│○ ${prefix}blue-gem text
│○ ${prefix}3dchrome text
│○ ${prefix}black-metal text
╰❒ ${prefix}metal-gold text
 

╭─❒ 「 Others 」
│○ ${prefix}afk [reason]
│○ ${prefix}translate kode_bahasa text
│○ ${prefix}kalkulator [query]
│○ ${prefix}smeme [text]
│○ ${prefix}smeme2 [text|text]
│○ ${prefix}memegen [text|text]
╰❒

╭─❒ 「 Game Menu 」
│○ ${prefix}tembak
│○ ${prefix}tolak
│○ ${prefix}terima
│○ ${prefix}putusin
│○ ${prefix}ikhlasin
│○ ${prefix}cekpacar
│○ ${prefix}kuismath
│○ ${prefix}tebakgambar
│○ ${prefix}tebakkata
│○ ${prefix}tebakbendera
│○ ${prefix}tebakkalimat
│○ ${prefix}tebaksiapa
│○ ${prefix}tebakkabupaten
│○ ${prefix}tebakkimia
│○ ${prefix}tebaklirik
│○ ${prefix}tebaktebakan
│○ ${prefix}tekateki
│○ ${prefix}susunkata
╰❒ ${prefix}caklontong


╭─❒ 「 Asupan Menu 」
│○ ${prefix}chika
│○ ${prefix}delvira
│○ ${prefix}ayu
│○ ${prefix}bunga
│○ ${prefix}aura
│○ ${prefix}nisa
│○ ${prefix}ziva
│○ ${prefix}yana
│○ ${prefix}viona
│○ ${prefix}syania
│○ ${prefix}riri
│○ ${prefix}syifa
│○ ${prefix}mama_gina
│○ ${prefix}alcakenya
│○ ${prefix}mangayutri
│○ ${prefix}rikagusriani
│○ ${prefix}asupan
│○ ${prefix}bocil
│○ ${prefix}geayubi
│○ ${prefix}santuy
│○ ${prefix}ukhty
╰❒ ${prefix}syifa

╭─❒ 「 Telegram Sticker 」
│○ ${prefix}awoawo
│○ ${prefix}benedict
│○ ${prefix}chat
│○ ${prefix}dbfly
│○ ${prefix}dino_kuning
│○ ${prefix}doge
│○ ${prefix}gojosatoru
│○ ${prefix}hope_boy
│○ ${prefix}jisoo
│○ ${prefix}kr_robot
│○ ${prefix}kucing
│○ ${prefix}lonte
│○ ${prefix}manusia_lidi
│○ ${prefix}menjamet
│○ ${prefix}meow
│○ ${prefix}nicholas
│○ ${prefix}patrick
│○ ${prefix}popoci
│○ ${prefix}sponsbob
│○ ${prefix}kawan_sponsbob
╰❒ ${prefix}tyni

╭─❒ 「 Random Cewe 」
│○ ${prefix}china 
│○ ${prefix}indonesia 
│○ ${prefix}malaysia 
│○ ${prefix}thailand 
│○ ${prefix}korea 
│○ ${prefix}japan 
│○ ${prefix}vietnam 
│○ ${prefix}jenni 
│○ ${prefix}jiso 
│○ ${prefix}lisa  
╰❒ ${prefix}rose

╭─❒ 「 Logo Menu 」
│○ ${prefix}anonymous2
│○ ${prefix}astronotspace
│○ ${prefix}avatar3q360
│○ ${prefix}avatarff
│○ ${prefix}avatarleagueofking
│○ ${prefix}avatarlolbyname
│○ ${prefix}avataroverwatch
│○ ${prefix}bannerofaov
│○ ${prefix}bannerofaov2
│○ ${prefix}bannerofapex
│○ ${prefix}banneroffreefire
│○ ${prefix}banneroflol
│○ ${prefix}bannerofoverwatch
│○ ${prefix}bannerofpubg
│○ ${prefix}bannerytcsgo
│○ ${prefix}beautifulgalaxylol
│○ ${prefix}beautifulshimmering
│○ ${prefix}blueneon
│○ ${prefix}circlemarcotteam
│○ ${prefix}colorfulpubg
│○ ${prefix}companylogo
│○ ${prefix}companylogo2
│○ ${prefix}coverbannerlol
│○ ${prefix}coverdota2
│○ ${prefix}coverfblol
│○ ${prefix}coverfreefirefb
│○ ${prefix}coverleagueofking
│○ ${prefix}coverloknew
│○ ${prefix}coverofwarface
│○ ${prefix}coveronepiecefb
│○ ${prefix}crossfirecover
│○ ${prefix}crossfirestyle
│○ ${prefix}csgocover
│○ ${prefix}cutegirlgamer
│○ ${prefix}cyberhunterfb
│○ ${prefix}dragonballfb
│○ ${prefix}effect3donbeach
│○ ${prefix}elegantrotation
│○ ${prefix}fbgamepubgcover
│○ ${prefix}footballteam
│○ ${prefix}gaminglogo4fvs
│○ ${prefix}gamingmascot
│○ ${prefix}gradientlogo
│○ ${prefix}gunlogogaming
│○ ${prefix}introvideomaker
│○ ${prefix}letterlogos 
│○ ${prefix}logoaccording 
│○ ${prefix}logogamingassasin 
│○ ${prefix}lolcoverbyname 
│○ ${prefix}lolpentakill 
│○ ${prefix}lolwallpaper 
│○ ${prefix}maketeamlogo 
│○ ${prefix}mascotstyle 
│○ ${prefix}metalmascot 
│○ ${prefix}newlolavatar 
│○ ${prefix}overwatchcover 
│○ ${prefix}overwatchwallpaper 
│○ ${prefix}pencilsketch 
│○ ${prefix}pubgcutelogo 
│○ ${prefix}pubglogomaker 
│○ ${prefix}rovwallpaper 
│○ ${prefix}rovwallpaperhd 
│○ ${prefix}teamlogo 
│○ ${prefix}wallpaperaov 
╰❒ ${prefix}wallpaperml 


╭─❒ 「 Islamic Menu 」
│○ ${prefix}asmaulhusna
│○ ${prefix}kisahnabi [nabi]
│○ ${prefix}jadwalshalat [daerah]
│○ ${prefix}randomquran
│○ ${prefix}randomquran2
│○ ${prefix}listsurah
│○ ${prefix}tafsirsurah [surah]
╰❒ ${prefix}alquranaudio [surah|ayat]

╭─❒ 「 Sound Menu 」
│○ ${prefix}sound1
│○ ${prefix}sound2
│○ ${prefix}sound3
│○ ${prefix}sound4
│○ ${prefix}sound5
│○ ${prefix}sound6
│○ ${prefix}sound7
│○ ${prefix}sound8
│○ ${prefix}sound9
│○ ${prefix}sound10
│○ ${prefix}sound11
│○ ${prefix}sound12
│○ ${prefix}sound13
│○ ${prefix}sound14
│○ ${prefix}sound15
│○ ${prefix}sound16
│○ ${prefix}sound17
│○ ${prefix}sound18 
│○ ${prefix}sound19
│○ ${prefix}sound20
│○ ${prefix}sound21
│○ ${prefix}sound22
│○ ${prefix}sound23
│○ ${prefix}sound24
│○ ${prefix}sound25
│○ ${prefix}sound26
│○ ${prefix}sound27
│○ ${prefix}sound28
│○ ${prefix}sound29
│○ ${prefix}sound30
│○ ${prefix}sound31
│○ ${prefix}sound32
│○ ${prefix}sound33
│○ ${prefix}sound34
│○ ${prefix}sound35
│○ ${prefix}sound36
│○ ${prefix}sound37
│○ ${prefix}sound38
│○ ${prefix}sound39
│○ ${prefix}sound40
│○ ${prefix}sound41
│○ ${prefix}sound42
│○ ${prefix}sound43
│○ ${prefix}sound44
│○ ${prefix}sound45
│○ ${prefix}sound46
│○ ${prefix}sound47
│○ ${prefix}sound48
│○ ${prefix}sound49
│○ ${prefix}sound50
│○ ${prefix}sound51
│○ ${prefix}sound52
│○ ${prefix}sound53
│○ ${prefix}sound54
│○ ${prefix}sound55
│○ ${prefix}sound56
│○ ${prefix}sound57
│○ ${prefix}sound58
│○ ${prefix}sound59
│○ ${prefix}sound60
│○ ${prefix}sound61
│○ ${prefix}sound62
│○ ${prefix}sound63
│○ ${prefix}sound64
│○ ${prefix}sound65
│○ ${prefix}sound66
│○ ${prefix}sound67
│○ ${prefix}sound68
│○ ${prefix}sound69
╰❒ ${prefix}sound70

╭─❒ 「 TqTo 」 
│○ My God
│○ My Parents
│○ Fatih A.
│○ Ferdiz
│○ DikaArdnt
│○ Mhankbarbar
│○ Nurutomo
│○ ZeeoneOfc
│○ Penyedia Module
╰❒ And All Support
    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
2. Jangan telepon bot. ☎️
3. Jangan membandingkan bot 👍

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan.

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini bisa kalian dapatkan di YouTube ZEEONE OFC

🗯️ Boleh saya menambah ke grup?
➡️ Untuk itu tergantung dari owner bot sendiri

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix & bisa kamu gunakan tanpa prefix

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan bot dapat berubah kapan saja 

Terimakasih! 
`
}
exports.welcome = () =>{
	return`𝖩𝖺𝗇𝗀𝖺𝗇 𝗅𝗎𝗉𝖺 𝗂𝗇𝗍𝗋𝗈 𝗄𝖺𝗄 🤗
	
╭ 𝖭𝖺𝗆𝖺 :
│○ 𝖴𝗆𝗎𝗋 :
│○ 𝖦𝖾𝗇𝖽𝖾𝗋 :
│○ 𝖠𝗌𝗄𝗈𝗍 :
╰❒ 𝖯𝖺𝗍𝗎𝗁𝗂 𝗋𝗎𝗅𝖾𝗌 𝗀𝗋𝗎𝗉 𝗒𝖺 𝗄𝖺k ~`
}
exports.leave = () =>{
	return`Yah kok out 😣 Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`*------「 SOURCE CODE 」 ------*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://s.id/YouTube-Zeeoneofc
`
}
exports.tos = (ownernomer) => {
    return `
*-------「 DONATE 」 -------*

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti 👍
Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`╭─❒ 「 Bot Info 」 
│○ ${prefix}owner
│○ ${prefix}rules
│○ ${prefix}sc
│○ ${prefix}ping
│○ ${prefix}runtime
│○ ${prefix}botstatus
╰❒ ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`╭─❒ 「 Owner 」 
│○ ${prefix}setmenu [query]
│○ ${prefix}setmenu katalog
│○ ${prefix}setmenu katalog2
│○ ${prefix}setmenu list
│○ ${prefix}setwm packname|author
│○ ${prefix}sendsesi
│○ ${prefix}listpc
│○ ${prefix}listgc
│○ ${prefix}broadcast [text]
│○ ${prefix}bc [text]
│○ ${prefix}bcgc 
│○ ${prefix}bcimage
│○ ${prefix}bcaudio
│○ ${prefix}bcstiker
│○ ${prefix}bcvn
│○ ${prefix}bcvideo
│○ ${prefix}banuser
│○ ${prefix}unban
│○ ${prefix}banned
│○ ${prefix}listbanned
│○ ${prefix}block
│○ ${prefix}ublock
│○ ${prefix}listblock
│○ ${prefix}addpremium
│○ ${prefix}delpremium
│○ ${prefix}listpremium
│○ ${prefix}nsfw [on/off]
│○ ${prefix}mute [on/off]
│○ ${prefix}autoblok212 [on/off]
│○ ${prefix}banchat
│○ ${prefix}unbanchat
│○ ${prefix}autorespond [on/off]
│○ ${prefix}antiviewonce [on/off]
│○ ${prefix}antidelete [on/off]
│○ ${prefix}autobio [on/off]
│○ ${prefix}anticall [on/off]
│○ ${prefix}join [link]
│○ ${prefix}self
│○ ${prefix}public [only bot]
│○ ${prefix}del [reply pesan bot]
│○ ${prefix}pppanjang
│○ ${prefix}setpppanjang
╰❒ ${prefix}setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`╭─❒ 「 Database 」 
│○ ${prefix}setcmd [reply stiker]
│○ ${prefix}delcmd [reply stiker]
│○ ${prefix}listcmd
│○ ${prefix}absen
│○ ${prefix}cekabsen
│○ ${prefix}deleteabsen
│○ ${prefix}absenstart
│○ ${prefix}addmsg [nama file]
│○ ${prefix}getmsg [nama file]
│○ ${prefix}listmsg
╰❒ ${prefix}delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`╭─❒ 「 Group 」 
│○ ${prefix}addsewa
│○ ${prefix}delsewa
│○ ${prefix}listsewa
│○ ${prefix}ceksewa
│○ ${prefix}delsewa
│○ ${prefix}register
│○ ${prefix}unregister
│○ ${prefix}ceksn
│○ ${prefix}listonline
│○ ${prefix}sider
│○ ${prefix}wm packname|author
│○ ${prefix}infochat
│○ ${prefix}setdesk [text]
│○ ${prefix}setppgrup [reply image]
│○ ${prefix}pppanjanggc
│○ ${prefix}setpppanjanggc
│○ ${prefix}revoke
│○ ${prefix}leave
│○ ${prefix}add [62***]
│○ ${prefix}kick @tag
│○ ${prefix}leave
│○ ${prefix}linkgc
│○ ${prefix}welcome [on/off]
│○ ${prefix}goodbye [on/off]
│○ ${prefix}demotedetect [on/off]
│○ ${prefix}promotedetect  [on/off]
│○ ${prefix}setwelcome
│○ ${prefix}updatewelcome
│○ ${prefix}delwelcome
│○ ${prefix}cekwelcome
│○ ${prefix}setgoodbye
│○ ${prefix}updategoodbye
│○ ${prefix}delgoodbye
│○ ${prefix}cekgoodbye
│○ ${prefix}setpromote
│○ ${prefix}updatepromote
│○ ${prefix}setdemote
│○ ${prefix}updatedemote
│○ ${prefix}cekpromote
│○ ${prefix}cekdemote
│○ ${prefix}delpromote
│○ ${prefix}deldemote
│○ ${prefix}nsfw [on/off]
│○ ${prefix}antilink [on/off]
│○ ${prefix}antiwame [on/off]
│○ ${prefix}take packname|author
│○ ${prefix}group [open/close]
│○ ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`╭─❒ 「 Anime 」 
│○ ${prefix}quotesanime
│○ ${prefix}anime [query]
│○ ${prefix}animeinfo
│○ ${prefix}manga [query]
╰❒ ${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`╭─❒ 「 Tag 」 
│○ ${prefix}stickertag
│○ ${prefix}videotag [query]
│○ ${prefix}vntag [query]
╰❒ ${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`╭─❒ 「 Stalking 」 
│○ ${prefix}mlstalk [id|zona id]
│○ ${prefix}ffstalk [id]
│○ ${prefix}igstalk [username]
│○ ${prefix}ghstalk [username]
╰❒ ${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`╭─❒ 「 Search 」 
│○ ${prefix}ytsearch [query]
│○ ${prefix}openai [query]
│○ ${prefix}openaiimg [query]
│○ ${prefix}chatgpt [query]
│○ ${prefix}githubsearch [query]
│○ ${prefix}kbbi [query]
│○ ${prefix}lirik [query]
│○ ${prefix}wallpaper [query]
│○ ${prefix}google [query]
│○ ${prefix}wikimedia [query]
│○ ${prefix}apksearch
│○ ${prefix}findapk
│○ ${prefix}hentai
│○ ${prefix}wattpad [query]
│○ ${prefix}webtoons [query]
│○ ${prefix}brainly [query]
╰❒ ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`╭─❒ 「 Converter 」 
│○ ${prefix}emoji [😭]
│○ ${prefix}emojimix [😭+💩]
│○ ${prefix}toaudio [video]
│○ ${prefix}tomp3 [video]
│○ ${prefix}tovn [video]
│○ ${prefix}stiker [reply image]
│○ ${prefix}tourl [image/video]
│○ ${prefix}ssweb [url]
│○ ${prefix}togif [sticker]
│○ ${prefix}tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`╭─❒ 「 Image Effect 」 
│○ ${prefix}wanted [reply image/stiker]
│○ ${prefix}utatoo [reply image/stiker]
│○ ${prefix}unsharpen [reply image/stiker]
│○ ${prefix}thanos [reply image/stiker]
│○ ${prefix}sniper [reply image/stiker]
│○ ${prefix}sharpen [reply image/stiker]
│○ ${prefix}sepia [reply image/stiker]
│○ ${prefix}scary [reply image/stiker]
│○ ${prefix}rip [reply image/stiker]
│○ ${prefix}redple [reply image/stiker]
│○ ${prefix}rejected [reply image/stiker]
│○ ${prefix}posterize [reply image/stiker]
│○ ${prefix}ps4 [reply image/stiker]
│○ ${prefix}pixelize [reply image/stiker]
│○ ${prefix}missionpassed [reply image/stiker]
│○ ${prefix}moustache [reply image/stiker]
│○ ${prefix}lookwhatkarenhave [reply image/stiker]
│○ ${prefix}jail [reply image/stiker]
│○ ${prefix}invert [reply image/stiker]
│○ ${prefix}instagram [reply image/stiker]
│○ ${prefix}greyscale [reply image/stiker]
│○ ${prefix}glitch [reply image/stiker]
│○ ${prefix}gay [reply image/stiker]
│○ ${prefix}frame [reply image/stiker]
│○ ${prefix}fire [reply image/stiker]
│○ ${prefix}distort [reply image/stiker]
│○ ${prefix}dictator [reply image/stiker]
│○ ${prefix}deepfry [reply image/stiker]
│○ ${prefix}ddungeon [reply image/stiker]
│○ ${prefix}circle [reply image/stiker]
│○ ${prefix}challenger [reply image/stiker]
│○ ${prefix}burn [reply image/stiker]
│○ ${prefix}brazzers [reply image/stiker]
╰❒ ${prefix}beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`╭─❒ 「 Sticker Effect 」 
│○ ${prefix}jail [reply image/stiker]
│○ ${prefix}red [reply image/stiker]
│○ ${prefix}gay [reply image/stiker]
│○ ${prefix}bloo [reply image/stiker]
│○ ${prefix}blue [reply image/stiker]
│○ ${prefix}sepia [reply image/stiker]
│○ ${prefix}green [reply image/stiker]
│○ ${prefix}glass [reply image/stiker]
│○ ${prefix}invert [reply image/stiker]
│○ ${prefix}blurple [reply image/stiker]
│○ ${prefix}blurple2 [reply image/stiker]
│○ ${prefix}wasted [reply image/stiker]
│○ ${prefix}passed [reply image/stiker]
│○ ${prefix}triggered [reply image/stiker]
│○ ${prefix}comrade [reply image/stiker]
│○ ${prefix}greyscale [reply image/stiker]
│○ ${prefix}threshold [reply image/stiker]
│○ ${prefix}brightness [reply image/stiker]
╰❒ ${prefix}invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`╭─❒ 「 Download 」 
│○ ${prefix}tiktok [link]
│○ ${prefix}tiktoknowm [link]
│○ ${prefix}tiktokwm [link]
│○ ${prefix}tiktokaudio [link]
│○ ${prefix}ytdl [link]
│○ ${prefix}play [query]
│○ ${prefix}ytmp3 [link]
│○ ${prefix}ytshortmp3 [link]
│○ ${prefix}ytmp4 [link]
│○ ${prefix}ytshorts [link]
│○ ${prefix}facebook [link]
│○ ${prefix}facebooksd [link]
│○ ${prefix}facebookhd [link]
│○ ${prefix}fbaudio [link]
│○ ${prefix}igstory [username]
│○ ${prefix}igdl [link]
│○ ${prefix}igphoto [link]
│○ ${prefix}igvideo [link]
│○ ${prefix}igreels [link]
│○ ${prefix}igtv [link]
│○ ${prefix}soundcloud [link]
│○ ${prefix}gitclone [link repo]
│○ ${prefix}gitrepo [username repo branch]
│○ ${prefix}mediafire [link]
│○ ${prefix}nhentaipdf [id]
╰❒ ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`╭─❒ 「 Random Anime 」
│○ ${prefix}loli
│○ ${prefix}neko
│○ ${prefix}waifu
│○ ${prefix}shinobu
│○ ${prefix}megumin
│○ ${prefix}bully
│○ ${prefix}cuddle
│○ ${prefix}cry
│○ ${prefix}hug
│○ ${prefix}awoo
│○ ${prefix}kiss
│○ ${prefix}lick
│○ ${prefix}pat
│○ ${prefix}smug
│○ ${prefix}bonk
│○ ${prefix}yeet
│○ ${prefix}blush
│○ ${prefix}smile
│○ ${prefix}wave
│○ ${prefix}highfive
│○ ${prefix}handhold
│○ ${prefix}nom
│○ ${prefix}bite
│○ ${prefix}glomp
│○ ${prefix}slap
│○ ${prefix}kill
│○ ${prefix}happy
│○ ${prefix}wink
│○ ${prefix}poke
│○ ${prefix}dance
╰❒ ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`╭─❒ 「 Nsfw & Sfw 」
│○ ${prefix}ahegao
│○ ${prefix}anal
│○ ${prefix}avatar2
│○ ${prefix}baka
│○ ${prefix}bdsm
│○ ${prefix}bj
│○ ${prefix}blowjob
│○ ${prefix}boobs
│○ ${prefix}classic
│○ ${prefix}cuckold
│○ ${prefix}cuddle
│○ ${prefix}cum
│○ ${prefix}cumarts
│○ ${prefix}cumsluts
│○ ${prefix}ero
│○ ${prefix}erofeet
│○ ${prefix}erokemonomimi
│○ ${prefix}erokitsune
│○ ${prefix}eroneko
│○ ${prefix}eroyuri
│○ ${prefix}feed
│○ ${prefix}feet
│○ ${prefix}feetgif
│○ ${prefix}femdom
│○ ${prefix}foot
│○ ${prefix}foxgirl
│○ ${prefix}futanari
│○ ${prefix}gangbang
│○ ${prefix}girl-solo
│○ ${prefix}girl-solo-gif
│○ ${prefix}glasses
│○ ${prefix}hentai
│○ ${prefix}hentai
│○ ${prefix}hentai-gif
│○ ${prefix}holo
│○ ${prefix}holo2
│○ ${prefix}holoero
│○ ${prefix}hug
│○ ${prefix}jahy
│○ ${prefix}kemonomimi
│○ ${prefix}kemonomimi2
│○ ${prefix}keta
│○ ${prefix}kiss
│○ ${prefix}kitsune
│○ ${prefix}kuni
│○ ${prefix}lesbian
│○ ${prefix}lizard
│○ ${prefix}masturbation
│○ ${prefix}meowi
│○ ${prefix}neko
│○ ${prefix}neko-gif
│○ ${prefix}neko-sfw
│○ ${prefix}neko2
│○ ${prefix}nsfw-neko
│○ ${prefix}orgy
│○ ${prefix}panties
│○ ${prefix}pat
│○ ${prefix}poke
│○ ${prefix}pussyart
│○ ${prefix}pussywankgif
│○ ${prefix}slap
│○ ${prefix}smug
│○ ${prefix}spank
│○ ${prefix}tentacles
│○ ${prefix}thighs
│○ ${prefix}tickle
│○ ${prefix}tits
│○ ${prefix}trap
│○ ${prefix}woof
│○ ${prefix}yuri
╰❒ ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`╭─❒ 「 Textpro Menu 」
│○ ${prefix}halloween2 text|text2
│○ ${prefix}horror text|text2
│○ ${prefix}game8bit text|text2
│○ ${prefix}layered text|text2
│○ ${prefix}glitch2 text|text2
│○ ${prefix}cool-graffiti text|text2
│○ ${prefix}cool-wall-graffiti text|text2
│○ ${prefix}realistic text|text2
│○ ${prefix}space3d text|text2
│○ ${prefix}glitch-tiktok text|text2
│○ ${prefix}stone text|text2
│○ ${prefix}marvel text|text2
│○ ${prefix}marvel2 text|text2
│○ ${prefix}pornhub text|text2
│○ ${prefix}avengers text|text2
│○ ${prefix}metal-rainbow text|text2
│○ ${prefix}metal-gold text|text2
│○ ${prefix}metal-galaxy text|text2
│○ ${prefix}halloween2 text|text2
│○ ${prefix}lion text|text2
│○ ${prefix}wolf-black-white text|text2
│○ ${prefix}wolf-galaxy text|text2
│○ ${prefix}ninja text|text2
│○ ${prefix}3dsteel text|text2
│○ ${prefix}horror2 text|text2
│○ ${prefix}lava text|text2
│○ ${prefix}bagel text|text2
│○ ${prefix}blackpink text
│○ ${prefix}rainbow2 text
│○ ${prefix}water-pipe text
│○ ${prefix}halloween text
│○ ${prefix}sketch text
│○ ${prefix}sircuit text
│○ ${prefix}discovery text
│○ ${prefix}metallic2 text
│○ ${prefix}fiction text
│○ ${prefix}demon text
│○ ${prefix}transformer text
│○ ${prefix}berry text
│○ ${prefix}thunder text
│○ ${prefix}magma text
│○ ${prefix}3dstone text
│○ ${prefix}neon text
│○ ${prefix}glitch text
│○ ${prefix}harry-potter text
│○ ${prefix}embossed text
│○ ${prefix}broken text
│○ ${prefix}papercut text
│○ ${prefix}gradient text
│○ ${prefix}glossy text
│○ ${prefix}watercolor text
│○ ${prefix}multicolor text
│○ ${prefix}neon-devil text
│○ ${prefix}underwater text
│○ ${prefix}bear text
│○ ${prefix}wonderful-graffiti text
│○ ${prefix}christmas text
│○ ${prefix}neon-light text
│○ ${prefix}snow text
│○ ${prefix}cloudsky text
│○ ${prefix}luxury2 text
│○ ${prefix}gradient2 text
│○ ${prefix}summer text
│○ ${prefix}writing text
│○ ${prefix}engraved text
│○ ${prefix}summery text
│○ ${prefix}3dglue text
│○ ${prefix}metaldark text
│○ ${prefix}neonlight text
│○ ${prefix}oscar text
│○ ${prefix}minion text
│○ ${prefix}holographic text
│○ ${prefix}purple text
│○ ${prefix}glossy-blue text
│○ ${prefix}deluxe-gold text
│○ ${prefix}glossy-carbon text
│○ ${prefix}fabric text
│○ ${prefix}neonc text
│○ ${prefix}newyear text
│○ ${prefix}newyear2 text
│○ ${prefix}metal-silver text
│○ ${prefix}xmas text
│○ ${prefix}blood text
│○ ${prefix}dark-gold text
│○ ${prefix}joker text
│○ ${prefix}wicker text
│○ ${prefix}natural text
│○ ${prefix}firework text
│○ ${prefix}skeleton text
│○ ${prefix}red-balloon text
│○ ${prefix}purple-balloon text
│○ ${prefix}pink-balloon text
│○ ${prefix}green-balloon text
│○ ${prefix}cyan-balloon text
│○ ${prefix}blue-balloon text
│○ ${prefix}gold-balloon text
│○ ${prefix}steel text
│○ ${prefix}gloss text
│○ ${prefix}denim text
│○ ${prefix}decorate text
│○ ${prefix}decorate-purple text
│○ ${prefix}peridot text
│○ ${prefix}rock text
│○ ${prefix}yellow-glass text
│○ ${prefix}purple-glass text
│○ ${prefix}orange-glass text
│○ ${prefix}green-glass text
│○ ${prefix}cyan-glass text
│○ ${prefix}blue-glass text
│○ ${prefix}red-glass text
│○ ${prefix}purple-shiny-glass text
│○ ${prefix}captain-as2 text
│○ ${prefix}robot text
│○ ${prefix}equalizer text
│○ ${prefix}toxic text
│○ ${prefix}pink-sparkling text
│○ ${prefix}blue-sparkling text
│○ ${prefix}green-sparkling text
│○ ${prefix}purple-sparkling text
│○ ${prefix}gold-sparkling text
│○ ${prefix}red-sparkling text
│○ ${prefix}cyan-sparkling text
│○ ${prefix}decorative text
│○ ${prefix}chocolate text
│○ ${prefix}strawberry text
│○ ${prefix}koifish text
│○ ${prefix}bread text
│○ ${prefix}matrix text
│○ ${prefix}blood2 text
│○ ${prefix}neonligth2 text
│○ ${prefix}thunder2 text
│○ ${prefix}3dbox text
│○ ${prefix}neon2 text
│○ ${prefix}road-warning text
│○ ${prefix}bokeh text
│○ ${prefix}green-neon text
│○ ${prefix}advanced text
│○ ${prefix}dropwater text
│○ ${prefix}wall text
│○ ${prefix}chrismast text
│○ ${prefix}honey2 text
│○ ${prefix}drug text
│○ ${prefix}marble text
│○ ${prefix}marble2 text
│○ ${prefix}ice text
│○ ${prefix}juice text
│○ ${prefix}rusty text
│○ ${prefix}abstra text
│○ ${prefix}biscuit text
│○ ${prefix}wood text
│○ ${prefix}scifi text
│○ ${prefix}metal-rainbow text
│○ ${prefix}metal-rose-gold text
│○ ${prefix}purple-gem text
│○ ${prefix}shiny text 
│○ ${prefix}yellow-jewelry text
│○ ${prefix}silver-jewelry text
│○ ${prefix}red-jewelry text
│○ ${prefix}purple-jewelry text
│○ ${prefix}orange-jewelry text
│○ ${prefix}green-jewelry text
│○ ${prefix}cyan-jewelry text
│○ ${prefix}blue-jewelry text
│○ ${prefix}hot-metal text
│○ ${prefix}golden text
│○ ${prefix}blue-glitter text
│○ ${prefix}purple-glitter text
│○ ${prefix}pink-glitter text
│○ ${prefix}green-glitter text
│○ ${prefix}silver-glitter text
│○ ${prefix}gold-glitter text
│○ ${prefix}bronze-glitter text
│○ ${prefix}eroded-metal text
│○ ${prefix}carbon text
│○ ${prefix}candy text
│○ ${prefix}blue-metal text
│○ ${prefix}blue-gem text
│○ ${prefix}3dchrome text
│○ ${prefix}black-metal text
╰❒ ${prefix}metal-gold text
`
}


exports.other = (prefix) =>{
return`╭─❒ 「 Others 」
│○ ${prefix}ttp [text]
│○ ${prefix}attp [text]
│○ ${prefix}afk [reason]
│○ ${prefix}translate kode_bahasa text
│○ ${prefix}kalkulator [query]
│○ ${prefix}smeme [text]
│○ ${prefix}smeme2 [text|text]
╰❒ ${prefix}memegen [text|text]
`
}
exports.game = (prefix) =>{
return`╭─❒ 「 Game Menu 」
│○ ${prefix}tembak
│○ ${prefix}tolak
│○ ${prefix}terima
│○ ${prefix}putusin
│○ ${prefix}ikhlasin
│○ ${prefix}cekpacar
│○ ${prefix}kuismath
│○ ${prefix}tebakgambar
│○ ${prefix}tebakkata
│○ ${prefix}tebakbendera
│○ ${prefix}tebakkalimat
│○ ${prefix}tebaksiapa
│○ ${prefix}tebakkabupaten
│○ ${prefix}tebakkimia
│○ ${prefix}tebaklirik
│○ ${prefix}tebaktebakan
│○ ${prefix}tekateki
│○ ${prefix}susunkata
╰❒ ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`╭─❒ 「 Asupan Menu 」
│○ ${prefix}chika
│○ ${prefix}delvira
│○ ${prefix}ayu
│○ ${prefix}bunga
│○ ${prefix}aura
│○ ${prefix}nisa
│○ ${prefix}ziva
│○ ${prefix}yana
│○ ${prefix}viona
│○ ${prefix}syania
│○ ${prefix}riri
│○ ${prefix}syifa
│○ ${prefix}mama_gina
│○ ${prefix}alcakenya
│○ ${prefix}mangayutri
│○ ${prefix}rikagusriani
│○ ${prefix}asupan
│○ ${prefix}bocil
│○ ${prefix}geayubi
│○ ${prefix}santuy
│○ ${prefix}ukhty
╰❒ ${prefix}syifa
`
}
exports.cecan = (prefix) =>{
return`╭─❒ 「 Random Cewe 」
│○ ${prefix}china 
│○ ${prefix}indonesia 
│○ ${prefix}malaysia 
│○ ${prefix}thailand 
│○ ${prefix}korea 
│○ ${prefix}japan 
│○ ${prefix}vietnam 
│○ ${prefix}jenni 
│○ ${prefix}jiso 
│○ ${prefix}lisa  
╰❒ ${prefix}rose
`
}

exports.tqto = () =>{
	return`╭─❒ 「 TqTo 」 
│○ My God
│○ My Parents
│○ Fatih A.
│○ Ferdiz
│○ DikaArdnt
│○ Mhankbarbar
│○ Nurutomo
│○ ZeeoneOfc
│○ Penyedia Module
╰❒ And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`╭─❒ 「 Primbon 」
│○ ${prefix}nomorhoki 887435047326
│○ ${prefix}artimimpi [query]
│○ ${prefix}artinama [query]
│○ ${prefix}ramaljodoh
│○ ${prefix}ramaljodohbali
│○ ${prefix}suamiistri
│○ ${prefix}ramalcinta
│○ ${prefix}cocoknama
│○ ${prefix}pasangan
│○ ${prefix}jadiannikah
│○ ${prefix}sifatusaha
│○ ${prefix}rezeki
│○ ${prefix}pekerjaan
│○ ${prefix}nasib
│○ ${prefix}penyakit
│○ ${prefix}tarot
│○ ${prefix}fengshui
│○ ${prefix}haribaik
│○ ${prefix}harisangar
│○ ${prefix}harisial
│○ ${prefix}nagahari
│○ ${prefix}arahrezeki
│○ ${prefix}peruntungan
│○ ${prefix}weton
│○ ${prefix}karakter
│○ ${prefix}keberuntungan
│○ ${prefix}memancing
│○ ${prefix}masasubur
│○ ${prefix}zodiak 
╰❒ ${prefix}shio [query]
`
}

exports.stcmenu = (prefix) =>{
	return`╭─❒ 「 Telegram Sticker 」
│○ ${prefix}awoawo
│○ ${prefix}benedict
│○ ${prefix}chat
│○ ${prefix}dbfly
│○ ${prefix}dino_kuning
│○ ${prefix}doge
│○ ${prefix}gojosatoru
│○ ${prefix}hope_boy
│○ ${prefix}jisoo
│○ ${prefix}kr_robot
│○ ${prefix}kucing
│○ ${prefix}lonte
│○ ${prefix}manusia_lidi
│○ ${prefix}menjamet
│○ ${prefix}meow
│○ ${prefix}nicholas
│○ ${prefix}patrick
│○ ${prefix}popoci
│○ ${prefix}sponsbob
│○ ${prefix}kawan_sponsbob
╰❒ ${prefix}tyni
`}

exports.ephotomenu = (prefix) =>{
	return`╭─❒ 「 Ephoto360 Menu 」
│○ ${prefix}1917text
│○ ${prefix}angelwing
│○ ${prefix}announofwin
│○ ${prefix}birthdaycake
│○ ${prefix}capercut
│○ ${prefix}cardhalloween
│○ ${prefix}cartoonstyle
│○ ${prefix}christmascard 
│○ ${prefix}christmasseason
│○ ${prefix}covergamepubg
│○ ${prefix}covergraffiti
│○ ${prefix}dragonfire
│○ ${prefix}embroider
│○ ${prefix}fabrictext
│○ ${prefix}facebookgold
│○ ${prefix}facebooksilver
│○ ${prefix}funnyanimations
│○ ${prefix}funnyhalloween
│○ ${prefix}galaxybat
│○ ${prefix}galaxywallpaper
│○ ${prefix}generalexam 
│○ ${prefix}glowingtext
│○ ${prefix}graffiti3d
│○ ${prefix}graffititext
│○ ${prefix}graffititext2
│○ ${prefix}graffititext3
│○ ${prefix}greetingcardvideo 
│○ ${prefix}halloweenbats
│○ ${prefix}heartcup
│○ ${prefix}heartflashlight
│○ ${prefix}horrorletter
│○ ${prefix}icetext
│○ ${prefix}instagramgold
│○ ${prefix}instagramsilver
│○ ${prefix}lightningpubg
│○ ${prefix}lovecard
│○ ${prefix}lovelycute
│○ ${prefix}masteryavatar
│○ ${prefix}merrycard
│○ ${prefix}messagecoffee
│○ ${prefix}metalstar
│○ ${prefix}milkcake
│○ ${prefix}moderngold
│○ ${prefix}moderngold2
│○ ${prefix}moderngold3
│○ ${prefix}moderngoldsilver
│○ ${prefix}multicolor
│○ ${prefix}nameonheart
│○ ${prefix}noeltext
│○ ${prefix}projectyasuo
│○ ${prefix}pubgbirthday
│○ ${prefix}pubgglicthvideo 
│○ ${prefix}pubgmascotlogo
│○ ${prefix}puppycute
│○ ${prefix}realembroidery
│○ ${prefix}retrotext
│○ ${prefix}rosebirthday
│○ ${prefix}shirtclub
│○ ${prefix}snowontext
│○ ${prefix}starsnight
│○ ${prefix}summerbeach
│○ ${prefix}sunglightshadow
│○ ${prefix}textcakes
│○ ${prefix}texthalloween
│○ ${prefix}textonglass
│○ ${prefix}textsky
│○ ${prefix}thundertext
│○ ${prefix}twittergold
│○ ${prefix}twittersilver
│○ ${prefix}viettel
│○ ${prefix}vintagetelevision
│○ ${prefix}watercolor2
│○ ${prefix}womansday
│○ ${prefix}writeblood
│○ ${prefix}writegalaxy
│○ ${prefix}writehorror
│○ ${prefix}youtubegold
│○ ${prefix}youtubesilver
╰❒ ${prefix}zombie3d`
}

exports.logomenu = (prefix) =>{
	return`╭─❒ 「 Logo Menu 」
│○ ${prefix}anonymous2
│○ ${prefix}astronotspace
│○ ${prefix}avatar3q360
│○ ${prefix}avatarff
│○ ${prefix}avatarleagueofking
│○ ${prefix}avatarlolbyname
│○ ${prefix}avataroverwatch
│○ ${prefix}bannerofaov
│○ ${prefix}bannerofaov2
│○ ${prefix}bannerofapex
│○ ${prefix}banneroffreefire
│○ ${prefix}banneroflol
│○ ${prefix}bannerofoverwatch
│○ ${prefix}bannerofpubg
│○ ${prefix}bannerytcsgo
│○ ${prefix}beautifulgalaxylol
│○ ${prefix}beautifulshimmering
│○ ${prefix}blueneon
│○ ${prefix}circlemarcotteam
│○ ${prefix}colorfulpubg
│○ ${prefix}companylogo
│○ ${prefix}companylogo2
│○ ${prefix}coverbannerlol
│○ ${prefix}coverdota2
│○ ${prefix}coverfblol
│○ ${prefix}coverfreefirefb
│○ ${prefix}coverleagueofking
│○ ${prefix}coverloknew
│○ ${prefix}coverofwarface
│○ ${prefix}coveronepiecefb
│○ ${prefix}crossfirecover
│○ ${prefix}crossfirestyle
│○ ${prefix}csgocover
│○ ${prefix}cutegirlgamer
│○ ${prefix}cyberhunterfb
│○ ${prefix}dragonballfb
│○ ${prefix}effect3donbeach
│○ ${prefix}elegantrotation
│○ ${prefix}fbgamepubgcover
│○ ${prefix}footballteam
│○ ${prefix}gaminglogo4fvs
│○ ${prefix}gamingmascot
│○ ${prefix}gradientlogo
│○ ${prefix}gunlogogaming
│○ ${prefix}introvideomaker
│○ ${prefix}letterlogos 
│○ ${prefix}logoaccording 
│○ ${prefix}logogamingassasin 
│○ ${prefix}lolcoverbyname 
│○ ${prefix}lolpentakill 
│○ ${prefix}lolwallpaper 
│○ ${prefix}maketeamlogo 
│○ ${prefix}mascotstyle 
│○ ${prefix}metalmascot 
│○ ${prefix}newlolavatar 
│○ ${prefix}overwatchcover 
│○ ${prefix}overwatchwallpaper 
│○ ${prefix}pencilsketch 
│○ ${prefix}pubgcutelogo 
│○ ${prefix}pubglogomaker 
│○ ${prefix}rovwallpaper 
│○ ${prefix}rovwallpaperhd 
│○ ${prefix}teamlogo 
│○ ${prefix}wallpaperaov 
╰❒ ${prefix}wallpaperml 
`
}

exports.islammenu = (prefix) =>{
	return`╭─❒ 「 Islamic Menu 」
│○ ${prefix}asmaulhusna
│○ ${prefix}kisahnabi [nabi]
│○ ${prefix}jadwalshalat [daerah]
│○ ${prefix}randomquran
│○ ${prefix}randomquran2
│○ ${prefix}listsurah
│○ ${prefix}tafsirsurah [surah]
╰❒ ${prefix}alquranaudio [surah|ayat]
`
}
exports.anonchat = (prefix) =>{
	return`╭─❒ 「 Anonymous 」
│○ ${prefix}menfess
│○ ${prefix}confess
│○ ${prefix}balasmenfess
│○ ${prefix}tolakmenfess
│○ ${prefix}stopmenfess
│○ ${prefix}anonymous 
│○ ${prefix}start
│○ ${prefix}skip [daerah]
╰❒ ${prefix}stop [surah|ayat]
`
}

exports.storemenu = (prefix) =>{
	return`╭─❒ 「 Store Menu 」
│○ ${prefix}list
│○ ${prefix}addlist [key|respond]
│○ ${prefix}dellist [key]
│○ ${prefix}update [key|respond]
│○ ${prefix}store
│○ ${prefix}kali
│○ ${prefix}bagi
│○ ${prefix}tambah
│○ ${prefix}kurang
│○ ${prefix}kalkulator
│○ ${prefix}setproses
│○ ${prefix}updateproses
│○ ${prefix}cekproses
│○ ${prefix}delproses
│○ ${prefix}setdone
│○ ${prefix}updatedone
│○ ${prefix}cekdone
│○ ${prefix}deldone
│○ ${prefix}pay
│○ ${prefix}setcaptionpay
│○ ${prefix}setpaysewa
│○ proses
╰❒ done
`
}

exports.voiceChange = (prefix) =>{
	return`╭─❒ 「 Voice Change Menu 」
│○ ${prefix}bass
│○ ${prefix}blown
│○ ${prefix}deep
│○ ${prefix}earrape
│○ ${prefix}fast
│○ ${prefix}fat
│○ ${prefix}nightcore
│○ ${prefix}reverse
│○ ${prefix}robot
│○ ${prefix}slow
│○ ${prefix}smooth
╰❒ ${prefix}tupai
`
}
exports.storagemenu = (prefix) =>{
	return`╭─❒ 「 Storage Menu 」
│○ ${prefix}addvn
│○ ${prefix}listvn
│○ ${prefix}delvn
│○ ${prefix}adddocument
│○ ${prefix}listdocument
│○ ${prefix}deldocument
│○ ${prefix}addtext
│○ ${prefix}listtext
│○ ${prefix}deltext
│○ ${prefix}addaudio
│○ ${prefix}listaudio
│○ ${prefix}delaudio
│○ ${prefix}addimage
│○ ${prefix}listimage
│○ ${prefix}delimage
│○ ${prefix}addvideo
│○ ${prefix}listvideo
│○ ${prefix}delvideo
│○ ${prefix}addstik
│○ ${prefix}delstik
╰❒ ${prefix}liststik
`
}

exports.rpgmenu = (prefix) =>{
	return`╭─❒ 「 Rpg Games 」
│○ ${prefix}adventure
│○ ${prefix}weekly
│○ ${prefix}use
│○ ${prefix}transfer
│○ ${prefix}slot
│○ ${prefix}shop
│○ ${prefix}profile
│○ ${prefix}pasar
│○ ${prefix}ojek
│○ ${prefix}open
│○ ${prefix}nguli
│○ ${prefix}narik
│○ ${prefix}nabung
│○ ${prefix}monthly
│○ ${prefix}mining
│○ ${prefix}merampok
│○ ${prefix}mancing
│○ ${prefix}kolam
│○ ${prefix}koboy
│○ ${prefix}kerja
│○ ${prefix}kandang
│○ ${prefix}levelup
│○ ${prefix}judi
│○ ${prefix}inventory
│○ ${prefix}hourly
│○ ${prefix}fishop
│○ ${prefix}feed
│○ ${prefix}duel
│○ ${prefix}daily
│○ ${prefix}craft
│○ ${prefix}cooldown
│○ ${prefix}cook
│○ ${prefix}collect
│○ ${prefix}chop
│○ ${prefix}casino
│○ ${prefix}buy
│○ ${prefix}bank 
│○ ${prefix}bansos
│○ ${prefix}berdagang
│○ ${prefix}berkebon
╰❒ ${prefix}build
`
}

exports.photooxy = (prefix)=>{
	return`╭─❒ 「 Photooxy Menu 」
│○ ${prefix}battlegrounds-logo
│○ ${prefix}battlefield4
│○ ${prefix}text-8bit
│○ ${prefix}typography-flower 
│○ ${prefix}under-flower 
│○ ${prefix}bevel-text 
│○ ${prefix}silk-text 
│○ ${prefix}sweet-andy 
│○ ${prefix}smoke-typography 
│○ ${prefix}carvedwood 
│○ ${prefix}scary-cemetery 
│○ ${prefix}royallook 
│○ ${prefix}coffeecup2 
│○ ${prefix}illuminated 
│○ ${prefix}harry-potter2 //
│○ ${prefix}woodblack //
│○ ${prefix}butterfly-reflection //
│○ ${prefix}watermelon // 
│○ ${prefix}striking // 
│○ ${prefix}metallicglow //
│○ ${prefix}rainbow-text 
│○ ${prefix}birthday-cake 
│○ ${prefix}embroidery // 
│○ ${prefix}crisp 
│○ ${prefix}flaming 
│○ ${prefix}furtext 
│○ ${prefix}nightsky 
│○ ${prefix}glow-rainbow 
│○ ${prefix}gradient-avatar 
│○ ${prefix}white-cube // 
│○ ${prefix}honey-text // 
│○ ${prefix}vintage-style //
│○ ${prefix}glowing-3d // 
│○ ${prefix}army-camouflage 
│○ ${prefix}graffiti-cover 
│○ ${prefix}rainbow-shine 
│○ ${prefix}smoky-neon 
│○ ${prefix}quotes-underfall //
│○ ${prefix}layered-leaves 
│○ ${prefix}vector-nature 
│○ ${prefix}yellow-rose 
│○ ${prefix}love-text 
│○ ${prefix}underwater-ocean 
│○ ${prefix}nature-text 
│○ ${prefix}wolf-metal 
│○ ${prefix}summer-text 
│○ ${prefix}wooden-board //
│○ ${prefix}flower-heart
│○ ${prefix}quote-wood 
│○ ${prefix}love-text 
│○ ${prefix}quotes-undergrass 
│○ ${prefix}naruto-banner 
│○ ${prefix}love-message 
│○ ${prefix}textoncup2 
│○ ${prefix}burn-paper 
│○ ${prefix}smoke 
│○ ${prefix}romantic-messages 
│○ ${prefix}shadow-sky 
│○ ${prefix}text-cup 
╰❒ ${prefix}coffecup
`
}
exports.soundmenu = (prefix) =>{
return`╭─❒ 「 Sound Menu 」
│○ ${prefix}sound1
│○ ${prefix}sound2
│○ ${prefix}sound3
│○ ${prefix}sound4
│○ ${prefix}sound5
│○ ${prefix}sound6
│○ ${prefix}sound7
│○ ${prefix}sound8
│○ ${prefix}sound9
│○ ${prefix}sound10
│○ ${prefix}sound11
│○ ${prefix}sound12
│○ ${prefix}sound13
│○ ${prefix}sound14
│○ ${prefix}sound15
│○ ${prefix}sound16
│○ ${prefix}sound17
│○ ${prefix}sound18 
│○ ${prefix}sound19
│○ ${prefix}sound20
│○ ${prefix}sound21
│○ ${prefix}sound22
│○ ${prefix}sound23
│○ ${prefix}sound24
│○ ${prefix}sound25
│○ ${prefix}sound26
│○ ${prefix}sound27
│○ ${prefix}sound28
│○ ${prefix}sound29
│○ ${prefix}sound30
│○ ${prefix}sound31
│○ ${prefix}sound32
│○ ${prefix}sound33
│○ ${prefix}sound34
│○ ${prefix}sound35
│○ ${prefix}sound36
│○ ${prefix}sound37
│○ ${prefix}sound38
│○ ${prefix}sound39
│○ ${prefix}sound40
│○ ${prefix}sound41
│○ ${prefix}sound42
│○ ${prefix}sound43
│○ ${prefix}sound44
│○ ${prefix}sound45
│○ ${prefix}sound46
│○ ${prefix}sound47
│○ ${prefix}sound48
│○ ${prefix}sound49
│○ ${prefix}sound50
│○ ${prefix}sound51
│○ ${prefix}sound52
│○ ${prefix}sound53
│○ ${prefix}sound54
│○ ${prefix}sound55
│○ ${prefix}sound56
│○ ${prefix}sound57
│○ ${prefix}sound58
│○ ${prefix}sound59
│○ ${prefix}sound60
│○ ${prefix}sound61
│○ ${prefix}sound62
│○ ${prefix}sound63
│○ ${prefix}sound64
│○ ${prefix}sound65
│○ ${prefix}sound66
│○ ${prefix}sound67
│○ ${prefix}sound68
│○ ${prefix}sound69
╰❒ ${prefix}sound70
`
}


