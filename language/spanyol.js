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
return `❌ ¡No hay ausencias en este grupo!`
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
	return`¡¡Pegatina de respuesta!!\Ejemplo: ${prefix + command} menu\n\n\n*Nota: ¡¡No puede ir acompañado de Prefijo!!*`
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
    return `¡Todavía hay sesiones sin terminar!`
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

exports.KisahNabi = (prefix, command, style) => {
    return `Ejemplo : ${prefix + command} ${style}`
}
exports.quran2 = (prefix, command, juz , brp) => {
    return `Ejemplo : ${prefix + command} ${juz}\nEjemplos de uso: ${prefix + command} ${brp}`
}

exports.quran3 = (prefix, command, surah , ayat, brp, brp2) => {
return`Ex : ${prefix + command} ${surah}|${ayat}\nEjemplos de uso: ${prefix + command} ${brp}|${brp2}`
}

exports.JwbErr = () => {
    return `❌ Respuesta incorrecta`
}

exports.JwbTrue = (tebak) => {
return`🎮 ${tebak} 🎮\n\nRespuesta correcta \n\n ¿Quieres volver a jugar? presione el botón de abajo`
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
    return `*Responde las siguientes preguntas :*\n${soal}\n\nHay *${jawaban}* Responder ${find(v => v.includes(' ')) ? '(Algunas respuestas tienen espacios)' : ''}`
}

exports.TbAfk = (nama, afk) => {
    return `${nama} tiene afk con razon ${afk ? ': ' + afk : 'Nada'}`
}

exports.TbGambar = (desk, time) => {
    return `Por favor responda la pregunta anterior\n\nDescripción : ${desk}\nTiempo : ${time}`
}
exports.TbGambar_ = (jawaban) => {
    return `Tiempo de espera\nRespuesta:  ${jawaban}`
}
exports.TbGambar__ = (jawaban, desk) => {
    return `Tiempo de espera\nRespuesta:  ${jawaban}}\nDescripción : ${desk}`
}
exports.TbKata = (soal, time) => {
    return `Por favor, conteste a las siguientes preguntas\n\n${soal}\nTiempo : ${time}`
}
exports.TbBendera = (time) => {
    return `Por favor responda la pregunta anterior\n\nTiempo : ${time}`
}
exports.TbKabupaten = (time) => {
    return `La imagen de arriba es una imagen del distrito.?\nTiempo : ${time}`
}
exports.TbKimia = (soal, time) => {
    return `que significa el simbolo : *${soal}*?\nTiempo : ${time}`
}
exports.TbLirik = (soal, time) => {
    return `esta es la letra de la cancion? : *${soal}*?\nTiempo : ${time}`
}
exports.TbSusun = (soal, tipe, time) => {
    return `*Responde las siguientes preguntas :*\nPregunta : ${soal}\nEscribe : ${tipe}\nTiempo : ${time}`
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
    return `No estás en una sesión anónima, pulsa el botón para buscar pareja `
}
exports.AnonNew = () => {
    return `Encontrar nuevos amigos`
}
exports.AnonDahStop = () => {
    return `✅ Chat detenido con éxito`
}
exports.StopAnonByFren = () => {
    return `⚠️ Esta sesión de chat ha sido cancelada por su amigo de chat`
}
exports.AnonOn = () => {
    return `⚠️ ¡Aún estás en una sesión de chat con un compañero!`
}
exports.AnonFind = (prefix) => {
    return `_pareja encontrada 🐼_\n${prefix}skip -- _buscando un nuevo socio_\n${prefix}stop -- _detener este diálogo_`
}
exports.AnonSearch = () => {
    return `🔎 Por favor espera buscando amigos de chat`
}
exports.NoAnon = () => {
    return `⚠️ Nunca has iniciado un chat.!`
}
exports.NoAudRep = (prefix, command) => {
    return `Responda al audio que desea cambiar con un título *${prefix + command}*`
}

exports.NoTagBan = (prefix, command) => {
    return `Ejemplo :\n${prefix + command} 62938828728992 \no\n${prefix + command} @tagmember`
}
exports.getBan = () => {
    return `⚠️ Lo sentimos, su número ha sido prohibido por el propietario`
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
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*⌚Time Server : ${time}*
*📚 List-Menu Alphabot-Md :*

╭─❒ 「 Bot Info 」 
├ ${prefix}owner
├ ${prefix}rules
├ ${prefix}sc
├ ${prefix}ping
├ ${prefix}runtime
├ ${prefix}botstatus
╰❒ ${prefix}donate


╭─❒ 「 Owner 」 
├ < evaluate
├ > evaluate
├ $ exec
├ => exec
├ ${prefix}setmenu [query]
├ ${prefix}setmenu templateLocation
├ ${prefix}setmenu templateTenor
├ ${prefix}setmenu katalog
├ ${prefix}setmenu katalog2
├ ${prefix}setmenu list
├ ${prefix}setwm packname|author
├ ${prefix}sendsesi
├ ${prefix}listpc
├ ${prefix}listgc
├ ${prefix}broadcast [text]
├ ${prefix}bc [text]
├ ${prefix}bcgc [text]
├ ${prefix}nsfw [on/off]
├ ${prefix}mute [on/off]
├ ${prefix}banchat
├ ${prefix}unbanchat
├ ${prefix}autorespond [on/off]
├ ${prefix}antiviewonce [on/off]
├ ${prefix}autobio [on/off]
├ ${prefix}join [link]
├ ${prefix}self
├ ${prefix}public [only bot]
├ ${prefix}del [reply pesan bot]
╰❒ ${prefix}setppbot [reply image]

╭─❒ 「 Store Menu 」
├ ${prefix}list
├ ${prefix}addlist [key|respond]
├ ${prefix}dellist [key]
├ ${prefix}update [key|respond]
├ ${prefix}store
├ ${prefix}kali
├ ${prefix}bagi
├ ${prefix}tambah
├ ${prefix}kurang
├ ${prefix}kalkulator
├ ${prefix}proses
╰❒ ${prefix}done [surah|ayat]

╭─❒ 「 Anonymous 」
├ ${prefix}anonymous 
├ ${prefix}start
├ ${prefix}skip [daerah]
╰❒ ${prefix}stop [surah|ayat]


╭─❒ 「 Database 」 
├ ${prefix}setcmd [reply stiker]
├ ${prefix}delcmd [reply stiker]
├ ${prefix}listcmd
├ ${prefix}absen
├ ${prefix}cekabsen
├ ${prefix}deleteabsen
├ ${prefix}absenstart
├ ${prefix}addmsg [nama file]
├ ${prefix}getmsg [nama file]
├ ${prefix}listmsg
╰❒ ${prefix}delmsg [nama file]


╭─❒ 「 Group 」 
├ ${prefix}listonline
├ ${prefix}sider
├ ${prefix}wm packname|author
├ ${prefix}infochat
├ ${prefix}setdesk [text]
├ ${prefix}setppgrup [reply image]
├ ${prefix}revoke
├ ${prefix}leave
├ ${prefix}add [62***]
├ ${prefix}kick @tag
├ ${prefix}leave
├ ${prefix}linkgc
├ ${prefix}welcome [on/off]
├ ${prefix}goodbye [on/off]
├ ${prefix}nsfw [on/off]
├ ${prefix}antilink [on/off]
├ ${prefix}take packname|author
├ ${prefix}group [open/close]
├ ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]

╭─❒ 「 Anime 」 
├ ${prefix}quotesanime
├ ${prefix}anime [query]
├ ${prefix}manga [query]
╰❒ ${prefix}character [query]

╭─❒ 「 Tag 」 
├ ${prefix}stickertag
├ ${prefix}videotag [query]
├ ${prefix}vntag [query]
╰❒ ${prefix}imagetag [query]

╭─❒ 「 Stalking 」 
├ ${prefix}igstalk [username]
├ ${prefix}ghstalk [username]
╰❒ ${prefix}ytstalk [channel]


╭─❒ 「 Search 」 
├ ${prefix}ytsearch [query]
├ ${prefix}wallpaper [query]
├ ${prefix}google [query]
├ ${prefix}wikimedia [query]
├ ${prefix}hentai
├ ${prefix}wattpad [query]
├ ${prefix}webtoons [query]
├ ${prefix}drakor [query]
╰❒ ${prefix}pinterest [query]


╭─❒ 「 Converter 」
├ ${prefix}emoji [😭]
├ ${prefix}emojimix [😭+💩]
├ ${prefix}toaudio [video]
├ ${prefix}tomp3 [video]
├ ${prefix}tovn [video]
├ ${prefix}stiker [reply image]
├ ${prefix}tourl [image/video/stiker]
├ ${prefix}togif [sticker]
├ ${prefix}tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]


╭─❒ 「 Image Effect 」 
├ ${prefix}wanted [reply image/stiker]
├ ${prefix}utatoo [reply image/stiker]
├ ${prefix}unsharpen [reply image/stiker]
├ ${prefix}thanos [reply image/stiker]
├ ${prefix}sniper [reply image/stiker]
├ ${prefix}sharpen [reply image/stiker]
├ ${prefix}sepia [reply image/stiker]
├ ${prefix}scary [reply image/stiker]
├ ${prefix}rip [reply image/stiker]
├ ${prefix}redple [reply image/stiker]
├ ${prefix}rejected [reply image/stiker]
├ ${prefix}posterize [reply image/stiker]
├ ${prefix}ps4 [reply image/stiker]
├ ${prefix}pixelize [reply image/stiker]
├ ${prefix}missionpassed [reply image/stiker]
├ ${prefix}moustache [reply image/stiker]
├ ${prefix}lookwhatkarenhave [reply image/stiker]
├ ${prefix}jail [reply image/stiker]
├ ${prefix}invert [reply image/stiker]
├ ${prefix}instagram [reply image/stiker]
├ ${prefix}greyscale [reply image/stiker]
├ ${prefix}glitch [reply image/stiker]
├ ${prefix}gay [reply image/stiker]
├ ${prefix}frame [reply image/stiker]
├ ${prefix}fire [reply image/stiker]
├ ${prefix}distort [reply image/stiker]
├ ${prefix}dictator [reply image/stiker]
├ ${prefix}deepfry [reply image/stiker]
├ ${prefix}ddungeon [reply image/stiker]
├ ${prefix}circle [reply image/stiker]
├ ${prefix}challenger [reply image/stiker]
├ ${prefix}burn [reply image/stiker]
├ ${prefix}brazzers [reply image/stiker]
╰❒ ${prefix}beautiful [reply image/stiker]


╭─❒ 「 Sticker Effect 」 
├ ${prefix}jail [reply image/stiker]
├ ${prefix}red [reply image/stiker]
├ ${prefix}gay [reply image/stiker]
├ ${prefix}bloo [reply image/stiker]
├ ${prefix}blue [reply image/stiker]
├ ${prefix}sepia [reply image/stiker]
├ ${prefix}green [reply image/stiker]
├ ${prefix}glass [reply image/stiker]
├ ${prefix}invert [reply image/stiker]
├ ${prefix}blurple [reply image/stiker]
├ ${prefix}blurple2 [reply image/stiker]
├ ${prefix}wasted [reply image/stiker]
├ ${prefix}passed [reply image/stiker]
├ ${prefix}triggered [reply image/stiker]
├ ${prefix}comrade [reply image/stiker]
├ ${prefix}greyscale [reply image/stiker]
├ ${prefix}threshold [reply image/stiker]
├ ${prefix}brightness [reply image/stiker]
╰❒ ${prefix}invertgreyscale [reply image/stiker]


╭─❒ 「 Download 」 
├ ${prefix}tiktok [link]
├ ${prefix}tiktoknowm [link]
├ ${prefix}tiktokwm [link]
├ ${prefix}tiktokaudio [link]
├ ${prefix}ytdl [link]
├ ${prefix}play [query]
├ ${prefix}ytmp3 [link]
├ ${prefix}ytshortmp3 [link]
├ ${prefix}ytmp4 [link]
├ ${prefix}ytshorts [link]
├ ${prefix}facebook [link]
├ ${prefix}facebooksd [link]
├ ${prefix}facebookhd [link]
├ ${prefix}fbaudio [link]
├ ${prefix}igstory [username]
├ ${prefix}igdl [link]
├ ${prefix}igphoto [link]
├ ${prefix}igvideo [link]
├ ${prefix}igreels [link]
├ ${prefix}igtv [link]
├ ${prefix}soundcloud [link]
├ ${prefix}gitclone [link repo]
├ ${prefix}gitrepo [username repo branch]
├ ${prefix}mediafire [link]
╰❒ ${prefix}twitter link

╭─❒ 「 Primbon 」
├ ${prefix}nomorhoki 887435047326
├ ${prefix}artimimpi [query]
├ ${prefix}artinama [query]
├ ${prefix}ramaljodoh
├ ${prefix}ramaljodohbali
├ ${prefix}suamiistri
├ ${prefix}ramalcinta
├ ${prefix}cocoknama
├ ${prefix}pasangan
├ ${prefix}jadiannikah
├ ${prefix}sifatusaha
├ ${prefix}rezeki
├ ${prefix}pekerjaan
├ ${prefix}nasib
├ ${prefix}penyakit
├ ${prefix}tarot
├ ${prefix}fengshui
├ ${prefix}haribaik
├ ${prefix}harisangar
├ ${prefix}harisial
├ ${prefix}nagahari
├ ${prefix}arahrezeki
├ ${prefix}peruntungan
├ ${prefix}weton
├ ${prefix}karakter
├ ${prefix}keberuntungan
├ ${prefix}memancing
├ ${prefix}masasubur
├ ${prefix}zodiak 
╰❒ ${prefix}shio [query]

╭─❒ 「 Random Anime 」
├ ${prefix}loli
├ ${prefix}neko
├ ${prefix}waifu
├ ${prefix}shinobu
├ ${prefix}megumin
├ ${prefix}bully
├ ${prefix}cuddle
├ ${prefix}cry
├ ${prefix}hug
├ ${prefix}awoo
├ ${prefix}kiss
├ ${prefix}lick
├ ${prefix}pat
├ ${prefix}smug
├ ${prefix}bonk
├ ${prefix}yeet
├ ${prefix}blush
├ ${prefix}smile
├ ${prefix}wave
├ ${prefix}highfive
├ ${prefix}handhold
├ ${prefix}nom
├ ${prefix}bite
├ ${prefix}glomp
├ ${prefix}slap
├ ${prefix}kill
├ ${prefix}happy
├ ${prefix}wink
├ ${prefix}poke
├ ${prefix}dance
╰❒ ${prefix}cringe

╭─❒ 「 Voice Change Menu 」
├ ${prefix}bass
├ ${prefix}blown
├ ${prefix}deep
├ ${prefix}earrape
├ ${prefix}fast
├ ${prefix}fat
├ ${prefix}nightcore
├ ${prefix}reverse
├ ${prefix}robot
├ ${prefix}slow
├ ${prefix}smooth
╰❒ ${prefix}tupai

╭─❒ 「 Storage Menu 」
├ ${prefix}addvn
├ ${prefix}listvn
├ ${prefix}addimage
├ ${prefix}listimage
├ ${prefix}addvideo
├ ${prefix}listvideo
├ ${prefix}addstik
╰❒ ${prefix}liststik

╭─❒ 「 Nsfw & Sfw 」
├ ${prefix}cuddle
├ ${prefix}feed
├ ${prefix}foxgirl
├ ${prefix}kemonomimi2
├ ${prefix}woof
├ ${prefix}holo2
├ ${prefix}hug
├ ${prefix}kiss
├ ${prefix}lizard
├ ${prefix}meowi
├ ${prefix}neko2
├ ${prefix}pat
├ ${prefix}poke
├ ${prefix}slap
├ ${prefix}tickle
├ ${prefix}baka
├ ${prefix}smug
├ ${prefix}neko_sfw
├ ${prefix}hentai
├ ${prefix}hentai_gif
├ ${prefix}spank
├ ${prefix}blowjob
├ ${prefix}cumarts
├ ${prefix}eroyuri
├ ${prefix}eroneko
├ ${prefix}erokemonomimi
├ ${prefix}erokitsune
├ ${prefix}ero
├ ${prefix}feet
├ ${prefix}erofeet
├ ${prefix}feetgif
├ ${prefix}femdom
├ ${prefix}futanari
├ ${prefix}holoero
├ ${prefix}holo
├ ${prefix}keta
├ ${prefix}kitsune
├ ${prefix}kemonomimi
├ ${prefix}pussyart
├ ${prefix}pussywankgif
├ ${prefix}girl_solo
├ ${prefix}girl_solo_gif
├ ${prefix}tits
├ ${prefix}trap
├ ${prefix}yuri
├ ${prefix}avatar2
├ ${prefix}anal
├ ${prefix}bj
├ ${prefix}boobs
├ ${prefix}classic
├ ${prefix}cumsluts
├ ${prefix}kuni
├ ${prefix}lesbian
├ ${prefix}neko
├ ${prefix}neko_gif
├ ${prefix}ahegao
├ ${prefix}bdsm
├ ${prefix}cuckold
├ ${prefix}cum
├ ${prefix}foot
├ ${prefix}gangbang
├ ${prefix}glasses
├ ${prefix}jahy
├ ${prefix}masturbation
├ ${prefix}nsfw_neko
├ ${prefix}orgy
├ ${prefix}panties
├ ${prefix}tentacles
├ ${prefix}thighs
╰❒ ${prefix}zettai

╭─❒ 「 Ephoto360 Menu 」
├ ${prefix}youtubegold
├ ${prefix}youtubesilver
├ ${prefix}facebookgold
├ ${prefix}facebooksilver
├ ${prefix}instagramgold
├ ${prefix}instagramsilver
├ ${prefix}twittergold
├ ${prefix}twittersilver
├ ${prefix}retrotext
├ ${prefix}halloweenbats
├ ${prefix}texthalloween
├ ${prefix}cardhalloween
├ ${prefix}birthdaycake
├ ${prefix}thundertext
├ ${prefix}icetext
├ ${prefix}milkcake
├ ${prefix}snowontext
├ ${prefix}metalstar
├ ${prefix}dragonfire
├ ${prefix}zombie3d
├ ${prefix}merrycard
├ ${prefix}generalexam 
├ ${prefix}viettel
├ ${prefix}embroider
├ ${prefix}graffititext
├ ${prefix}graffititext2
├ ${prefix}graffititext3
├ ${prefix}covergraffiti
├ ${prefix}moderngold
├ ${prefix}capercut
├ ${prefix}lovecard
├ ${prefix}heartflashlight
├ ${prefix}heartcup
├ ${prefix}sunglightshadow
├ ${prefix}graffiti3d
├ ${prefix}moderngoldsilver
├ ${prefix}moderngold2
├ ${prefix}moderngold3
├ ${prefix}fabrictext
├ ${prefix}masteryavatar
├ ${prefix}messagecoffee
├ ${prefix}announofwin
├ ${prefix}writeblood
├ ${prefix}horrorletter
├ ${prefix}writehorror
├ ${prefix}shirtclub
├ ${prefix}angelwing
├ ${prefix}christmasseason
├ ${prefix}projectyasuo
├ ${prefix}lovelycute
├ ${prefix}womansday
├ ${prefix}covergamepubg
├ ${prefix}nameonheart
├ ${prefix}funnyhalloween
├ ${prefix}lightningpubg
├ ${prefix}greetingcardvideo 
├ ${prefix}christmascard 
├ ${prefix}galaxybat
├ ${prefix}writegalaxy
├ ${prefix}starsnight
├ ${prefix}noeltext
├ ${prefix}textcakes
├ ${prefix}pubgbirthday
├ ${prefix}galaxywallpaper
├ ${prefix}pubgglicthvideo 
├ ${prefix}pubgmascotlogo
├ ${prefix}realembroidery
├ ${prefix}vintagetelevision
├ ${prefix}funnyanimations
├ ${prefix}glowingtext
├ ${prefix}textonglass
├ ${prefix}cartoonstyle
├ ${prefix}multicolor
├ ${prefix}watercolor2
├ ${prefix}textsky
├ ${prefix}summerbeach
├ ${prefix}1917text
├ ${prefix}puppycute
╰❒ ${prefix}rosebirthday


╭─❒ 「 Textpro Menu 」
├ ${prefix}halloween2 text|text2
├ ${prefix}horror text|text2
├ ${prefix}game8bit text|text2
├ ${prefix}layered text|text2
├ ${prefix}glitch2 text|text2
├ ${prefix}coolg text|text2
├ ${prefix}coolwg text|text2
├ ${prefix}realistic text|text2
├ ${prefix}space3d text|text2
├ ${prefix}gtiktok text|text2
├ ${prefix}stone text|text2
├ ${prefix}marvel text|text2
├ ${prefix}marvel2 text|text2
├ ${prefix}pornhub text|text2
├ ${prefix}avengers text|text2
├ ${prefix}metalr text|text2
├ ${prefix}metalg text|text2
├ ${prefix}metalg2 text|text2
├ ${prefix}halloween2 text|text2
├ ${prefix}lion text|text2
├ ${prefix}wolf_bw text|text2
├ ${prefix}wolf_g text|text2
├ ${prefix}ninja text|text2
├ ${prefix}3dsteel text|text2
├ ${prefix}horror2 text|text2
├ ${prefix}lava text|text2
├ ${prefix}bagel text|text2
├ ${prefix}blackpink text
├ ${prefix}rainbow2 text
├ ${prefix}water_pipe text
├ ${prefix}halloween text
├ ${prefix}sketch text
├ ${prefix}sircuit text
├ ${prefix}discovery text
├ ${prefix}metallic2 text
├ ${prefix}fiction text
├ ${prefix}demon text
├ ${prefix}transformer text
├ ${prefix}berry text
├ ${prefix}thunder text
├ ${prefix}magma text
├ ${prefix}3dstone text
├ ${prefix}neon text
├ ${prefix}glitch text
├ ${prefix}harry_potter text
├ ${prefix}embossed text
├ ${prefix}broken text
├ ${prefix}papercut text
├ ${prefix}gradient text
├ ${prefix}glossy text
├ ${prefix}watercolor text
├ ${prefix}multicolor text
├ ${prefix}neon_devil text
├ ${prefix}underwater text
├ ${prefix}bear text
├ ${prefix}wonderfulg text
├ ${prefix}christmas text
├ ${prefix}neon_light text
├ ${prefix}snow text
├ ${prefix}cloudsky text
├ ${prefix}luxury2 text
├ ${prefix}gradient2 text
├ ${prefix}summer text
├ ${prefix}writing text
├ ${prefix}engraved text
├ ${prefix}summery text
├ ${prefix}3dglue text
├ ${prefix}metaldark text
├ ${prefix}neonlight text
├ ${prefix}oscar text
├ ${prefix}minion text
├ ${prefix}holographic text
├ ${prefix}purple text
├ ${prefix}glossyb text
├ ${prefix}deluxe2 text
├ ${prefix}glossyc text
├ ${prefix}fabric text
├ ${prefix}neonc text
├ ${prefix}newyear text
├ ${prefix}newyear2 text
├ ${prefix}metals text
├ ${prefix}xmas text
├ ${prefix}blood text
├ ${prefix}darkg text
├ ${prefix}joker text
├ ${prefix}wicker text
├ ${prefix}natural text
├ ${prefix}firework text
├ ${prefix}skeleton text
├ ${prefix}balloon text
├ ${prefix}balloon2 text
├ ${prefix}balloon3 text
├ ${prefix}balloon4 text
├ ${prefix}balloon5 text
├ ${prefix}balloon6 text
├ ${prefix}balloon7 text
├ ${prefix}steel text
├ ${prefix}gloss text
├ ${prefix}denim text
├ ${prefix}decorate text
├ ${prefix}decorate2 text
├ ${prefix}peridot text
├ ${prefix}rock text
├ ${prefix}glass text
├ ${prefix}glass2 text
├ ${prefix}glass3 text
├ ${prefix}glass4 text
├ ${prefix}glass5 text
├ ${prefix}glass6 text
├ ${prefix}glass7 text
├ ${prefix}glass8 text
├ ${prefix}captain_as2 text
├ ${prefix}robot text
├ ${prefix}equalizer text
├ ${prefix}toxic text
├ ${prefix}sparkling text
├ ${prefix}sparkling2 text
├ ${prefix}sparkling3 text
├ ${prefix}sparkling4 text
├ ${prefix}sparkling5 text
├ ${prefix}sparkling6 text
├ ${prefix}sparkling7 text
├ ${prefix}decorative text
├ ${prefix}chocolate text
├ ${prefix}strawberry text
├ ${prefix}koifish text
├ ${prefix}bread text
├ ${prefix}matrix text
├ ${prefix}blood2 text
├ ${prefix}neonligth2 text
├ ${prefix}thunder2 text
├ ${prefix}3dbox text
├ ${prefix}neon2 text
├ ${prefix}roadw text
├ ${prefix}bokeh text
├ ${prefix}gneon text
├ ${prefix}advanced text
├ ${prefix}dropwater text
├ ${prefix}wall text
├ ${prefix}chrismast text
├ ${prefix}honey text
├ ${prefix}drug text
├ ${prefix}marble text
├ ${prefix}marble2 text
├ ${prefix}ice text
├ ${prefix}juice text
├ ${prefix}rusty text
├ ${prefix}abstra text
├ ${prefix}biscuit text
├ ${prefix}wood text
├ ${prefix}scifi text
├ ${prefix}metalr text
├ ${prefix}purpleg text
├ ${prefix}shiny text 
├ ${prefix}jewelry text
├ ${prefix}jewelry2 text
├ ${prefix}jewelry3 text
├ ${prefix}jewelry4 text
├ ${prefix}jewelry5 text
├ ${prefix}jewelry6 text
├ ${prefix}jewelry7 text
├ ${prefix}jewelry8 text
├ ${prefix}metalh text
├ ${prefix}golden text
├ ${prefix}glitter text
├ ${prefix}glitter2 text
├ ${prefix}glitter3 text
├ ${prefix}glitter4 text
├ ${prefix}glitter5 text
├ ${prefix}glitter6 text
├ ${prefix}glitter7 text
├ ${prefix}metale text
├ ${prefix}carbon text
├ ${prefix}candy text
├ ${prefix}metalb text
├ ${prefix}gemb text
├ ${prefix}3dchrome text
├ ${prefix}metalb2 text
├ ${prefix}metalg text
╰❒ ${prefix}metalg text


╭─❒ 「 Others 」
├ ${prefix}afk [reason]
├ ${prefix}translate kode_bahasa text
├ ${prefix}kalkulator [query]
├ ${prefix}smeme [text]
├ ${prefix}smeme2 [text|text]
├ ${prefix}memegen [text|text]
╰❒

╭─❒ 「 Game Menu 」
├ ${prefix}kuismath
├ ${prefix}tebak [option]
├ ${prefix}tekateki
├ ${prefix}susunkata
╰❒ ${prefix}caklontong


╭─❒ 「 Asupan Menu 」
├ ${prefix}chika
├ ${prefix}delvira
├ ${prefix}ayu
├ ${prefix}bunga
├ ${prefix}aura
├ ${prefix}nisa
├ ${prefix}ziva
├ ${prefix}yana
├ ${prefix}viona
├ ${prefix}syania
├ ${prefix}riri
├ ${prefix}syifa
├ ${prefix}mama_gina
├ ${prefix}alcakenya
├ ${prefix}mangayutri
├ ${prefix}rikagusriani
├ ${prefix}asupan
├ ${prefix}bocil
├ ${prefix}geayubi
├ ${prefix}santuy
├ ${prefix}ukhty
╰❒ ${prefix}syifa

╭─❒ 「 Telegram Sticker 」
├ ${prefix}awoawo
├ ${prefix}benedict
├ ${prefix}chat
├ ${prefix}dbfly
├ ${prefix}dino_kuning
├ ${prefix}doge
├ ${prefix}gojosatoru
├ ${prefix}hope_boy
├ ${prefix}jisoo
├ ${prefix}kr_robot
├ ${prefix}kucing
├ ${prefix}lonte
├ ${prefix}manusia_lidi
├ ${prefix}menjamet
├ ${prefix}meow
├ ${prefix}nicholas
├ ${prefix}patrick
├ ${prefix}popoci
├ ${prefix}sponsbob
├ ${prefix}kawan_sponsbob
╰❒ ${prefix}tyni

╭─❒ 「 Random Cewe 」
├ ${prefix}china 
├ ${prefix}indonesia 
├ ${prefix}malaysia 
├ ${prefix}thailand 
├ ${prefix}korea 
├ ${prefix}japan 
├ ${prefix}vietnam 
├ ${prefix}jenni 
├ ${prefix}jiso 
├ ${prefix}lisa  
╰❒ ${prefix}rose

╭─❒ 「 Logo Menu 」
├ ${prefix}coverbannerlol text|heroes
├ ${prefix}pubglogomaker text|style
├ ${prefix}colorfulpubg text|color
├ ${prefix}astronotspace text|style
├ ${prefix}wallpaperaov text|heroes
├ ${prefix}maketeamlogo text|style
├ ${prefix}circlemarcotteam text|logo
├ ${prefix}wallpaperml text|heroes
├ ${prefix}dragonballfb text|character
├ ${prefix}bannerofaov text|character
├ ${prefix}effect3donbeach text|background
├ ${prefix}cutegirlgamer text|logo
├ ${prefix}footballteam text|logo
├ ${prefix}beautifulshimmering text|champion
├ ${prefix}pubgcutelogo text|logo
├ ${prefix}elegantrotation text|logo
├ ${prefix}logogamingassasin text|logo
├ ${prefix}introvideomaker text|logo
├ ${prefix}gaminglogo4fvs text|logo
├ ${prefix}blueneon text|logo
├ ${prefix}metalmascot text|logo
├ ${prefix}anonymous2 text|style
├ ${prefix}lolpentakill text|style
├ ${prefix}avatarleagueofking text|style
├ ${prefix}avatarff text|character
├ ${prefix}overwatchwallpaper text|character
├ ${prefix}rovwallpaperhd text|hero
├ ${prefix}rovwallpaper text|avatar
├ ${prefix}beautifulgalaxylol text|style
├ ${prefix}crossfirecover text|character
├ ${prefix}lolwallpaper text|wallpaper
├ ${prefix}coverdota2 text|heroes
├ ${prefix}coverleagueofking text|character
├ ${prefix}avatar3q360 text|avatar
├ ${prefix}coverofwarface text|character
├ ${prefix}newlolavatar text|avatar
├ ${prefix}csgocover text|background
├ ${prefix}coverloknew text|hero
├ ${prefix}coverfblol text|letters
├ ${prefix}overwatchcover text|hero
├ ${prefix}crossfirestyle text|avatar
├ ${prefix}avatarlolbyname text|style
├ ${prefix}lolcoverbyname text|avatar
├ ${prefix}cyberhunterfb text|character
├ ${prefix}coverfreefirefb text|character
├ ${prefix}gamingmascot text|style
├ ${prefix}coveronepiecefb text|character
├ ${prefix}bannerytcsgo text|banner
├ ${prefix}fbgamepubgcover text|template
├ ${prefix}banneroflol text|text2|banner
├ ${prefix}bannerofaov2 text|text2|banner
├ ${prefix}teamlogo text|text2|background
├ ${prefix}companylogo2 text|text2|background
├ ${prefix}companylogo text|text2|background
├ ${prefix}gradientlogo text|text2|background
├ ${prefix}pencilsketch text|text2|icon
├ ${prefix}gunlogogaming text|text2|background
├ ${prefix}banneroffreefire text|text2|background
├ ${prefix}letterlogos text|text2|thumb
├ ${prefix}bannerofoverwatch text|text2|background
├ ${prefix}bannerofapex text|text2|background
├ ${prefix}bannerofpubg text|text2|background
├ ${prefix}mascotstyle text|text2|thumb
├ ${prefix}logoaccording text|text2|thumb
╰❒ ${prefix}avataroverwatch text|text2|thumb


╭─❒ 「 Islamic Menu 」
├ ${prefix}asmaulhusna
├ ${prefix}kisahnabi [nabi]
├ ${prefix}jadwalshalat [daerah]
├ ${prefix}randomquran
├ ${prefix}randomquran2
├ ${prefix}listsurah
├ ${prefix}tafsirsurah [surah]
╰❒ ${prefix}alquranaudio [surah|ayat]

╭─❒ 「 Sound Menu 」
├ ${prefix}sound1
├ ${prefix}sound2
├ ${prefix}sound3
├ ${prefix}sound4
├ ${prefix}sound5
├ ${prefix}sound6
├ ${prefix}sound7
├ ${prefix}sound8
├ ${prefix}sound9
├ ${prefix}sound10
├ ${prefix}sound11
├ ${prefix}sound12
├ ${prefix}sound13
├ ${prefix}sound14
├ ${prefix}sound15
├ ${prefix}sound16
├ ${prefix}sound17
├ ${prefix}sound18 
├ ${prefix}sound19
├ ${prefix}sound20
├ ${prefix}sound21
├ ${prefix}sound22
├ ${prefix}sound23
├ ${prefix}sound24
├ ${prefix}sound25
├ ${prefix}sound26
├ ${prefix}sound27
├ ${prefix}sound28
├ ${prefix}sound29
├ ${prefix}sound30
├ ${prefix}sound31
├ ${prefix}sound32
├ ${prefix}sound33
├ ${prefix}sound34
├ ${prefix}sound35
├ ${prefix}sound36
├ ${prefix}sound37
├ ${prefix}sound38
├ ${prefix}sound39
├ ${prefix}sound40
├ ${prefix}sound41
├ ${prefix}sound42
├ ${prefix}sound43
├ ${prefix}sound44
├ ${prefix}sound45
├ ${prefix}sound46
├ ${prefix}sound47
├ ${prefix}sound48
├ ${prefix}sound49
├ ${prefix}sound50
├ ${prefix}sound51
├ ${prefix}sound52
├ ${prefix}sound53
├ ${prefix}sound54
├ ${prefix}sound55
├ ${prefix}sound56
├ ${prefix}sound57
├ ${prefix}sound58
├ ${prefix}sound59
├ ${prefix}sound60
├ ${prefix}sound61
├ ${prefix}sound62
├ ${prefix}sound63
├ ${prefix}sound64
├ ${prefix}sound65
├ ${prefix}sound66
├ ${prefix}sound67
├ ${prefix}sound68
├ ${prefix}sound69
╰❒ ${prefix}sound70

╭─❒ 「 TqTo 」 
├ My God
├ My Parents
├ Fatih A.
├ Ferdi
├ DikaArdnt
├ Mhankbarbar
├ Nurutomo
├ Rashid
├ ZeeoneOfc
├ Penyedia Module
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
├ 𝖴𝗆𝗎𝗋 :
├ 𝖦𝖾𝗇𝖽𝖾𝗋 :
├ 𝖠𝗌𝗄𝗈𝗍 :
╰❒ 𝖯𝖺𝗍𝗎𝗁𝗂 𝗋𝗎𝗅𝖾𝗌 𝗀𝗋𝗎𝗉 𝗒𝖺 𝗄𝖺k ~`
}
exports.leave = () =>{
	return`Yah kok out 😣 Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`*------「 SOURCE CODE 」 ------*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://youtube.com/playlist?list=PLFCglBzFPHG7vSQaa9S3P8yfla_d9w-2-
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
	return`╭─❒ 「 Bot Info 」 
├ ${prefix}owner
├ ${prefix}rules
├ ${prefix}sc
├ ${prefix}ping
├ ${prefix}runtime
├ ${prefix}botstatus
╰❒ ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`╭─❒ 「 Owner 」 
├ < evaluate
├ > evaluate
├ $ exec
├ => exec
├ ${prefix}setmenu [query]
├ ${prefix}setmenu templateLocation
├ ${prefix}setmenu templateTenor
├ ${prefix}setmenu katalog
├ ${prefix}setmenu katalog2
├ ${prefix}setmenu list
├ ${prefix}setwm packname|author
├ ${prefix}sendsesi
├ ${prefix}listpc
├ ${prefix}listgc
├ ${prefix}broadcast [text]
├ ${prefix}bc [text]
├ ${prefix}bcgc [text]
├ ${prefix}nsfw [on/off]
├ ${prefix}mute [on/off]
├ ${prefix}banchat
├ ${prefix}unbanchat
├ ${prefix}autorespond [on/off]
├ ${prefix}antiviewonce [on/off]
├ ${prefix}autobio [on/off]
├ ${prefix}join [link]
├ ${prefix}self
├ ${prefix}public [only bot]
├ ${prefix}del [pesan bot]
╰❒ ${prefix}setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`╭─❒ 「 Database 」 
├ ${prefix}setcmd [reply stiker]
├ ${prefix}delcmd [reply stiker]
├ ${prefix}listcmd
├ ${prefix}absen
├ ${prefix}cekabsen
├ ${prefix}deleteabsen
├ ${prefix}absenstart
├ ${prefix}addmsg [nama file]
├ ${prefix}getmsg [nama file]
├ ${prefix}listmsg
╰❒ ${prefix}delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`╭─❒ 「 Group 」 
├ ${prefix}listonline
├ ${prefix}sider
├ ${prefix}wm packname|author
├ ${prefix}infochat
├ ${prefix}setdesk [text]
├ ${prefix}setppgrup [reply image]
├ ${prefix}revoke
├ ${prefix}leave
├ ${prefix}add [62***]
├ ${prefix}kick @tag
├ ${prefix}leave
├ ${prefix}linkgc
├ ${prefix}welcome [on/off]
├ ${prefix}goodbye [on/off]
├ ${prefix}nsfw [on/off]
├ ${prefix}antilink [on/off]
├ ${prefix}take packname|author
├ ${prefix}group [open/close]
├ ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`╭─❒ 「 Anime 」 
├ ${prefix}quotesanime
├ ${prefix}anime [query]
├ ${prefix}manga [query]
╰❒ ${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`╭─❒ 「 Tag 」 
├ ${prefix}stickertag
├ ${prefix}videotag [query]
├ ${prefix}vntag [query]
╰❒ ${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`╭─❒ 「 Stalking 」 
├ ${prefix}igstalk [username]
├ ${prefix}ghstalk [username]
╰❒ ${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`╭─❒ 「 Search 」 
├ ${prefix}ytsearch [query]
├ ${prefix}wallpaper [query]
├ ${prefix}google [query]
├ ${prefix}wikimedia [query]
├ ${prefix}hentai
├ ${prefix}wattpad [query]
├ ${prefix}webtoons [query]
├ ${prefix}drakor [query]
╰❒ ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`╭─❒ 「 Converter 」 
├ ${prefix}emoji [😭]
├ ${prefix}emojimix [😭+💩]
├ ${prefix}toaudio [video]
├ ${prefix}tomp3 [video]
├ ${prefix}tovn [video]
├ ${prefix}stiker [reply image]
├ ${prefix}tourl [image/video]
├ ${prefix}togif [sticker]
├ ${prefix}tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`╭─❒ 「 Image Effect 」 
├ ${prefix}wanted [reply image/stiker]
├ ${prefix}utatoo [reply image/stiker]
├ ${prefix}unsharpen [reply image/stiker]
├ ${prefix}thanos [reply image/stiker]
├ ${prefix}sniper [reply image/stiker]
├ ${prefix}sharpen [reply image/stiker]
├ ${prefix}sepia [reply image/stiker]
├ ${prefix}scary [reply image/stiker]
├ ${prefix}rip [reply image/stiker]
├ ${prefix}redple [reply image/stiker]
├ ${prefix}rejected [reply image/stiker]
├ ${prefix}posterize [reply image/stiker]
├ ${prefix}ps4 [reply image/stiker]
├ ${prefix}pixelize [reply image/stiker]
├ ${prefix}missionpassed [reply image/stiker]
├ ${prefix}moustache [reply image/stiker]
├ ${prefix}lookwhatkarenhave [reply image/stiker]
├ ${prefix}jail [reply image/stiker]
├ ${prefix}invert [reply image/stiker]
├ ${prefix}instagram [reply image/stiker]
├ ${prefix}greyscale [reply image/stiker]
├ ${prefix}glitch [reply image/stiker]
├ ${prefix}gay [reply image/stiker]
├ ${prefix}frame [reply image/stiker]
├ ${prefix}fire [reply image/stiker]
├ ${prefix}distort [reply image/stiker]
├ ${prefix}dictator [reply image/stiker]
├ ${prefix}deepfry [reply image/stiker]
├ ${prefix}ddungeon [reply image/stiker]
├ ${prefix}circle [reply image/stiker]
├ ${prefix}challenger [reply image/stiker]
├ ${prefix}burn [reply image/stiker]
├ ${prefix}brazzers [reply image/stiker]
╰❒ ${prefix}beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`╭─❒ 「 Sticker Effect 」 
├ ${prefix}jail [reply image/stiker]
├ ${prefix}red [reply image/stiker]
├ ${prefix}gay [reply image/stiker]
├ ${prefix}bloo [reply image/stiker]
├ ${prefix}blue [reply image/stiker]
├ ${prefix}sepia [reply image/stiker]
├ ${prefix}green [reply image/stiker]
├ ${prefix}glass [reply image/stiker]
├ ${prefix}invert [reply image/stiker]
├ ${prefix}blurple [reply image/stiker]
├ ${prefix}blurple2 [reply image/stiker]
├ ${prefix}wasted [reply image/stiker]
├ ${prefix}passed [reply image/stiker]
├ ${prefix}triggered [reply image/stiker]
├ ${prefix}comrade [reply image/stiker]
├ ${prefix}greyscale [reply image/stiker]
├ ${prefix}threshold [reply image/stiker]
├ ${prefix}brightness [reply image/stiker]
╰❒ ${prefix}invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`╭─❒ 「 Download 」 
├ ${prefix}tiktok [link]
├ ${prefix}tiktoknowm [link]
├ ${prefix}tiktokwm [link]
├ ${prefix}tiktokaudio [link]
├ ${prefix}ytdl [link]
├ ${prefix}play [query]
├ ${prefix}ytmp3 [link]
├ ${prefix}ytshortmp3 [link]
├ ${prefix}ytmp4 [link]
├ ${prefix}ytshorts [link]
├ ${prefix}facebook [link]
├ ${prefix}facebooksd [link]
├ ${prefix}facebookhd [link]
├ ${prefix}fbaudio [link]
├ ${prefix}igstory [username]
├ ${prefix}igdl [link]
├ ${prefix}igphoto [link]
├ ${prefix}igvideo [link]
├ ${prefix}igreels [link]
├ ${prefix}igtv [link]
├ ${prefix}soundcloud [link]
├ ${prefix}gitclone [link repo]
├ ${prefix}gitrepo [username repo branch]
├ ${prefix}mediafire [link]
╰❒ ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`╭─❒ 「 Random Anime 」
├ ${prefix}loli
├ ${prefix}neko
├ ${prefix}waifu
├ ${prefix}shinobu
├ ${prefix}megumin
├ ${prefix}bully
├ ${prefix}cuddle
├ ${prefix}cry
├ ${prefix}hug
├ ${prefix}awoo
├ ${prefix}kiss
├ ${prefix}lick
├ ${prefix}pat
├ ${prefix}smug
├ ${prefix}bonk
├ ${prefix}yeet
├ ${prefix}blush
├ ${prefix}smile
├ ${prefix}wave
├ ${prefix}highfive
├ ${prefix}handhold
├ ${prefix}nom
├ ${prefix}bite
├ ${prefix}glomp
├ ${prefix}slap
├ ${prefix}kill
├ ${prefix}happy
├ ${prefix}wink
├ ${prefix}poke
├ ${prefix}dance
╰❒ ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`╭─❒ 「 Nsfw & Sfw 」
├ ${prefix}cuddle
├ ${prefix}feed
├ ${prefix}foxgirl
├ ${prefix}kemonomimi2
├ ${prefix}woof
├ ${prefix}holo2
├ ${prefix}hug
├ ${prefix}kiss
├ ${prefix}lizard
├ ${prefix}meowi
├ ${prefix}neko2
├ ${prefix}pat
├ ${prefix}poke
├ ${prefix}slap
├ ${prefix}tickle
├ ${prefix}baka
├ ${prefix}smug
├ ${prefix}neko_sfw
├ ${prefix}hentai
├ ${prefix}hentai_gif
├ ${prefix}spank
├ ${prefix}blowjob
├ ${prefix}cumarts
├ ${prefix}eroyuri
├ ${prefix}eroneko
├ ${prefix}erokemonomimi
├ ${prefix}erokitsune
├ ${prefix}ero
├ ${prefix}feet
├ ${prefix}erofeet
├ ${prefix}feetgif
├ ${prefix}femdom
├ ${prefix}futanari
├ ${prefix}hentai
├ ${prefix}holoero
├ ${prefix}holo
├ ${prefix}keta
├ ${prefix}kitsune
├ ${prefix}kemonomimi
├ ${prefix}pussyart
├ ${prefix}pussywankgif
├ ${prefix}girl_solo
├ ${prefix}girl_solo_gif
├ ${prefix}tits
├ ${prefix}trap
├ ${prefix}yuri
├ ${prefix}avatar2
├ ${prefix}anal
├ ${prefix}bj
├ ${prefix}boobs
├ ${prefix}classic
├ ${prefix}cumsluts
├ ${prefix}kuni
├ ${prefix}lesbian
├ ${prefix}neko
├ ${prefix}neko_gif
├ ${prefix}ahegao
├ ${prefix}bdsm
├ ${prefix}cuckold
├ ${prefix}cum
├ ${prefix}foot
├ ${prefix}gangbang
├ ${prefix}glasses
├ ${prefix}jahy
├ ${prefix}masturbation
├ ${prefix}nsfw_neko
├ ${prefix}orgy
├ ${prefix}panties
├ ${prefix}tentacles
├ ${prefix}thighs
╰❒ ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`╭─❒ 「 Textpro Menu 」
├ ${prefix}halloween2 text|text2
├ ${prefix}horror text|text2
├ ${prefix}game8bit text|text2
├ ${prefix}layered text|text2
├ ${prefix}glitch2 text|text2
├ ${prefix}coolg text|text2
├ ${prefix}coolwg text|text2
├ ${prefix}realistic text|text2
├ ${prefix}space3d text|text2
├ ${prefix}gtiktok text|text2
├ ${prefix}stone text|text2
├ ${prefix}marvel text|text2
├ ${prefix}marvel2 text|text2
├ ${prefix}pornhub text|text2
├ ${prefix}avengers text|text2
├ ${prefix}metalr text|text2
├ ${prefix}metalg text|text2
├ ${prefix}metalg2 text|text2
├ ${prefix}halloween2 text|text2
├ ${prefix}lion text|text2
├ ${prefix}wolf_bw text|text2
├ ${prefix}wolf_g text|text2
├ ${prefix}ninja text|text2
├ ${prefix}3dsteel text|text2
├ ${prefix}horror2 text|text2
├ ${prefix}lava text|text2
├ ${prefix}bagel text|text2
├ ${prefix}blackpink text
├ ${prefix}rainbow2 text
├ ${prefix}water_pipe text
├ ${prefix}halloween text
├ ${prefix}sketch text
├ ${prefix}sircuit text
├ ${prefix}discovery text
├ ${prefix}metallic2 text
├ ${prefix}fiction text
├ ${prefix}demon text
├ ${prefix}transformer text
├ ${prefix}berry text
├ ${prefix}thunder text
├ ${prefix}magma text
├ ${prefix}3dstone text
├ ${prefix}neon text
├ ${prefix}glitch text
├ ${prefix}harry_potter text
├ ${prefix}embossed text
├ ${prefix}broken text
├ ${prefix}papercut text
├ ${prefix}gradient text
├ ${prefix}glossy text
├ ${prefix}watercolor text
├ ${prefix}multicolor text
├ ${prefix}neon_devil text
├ ${prefix}underwater text
├ ${prefix}bear text
├ ${prefix}wonderfulg text
├ ${prefix}christmas text
├ ${prefix}neon_light text
├ ${prefix}snow text
├ ${prefix}cloudsky text
├ ${prefix}luxury2 text
├ ${prefix}gradient2 text
├ ${prefix}summer text
├ ${prefix}writing text
├ ${prefix}engraved text
├ ${prefix}summery text
├ ${prefix}3dglue text
├ ${prefix}metaldark text
├ ${prefix}neonlight text
├ ${prefix}oscar text
├ ${prefix}minion text
├ ${prefix}holographic text
├ ${prefix}purple text
├ ${prefix}glossyb text
├ ${prefix}deluxe2 text
├ ${prefix}glossyc text
├ ${prefix}fabric text
├ ${prefix}neonc text
├ ${prefix}newyear text
├ ${prefix}newyear2 text
├ ${prefix}metals text
├ ${prefix}xmas text
├ ${prefix}blood text
├ ${prefix}darkg text
├ ${prefix}joker text
├ ${prefix}wicker text
├ ${prefix}natural text
├ ${prefix}firework text
├ ${prefix}skeleton text
├ ${prefix}balloon text
├ ${prefix}balloon2 text
├ ${prefix}balloon3 text
├ ${prefix}balloon4 text
├ ${prefix}balloon5 text
├ ${prefix}balloon6 text
├ ${prefix}balloon7 text
├ ${prefix}steel text
├ ${prefix}gloss text
├ ${prefix}denim text
├ ${prefix}decorate text
├ ${prefix}decorate2 text
├ ${prefix}peridot text
├ ${prefix}rock text
├ ${prefix}glass text
├ ${prefix}glass2 text
├ ${prefix}glass3 text
├ ${prefix}glass4 text
├ ${prefix}glass5 text
├ ${prefix}glass6 text
├ ${prefix}glass7 text
├ ${prefix}glass8 text
├ ${prefix}captain_as2 text
├ ${prefix}robot text
├ ${prefix}equalizer text
├ ${prefix}toxic text
├ ${prefix}sparkling text
├ ${prefix}sparkling2 text
├ ${prefix}sparkling3 text
├ ${prefix}sparkling4 text
├ ${prefix}sparkling5 text
├ ${prefix}sparkling6 text
├ ${prefix}sparkling7 text
├ ${prefix}decorative text
├ ${prefix}chocolate text
├ ${prefix}strawberry text
├ ${prefix}koifish text
├ ${prefix}bread text
├ ${prefix}matrix text
├ ${prefix}blood2 text
├ ${prefix}neonligth2 text
├ ${prefix}thunder2 text
├ ${prefix}3dbox text
├ ${prefix}neon2 text
├ ${prefix}roadw text
├ ${prefix}bokeh text
├ ${prefix}gneon text
├ ${prefix}advanced text
├ ${prefix}dropwater text
├ ${prefix}wall text
├ ${prefix}chrismast text
├ ${prefix}honey text
├ ${prefix}drug text
├ ${prefix}marble text
├ ${prefix}marble2 text
├ ${prefix}ice text
├ ${prefix}juice text
├ ${prefix}rusty text
├ ${prefix}abstra text
├ ${prefix}biscuit text
├ ${prefix}wood text
├ ${prefix}scifi text
├ ${prefix}metalr text
├ ${prefix}purpleg text
├ ${prefix}shiny text 
├ ${prefix}jewelry text
├ ${prefix}jewelry2 text
├ ${prefix}jewelry3 text
├ ${prefix}jewelry4 text
├ ${prefix}jewelry5 text
├ ${prefix}jewelry6 text
├ ${prefix}jewelry7 text
├ ${prefix}jewelry8 text
├ ${prefix}metalh text
├ ${prefix}golden text
├ ${prefix}glitter text
├ ${prefix}glitter2 text
├ ${prefix}glitter3 text
├ ${prefix}glitter4 text
├ ${prefix}glitter5 text
├ ${prefix}glitter6 text
├ ${prefix}glitter7 text
├ ${prefix}metale text
├ ${prefix}carbon text
├ ${prefix}candy text
├ ${prefix}metalb text
├ ${prefix}gemb text
├ ${prefix}3dchrome text
├ ${prefix}metalb2 text
├ ${prefix}metalg text
╰❒ ${prefix}metalg text
`
}


exports.other = (prefix) =>{
return`╭─❒ 「 Others 」
├ ${prefix}ttp [text]
├ ${prefix}attp [text]
├ ${prefix}afk [reason]
├ ${prefix}translate kode_bahasa text
├ ${prefix}kalkulator [query]
├ ${prefix}smeme [text]
├ ${prefix}smeme2 [text|text]
╰❒ ${prefix}memegen [text|text]
`
}
exports.game = (prefix) =>{
return`╭─❒ 「 Game Menu 」
├ ${prefix}kuismath
├ ${prefix}tebak [option]
├ ${prefix}tekateki
├ ${prefix}susunkata
╰❒ ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`╭─❒ 「 Asupan Menu 」
├ ${prefix}chika
├ ${prefix}delvira
├ ${prefix}ayu
├ ${prefix}bunga
├ ${prefix}aura
├ ${prefix}nisa
├ ${prefix}ziva
├ ${prefix}yana
├ ${prefix}viona
├ ${prefix}syania
├ ${prefix}riri
├ ${prefix}syifa
├ ${prefix}mama_gina
├ ${prefix}alcakenya
├ ${prefix}mangayutri
├ ${prefix}rikagusriani
├ ${prefix}asupan
├ ${prefix}bocil
├ ${prefix}geayubi
├ ${prefix}santuy
├ ${prefix}ukhty
╰❒ ${prefix}syifa
`
}
exports.cecan = (prefix) =>{
return`╭─❒ 「 Random Cewe 」
├ ${prefix}china 
├ ${prefix}indonesia 
├ ${prefix}malaysia 
├ ${prefix}thailand 
├ ${prefix}korea 
├ ${prefix}japan 
├ ${prefix}vietnam 
├ ${prefix}jenni 
├ ${prefix}jiso 
├ ${prefix}lisa  
╰❒ ${prefix}rose
`
}

exports.tqto = () =>{
	return`╭─❒ 「 TqTo 」 
├ My God
├ My Parents
├ Fatih A.
├ Ferdi
├ DikaArdnt
├ Mhankbarbar
├ Nurutomo
├ Rashid
├ ZeeoneOfc
├ Penyedia Module
╰❒ And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`╭─❒ 「 Primbon 」
├ ${prefix}nomorhoki 887435047326
├ ${prefix}artimimpi [query]
├ ${prefix}artinama [query]
├ ${prefix}ramaljodoh
├ ${prefix}ramaljodohbali
├ ${prefix}suamiistri
├ ${prefix}ramalcinta
├ ${prefix}cocoknama
├ ${prefix}pasangan
├ ${prefix}jadiannikah
├ ${prefix}sifatusaha
├ ${prefix}rezeki
├ ${prefix}pekerjaan
├ ${prefix}nasib
├ ${prefix}penyakit
├ ${prefix}tarot
├ ${prefix}fengshui
├ ${prefix}haribaik
├ ${prefix}harisangar
├ ${prefix}harisial
├ ${prefix}nagahari
├ ${prefix}arahrezeki
├ ${prefix}peruntungan
├ ${prefix}weton
├ ${prefix}karakter
├ ${prefix}keberuntungan
├ ${prefix}memancing
├ ${prefix}masasubur
├ ${prefix}zodiak 
╰❒ ${prefix}shio [query]
`
}

exports.stcmenu = (prefix) =>{
	return`╭─❒ 「 Telegram Sticker 」
├ ${prefix}awoawo
├ ${prefix}benedict
├ ${prefix}chat
├ ${prefix}dbfly
├ ${prefix}dino_kuning
├ ${prefix}doge
├ ${prefix}gojosatoru
├ ${prefix}hope_boy
├ ${prefix}jisoo
├ ${prefix}kr_robot
├ ${prefix}kucing
├ ${prefix}lonte
├ ${prefix}manusia_lidi
├ ${prefix}menjamet
├ ${prefix}meow
├ ${prefix}nicholas
├ ${prefix}patrick
├ ${prefix}popoci
├ ${prefix}sponsbob
├ ${prefix}kawan_sponsbob
╰❒ ${prefix}tyni
`}

exports.ephotomenu = (prefix) =>{
	return`╭─❒ 「 Ephoto360 Menu 」
├ ${prefix}youtubegold text
├ ${prefix}youtubesilver text
├ ${prefix}facebookgold text
├ ${prefix}facebooksilver text
├ ${prefix}instagramgold text
├ ${prefix}instagramsilver text
├ ${prefix}twittergold text
├ ${prefix}twittersilver text
├ ${prefix}retrotext text
├ ${prefix}halloweenbats text
├ ${prefix}texthalloween text
├ ${prefix}cardhalloween text
├ ${prefix}birthdaycake text
├ ${prefix}thundertext text
├ ${prefix}icetext text
├ ${prefix}milkcake text
├ ${prefix}snowontext text
├ ${prefix}metalstar text
├ ${prefix}dragonfire text
├ ${prefix}zombie3d text
├ ${prefix}merrycard text
├ ${prefix}generalexam text 
├ ${prefix}viettel text
├ ${prefix}embroider text
├ ${prefix}graffititext text
├ ${prefix}graffititext2 text
├ ${prefix}graffititext3 text
├ ${prefix}covergraffiti text
├ ${prefix}moderngold text
├ ${prefix}capercut text
├ ${prefix}lovecard text
├ ${prefix}heartflashlight text
├ ${prefix}heartcup text
├ ${prefix}sunglightshadow text
├ ${prefix}graffiti3d text
├ ${prefix}moderngoldsilver text
├ ${prefix}moderngold2 text
├ ${prefix}moderngold3 text
├ ${prefix}fabrictext text
├ ${prefix}masteryavatar text
├ ${prefix}messagecoffee text
├ ${prefix}announofwin text
├ ${prefix}writeblood text
├ ${prefix}horrorletter text
├ ${prefix}writehorror text
├ ${prefix}shirtclub text
├ ${prefix}angelwing text
├ ${prefix}christmasseason text
├ ${prefix}projectyasuo text
├ ${prefix}lovelycute text
├ ${prefix}womansday text
├ ${prefix}covergamepubg text
├ ${prefix}nameonheart text
├ ${prefix}funnyhalloween text
├ ${prefix}lightningpubg text
├ ${prefix}greetingcardvideo text 
├ ${prefix}christmascard text 
├ ${prefix}galaxybat text
├ ${prefix}writegalaxy text
├ ${prefix}starsnight text
├ ${prefix}noeltext text
├ ${prefix}textcakes text
├ ${prefix}pubgbirthday text
├ ${prefix}galaxywallpaper text
├ ${prefix}pubgglicthvideo text 
├ ${prefix}pubgmascotlogo text
├ ${prefix}realembroidery text
├ ${prefix}vintagetelevision text
├ ${prefix}funnyanimations text
├ ${prefix}glowingtext text
├ ${prefix}textonglass text
├ ${prefix}cartoonstyle text
├ ${prefix}multicolor text
├ ${prefix}watercolor2 text
├ ${prefix}textsky text
├ ${prefix}summerbeach text
├ ${prefix}1917text text
├ ${prefix}puppycute text
├ ${prefix}rosebirthday text
├ ${prefix}steellettering text|text2
├ ${prefix}letterstext text|text2
├ ${prefix}barcashirt text|text2
├ ${prefix}premiercup text|text2
├ ${prefix}stylepoligon text|text2
├ ${prefix}lifebuoys text|text2
╰❒ ${prefix}juventusshirt text|text2`
}

exports.logomenu = (prefix) =>{
	return`╭─❒ 「 Logo Menu 」
├ ${prefix}coverbannerlol text|heroes
├ ${prefix}pubglogomaker text|style
├ ${prefix}colorfulpubg text|color
├ ${prefix}astronotspace text|style
├ ${prefix}wallpaperaov text|heroes
├ ${prefix}maketeamlogo text|style
├ ${prefix}circlemarcotteam text|logo
├ ${prefix}wallpaperml text|heroes
├ ${prefix}dragonballfb text|character
├ ${prefix}bannerofaov text|character
├ ${prefix}effect3donbeach text|background
├ ${prefix}cutegirlgamer text|logo
├ ${prefix}footballteam text|logo
├ ${prefix}beautifulshimmering text|champion
├ ${prefix}pubgcutelogo text|logo
├ ${prefix}elegantrotation text|logo
├ ${prefix}logogamingassasin text|logo
├ ${prefix}introvideomaker text|logo
├ ${prefix}gaminglogo4fvs text|logo
├ ${prefix}blueneon text|logo
├ ${prefix}metalmascot text|logo
├ ${prefix}anonymous2 text|style
├ ${prefix}lolpentakill text|style
├ ${prefix}avatarleagueofking text|style
├ ${prefix}avatarff text|character
├ ${prefix}overwatchwallpaper text|character
├ ${prefix}rovwallpaperhd text|hero
├ ${prefix}rovwallpaper text|avatar
├ ${prefix}beautifulgalaxylol text|style
├ ${prefix}crossfirecover text|character
├ ${prefix}lolwallpaper text|wallpaper
├ ${prefix}coverdota2 text|heroes
├ ${prefix}coverleagueofking text|character
├ ${prefix}avatar3q360 text|avatar
├ ${prefix}coverofwarface text|character
├ ${prefix}newlolavatar text|avatar
├ ${prefix}csgocover text|background
├ ${prefix}coverloknew text|hero
├ ${prefix}coverfblol text|letters
├ ${prefix}overwatchcover text|hero
├ ${prefix}crossfirestyle text|avatar
├ ${prefix}avatarlolbyname text|style
├ ${prefix}lolcoverbyname text|avatar
├ ${prefix}cyberhunterfb text|character
├ ${prefix}coverfreefirefb text|character
├ ${prefix}gamingmascot text|style
├ ${prefix}coveronepiecefb text|character
├ ${prefix}bannerytcsgo text|banner
├ ${prefix}fbgamepubgcover text|template
├ ${prefix}banneroflol text|text2|banner
├ ${prefix}bannerofaov2 text|text2|banner
├ ${prefix}teamlogo text|text2|background
├ ${prefix}companylogo2 text|text2|background
├ ${prefix}companylogo text|text2|background
├ ${prefix}gradientlogo text|text2|background
├ ${prefix}pencilsketch text|text2|icon
├ ${prefix}gunlogogaming text|text2|background
├ ${prefix}banneroffreefire text|text2|background
├ ${prefix}letterlogos text|text2|thumb
├ ${prefix}bannerofoverwatch text|text2|background
├ ${prefix}bannerofapex text|text2|background
├ ${prefix}bannerofpubg text|text2|background
├ ${prefix}mascotstyle text|text2|thumb
├ ${prefix}logoaccording text|text2|thumb
╰❒ ${prefix}avataroverwatch text|text2|thumb
`
}

exports.islammenu = (prefix) =>{
	return`╭─❒ 「 Islamic Menu 」
├ ${prefix}asmaulhusna
├ ${prefix}kisahnabi [nabi]
├ ${prefix}jadwalshalat [daerah]
├ ${prefix}randomquran
├ ${prefix}randomquran2
├ ${prefix}listsurah
├ ${prefix}tafsirsurah [surah]
╰❒ ${prefix}alquranaudio [surah|ayat]
`
}
exports.anonchat = (prefix) =>{
	return`╭─❒ 「 Anonymous 」
├ ${prefix}anonymous 
├ ${prefix}start
├ ${prefix}skip [daerah]
╰❒ ${prefix}stop [surah|ayat]
`
}

exports.storemenu = (prefix) =>{
	return`╭─❒ 「 Store Menu 」
├ ${prefix}list
├ ${prefix}addlist [key|respond]
├ ${prefix}dellist [key]
├ ${prefix}update [key|respond]
├ ${prefix}store
├ ${prefix}kali
├ ${prefix}bagi
├ ${prefix}tambah
├ ${prefix}kurang
├ ${prefix}kalkulator
├ ${prefix}proses
╰❒ ${prefix}done
`
}

exports.voiceChange = (prefix) =>{
	return`╭─❒ 「 Voice Change Menu 」
├ ${prefix}bass
├ ${prefix}blown
├ ${prefix}deep
├ ${prefix}earrape
├ ${prefix}fast
├ ${prefix}fat
├ ${prefix}nightcore
├ ${prefix}reverse
├ ${prefix}robot
├ ${prefix}slow
├ ${prefix}smooth
╰❒ ${prefix}tupai
`
}
exports.storagemenu = (prefix) =>{
	return`╭─❒ 「 Storage Menu 」
├ ${prefix}addvn
├ ${prefix}listvn
├ ${prefix}addimage
├ ${prefix}listimage
├ ${prefix}addvideo
├ ${prefix}listvideo
├ ${prefix}addstik
╰❒ ${prefix}liststik
`
}


exports.soundmenu = (prefix) =>{
return`╭─❒ 「 Sound Menu 」
├ ${prefix}sound1
├ ${prefix}sound2
├ ${prefix}sound3
├ ${prefix}sound4
├ ${prefix}sound5
├ ${prefix}sound6
├ ${prefix}sound7
├ ${prefix}sound8
├ ${prefix}sound9
├ ${prefix}sound10
├ ${prefix}sound11
├ ${prefix}sound12
├ ${prefix}sound13
├ ${prefix}sound14
├ ${prefix}sound15
├ ${prefix}sound16
├ ${prefix}sound17
├ ${prefix}sound18 
├ ${prefix}sound19
├ ${prefix}sound20
├ ${prefix}sound21
├ ${prefix}sound22
├ ${prefix}sound23
├ ${prefix}sound24
├ ${prefix}sound25
├ ${prefix}sound26
├ ${prefix}sound27
├ ${prefix}sound28
├ ${prefix}sound29
├ ${prefix}sound30
├ ${prefix}sound31
├ ${prefix}sound32
├ ${prefix}sound33
├ ${prefix}sound34
├ ${prefix}sound35
├ ${prefix}sound36
├ ${prefix}sound37
├ ${prefix}sound38
├ ${prefix}sound39
├ ${prefix}sound40
├ ${prefix}sound41
├ ${prefix}sound42
├ ${prefix}sound43
├ ${prefix}sound44
├ ${prefix}sound45
├ ${prefix}sound46
├ ${prefix}sound47
├ ${prefix}sound48
├ ${prefix}sound49
├ ${prefix}sound50
├ ${prefix}sound51
├ ${prefix}sound52
├ ${prefix}sound53
├ ${prefix}sound54
├ ${prefix}sound55
├ ${prefix}sound56
├ ${prefix}sound57
├ ${prefix}sound58
├ ${prefix}sound59
├ ${prefix}sound60
├ ${prefix}sound61
├ ${prefix}sound62
├ ${prefix}sound63
├ ${prefix}sound64
├ ${prefix}sound65
├ ${prefix}sound66
├ ${prefix}sound67
├ ${prefix}sound68
├ ${prefix}sound69
╰❒ ${prefix}sound70
`
}
