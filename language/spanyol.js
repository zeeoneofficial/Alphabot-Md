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
🛄 Last claim: ${lastclaim > 0 ? + tanggal__(lastclaim) : ''}`
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
	return`El número de serie (sn) es incorrecto`
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
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*⌚Time Server : ${time}*
*📚 List-Menu Alphabot-Md :*

╭─❒ 「 Bot Info 」 
│○ !owner
│○ !rules
│○ !sc
│○ !ping
│○ !runtime
│○ !botstatus
╰❒ !donate


╭─❒ 「 Owner 」 
│○ !setmenu [query]
│○ !setmenu katalog
│○ !setmenu katalog2
│○ !setmenu list
│○ !setwm packname|author
│○ !sendsesi
│○ !listpc
│○ !listgc
│○ !broadcast [text]
│○ !bc [text]
│○ !bcgc 
│○ !bcimage
│○ !bcaudio
│○ !bcstiker
│○ !bcvn
│○ !bcvideo
│○ !banuser
│○ !unban
│○ !banned
│○ !listbanned
│○ !block
│○ !ublock
│○ !listblock
│○ !addpremium
│○ !delpremium
│○ !listpremium
│○ !nsfw [on/off]
│○ !mute [on/off]
│○ !autoblok212 [on/off]
│○ !banchat
│○ !unbanchat
│○ !autorespond [on/off]
│○ !antiviewonce [on/off]
│○ !autobio [on/off]
│○ !anticall [on/off]
│○ !join [link]
│○ !self
│○ !public [only bot]
│○ !del [reply pesan bot]
│○ !pppanjang
│○ !setpppanjang
╰❒ !setppbot [reply image]

╭─❒ 「 Store Menu 」
│○ !list
│○ !addlist [key|respond]
│○ !dellist [key]
│○ !update [key|respond]
│○ !store
│○ !kali
│○ !bagi
│○ !tambah
│○ !kurang
│○ !kalkulator
│○ !setproses
│○ !updateproses
│○ !cekproses
│○ !delproses
│○ !setdone
│○ !updatedone
│○ !cekdone
│○ !deldone
│○ !pay
│○ !setcaptionpay
│○ !setpaysewa
│○ !proses
╰❒ !done

╭─❒ 「 Anonymous 」
│○ !menfess
│○ !anonymous 
│○ !start
│○ !skip [daerah]
╰❒ !stop [surah|ayat]


╭─❒ 「 Database 」 
│○ !setcmd [reply stiker]
│○ !delcmd [reply stiker]
│○ !listcmd
│○ !absen
│○ !cekabsen
│○ !deleteabsen
│○ !absenstart
│○ !addmsg [nama file]
│○ !getmsg [nama file]
│○ !listmsg
╰❒ !delmsg [nama file]

╭─❒ 「 Rpg Games 」
│○ !adventure
│○ !weekly
│○ !use
│○ !transfer
│○ !slot
│○ !shop
│○ !pasar
│○ !profile
│○ !ojek
│○ !open
│○ !nguli
│○ !narik
│○ !nabung
│○ !monthly
│○ !mining
│○ !merampok
│○ !mancing
│○ !kolam
│○ !koboy
│○ !kerja
│○ !kandang
│○ !judi
│○ !inventory
│○ !hourly
│○ !fishop
│○ !feed
│○ !duel
│○ !daily
│○ !craft
│○ !cooldown
│○ !cook
│○ !collect
│○ !chop
│○ !casino
│○ !buy
│○ !bank 
│○ !bansos
│○ !berdagang
│○ !berkebon
╰❒ !build


╭─❒ 「 Group 」 
│○ !addsewa
│○ !delsewa
│○ !listsewa
│○ !ceksewa
│○ !delsewa
│○ !register
│○ !unregister
│○ !ceksn
│○ !listonline
│○ !sider
│○ !wm packname|author
│○ !infochat
│○ !setdesk [text]
│○ !setppgrup [reply image]
│○ !pppanjanggc
│○ !setpppanjanggc
│○ !revoke
│○ !leave
│○ !add [62***]
│○ !kick @tag
│○ !leave
│○ !linkgc
│○ !welcome [on/off]
│○ !goodbye [on/off]
│○ !demotedetect [on/off]
│○ !promotedetect  [on/off]
│○ !setwelcome
│○ !updatewelcome
│○ !delwelcome
│○ !cekwelcome
│○ !setgoodbye
│○ !updategoodbye
│○ !delgoodbye
│○ !cekgoodbye
│○ !setpromote
│○ !updatepromote
│○ !setdemote
│○ !updatedemote
│○ !cekpromote
│○ !cekdemote
│○ !delpromote
│○ !deldemote
│○ !nsfw [on/off]
│○ !antilink [on/off]
│○ !take packname|author
│○ !group [open/close]
│○ !tagall [text]
╰❒ !hidetag [text]

╭─❒ 「 Anime 」 
│○ !quotesanime
│○ !anime [query]
│○ !animeinfo
│○ !manga [query]
╰❒ !character [query]

╭─❒ 「 Tag 」 
│○ !stickertag
│○ !videotag [query]
│○ !vntag [query]
╰❒ !imagetag [query]

╭─❒ 「 Stalking 」 
│○ !igstalk [username]
│○ !ghstalk [username]
╰❒ !ytstalk [channel]


╭─❒ 「 Search 」 
│○ !ytsearch [query]
│○ !wallpaper [query]
│○ !google [query]
│○ !wikimedia [query]
│○ !apksearch
│○ !findapk
│○ !hentai
│○ !wattpad [query]
│○ !webtoons [query]
│○ !drakor [query]
│○ !brainly [query]
╰❒ !pinterest [query]


╭─❒ 「 Converter 」
│○ !emoji [😭]
│○ !emojimix [😭+💩]
│○ !toaudio [video]
│○ !tomp3 [video]
│○ !tovn [video]
│○ !stiker [reply image]
│○ !tourl [image/video/stiker]
│○ !togif [sticker]
│○ !tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]


╭─❒ 「 Image Effect 」 
│○ !wanted [reply image/stiker]
│○ !utatoo [reply image/stiker]
│○ !unsharpen [reply image/stiker]
│○ !thanos [reply image/stiker]
│○ !sniper [reply image/stiker]
│○ !sharpen [reply image/stiker]
│○ !sepia [reply image/stiker]
│○ !scary [reply image/stiker]
│○ !rip [reply image/stiker]
│○ !redple [reply image/stiker]
│○ !rejected [reply image/stiker]
│○ !posterize [reply image/stiker]
│○ !ps4 [reply image/stiker]
│○ !pixelize [reply image/stiker]
│○ !missionpassed [reply image/stiker]
│○ !moustache [reply image/stiker]
│○ !lookwhatkarenhave [reply image/stiker]
│○ !jail [reply image/stiker]
│○ !invert [reply image/stiker]
│○ !instagram [reply image/stiker]
│○ !greyscale [reply image/stiker]
│○ !glitch2 [reply image/stiker]
│○ !gay [reply image/stiker]
│○ !frame [reply image/stiker]
│○ !fire [reply image/stiker]
│○ !distort [reply image/stiker]
│○ !dictator [reply image/stiker]
│○ !deepfry [reply image/stiker]
│○ !ddungeon [reply image/stiker]
│○ !circle [reply image/stiker]
│○ !challenger [reply image/stiker]
│○ !burn [reply image/stiker]
│○ !brazzers [reply image/stiker]
╰❒ !beautiful [reply image/stiker]


╭─❒ 「 Sticker Effect 」 
│○ !jail [reply image/stiker]
│○ !red [reply image/stiker]
│○ !gay [reply image/stiker]
│○ !bloo [reply image/stiker]
│○ !blue [reply image/stiker]
│○ !sepia [reply image/stiker]
│○ !green [reply image/stiker]
│○ !glass [reply image/stiker]
│○ !invert [reply image/stiker]
│○ !blurple [reply image/stiker]
│○ !blurple2 [reply image/stiker]
│○ !wasted [reply image/stiker]
│○ !passed [reply image/stiker]
│○ !triggered [reply image/stiker]
│○ !comrade [reply image/stiker]
│○ !greyscale [reply image/stiker]
│○ !threshold [reply image/stiker]
│○ !brightness [reply image/stiker]
╰❒ !invertgreyscale [reply image/stiker]


╭─❒ 「 Download 」 
│○ !tiktok [link]
│○ !tiktoknowm [link]
│○ !tiktokwm [link]
│○ !tiktokaudio [link]
│○ !ytdl [link]
│○ !play [query]
│○ !ytmp3 [link]
│○ !ytshortmp3 [link]
│○ !ytmp4 [link]
│○ !ytshorts [link]
│○ !facebook [link]
│○ !facebooksd [link]
│○ !facebookhd [link]
│○ !fbaudio [link]
│○ !igstory [username]
│○ !igdl [link]
│○ !igphoto [link]
│○ !igvideo [link]
│○ !igreels [link]
│○ !igtv [link]
│○ !soundcloud [link]
│○ !gitclone [link repo]
│○ !gitrepo [username repo branch]
│○ !mediafire [link]
╰❒ !twitter link

╭─❒ 「 Primbon 」
│○ !nomorhoki 887435047326
│○ !artimimpi [query]
│○ !artinama [query]
│○ !ramaljodoh
│○ !ramaljodohbali
│○ !suamiistri
│○ !ramalcinta
│○ !cocoknama
│○ !pasangan
│○ !jadiannikah
│○ !sifatusaha
│○ !rezeki
│○ !pekerjaan
│○ !nasib
│○ !penyakit
│○ !tarot
│○ !fengshui
│○ !haribaik
│○ !harisangar
│○ !harisial
│○ !nagahari
│○ !arahrezeki
│○ !peruntungan
│○ !weton
│○ !karakter
│○ !keberuntungan
│○ !memancing
│○ !masasubur
│○ !zodiak 
╰❒ !shio [query]

╭─❒ 「 Random Anime 」
│○ !loli
│○ !neko
│○ !waifu
│○ !shinobu
│○ !megumin
│○ !bully
│○ !cuddle
│○ !cry
│○ !hug
│○ !awoo
│○ !kiss
│○ !lick
│○ !pat
│○ !smug
│○ !bonk
│○ !yeet
│○ !blush
│○ !smile
│○ !wave
│○ !highfive
│○ !handhold
│○ !nom
│○ !bite
│○ !glomp
│○ !slap
│○ !kill
│○ !happy
│○ !wink
│○ !poke
│○ !dance
╰❒ !cringe

╭─❒ 「 Voice Change Menu 」
│○ !bass
│○ !blown
│○ !deep
│○ !earrape
│○ !fast
│○ !fat
│○ !nightcore
│○ !reverse
│○ !robot
│○ !slow
│○ !smooth
╰❒ !tupai

╭─❒ 「 Storage Menu 」
│○ !addvn
│○ !listvn
│○ !delvn
│○ !addimage
│○ !listimage
│○ !delimage
│○ !addvideo
│○ !listvideo
│○ !delvideo
│○ !addstik
│○ !delstik
╰❒ !liststik

╭─❒ 「 Nsfw & Sfw 」
│○ !cuddle
│○ !foxgirl
│○ !kemonomimi2
│○ !woof
│○ !holo2
│○ !hug
│○ !kiss
│○ !lizard
│○ !meowi
│○ !neko2
│○ !pat
│○ !poke
│○ !slap
│○ !tickle
│○ !baka
│○ !smug
│○ !neko_sfw
│○ !hentai
│○ !hentai_gif
│○ !spank
│○ !blowjob
│○ !cumarts
│○ !eroyuri
│○ !eroneko
│○ !erokemonomimi
│○ !erokitsune
│○ !ero
│○ !feet
│○ !erofeet
│○ !feetgif
│○ !femdom
│○ !futanari
│○ !holoero
│○ !holo
│○ !keta
│○ !kitsune
│○ !kemonomimi
│○ !pussyart
│○ !pussywankgif
│○ !girl_solo
│○ !girl_solo_gif
│○ !tits
│○ !trap
│○ !yuri
│○ !avatar2
│○ !anal
│○ !bj
│○ !boobs
│○ !classic
│○ !cumsluts
│○ !kuni
│○ !lesbian
│○ !neko
│○ !neko_gif
│○ !ahegao
│○ !bdsm
│○ !cuckold
│○ !cum
│○ !foot
│○ !gangbang
│○ !glasses
│○ !jahy
│○ !masturbation
│○ !nsfw_neko
│○ !orgy
│○ !panties
│○ !tentacles
│○ !thighs
╰❒ !zettai

╭─❒ 「 Ephoto360 Menu 」
│○ !youtubegold
│○ !youtubesilver
│○ !facebookgold
│○ !facebooksilver
│○ !instagramgold
│○ !instagramsilver
│○ !twittergold
│○ !twittersilver
│○ !retrotext
│○ !halloweenbats
│○ !texthalloween
│○ !cardhalloween
│○ !birthdaycake
│○ !thundertext
│○ !icetext
│○ !milkcake
│○ !snowontext
│○ !metalstar
│○ !dragonfire
│○ !zombie3d
│○ !merrycard
│○ !generalexam 
│○ !viettel
│○ !embroider
│○ !graffititext
│○ !graffititext2
│○ !graffititext3
│○ !covergraffiti
│○ !moderngold
│○ !capercut
│○ !lovecard
│○ !heartflashlight
│○ !heartcup
│○ !sunglightshadow
│○ !graffiti3d
│○ !moderngoldsilver
│○ !moderngold2
│○ !moderngold3
│○ !fabrictext
│○ !masteryavatar
│○ !messagecoffee
│○ !announofwin
│○ !writeblood
│○ !horrorletter
│○ !writehorror
│○ !shirtclub
│○ !angelwing
│○ !christmasseason
│○ !projectyasuo
│○ !lovelycute
│○ !womansday
│○ !covergamepubg
│○ !nameonheart
│○ !funnyhalloween
│○ !lightningpubg
│○ !greetingcardvideo 
│○ !christmascard 
│○ !galaxybat
│○ !writegalaxy
│○ !starsnight
│○ !noeltext
│○ !textcakes
│○ !pubgbirthday
│○ !galaxywallpaper
│○ !pubgglicthvideo 
│○ !pubgmascotlogo
│○ !realembroidery
│○ !vintagetelevision
│○ !funnyanimations
│○ !glowingtext
│○ !textonglass
│○ !cartoonstyle
│○ !multicolor
│○ !watercolor2
│○ !textsky
│○ !summerbeach
│○ !1917text
│○ !puppycute
╰❒ !rosebirthday


╭─❒ 「 Textpro Menu 」
│○ !halloween2 text|text2
│○ !horror text|text2
│○ !game8bit text|text2
│○ !layered text|text2
│○ !glitch2 text|text2
│○ !coolg text|text2
│○ !coolwg text|text2
│○ !realistic text|text2
│○ !space3d text|text2
│○ !gtiktok text|text2
│○ !stone text|text2
│○ !marvel text|text2
│○ !marvel2 text|text2
│○ !pornhub text|text2
│○ !avengers text|text2
│○ !metalr text|text2
│○ !metalg text|text2
│○ !metalg2 text|text2
│○ !halloween2 text|text2
│○ !lion text|text2
│○ !wolf_bw text|text2
│○ !wolf_g text|text2
│○ !ninja text|text2
│○ !3dsteel text|text2
│○ !horror2 text|text2
│○ !lava text|text2
│○ !bagel text|text2
│○ !blackpink text
│○ !rainbow2 text
│○ !water_pipe text
│○ !halloween text
│○ !sketch text
│○ !sircuit text
│○ !discovery text
│○ !metallic2 text
│○ !fiction text
│○ !demon text
│○ !transformer text
│○ !berry text
│○ !thunder text
│○ !magma text
│○ !3dstone text
│○ !neon text
│○ !glitch text
│○ !harry_potter text
│○ !embossed text
│○ !broken text
│○ !papercut text
│○ !gradient text
│○ !glossy text
│○ !watercolor text
│○ !multicolor text
│○ !neon_devil text
│○ !underwater text
│○ !bear text
│○ !wonderfulg text
│○ !christmas text
│○ !neon_light text
│○ !snow text
│○ !cloudsky text
│○ !luxury2 text
│○ !gradient2 text
│○ !summer text
│○ !writing text
│○ !engraved text
│○ !summery text
│○ !3dglue text
│○ !metaldark text
│○ !neonlight text
│○ !oscar text
│○ !minion text
│○ !holographic text
│○ !purple text
│○ !glossyb text
│○ !deluxe2 text
│○ !glossyc text
│○ !fabric text
│○ !neonc text
│○ !newyear text
│○ !newyear2 text
│○ !metals text
│○ !xmas text
│○ !blood text
│○ !darkg text
│○ !joker text
│○ !wicker text
│○ !natural text
│○ !firework text
│○ !skeleton text
│○ !balloon text
│○ !balloon2 text
│○ !balloon3 text
│○ !balloon4 text
│○ !balloon5 text
│○ !balloon6 text
│○ !balloon7 text
│○ !steel text
│○ !gloss text
│○ !denim text
│○ !decorate text
│○ !decorate2 text
│○ !peridot text
│○ !rock text
│○ !glass text
│○ !glass2 text
│○ !glass3 text
│○ !glass4 text
│○ !glass5 text
│○ !glass6 text
│○ !glass7 text
│○ !glass8 text
│○ !captain_as2 text
│○ !robot text
│○ !equalizer text
│○ !toxic text
│○ !sparkling text
│○ !sparkling2 text
│○ !sparkling3 text
│○ !sparkling4 text
│○ !sparkling5 text
│○ !sparkling6 text
│○ !sparkling7 text
│○ !decorative text
│○ !chocolate text
│○ !strawberry text
│○ !koifish text
│○ !bread text
│○ !matrix text
│○ !blood2 text
│○ !neonligth2 text
│○ !thunder2 text
│○ !3dbox text
│○ !neon2 text
│○ !roadw text
│○ !bokeh text
│○ !gneon text
│○ !advanced text
│○ !dropwater text
│○ !wall text
│○ !chrismast text
│○ !honey text
│○ !drug text
│○ !marble text
│○ !marble2 text
│○ !ice text
│○ !juice text
│○ !rusty text
│○ !abstra text
│○ !biscuit text
│○ !wood text
│○ !scifi text
│○ !metalr text
│○ !purpleg text
│○ !shiny text 
│○ !jewelry text
│○ !jewelry2 text
│○ !jewelry3 text
│○ !jewelry4 text
│○ !jewelry5 text
│○ !jewelry6 text
│○ !jewelry7 text
│○ !jewelry8 text
│○ !metalh text
│○ !golden text
│○ !glitter text
│○ !glitter2 text
│○ !glitter3 text
│○ !glitter4 text
│○ !glitter5 text
│○ !glitter6 text
│○ !glitter7 text
│○ !metale text
│○ !carbon text
│○ !candy text
│○ !metalb text
│○ !gemb text
│○ !3dchrome text
│○ !metalb2 text
│○ !metalg text
╰❒ !metalg text


╭─❒ 「 Others 」
│○ !afk [reason]
│○ !translate kode_bahasa text
│○ !kalkulator [query]
│○ !smeme [text]
│○ !smeme2 [text|text]
│○ !memegen [text|text]
╰❒

╭─❒ 「 Game Menu 」
│○ !kuismath
│○ !tebakgambar
│○ !tebakkata
│○ !tebakbendera
│○ !tebakkalimat
│○ !tebaksiapa
│○ !tebakkabupaten
│○ !tebakkimia
│○ !tebaklirik
│○ !tebaktebakan
│○ !tekateki
│○ !susunkata
╰❒ !caklontong


╭─❒ 「 Asupan Menu 」
│○ !chika
│○ !delvira
│○ !ayu
│○ !bunga
│○ !aura
│○ !nisa
│○ !ziva
│○ !yana
│○ !viona
│○ !syania
│○ !riri
│○ !syifa
│○ !mama_gina
│○ !alcakenya
│○ !mangayutri
│○ !rikagusriani
│○ !asupan
│○ !bocil
│○ !geayubi
│○ !santuy
│○ !ukhty
╰❒ !syifa

╭─❒ 「 Telegram Sticker 」
│○ !awoawo
│○ !benedict
│○ !chat
│○ !dbfly
│○ !dino_kuning
│○ !doge
│○ !gojosatoru
│○ !hope_boy
│○ !jisoo
│○ !kr_robot
│○ !kucing
│○ !lonte
│○ !manusia_lidi
│○ !menjamet
│○ !meow
│○ !nicholas
│○ !patrick
│○ !popoci
│○ !sponsbob
│○ !kawan_sponsbob
╰❒ !tyni

╭─❒ 「 Random Cewe 」
│○ !china 
│○ !indonesia 
│○ !malaysia 
│○ !thailand 
│○ !korea 
│○ !japan 
│○ !vietnam 
│○ !jenni 
│○ !jiso 
│○ !lisa  
╰❒ !rose

╭─❒ 「 Logo Menu 」
│○ !coverbannerlol text|heroes
│○ !pubglogomaker text|style
│○ !colorfulpubg text|color
│○ !astronotspace text|style
│○ !wallpaperaov text|heroes
│○ !maketeamlogo text|style
│○ !circlemarcotteam text|logo
│○ !wallpaperml text|heroes
│○ !dragonballfb text|character
│○ !bannerofaov text|character
│○ !effect3donbeach text|background
│○ !cutegirlgamer text|logo
│○ !footballteam text|logo
│○ !beautifulshimmering text|champion
│○ !pubgcutelogo text|logo
│○ !elegantrotation text|logo
│○ !logogamingassasin text|logo
│○ !introvideomaker text|logo
│○ !gaminglogo4fvs text|logo
│○ !blueneon text|logo
│○ !metalmascot text|logo
│○ !anonymous2 text|style
│○ !lolpentakill text|style
│○ !avatarleagueofking text|style
│○ !avatarff text|character
│○ !overwatchwallpaper text|character
│○ !rovwallpaperhd text|hero
│○ !rovwallpaper text|avatar
│○ !beautifulgalaxylol text|style
│○ !crossfirecover text|character
│○ !lolwallpaper text|wallpaper
│○ !coverdota2 text|heroes
│○ !coverleagueofking text|character
│○ !avatar3q360 text|avatar
│○ !coverofwarface text|character
│○ !newlolavatar text|avatar
│○ !csgocover text|background
│○ !coverloknew text|hero
│○ !coverfblol text|letters
│○ !overwatchcover text|hero
│○ !crossfirestyle text|avatar
│○ !avatarlolbyname text|style
│○ !lolcoverbyname text|avatar
│○ !cyberhunterfb text|character
│○ !coverfreefirefb text|character
│○ !gamingmascot text|style
│○ !coveronepiecefb text|character
│○ !bannerytcsgo text|banner
│○ !fbgamepubgcover text|template
│○ !banneroflol text|text2|banner
│○ !bannerofaov2 text|text2|banner
│○ !teamlogo text|text2|background
│○ !companylogo2 text|text2|background
│○ !companylogo text|text2|background
│○ !gradientlogo text|text2|background
│○ !pencilsketch text|text2|icon
│○ !gunlogogaming text|text2|background
│○ !banneroffreefire text|text2|background
│○ !letterlogos text|text2|thumb
│○ !bannerofoverwatch text|text2|background
│○ !bannerofapex text|text2|background
│○ !bannerofpubg text|text2|background
│○ !mascotstyle text|text2|thumb
│○ !logoaccording text|text2|thumb
╰❒ !avataroverwatch text|text2|thumb


╭─❒ 「 Islamic Menu 」
│○ !asmaulhusna
│○ !kisahnabi [nabi]
│○ !jadwalshalat [daerah]
│○ !randomquran
│○ !randomquran2
│○ !listsurah
│○ !tafsirsurah [surah]
╰❒ !alquranaudio [surah|ayat]

╭─❒ 「 Sound Menu 」
│○ !sound1
│○ !sound2
│○ !sound3
│○ !sound4
│○ !sound5
│○ !sound6
│○ !sound7
│○ !sound8
│○ !sound9
│○ !sound10
│○ !sound11
│○ !sound12
│○ !sound13
│○ !sound14
│○ !sound15
│○ !sound16
│○ !sound17
│○ !sound18 
│○ !sound19
│○ !sound20
│○ !sound21
│○ !sound22
│○ !sound23
│○ !sound24
│○ !sound25
│○ !sound26
│○ !sound27
│○ !sound28
│○ !sound29
│○ !sound30
│○ !sound31
│○ !sound32
│○ !sound33
│○ !sound34
│○ !sound35
│○ !sound36
│○ !sound37
│○ !sound38
│○ !sound39
│○ !sound40
│○ !sound41
│○ !sound42
│○ !sound43
│○ !sound44
│○ !sound45
│○ !sound46
│○ !sound47
│○ !sound48
│○ !sound49
│○ !sound50
│○ !sound51
│○ !sound52
│○ !sound53
│○ !sound54
│○ !sound55
│○ !sound56
│○ !sound57
│○ !sound58
│○ !sound59
│○ !sound60
│○ !sound61
│○ !sound62
│○ !sound63
│○ !sound64
│○ !sound65
│○ !sound66
│○ !sound67
│○ !sound68
│○ !sound69
╰❒ !sound70

╭─❒ 「 TqTo 」 
│○ My God
│○ My Parents
│○ Fatih A.
│○ Ferdi
│○ DikaArdnt
│○ Mhankbarbar
│○ Nurutomo
│○ Rashid
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
Recode : https://youtube.com/playlist?list=PLBVrgpCpAnw2ZHjdSrdjasj6crrD1RBgm
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
│○ !owner
│○ !rules
│○ !sc
│○ !ping
│○ !runtime
│○ !botstatus
╰❒ !donate
`}

exports.ownermenu = (prefix) =>{
return`╭─❒ 「 Owner 」 
│○ !setmenu [query]
│○ !setmenu katalog
│○ !setmenu katalog2
│○ !setmenu list
│○ !setwm packname|author
│○ !sendsesi
│○ !listpc
│○ !listgc
│○ !broadcast [text]
│○ !bc [text]
│○ !bcgc 
│○ !bcimage
│○ !bcaudio
│○ !bcstiker
│○ !bcvn
│○ !bcvideo
│○ !banuser
│○ !unban
│○ !banned
│○ !listbanned
│○ !block
│○ !ublock
│○ !listblock
│○ !addpremium
│○ !delpremium
│○ !listpremium
│○ !nsfw [on/off]
│○ !mute [on/off]
│○ !autoblok212 [on/off]
│○ !banchat
│○ !unbanchat
│○ !autorespond [on/off]
│○ !antiviewonce [on/off]
│○ !autobio [on/off]
│○ !anticall [on/off]
│○ !join [link]
│○ !self
│○ !public [only bot]
│○ !del [reply pesan bot]
│○ !pppanjang
│○ !setpppanjang
╰❒ !setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`╭─❒ 「 Database 」 
│○ !setcmd [reply stiker]
│○ !delcmd [reply stiker]
│○ !listcmd
│○ !absen
│○ !cekabsen
│○ !deleteabsen
│○ !absenstart
│○ !addmsg [nama file]
│○ !getmsg [nama file]
│○ !listmsg
╰❒ !delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`╭─❒ 「 Group 」 
│○ !addsewa
│○ !delsewa
│○ !listsewa
│○ !ceksewa
│○ !delsewa
│○ !register
│○ !unregister
│○ !ceksn
│○ !listonline
│○ !sider
│○ !wm packname|author
│○ !infochat
│○ !setdesk [text]
│○ !setppgrup [reply image]
│○ !pppanjanggc
│○ !setpppanjanggc
│○ !revoke
│○ !leave
│○ !add [62***]
│○ !kick @tag
│○ !leave
│○ !linkgc
│○ !welcome [on/off]
│○ !goodbye [on/off]
│○ !demotedetect [on/off]
│○ !promotedetect  [on/off]
│○ !setwelcome
│○ !updatewelcome
│○ !delwelcome
│○ !cekwelcome
│○ !setgoodbye
│○ !updategoodbye
│○ !delgoodbye
│○ !cekgoodbye
│○ !setpromote
│○ !updatepromote
│○ !setdemote
│○ !updatedemote
│○ !cekpromote
│○ !cekdemote
│○ !delpromote
│○ !deldemote
│○ !nsfw [on/off]
│○ !antilink [on/off]
│○ !take packname|author
│○ !group [open/close]
│○ !tagall [text]
╰❒ !hidetag [text]
`}

exports.anime = (prefix) =>{
	return`╭─❒ 「 Anime 」 
│○ !quotesanime
│○ !anime [query]
│○ !animeinfo
│○ !manga [query]
╰❒ !character [query]
`}

exports.tag = (prefix) =>{
	return`╭─❒ 「 Tag 」 
│○ !stickertag
│○ !videotag [query]
│○ !vntag [query]
╰❒ !imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`╭─❒ 「 Stalking 」 
│○ !igstalk [username]
│○ !ghstalk [username]
╰❒ !ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`╭─❒ 「 Search 」 
│○ !ytsearch [query]
│○ !wallpaper [query]
│○ !google [query]
│○ !wikimedia [query]
│○ !apksearch
│○ !findapk
│○ !hentai
│○ !wattpad [query]
│○ !webtoons [query]
│○ !drakor [query]
│○ !brainly [query]
╰❒ !pinterest [query]
`}

exports.converter = (prefix) =>{
	return`╭─❒ 「 Converter 」 
│○ !emoji [😭]
│○ !emojimix [😭+💩]
│○ !toaudio [video]
│○ !tomp3 [video]
│○ !tovn [video]
│○ !stiker [reply image]
│○ !tourl [image/video]
│○ !togif [sticker]
│○ !tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`╭─❒ 「 Image Effect 」 
│○ !wanted [reply image/stiker]
│○ !utatoo [reply image/stiker]
│○ !unsharpen [reply image/stiker]
│○ !thanos [reply image/stiker]
│○ !sniper [reply image/stiker]
│○ !sharpen [reply image/stiker]
│○ !sepia [reply image/stiker]
│○ !scary [reply image/stiker]
│○ !rip [reply image/stiker]
│○ !redple [reply image/stiker]
│○ !rejected [reply image/stiker]
│○ !posterize [reply image/stiker]
│○ !ps4 [reply image/stiker]
│○ !pixelize [reply image/stiker]
│○ !missionpassed [reply image/stiker]
│○ !moustache [reply image/stiker]
│○ !lookwhatkarenhave [reply image/stiker]
│○ !jail [reply image/stiker]
│○ !invert [reply image/stiker]
│○ !instagram [reply image/stiker]
│○ !greyscale [reply image/stiker]
│○ !glitch [reply image/stiker]
│○ !gay [reply image/stiker]
│○ !frame [reply image/stiker]
│○ !fire [reply image/stiker]
│○ !distort [reply image/stiker]
│○ !dictator [reply image/stiker]
│○ !deepfry [reply image/stiker]
│○ !ddungeon [reply image/stiker]
│○ !circle [reply image/stiker]
│○ !challenger [reply image/stiker]
│○ !burn [reply image/stiker]
│○ !brazzers [reply image/stiker]
╰❒ !beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`╭─❒ 「 Sticker Effect 」 
│○ !jail [reply image/stiker]
│○ !red [reply image/stiker]
│○ !gay [reply image/stiker]
│○ !bloo [reply image/stiker]
│○ !blue [reply image/stiker]
│○ !sepia [reply image/stiker]
│○ !green [reply image/stiker]
│○ !glass [reply image/stiker]
│○ !invert [reply image/stiker]
│○ !blurple [reply image/stiker]
│○ !blurple2 [reply image/stiker]
│○ !wasted [reply image/stiker]
│○ !passed [reply image/stiker]
│○ !triggered [reply image/stiker]
│○ !comrade [reply image/stiker]
│○ !greyscale [reply image/stiker]
│○ !threshold [reply image/stiker]
│○ !brightness [reply image/stiker]
╰❒ !invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`╭─❒ 「 Download 」 
│○ !tiktok [link]
│○ !tiktoknowm [link]
│○ !tiktokwm [link]
│○ !tiktokaudio [link]
│○ !ytdl [link]
│○ !play [query]
│○ !ytmp3 [link]
│○ !ytshortmp3 [link]
│○ !ytmp4 [link]
│○ !ytshorts [link]
│○ !facebook [link]
│○ !facebooksd [link]
│○ !facebookhd [link]
│○ !fbaudio [link]
│○ !igstory [username]
│○ !igdl [link]
│○ !igphoto [link]
│○ !igvideo [link]
│○ !igreels [link]
│○ !igtv [link]
│○ !soundcloud [link]
│○ !gitclone [link repo]
│○ !gitrepo [username repo branch]
│○ !mediafire [link]
╰❒ !twitter link
`
}

exports.ranime = (prefix) =>{
	return`╭─❒ 「 Random Anime 」
│○ !loli
│○ !neko
│○ !waifu
│○ !shinobu
│○ !megumin
│○ !bully
│○ !cuddle
│○ !cry
│○ !hug
│○ !awoo
│○ !kiss
│○ !lick
│○ !pat
│○ !smug
│○ !bonk
│○ !yeet
│○ !blush
│○ !smile
│○ !wave
│○ !highfive
│○ !handhold
│○ !nom
│○ !bite
│○ !glomp
│○ !slap
│○ !kill
│○ !happy
│○ !wink
│○ !poke
│○ !dance
╰❒ !cringe
`
}

exports.nsfw = (prefix) =>{
	return`╭─❒ 「 Nsfw & Sfw 」
│○ !cuddle
│○ !feed
│○ !foxgirl
│○ !kemonomimi2
│○ !woof
│○ !holo2
│○ !hug
│○ !kiss
│○ !lizard
│○ !meowi
│○ !neko2
│○ !pat
│○ !poke
│○ !slap
│○ !tickle
│○ !baka
│○ !smug
│○ !neko_sfw
│○ !hentai
│○ !hentai_gif
│○ !spank
│○ !blowjob
│○ !cumarts
│○ !eroyuri
│○ !eroneko
│○ !erokemonomimi
│○ !erokitsune
│○ !ero
│○ !feet
│○ !erofeet
│○ !feetgif
│○ !femdom
│○ !futanari
│○ !hentai
│○ !holoero
│○ !holo
│○ !keta
│○ !kitsune
│○ !kemonomimi
│○ !pussyart
│○ !pussywankgif
│○ !girl_solo
│○ !girl_solo_gif
│○ !tits
│○ !trap
│○ !yuri
│○ !avatar2
│○ !anal
│○ !bj
│○ !boobs
│○ !classic
│○ !cumsluts
│○ !kuni
│○ !lesbian
│○ !neko
│○ !neko_gif
│○ !ahegao
│○ !bdsm
│○ !cuckold
│○ !cum
│○ !foot
│○ !gangbang
│○ !glasses
│○ !jahy
│○ !masturbation
│○ !nsfw_neko
│○ !orgy
│○ !panties
│○ !tentacles
│○ !thighs
╰❒ !zettai
`
}

exports.textpro = (prefix) =>{
	return`╭─❒ 「 Textpro Menu 」
│○ !halloween2 text|text2
│○ !horror text|text2
│○ !game8bit text|text2
│○ !layered text|text2
│○ !glitch2 text|text2
│○ !coolg text|text2
│○ !coolwg text|text2
│○ !realistic text|text2
│○ !space3d text|text2
│○ !gtiktok text|text2
│○ !stone text|text2
│○ !marvel text|text2
│○ !marvel2 text|text2
│○ !pornhub text|text2
│○ !avengers text|text2
│○ !metalr text|text2
│○ !metalg text|text2
│○ !metalg2 text|text2
│○ !halloween2 text|text2
│○ !lion text|text2
│○ !wolf_bw text|text2
│○ !wolf_g text|text2
│○ !ninja text|text2
│○ !3dsteel text|text2
│○ !horror2 text|text2
│○ !lava text|text2
│○ !bagel text|text2
│○ !blackpink text
│○ !rainbow2 text
│○ !water_pipe text
│○ !halloween text
│○ !sketch text
│○ !sircuit text
│○ !discovery text
│○ !metallic2 text
│○ !fiction text
│○ !demon text
│○ !transformer text
│○ !berry text
│○ !thunder text
│○ !magma text
│○ !3dstone text
│○ !neon text
│○ !glitch text
│○ !harry_potter text
│○ !embossed text
│○ !broken text
│○ !papercut text
│○ !gradient text
│○ !glossy text
│○ !watercolor text
│○ !multicolor text
│○ !neon_devil text
│○ !underwater text
│○ !bear text
│○ !wonderfulg text
│○ !christmas text
│○ !neon_light text
│○ !snow text
│○ !cloudsky text
│○ !luxury2 text
│○ !gradient2 text
│○ !summer text
│○ !writing text
│○ !engraved text
│○ !summery text
│○ !3dglue text
│○ !metaldark text
│○ !neonlight text
│○ !oscar text
│○ !minion text
│○ !holographic text
│○ !purple text
│○ !glossyb text
│○ !deluxe2 text
│○ !glossyc text
│○ !fabric text
│○ !neonc text
│○ !newyear text
│○ !newyear2 text
│○ !metals text
│○ !xmas text
│○ !blood text
│○ !darkg text
│○ !joker text
│○ !wicker text
│○ !natural text
│○ !firework text
│○ !skeleton text
│○ !balloon text
│○ !balloon2 text
│○ !balloon3 text
│○ !balloon4 text
│○ !balloon5 text
│○ !balloon6 text
│○ !balloon7 text
│○ !steel text
│○ !gloss text
│○ !denim text
│○ !decorate text
│○ !decorate2 text
│○ !peridot text
│○ !rock text
│○ !glass text
│○ !glass2 text
│○ !glass3 text
│○ !glass4 text
│○ !glass5 text
│○ !glass6 text
│○ !glass7 text
│○ !glass8 text
│○ !captain_as2 text
│○ !robot text
│○ !equalizer text
│○ !toxic text
│○ !sparkling text
│○ !sparkling2 text
│○ !sparkling3 text
│○ !sparkling4 text
│○ !sparkling5 text
│○ !sparkling6 text
│○ !sparkling7 text
│○ !decorative text
│○ !chocolate text
│○ !strawberry text
│○ !koifish text
│○ !bread text
│○ !matrix text
│○ !blood2 text
│○ !neonligth2 text
│○ !thunder2 text
│○ !3dbox text
│○ !neon2 text
│○ !roadw text
│○ !bokeh text
│○ !gneon text
│○ !advanced text
│○ !dropwater text
│○ !wall text
│○ !chrismast text
│○ !honey text
│○ !drug text
│○ !marble text
│○ !marble2 text
│○ !ice text
│○ !juice text
│○ !rusty text
│○ !abstra text
│○ !biscuit text
│○ !wood text
│○ !scifi text
│○ !metalr text
│○ !purpleg text
│○ !shiny text 
│○ !jewelry text
│○ !jewelry2 text
│○ !jewelry3 text
│○ !jewelry4 text
│○ !jewelry5 text
│○ !jewelry6 text
│○ !jewelry7 text
│○ !jewelry8 text
│○ !metalh text
│○ !golden text
│○ !glitter text
│○ !glitter2 text
│○ !glitter3 text
│○ !glitter4 text
│○ !glitter5 text
│○ !glitter6 text
│○ !glitter7 text
│○ !metale text
│○ !carbon text
│○ !candy text
│○ !metalb text
│○ !gemb text
│○ !3dchrome text
│○ !metalb2 text
│○ !metalg text
╰❒ !metalg text
`
}


exports.other = (prefix) =>{
return`╭─❒ 「 Others 」
│○ !ttp [text]
│○ !attp [text]
│○ !afk [reason]
│○ !translate kode_bahasa text
│○ !kalkulator [query]
│○ !smeme [text]
│○ !smeme2 [text|text]
╰❒ !memegen [text|text]
`
}
exports.game = (prefix) =>{
return`╭─❒ 「 Game Menu 」
│○ !kuismath
│○ !tebakgambar
│○ !tebakkata
│○ !tebakbendera
│○ !tebakkalimat
│○ !tebaksiapa
│○ !tebakkabupaten
│○ !tebakkimia
│○ !tebaklirik
│○ !tebaktebakan
│○ !tekateki
│○ !susunkata
╰❒ !caklontong
`
}
exports.asupan = (prefix) =>{
return`╭─❒ 「 Asupan Menu 」
│○ !chika
│○ !delvira
│○ !ayu
│○ !bunga
│○ !aura
│○ !nisa
│○ !ziva
│○ !yana
│○ !viona
│○ !syania
│○ !riri
│○ !syifa
│○ !mama_gina
│○ !alcakenya
│○ !mangayutri
│○ !rikagusriani
│○ !asupan
│○ !bocil
│○ !geayubi
│○ !santuy
│○ !ukhty
╰❒ !syifa
`
}
exports.cecan = (prefix) =>{
return`╭─❒ 「 Random Cewe 」
│○ !china 
│○ !indonesia 
│○ !malaysia 
│○ !thailand 
│○ !korea 
│○ !japan 
│○ !vietnam 
│○ !jenni 
│○ !jiso 
│○ !lisa  
╰❒ !rose
`
}

exports.tqto = () =>{
	return`╭─❒ 「 TqTo 」 
│○ My God
│○ My Parents
│○ Fatih A.
│○ Ferdi
│○ DikaArdnt
│○ Mhankbarbar
│○ Nurutomo
│○ Rashid
│○ ZeeoneOfc
│○ Penyedia Module
╰❒ And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`╭─❒ 「 Primbon 」
│○ !nomorhoki 887435047326
│○ !artimimpi [query]
│○ !artinama [query]
│○ !ramaljodoh
│○ !ramaljodohbali
│○ !suamiistri
│○ !ramalcinta
│○ !cocoknama
│○ !pasangan
│○ !jadiannikah
│○ !sifatusaha
│○ !rezeki
│○ !pekerjaan
│○ !nasib
│○ !penyakit
│○ !tarot
│○ !fengshui
│○ !haribaik
│○ !harisangar
│○ !harisial
│○ !nagahari
│○ !arahrezeki
│○ !peruntungan
│○ !weton
│○ !karakter
│○ !keberuntungan
│○ !memancing
│○ !masasubur
│○ !zodiak 
╰❒ !shio [query]
`
}

exports.stcmenu = (prefix) =>{
	return`╭─❒ 「 Telegram Sticker 」
│○ !awoawo
│○ !benedict
│○ !chat
│○ !dbfly
│○ !dino_kuning
│○ !doge
│○ !gojosatoru
│○ !hope_boy
│○ !jisoo
│○ !kr_robot
│○ !kucing
│○ !lonte
│○ !manusia_lidi
│○ !menjamet
│○ !meow
│○ !nicholas
│○ !patrick
│○ !popoci
│○ !sponsbob
│○ !kawan_sponsbob
╰❒ !tyni
`}

exports.ephotomenu = (prefix) =>{
	return`╭─❒ 「 Ephoto360 Menu 」
│○ !youtubegold text
│○ !youtubesilver text
│○ !facebookgold text
│○ !facebooksilver text
│○ !instagramgold text
│○ !instagramsilver text
│○ !twittergold text
│○ !twittersilver text
│○ !retrotext text
│○ !halloweenbats text
│○ !texthalloween text
│○ !cardhalloween text
│○ !birthdaycake text
│○ !thundertext text
│○ !icetext text
│○ !milkcake text
│○ !snowontext text
│○ !metalstar text
│○ !dragonfire text
│○ !zombie3d text
│○ !merrycard text
│○ !generalexam text 
│○ !viettel text
│○ !embroider text
│○ !graffititext text
│○ !graffititext2 text
│○ !graffititext3 text
│○ !covergraffiti text
│○ !moderngold text
│○ !capercut text
│○ !lovecard text
│○ !heartflashlight text
│○ !heartcup text
│○ !sunglightshadow text
│○ !graffiti3d text
│○ !moderngoldsilver text
│○ !moderngold2 text
│○ !moderngold3 text
│○ !fabrictext text
│○ !masteryavatar text
│○ !messagecoffee text
│○ !announofwin text
│○ !writeblood text
│○ !horrorletter text
│○ !writehorror text
│○ !shirtclub text
│○ !angelwing text
│○ !christmasseason text
│○ !projectyasuo text
│○ !lovelycute text
│○ !womansday text
│○ !covergamepubg text
│○ !nameonheart text
│○ !funnyhalloween text
│○ !lightningpubg text
│○ !greetingcardvideo text 
│○ !christmascard text 
│○ !galaxybat text
│○ !writegalaxy text
│○ !starsnight text
│○ !noeltext text
│○ !textcakes text
│○ !pubgbirthday text
│○ !galaxywallpaper text
│○ !pubgglicthvideo text 
│○ !pubgmascotlogo text
│○ !realembroidery text
│○ !vintagetelevision text
│○ !funnyanimations text
│○ !glowingtext text
│○ !textonglass text
│○ !cartoonstyle text
│○ !multicolor text
│○ !watercolor2 text
│○ !textsky text
│○ !summerbeach text
│○ !1917text text
│○ !puppycute text
│○ !rosebirthday text
│○ !steellettering text|text2
│○ !letterstext text|text2
│○ !barcashirt text|text2
│○ !premiercup text|text2
│○ !stylepoligon text|text2
│○ !lifebuoys text|text2
╰❒ !juventusshirt text|text2`
}

exports.logomenu = (prefix) =>{
	return`╭─❒ 「 Logo Menu 」
│○ !coverbannerlol text|heroes
│○ !pubglogomaker text|style
│○ !colorfulpubg text|color
│○ !astronotspace text|style
│○ !wallpaperaov text|heroes
│○ !maketeamlogo text|style
│○ !circlemarcotteam text|logo
│○ !wallpaperml text|heroes
│○ !dragonballfb text|character
│○ !bannerofaov text|character
│○ !effect3donbeach text|background
│○ !cutegirlgamer text|logo
│○ !footballteam text|logo
│○ !beautifulshimmering text|champion
│○ !pubgcutelogo text|logo
│○ !elegantrotation text|logo
│○ !logogamingassasin text|logo
│○ !introvideomaker text|logo
│○ !gaminglogo4fvs text|logo
│○ !blueneon text|logo
│○ !metalmascot text|logo
│○ !anonymous2 text|style
│○ !lolpentakill text|style
│○ !avatarleagueofking text|style
│○ !avatarff text|character
│○ !overwatchwallpaper text|character
│○ !rovwallpaperhd text|hero
│○ !rovwallpaper text|avatar
│○ !beautifulgalaxylol text|style
│○ !crossfirecover text|character
│○ !lolwallpaper text|wallpaper
│○ !coverdota2 text|heroes
│○ !coverleagueofking text|character
│○ !avatar3q360 text|avatar
│○ !coverofwarface text|character
│○ !newlolavatar text|avatar
│○ !csgocover text|background
│○ !coverloknew text|hero
│○ !coverfblol text|letters
│○ !overwatchcover text|hero
│○ !crossfirestyle text|avatar
│○ !avatarlolbyname text|style
│○ !lolcoverbyname text|avatar
│○ !cyberhunterfb text|character
│○ !coverfreefirefb text|character
│○ !gamingmascot text|style
│○ !coveronepiecefb text|character
│○ !bannerytcsgo text|banner
│○ !fbgamepubgcover text|template
│○ !banneroflol text|text2|banner
│○ !bannerofaov2 text|text2|banner
│○ !teamlogo text|text2|background
│○ !companylogo2 text|text2|background
│○ !companylogo text|text2|background
│○ !gradientlogo text|text2|background
│○ !pencilsketch text|text2|icon
│○ !gunlogogaming text|text2|background
│○ !banneroffreefire text|text2|background
│○ !letterlogos text|text2|thumb
│○ !bannerofoverwatch text|text2|background
│○ !bannerofapex text|text2|background
│○ !bannerofpubg text|text2|background
│○ !mascotstyle text|text2|thumb
│○ !logoaccording text|text2|thumb
╰❒ !avataroverwatch text|text2|thumb
`
}

exports.islammenu = (prefix) =>{
	return`╭─❒ 「 Islamic Menu 」
│○ !asmaulhusna
│○ !kisahnabi [nabi]
│○ !jadwalshalat [daerah]
│○ !randomquran
│○ !randomquran2
│○ !listsurah
│○ !tafsirsurah [surah]
╰❒ !alquranaudio [surah|ayat]
`
}
exports.anonchat = (prefix) =>{
	return`╭─❒ 「 Anonymous 」
│○ !menfess
│○ !anonymous 
│○ !start
│○ !skip [daerah]
╰❒ !stop [surah|ayat]
`
}

exports.storemenu = (prefix) =>{
	return`╭─❒ 「 Store Menu 」
│○ !list
│○ !addlist [key|respond]
│○ !dellist [key]
│○ !update [key|respond]
│○ !store
│○ !kali
│○ !bagi
│○ !tambah
│○ !kurang
│○ !kalkulator
│○ !setproses
│○ !updateproses
│○ !cekproses
│○ !delproses
│○ !setdone
│○ !updatedone
│○ !cekdone
│○ !deldone
│○ !pay
│○ !setcaptionpay
│○ !setpaysewa
│○ !proses
╰❒ !done
`
}

exports.voiceChange = (prefix) =>{
	return`╭─❒ 「 Voice Change Menu 」
│○ !bass
│○ !blown
│○ !deep
│○ !earrape
│○ !fast
│○ !fat
│○ !nightcore
│○ !reverse
│○ !robot
│○ !slow
│○ !smooth
╰❒ !tupai
`
}
exports.storagemenu = (prefix) =>{
	return`╭─❒ 「 Storage Menu 」
│○ !addvn
│○ !listvn
│○ !delvn
│○ !addimage
│○ !listimage
│○ !delimage
│○ !addvideo
│○ !listvideo
│○ !delvideo
│○ !addstik
│○ !delstik
╰❒ !liststik
`
}

exports.rpgmenu = (prefix) =>{
	return`╭─❒ 「 Rpg Games 」
│○ !adventure
│○ !weekly
│○ !use
│○ !transfer
│○ !slot
│○ !shop
│○ !pasar
│○ !profile
│○ !ojek
│○ !open
│○ !nguli
│○ !narik
│○ !nabung
│○ !monthly
│○ !mining
│○ !merampok
│○ !mancing
│○ !kolam
│○ !koboy
│○ !kerja
│○ !kandang
│○ !judi
│○ !inventory
│○ !hourly
│○ !fishop
│○ !feed
│○ !duel
│○ !daily
│○ !craft
│○ !cooldown
│○ !cook
│○ !collect
│○ !chop
│○ !casino
│○ !buy
│○ !bank 
│○ !bansos
│○ !berdagang
│○ !berkebon
╰❒ !build
`
}

exports.photooxy = (prefix)=>{
	return`╭─❒ 「 Photooxy Menu 」
│○ !battlegrounds-logo
│○ !battlefield4
│○ !text-8bit
│○ !typography-flower 
│○ !under-flower 
│○ !bevel-text 
│○ !silk-text 
│○ !sweet-andy 
│○ !smoke-typography 
│○ !carvedwood 
│○ !scary-cemetery 
│○ !royallook 
│○ !coffeecup2 
│○ !illuminated 
│○ !harry-potter2 //
│○ !woodblack //
│○ !butterfly-reflection //
│○ !watermelon // 
│○ !striking // 
│○ !metallicglow //
│○ !rainbow-text 
│○ !birthday-cake 
│○ !embroidery // 
│○ !crisp 
│○ !flaming 
│○ !furtext 
│○ !nightsky 
│○ !glow-rainbow 
│○ !gradient-avatar 
│○ !white-cube // 
│○ !honey-text // 
│○ !vintage-style //
│○ !glowing-3d // 
│○ !army-camouflage 
│○ !graffiti-cover 
│○ !rainbow-shine 
│○ !smoky-neon 
│○ !quotes-underfall //
│○ !layered-leaves 
│○ !vector-nature 
│○ !yellow-rose 
│○ !love-text 
│○ !underwater-ocean 
│○ !nature-text 
│○ !wolf-metal 
│○ !summer-text 
│○ !wooden-board //
│○ !flower-heart
│○ !quote-wood 
│○ !love-text 
│○ !quotes-undergrass 
│○ !naruto-banner 
│○ !love-message 
│○ !textoncup2 
│○ !burn-paper 
│○ !smoke 
│○ !romantic-messages 
│○ !shadow-sky 
│○ !text-cup 
╰❒ !coffecup
`
}

exports.soundmenu = (prefix) =>{
return`╭─❒ 「 Sound Menu 」
│○ !sound1
│○ !sound2
│○ !sound3
│○ !sound4
│○ !sound5
│○ !sound6
│○ !sound7
│○ !sound8
│○ !sound9
│○ !sound10
│○ !sound11
│○ !sound12
│○ !sound13
│○ !sound14
│○ !sound15
│○ !sound16
│○ !sound17
│○ !sound18 
│○ !sound19
│○ !sound20
│○ !sound21
│○ !sound22
│○ !sound23
│○ !sound24
│○ !sound25
│○ !sound26
│○ !sound27
│○ !sound28
│○ !sound29
│○ !sound30
│○ !sound31
│○ !sound32
│○ !sound33
│○ !sound34
│○ !sound35
│○ !sound36
│○ !sound37
│○ !sound38
│○ !sound39
│○ !sound40
│○ !sound41
│○ !sound42
│○ !sound43
│○ !sound44
│○ !sound45
│○ !sound46
│○ !sound47
│○ !sound48
│○ !sound49
│○ !sound50
│○ !sound51
│○ !sound52
│○ !sound53
│○ !sound54
│○ !sound55
│○ !sound56
│○ !sound57
│○ !sound58
│○ !sound59
│○ !sound60
│○ !sound61
│○ !sound62
│○ !sound63
│○ !sound64
│○ !sound65
│○ !sound66
│○ !sound67
│○ !sound68
│○ !sound69
╰❒ !sound70
`
}
