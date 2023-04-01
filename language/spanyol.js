exports.DelSetWel = `Éxito en la eliminación del conjunto bienvenido en este grupo`
exports.NoSetWel = `Todavía no hay set de bienvenida en este grupo`
exports.DelSetLeft = `Éxito eliminar establecer adiós en este grupo`
exports.NoSetLeft = `Todavía no hay un adiós establecido en este grupo.`
exports.doneSet = `ha sido cambiado antes`
exports.serverErr = `El servidor está caído`
exports.limitLu = (m) =>{
	return`Su límite restante : ${m} `
	}
	
exports.addstik = (a, b) =>{
	return`Lista ${a} con clave ${b} yes en la base de datos`
	}
exports.delstik = (a, b) =>{
	return`Lista ${a} con clave ${b} no existe en la base de datos`
	}
exports.profile = (username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, limit, registered, tanggal__, regTime,premium, msToDate , premiumDate, now, lastclaim) =>{
	return`📛 Nombre: ${username} (@${m.sender.split`@`[0]})${about ? '\n💌 Bio: ' + about : ''}
👨‍❤️‍👨 Estado: ${pasangan ? `Berpacaran @${pasangan.split`@`[0]}` : '-' }
#️⃣ Número: ${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}
🔗 Enlace: https://wa.me/${m.sender.split`@`[0]}
🤷‍♂️ XP: Total ${exp} (${exp - min} / ${xp}) [ ${math <= 0 ? `Ready to *${prefix}levelup*` : `${math} XP left to levelup`} ]
🎚️ Nivel: ${level}
🎢 Role: ${role}
📊 Límite: ${limit}
®️ Registered: ${registered ? '✅ (' + tanggal__(regTime) + ')': '❌'}
⛽ De primera calidad: ${premium ? `✅\n⏰ Prima vencida : msToDate(premiumDate - now)` : '❌'}
🛄 Last claim: ${lastclaim > 0 ? tanggal__(lastclaim) : ''}`
	}


exports.needReg = (a, b, c) =>{
	return`🇲🇨 Daftar dulu bang

Gini : #daftar nama|umur|gender|hobi
Contoh : #daftar ${a}|18|cowo|Game

🇺🇲 Please register first

Like this : #register name|age|gender|hobby
Example : #register ${a}|18|male|Games`
}
exports.Nolimit = (prefix) =>{
	return`Tu límite de hoy se ha agotado ⚠️\n\nPor favor compre un límite escribiendo ${prefix}buy o ${prefix}buyall`
	}
exports.Noseri = () =>{
	return`El número de serie (sn) es incorrecto\n.ceksn -- _check serial number_`
	}
exports.NoseriOk = () =>{
	return`Cancelar correctamente el registro!`
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
	return`Ya estás registrado en la base de datos`
	}
exports.UmurReg = () =>{
	return`La edad debe ser un número.`
	}
exports.NamaReg = () =>{
	return`Tu nombre es muy largo, solo usa tu primer nombre`
	}
exports.HobiReg = () =>{
	return`Tienes muchas aficiones, solo 1 o 2 aficiones`
	}
exports.RegReg = (a,b,c,d,e,f,g,h,i) =>{
	return`╭─「 *VERIFICACIÓN EXITOSA* 」
│\`\`\`Verificación exitosa con\`\`\` 
│
│\`\`\`SN: ${a}\`\`\`
│\`\`\`En : ${b}\`\`\`
│\`\`\`Nombre : ${c}\`\`\`
│\`\`\`Años : ${d}\`\`\`
│\`\`\`Género : ${e}\`\`\`
│\`\`\`Número : @${f}\`\`\`
│\`\`\`Para usar bots por favor \`\`\`
│\`\`\`Enviar pedidos ${g}menu\`\`\`
│\`\`\`o ${h}allmenu\`\`\`
│
│\`\`\`\Total : ${i} Users\`\`\`
╰─────────────────────`
	}
exports.genderReg = (a) =>{
	return`Seleccione uno ( male / female)\n\n${a}`
	}
exports.UmurXReg = () =>{
	return`Eres muy viejo`
	}
exports.firstChat = (a, b, c) =>{
	return`Hola ${a} ${b} 🤗, soy ${c} bots de whatsapp. Puedo ayudarte?`
	}
exports.AddstikOk = (q, a, b, prefix, command) =>{
	return`Se agregó correctamente ${q} a la base de datos ${a}\n\nCorregido por ${prefix}${b}`
	}
	
exports.AddstikOk_ = (a,b) =>{
	return`La duración de ${a} segundos, que es la duración máxima de ${b} que el bot puede guardar en la base de datos`
	}
exports.Addvn = () =>{
	return`Espera un minuto, intentaré subir este medio a la base de datos.`
	}
	
exports.ListStik = (a) =>{
	return`Para tomar ${a}, envíe un mensaje de acuerdo con la lista de ${a} anterior`
	}
exports.noAbsen = () =>{
return `❌ ¡No hay ausencias en este grupo!\n.absen -- mulai absen`
}
exports.StartAbsen = () =>{
	return`Empezar ausente`
	}
exports.DahAbsen = () =>{
	return`estas ausente`
	}
exports.DelAbsen = () =>{
	return`✅ Ausencias eliminadas con éxito en este grupo`
	}
exports.adaAbsen = () =>{
	return`Todavía hay sesiones ausentes en este grupo !`
	}
exports.SAbsen = () =>{
	return`Comienza la ausencia`
	}
//
exports.SetCmd = (prefix, command) =>{
	return`¡Pegatinas de respuesta!\nEjemplo : ${prefix + command} .menu\n\n\n*Nota: Debe ir acompañado de Prefijo!!*`
	}
exports.CmdApa = () =>{
	return`¿Para qué comandos?`
	}
exports.UCmd = () =>{
	return`No tienes permiso para modificar este pedido de pegatinas.`
	}
exports.HashCmd = () =>{
	return`sin hashes`
	}
exports.DelCmd = () =>{
	return`✅ Se eliminó la etiqueta cmd`
	}
exports.LockCmd = () =>{
	return`Mensaje de respuesta`
	}
exports.NoCmd = () =>{
	return`Hash no encontrado en la base de datos`
	}
exports.ReplyMsg = () =>{
	return`Mensaje de respuesta que desea guardar en la base de datos`
	}
exports.NoMsg = (prefix, command) =>{
	return`Ejemplo : ${prefix + command} Nombre del archivo`
	}
exports.AdMsg = (text) => {
    return `'${text}' registrado en la lista de mensajes`
}
exports.DoneMsg = (prefix, text) => {
    return `Mensaje agregado con éxito en la lista de mensajes como '${text}'
    
Acceso con ${prefix}getmsg ${text}
Ver lista de mensajes con ${prefix}listmsg`
}
exports.GetMsg = (prefix, command) => {
    return `Ejemplo : ${prefix + command} file name\n\nVer lista de mensajes con ${prefix}listmsg`
}
exports.NoInMsg = (text) => {
    return `'${text}' no aparece en la lista de mensajes`
}
exports.DelMsg = (text) => {
    return `Se eliminó con éxito '${text}' de la lista de mensajes`
}

exports.OnBef = () => {
    return `Ha sido activado antes`
}
exports.OffYaBef = () => {
    return `Ha sido desactivado antes`
}
exports.OkOn = (command) => {
    return `${command} ¡Activado con éxito!`
}
exports.OffBef = (command) => {
    return `${command} ¡Deshabilitado con éxito!`
}
exports.OkMute = () => {
    return `El bot ha sido silenciado en este grupo`
}
exports.OkUnMute = () => {
    return `Bot tuvo éxito en UnMute`
}
exports.OkUnBanC = () => {
    return `El bot desbaneó con éxito el chat`
}
exports.NoMute = () => {
    return `El bot no ha sido baneado en este grupo`
}

exports.NoMsgBot = () => {
    return `¡El mensaje no fue enviado por un bot!`
}
exports.ToimgErr = () => {
    return `Lo siento, actualmente no es compatible con Gif Pegatina`
}
exports.NoToImg = (prefix, command) => {
    return `Pegatina de respuesta con subtítulo *${prefix + command}*`
}
exports.BotPublic = () => {
    return `Cambio exitoso al modo público`
}
exports.BotSelf = () => {
    return `Cambio exitoso al modo propio\n\nPara cambiar al modo público, use el número de bot`
}
exports.NoToStik = (prefix, command) => {
    return `Enviar/Responder imagen/video con subtítulo ${prefix + command}\n\nDuración de la etiqueta de video 1-9 segundos`
}
exports.NoPpBot = (prefix, command) => {
    return `Enviar/Responder imagen con título ${prefix + command}`
}
exports.ToAud = (prefix, command) => {
    return `Enviar/responder video/audio que desea usar como audio con subtítulos ${prefix + command}`
}
exports.ToMp3 = (prefix, command) => {
    return `Enviar/responder video/audio que desea convertir a MP3 con subtítulos ${prefix + command}`
}
exports.ToVn= (prefix, command) => {
    return `Responder video/audio que desea ser VN con subtítulos ${prefix + command}`
}
exports.NoQouted = () => {
    return `El mensaje al que respondió no contiene una respuesta`
}
exports.SetGcName = (prefix, command) => {
    return `Enviar comando ${prefix + command} *texto*`
}
exports.SetPpGc = (prefix, command) => {
    return `Enviar/Responder imagen con título ${prefix + command}`
}
exports.JoinGc = () => {
    return `Introduce el enlace del grupo!`
}
exports.MauKick = () => {
    return `Envía el número objetivo/etiqueta/respuesta que quieres patear !`
}
exports.MauAdd = () => {
    return `¡Envíe el número objetivo/etiqueta/respuesta que desea agregar!`
}
exports.NakPm= () => {
    return `¡Envíe el número objetivo/etiqueta/respuesta que desea promocionar!`
}
exports.NakDm = () => {
    return `¡Envíe el número objetivo/etiqueta/respuesta que desea degradar!`
}
exports.Family = () => {
    return `¡Esta pregunta no ha terminado!`
}
exports.NoWm = (prefix, command) => {
    return `Enviar comando ${prefix + command} packname|author`
}
exports.DoneExif = (packname, author) => {
    return `Exif convertido con éxito a\n\nPackname : ${packname}\nAuthor : ${author}`
}
exports.NoTeksOne = (prefix, command) => {
    return `Enviar comando ${prefix + command} *texto*\n\nEjemplo : ${prefix + command} Robot de Whatsapp`
}
exports.NoTeksTwo = (prefix, command) => {
    return `Enviar comando ${prefix + command} *texto 1|texto 2*\n\nEjemplo : ${prefix + command} WhatsApp|bot`
}
exports.OffNsfw = () => {
    return `Fitur nsfw belum di aktifkan`
}
exports.CoverBanLol = (prefix, command) => {
    return `Ejemplo: ${prefix + command} nombre|heroes\nEjemplo: ${prefix + command} zeeone|jinx7`
}
exports.coverbannerlol = (style) => {
    return `*Los héroes que ingresaste están equivocados*\n\n_Aquí hay una lista de los héroes correctos, Total_ *${style}* _heroes_\n\n`
}
exports.pubglogomaker = (prefix, command) => {
    return `Ejemplo: ${prefix + command} nombre|style\n Ejemplo: ${prefix + command} zeeone|women`
}
exports.pubglogomaker_ = (style) => {
    return `*El estilo que ingresaste es incorrecto*\n\n_Aquí hay una lista de los estilos correctos, Total_ *${style}* _style_\n\n`
}
exports.colorfulpubg = (prefix, command) => {
    return `Ejemplo: ${prefix + command} nombre|color\nEjemplo: ${prefix + command} zeeone|gold`
}
exports.colorfulpubg_ = (style) => {
    return `*El color que ingresaste es incorrecto*\n\n_Aquí hay una lista de los colores correctos, Total_ *${style}* _color_\n\n`
}
exports.astronotspace = (prefix, command) => {
    return `Ejemplo: ${prefix + command} nombre|style\nEjemplos de uso: ${prefix + command} zeeone|anubis`
}
exports.wallpaperaov = (prefix, command) => {
    return `Ejemplo: ${prefix + command} nombre|heroes\nEjemplos de uso: ${prefix + command} zeeone|allain`
}
exports.maketeamlogo = (style, style2, prefix, command) => {
    return `Ejemplo: ${prefix + command} nombre|${style}\nEjemplos de uso: ${prefix + command} zeeone|${style2}`
}

exports.MaketeamlogoT = (a, b, c, d, e, f, g, h) => {
    return `Ejemplo: ${g + h} ${a}|${b}|${c}\nEjemplos de uso: ${g + h} ${e}|${f}|${d}`
}
exports.maketeamlogo_ = (style, style2) => {
    return `*${style2} lo que ingresaste esta mal*\n\n_Aquí hay una lista ${style2} Así es, total_ *${style}* _${style2}_\n\n`
}

exports.KisahNabi = (prefix, command, style, style2 = "query") => {
    return `Enviar pedidos: \n${prefix + command} ${style2}\n\nEjemplos de uso:\n${prefix + command} ${style}`
}
exports.quran2 = (prefix, command, juz , brp) => {
    return `Ejemplo : ${prefix + command} ${juz}\nEjemplos de uso: ${prefix + command} ${brp}`
}

exports.quran3 = (prefix, command, surah , ayat, brp, brp2) => {
return`Ejemplo : ${prefix + command} ${surah}|${ayat}\nEjemplos de uso: ${prefix + command} ${brp}|${brp2}`
}

exports.JwbErr = () => {
    return `❌ Respuesta incorrecta`
}

exports.JwbTrue = (tebak, exp) => {
return`🎮 ${tebak} 🎮\n\nRespuesta correcta 🎉\n+${exp} XP`
}
exports.TbGam = () => {
    return `Adivina la foto`
}
exports.TbKa = () => {
    return `Adivina la palabra`
}
exports.TbBe = () => {
    return `Adivina la bandera`
}
exports.TbCak = () => {
    return `Cak Lontong`
}
exports.TbSu = () => {
    return `Organizar palabras`
}
exports.TbAt = () => {
    return `Adivina la frase`
}
exports.TbSi = () => {
    return `Adivina quién`
}
exports.Tbte = () => {
    return `Rompecabezas`
}
exports.TbEn = () => {
    return `Adivina el Distrito`
}
exports.TbKi = () => {
    return `Supongo que la química`
}
exports.TbLi = () => {
    return `Adivina la letra`
}
exports.TbKan = () => {
    return `Adivinanzas`
}

exports.TbFamily = (soal, jawaban, find) => {
    return `*Responde las siguientes preguntas :*\n${soal}\n\nHay *${jawaban}* Responder ${find}`
}

exports.TbAfk = (nama, afk) => {
    return `${nama} tiene afk con razon ${afk ? ': ' + afk : 'Nada'}`
}

exports.TbGambar = (desk, time, exp) => {
    return `Por favor responda la pregunta anterior\n\nDescripción : ${desk}\nTiempo : ${time} segundos\nRecompensas : ${exp} XP`
}
exports.TbGambar_ = (jawaban) => {
    return `Tiempo de espera\nRespuesta:  ${jawaban}`
}
exports.TbGambar__ = (jawaban, desk) => {
    return `Tiempo de espera\nRespuesta:  ${jawaban}}\nDescripción : ${desk}`
}
exports.TbKata = (soal, time, exp) => {
    return `Por favor, conteste a las siguientes preguntas\n\n${soal}\nTiempo : ${time} segundos\nRecompensas : ${exp} XP`
}
exports.TbBendera = (time, exp) => {
    return `Por favor responda la pregunta anterior\n\nTiempo : ${time} segundos\nRecompensas : ${exp} XP`
}
exports.TbKabupaten = (time, exp) => {
    return `La imagen de arriba es una imagen del distrito.?\nTiempo : ${time} segundos\nRecompensas : ${exp} XP`
}
exports.TbKimia = (soal, time, exp) => {
    return `que significa el simbolo : *${soal}*?\nTiempo : ${time} segundos\nRecompensas : ${exp} XP`
}
exports.TbLirik = (soal, time, exp) => {
    return `esta es la letra de la cancion? : *${soal}*?\nTiempo : ${time} segundos\nRecompensas : ${exp} XP`
}
exports.TbSusun = (soal, tipe, time, exp) => {
    return `*Responde las siguientes preguntas :*\nPregunta : ${soal}\nEscribe : ${tipe}\nTiempo : ${time} segundos\nRecompensas : ${exp} XP`
}
exports.TbMath = (modes, prefix, command) => {
    return `Modo: ${modes}\nEjemplos de uso: ${prefix + command} medium`
}
exports.TbMath_ = (soal, time) => {
    return `*¿Cuál es el resultado de: ${soal}*?\n\nTiempo: ${time} segundo`
}
exports.TbJail = (prefix, command) => {
    return `Enviar/responder foto/pegatina con leyenda ${prefix + command}`
}
exports.TbRepo = (prefix, command) => {
    return `Enviar comando ${prefix + command} *user* *repo* *branch*\n\nEjemplos de uso: ${prefix + command} *zeeone-ofc* *Alphabot-Md* *v12*`
}
exports.StalkIg = () => {
    return `Introduzca su nombre de usuario`
}
exports.Tomp4 = (prefix, command) => {
    return `Responder pegatina gif con subtítulo ${prefix + command}`
}
exports.Tourl = (prefix, command) => {
    return `Enviar/Responder medios con subtítulos ${prefix + command}`
}
exports.Smeme = (prefix, command) => {
    return `Enviar/Responder foto con leyenda ${prefix + command} *teks*`
}
exports.Smeme_ = (prefix, command) => {
    return `Enviar/Responder foto con leyenda ${prefix + command} *teks|tesk2*`
}
exports.Bcall = (anu, time, chat) => {
    return `Enviar difusión a ${anu} ${chat}\nSe acabó el tiempo ${time * 1.5} detik`
}
exports.Stag = (prefix, command) => {
    return `Pegatina de respuesta con subtítulo ${prefix + command}`
}
exports.Vtag = (prefix, command, video) => {
    return `Enviar respuesta ${video} con subtítulo ${prefix + command}`
}
exports.TrLate = (prefix, command) => {
    return `Ejemplo :

1. Enviar pedidos ${prefix + command} *Código de lenguaje* *texto*
	• Ejemplo : ${prefix + command} id Hola
2. Reply chat dengan caption ${prefix + command} *Código de lenguaje*
	• Ejemplo : ${prefix + command} id Hola
Lista de idiomas admitidos : https://cloud.google.com/translate/docs/languages`
}
exports.Addlist = () => {
    return `La clave no puede ser la misma que el bot de función/comando`
}
exports.Addlist_ = (prefix, command) => {
    return `Úsalo de una manera ${prefix + command} *key|response*\n\n_Ejemplo_\n\n${prefix + command} Hi|Halo`
}
exports.Addlist__ = (arg) => {
    return `Lista de respuesta con clave : *${arg}* ya en este grupo.`
}
exports.AddlistDone = (arg) => {
    return `Establecer correctamente el mensaje de la lista con la clave : *${arg}*\n\nNota: Espere unos minutos si la lista no cambia`
}
exports.Dellist = () => {
    return `No hay lista de mensajes en la base de datos.`
}
exports.Dellist_  = (prefix, command) => {
    return `Úsalo de una manera ${prefix + command} *key*\n\n_Ejemplo_\n\n${prefix + command} Hi`
}
exports.Dellist__ = (key) => {
    return `Lista de respuesta con clave *${key}* no está en la base de datos!`
}
exports.DellistDone = (key) => {
    return `Eliminar correctamente el mensaje de la lista con la clave *${key}*`
}
exports.ListUp = (key) => {
    return `perdon por la llave *${key}* no registrado en este grupo`
}
exports.UpList = (key) => {
    return `Actualizar correctamente el mensaje de la lista con la clave : *${key}*\n\nNota: Espere unos minutos si la lista no cambia`
}
exports.Anonymous = (pushname, prefix) => {
    return `Hola ${pushname} Bienvenido al chat anónimo\n\nEscribe ${prefix}start para encontrar a sus amigos de chat, o puede presionar el botón Buscar a continuación`
}
exports.Anon = () => {
    return `Buscar chat de amigos`
}
exports.StopAnon = () => {
    return `No estás en una sesión anónima\n${prefix}start -- _cari pasangan baru_`
}
exports.AnonNew = () => {
    return `Encontrar nuevos amigos`
}
exports.AnonDahStop = () => {
    return `✅ Chat detenido con éxito\n${prefix}start -- _cari pasangan baru_`
}
exports.StopAnonByFren = () => {
    return `⚠️ Esta sesión de chat ha sido cancelada por su amigo de chat\n${prefix}start -- _cari pasangan baru_`
}
exports.AnonOn = () => {
    return `⚠️ ¡Aún estás en una sesión de chat con un compañero!\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan dialog ini_`
}
exports.AnonFind = (prefix) => {
    return `_pareja encontrada 🐼_\n${prefix}skip -- _buscando un nuevo socio_\n${prefix}stop -- _detener este diálogo_`
}
exports.AnonSearch = () => {
    return `🔎 Por favor espera buscando amigos de chat\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan percarian ini_`
}
exports.NoAnon = () => {
    return `⚠️ Nunca has iniciado un chat.!\n${prefix}start -- _cari pasangan baru_`
}
exports.NoAudRep = (prefix, command) => {
    return `Responda al audio que desea cambiar con un título *${prefix + command}*`
}

exports.NoTagBan = (prefix, command) => {
    return `Ejemplo :\n${prefix + command} 62938828728992 \no\n${prefix + command} @tagmember`
}
exports.getBan = (a) => {
    return `⚠️ Lo sentimos, su número ha sido prohibido por el propietario\n\ndueño del bot 👇\nwa.me/${a}`
}
exports.Addstik = (prefix, command, t) => {
    return `respuesta ${t} con subtítulo ${prefix + command} texto\n\nEjemplo : ${prefix + command} bot`
}
exports.AllFitur = () => {
    return `\n_Todas las características de los bots_`
}
exports.InfoMenu = () => {
    return `\n_Buscando la información más reciente a través de bot_`
}
exports.KhususOwn = () => {
    return `\n_Características especiales del bot propietario_`
}
exports.DataBor = () => {
    return `\n_Almacenar algo en la base de datos del bot_`
}
exports.MenuGc = () => {
    return `\n_Muestra características específicas del grupo_`
}
exports.MenuAni = () => {
    return `\n_Buscando fotos de anime al azar_`
}
exports.TagMem = () => {
    return `\n_Miembro del grupo de etiquetas_`
}
exports.StalkOrk = () => {
    return `\n_Puntos de las personas en las redes sociales_`
}
exports.Hoja = () => {
    return `\n_Buscando algo sin importancia_`
}
exports.CovertWi = () => {
    return `\n_Convertir algo con bot_`
}
exports.AnuFoto = () => {
    return `\n_Cambia la imagen para que sea más interesante._`
}
exports.HajuStik = () => {
    return `\n_Crea pegatinas únicas_`
}
exports.EloDown= () => {
    return `\n_Mostrar función de descarga_`
}
exports.StikerWibu = () => {
    return `\n_pegatinas de anime al azar_`
}
exports.ImageDewasa = () => {
    return `\n_Anime de imagen aleatoria 18+_`
}
exports.MakeLogo = () => {
    return `\n_Para crear un logo usando un bot_`
}
exports.oterMenu = () => {
    return `\n_Más menú_`
}
exports.GameBot = () => {
    return `\n_Funciones para jugar con bots_`
}
exports.RandRik = () => {
    return `\n_Videos aleatorios de tiktok_`
}
exports.RandCew = () => {
    return `\n_fotos al azar de chicas hermosas_`
}
exports.RamalOi = () => {
    return `\n_pronóstico de hoy_`
}
exports.TeleStik= () => {
    return `\n_Etiqueta aleatoria de Telegram_`
}
exports.BuatLogoLagi = () => {
    return `\n_Crea logotipos geniales con bots_`
}
exports.SoundNih= () => {
    return `\n_Sonido aleatorio_`
}
exports.KanLogoLagi = () => {
    return `\n_Haz un logo atractivo_`
}
exports.TobatBro = () => {
    return `\n_características islámicas_`
}
exports.MauJualan = () => {
    return `\n_Funciones para vender_`
}
exports.Maustorage = () => {
    return `\n_Fcaracterísticas para almacenar pegatinas, audio, fotos y videos_`
}
exports.MauChanger = () => {
    return `\n_Función para cambiar el sonido de audio/vn_`
}
exports.GadaChat = () => {
    return `\n_Funciones para chat aleatorio_`
}
exports.SumberBot = () => {
    return `\n_Fuente de este script de bot_`
}
exports.Tqnya = () => {
    return `\n_Quién contribuyó a este bot_`
}
exports.SetAh = () => {
    return `¿Quieres un menú fijo? ?`
}
exports.KickAh = (gc) => {
    return `*Grupo antienlace detectado*\n\nSerás eliminado del grupo. ${gc}`
    }
    exports.GjdKick = () => {
    return `Parece que enviaste el enlace de este grupo, no serás expulsado`
    }
/////////

/////////
exports.private = () =>{
	return`La función solo se puede usar en el chat privado.`
	}
exports.wait = () => {
    return `⏳ Por favor, espere un momento`
}
exports.ok = () => {
    return `✅ hecho.`
}

exports.err = () => {
    return `⚠️ Características de error moderado`
}
exports.erorLink = () => {
    return `⚠️ el enlace es un error`
}
exports.media = () => {
    return `Seleccione los medios que desea descargar`
}
exports.replyImg = (prefix, command) => {
    return `Enviar/Responder foto con leyenda ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Formato incorrecto Por favor verifique cómo usar en *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Por favor ingrese el mensaje que desea transmitir!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Dominio *${cmd}* no registrado en *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ Este comando es para el dueño`
}

exports.doneOwner = () => {
    return `✅  ️Está hecho, Propietario~`
}

exports.groupOnly = () => {
    return `👥  ¡Este comando solo se puede usar en grupos!`
}

exports.adminOnly = () => {
    return `🙅  ¡Este comando solo puede ser utilizado por administradores de grupo!`
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
    return `¡Haz que el bot sea administrador primero! 🙏`
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
	return`Hola hermano ${pushname} 👋 seguro ${salam} , 
yo ${botname}, este bot es Whatsapp Multi-Device Beta.
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
*── 「 NORMAS AND FAQ 」 ──*

1. No envíe spam a los bots. 🙅
2. no llames al bot. ☎️
3. No compares bots 👍

🗯️ Bot no o lento para responder ?
➡️ Puede verse afectado por la red, la señal, prohibido por Whatsapp y algunas razones.

🗯️ ¿Dónde puedo obtener el script de este bot?
➡️ Puede obtener este script en YouTube ZEEONE OFC

🗯️ ¿Puedo agregar al grupo?
➡️ Para eso depende del propietario del bot.

🗯️ ¿Cuál es el prefijo?
➡️ Este bot usa prefijo múltiple y puedes usarlo sin prefijo

Si entiende las reglas, por favor escriba *${prefix}menu* ¡para comenzar!

️ Todas las políticas y condiciones de los bots están sujetas a cambios en cualquier momento 

Gracias! 
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

Hola hermano ☺️ 
Puedes ayudarme a mantener este bot actualizado mediante una donación

Cualquier cantidad de su donación significará mucho 👍

Gracias!

Persona de contacto Titular:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`╭─❒ 「 Robots de información 」 
│○ ${prefix}owner
│○ ${prefix}rules
│○ ${prefix}sc
│○ ${prefix}ping
│○ ${prefix}runtime
│○ ${prefix}botstatus
╰❒ ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`╭─❒ 「 dueño 」 
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
	return`╭─❒ 「 bases de datos 」 
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
	return`╭─❒ 「 Grupo 」 
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
	return`╭─❒ 「 animado 」 
│○ ${prefix}quotesanime
│○ ${prefix}anime [query]
│○ ${prefix}animeinfo
│○ ${prefix}manga [query]
╰❒ ${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`╭─❒ 「 etiquetas 」 
│○ ${prefix}stickertag
│○ ${prefix}videotag [query]
│○ ${prefix}vntag [query]
╰❒ ${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`╭─❒ 「 acecho 」 
│○ ${prefix}mlstalk [id|zona id]
│○ ${prefix}ffstalk [id]
│○ ${prefix}igstalk [username]
│○ ${prefix}ghstalk [username]
╰❒ ${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`╭─❒ 「 Buscar 」 
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
	return`╭─❒ 「 Convertidores 」 
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
	return`╭─❒ 「 Efectos de imagen 」 
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
	return`╭─❒ 「 Efectos de pegatinas 」 
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
return`╭─❒ 「 Descargas 」 
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
	return`╭─❒ 「 Animé aleatorio 」
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
│○ ${prefix}cuddle
│○ ${prefix}feed
│○ ${prefix}foxgirl
│○ ${prefix}kemonomimi2
│○ ${prefix}woof
│○ ${prefix}holo2
│○ ${prefix}hug
│○ ${prefix}kiss
│○ ${prefix}lizard
│○ ${prefix}meowi
│○ ${prefix}neko2
│○ ${prefix}pat
│○ ${prefix}poke
│○ ${prefix}slap
│○ ${prefix}tickle
│○ ${prefix}baka
│○ ${prefix}smug
│○ ${prefix}neko-sfw
│○ ${prefix}hentai
│○ ${prefix}hentai-gif
│○ ${prefix}spank
│○ ${prefix}blowjob
│○ ${prefix}cumarts
│○ ${prefix}eroyuri
│○ ${prefix}eroneko
│○ ${prefix}erokemonomimi
│○ ${prefix}erokitsune
│○ ${prefix}ero
│○ ${prefix}feet
│○ ${prefix}erofeet
│○ ${prefix}feetgif
│○ ${prefix}femdom
│○ ${prefix}futanari
│○ ${prefix}hentai
│○ ${prefix}holoero
│○ ${prefix}holo
│○ ${prefix}keta
│○ ${prefix}kitsune
│○ ${prefix}kemonomimi
│○ ${prefix}pussyart
│○ ${prefix}pussywankgif
│○ ${prefix}girl-solo
│○ ${prefix}girl-solo-gif
│○ ${prefix}tits
│○ ${prefix}trap
│○ ${prefix}yuri
│○ ${prefix}avatar2
│○ ${prefix}anal
│○ ${prefix}bj
│○ ${prefix}boobs
│○ ${prefix}classic
│○ ${prefix}cumsluts
│○ ${prefix}kuni
│○ ${prefix}lesbian
│○ ${prefix}neko
│○ ${prefix}neko-gif
│○ ${prefix}ahegao
│○ ${prefix}bdsm
│○ ${prefix}cuckold
│○ ${prefix}cum
│○ ${prefix}foot
│○ ${prefix}gangbang
│○ ${prefix}glasses
│○ ${prefix}jahy
│○ ${prefix}masturbation
│○ ${prefix}nsfw-neko
│○ ${prefix}orgy
│○ ${prefix}panties
│○ ${prefix}tentacles
│○ ${prefix}thighs
╰❒ ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`╭─❒ 「 Menú Textpro 」
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
return`╭─❒ 「 Otros 」
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
return`╭─❒ 「 Menú Juegos 」
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
return`╭─❒ 「 Ingesta de Menú 」
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
return`╭─❒ 「 Chica al azar 」
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
	return`╭─❒ 「 Gracias 」 
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
	return`╭─❒ 「 Horóscopo 」
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
	return`╭─❒ 「 Pegatinas de telegramas 」
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
	return`╭─❒ 「 Efoto360 menús 」
│○ ${prefix}youtubegold text
│○ ${prefix}youtubesilver text
│○ ${prefix}facebookgold text
│○ ${prefix}facebooksilver text
│○ ${prefix}instagramgold text
│○ ${prefix}instagramsilver text
│○ ${prefix}twittergold text
│○ ${prefix}twittersilver text
│○ ${prefix}retrotext text
│○ ${prefix}halloweenbats text
│○ ${prefix}texthalloween text
│○ ${prefix}cardhalloween text
│○ ${prefix}birthdaycake text
│○ ${prefix}thundertext text
│○ ${prefix}icetext text
│○ ${prefix}milkcake text
│○ ${prefix}snowontext text
│○ ${prefix}metalstar text
│○ ${prefix}dragonfire text
│○ ${prefix}zombie3d text
│○ ${prefix}merrycard text
│○ ${prefix}generalexam text 
│○ ${prefix}viettel text
│○ ${prefix}embroider text
│○ ${prefix}graffititext text
│○ ${prefix}graffititext2 text
│○ ${prefix}graffititext3 text
│○ ${prefix}covergraffiti text
│○ ${prefix}moderngold text
│○ ${prefix}capercut text
│○ ${prefix}lovecard text
│○ ${prefix}heartflashlight text
│○ ${prefix}heartcup text
│○ ${prefix}sunglightshadow text
│○ ${prefix}graffiti3d text
│○ ${prefix}moderngoldsilver text
│○ ${prefix}moderngold2 text
│○ ${prefix}moderngold3 text
│○ ${prefix}fabrictext text
│○ ${prefix}masteryavatar text
│○ ${prefix}messagecoffee text
│○ ${prefix}announofwin text
│○ ${prefix}writeblood text
│○ ${prefix}horrorletter text
│○ ${prefix}writehorror text
│○ ${prefix}shirtclub text
│○ ${prefix}angelwing text
│○ ${prefix}christmasseason text
│○ ${prefix}projectyasuo text
│○ ${prefix}lovelycute text
│○ ${prefix}womansday text
│○ ${prefix}covergamepubg text
│○ ${prefix}nameonheart text
│○ ${prefix}funnyhalloween text
│○ ${prefix}lightningpubg text
│○ ${prefix}greetingcardvideo text 
│○ ${prefix}christmascard text 
│○ ${prefix}galaxybat text
│○ ${prefix}writegalaxy text
│○ ${prefix}starsnight text
│○ ${prefix}noeltext text
│○ ${prefix}textcakes text
│○ ${prefix}pubgbirthday text
│○ ${prefix}galaxywallpaper text
│○ ${prefix}pubgglicthvideo text 
│○ ${prefix}pubgmascotlogo text
│○ ${prefix}realembroidery text
│○ ${prefix}vintagetelevision text
│○ ${prefix}funnyanimations text
│○ ${prefix}glowingtext text
│○ ${prefix}textonglass text
│○ ${prefix}cartoonstyle text
│○ ${prefix}multicolor text
│○ ${prefix}watercolor2 text
│○ ${prefix}textsky text
│○ ${prefix}summerbeach text
│○ ${prefix}1917text text
│○ ${prefix}puppycute text
│○ ${prefix}rosebirthday text
│○ ${prefix}steellettering text|text2
│○ ${prefix}letterstext text|text2
│○ ${prefix}barcashirt text|text2
│○ ${prefix}premiercup text|text2
│○ ${prefix}stylepoligon text|text2
│○ ${prefix}lifebuoys text|text2
╰❒ ${prefix}juventusshirt text|text2`
}

exports.logomenu = (prefix) =>{
	return`╭─❒ 「 logotipos de menú 」
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
	return`╭─❒ 「 Menú islámico 」
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
	return`╭─❒ 「 Anónimo 」
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
	return`╭─❒ 「 Menú Tienda 」
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
	return`╭─❒ 「 Menú de cambio de voz 」
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
	return`╭─❒ 「 Menú de almacenamiento 」
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
	return`╭─❒ 「 Juegos de rol 」
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
`
}

exports.photooxy = (prefix)=>{
	return`╭─❒ 「 Menú Fotooxi 」
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
│○ ${prefix}harry-potter2
│○ ${prefix}birthday-cake 
│○ ${prefix}embroidery
│○ ${prefix}flaming 
│○ ${prefix}furtext 
│○ ${prefix}nightsky 
│○ ${prefix}glow-rainbow 
│○ ${prefix}gradient-avatar 
│○ ${prefix}white-cube
│○ ${prefix}graffiti-cover 
│○ ${prefix}rainbow-shine 
│○ ${prefix}smoky-neon 
│○ ${prefix}quotes-underfall
│○ ${prefix}vector-nature 
│○ ${prefix}yellow-rose 
│○ ${prefix}love-text 
│○ ${prefix}underwater-ocean 
│○ ${prefix}nature-text 
│○ ${prefix}wolf-metal 
│○ ${prefix}summer-text 
│○ ${prefix}wooden-board
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
return`╭─❒ 「 Menú de sonido 」
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
