
// batwsSC NYA JANGAN DI JUAL NGENTOD MAKASIH DAH PAKE
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const zrapi = require("zrapi")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
//const fetchJson = ('node-fetch')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
//nst { Swiftcord } = require("swiftcord");
//const cord = new Swiftcord();
const fetch = require('node-fetch');
const Fb = require("fb-video-downloader");
//const tiktod = require("tiktok-scraper-without-watermark")
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const cheerio = require('cheerio')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const FormData = require('form-data')
const brainly = require('brainly-scraper')
const ms = require('parse-ms')
const toMs = require('ms')
const yts = require( 'yt-search')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, wkyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/afk.json'))
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const afkk = JSON.parse(fs.readFileSync('./database/afk.json'))
const {  mediafireDl } = require('./lib/mediafire.js')
const {  covid } = require('./lib/covid.js')
const { wikiSearch } = require('./lib/wiki.js')
const getJson = async(url) => {
    const res = await axios.get(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.105 Mobile Safari/537.36.',
        }
    }).catch(err => { throw err })
    return res.data
}
const sfilter = JSON.parse(fs.readFileSync('./src/sfilter.json'))
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
//const cekafk = ms(Date.now() - afktime)
//const getBuffer = wa.getBuffer
//const ev = con.Whatsapp


prefix = 'z'
fake = '- [ 𝙎𝙀𝙇𝙁-𝘽𝙊𝙏 ] -\nBro, gua tau lu lagi sad, ng amer, tapi\nGausah lah bikin sw alay'
numbernye = '0'
banChats = true
offline = false
botname = 'hexagon memang oke'
owner = '6289514791129'
waktu = ''
alasan = ''
targetpc = '6285751056816'
barbar = 'B40MxRPs2xx1BonDNEWK'
apikey = 'LindowApi'
lol = '272ace0d6dce12cd756740a4'
//afk = false, 
afktime = ''
reason = ''

//=================================================//
module.exports = hexa = async (hexa, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        	const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		//const time = moment.tz('Asia/Jakarta').format('DD-MM JAM HH MENIT mm DETIK ss')
        	const time2 = moment.tz('Asia/Makassar').format('DD-MM JAM HH MENIT mm DETIK ss')
		const idulfitri = await axios.get('https://api-self.herokuapp.com/api/hitungmundur?tanggal=13&bulan=5&tahun=2021')
		const type = Object.keys(mek.message)[0]
        	body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(0).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const copid = await covid()
		//const ucapan = await axios.get('https://xinzbot-api.herokuapp.com/api/ucapan?apikey=XinzBot&timeZone=Asia/Jakarta')
	//	const isfilter = isGroup ? sfilter.includes(from) : false
		const q = args.join(' ')
		const botNumber = hexa.user.jid
		const botNumberss = hexa.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
		const totalchat = await hexa.chats.all()
		//const mag = await axios.get('https://api.zeks.xyz/api/jadwalsholat?apikey=apivinz&daerah=Surakarta')
		const groupMetadata = isGroup ? await hexa.groupMetadata(from) : ''
	//	const wektu = await axios.get('https://leyscoders-api.herokuapp.com/api/time?apikey=OneDayOneCharity')
		const groupName = isGroup ? groupMetadata.subject : ''
		const isfilter = isGroup ? sfilter.includes(from) : false
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const messagesCC = body.slice(0).trim().split(/ +/).shift()
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const itsMe = sender === botNumber ? true : false
	const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? hexa.user.jid : hexa.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? hexa.user.name : conts.notify || conts.vname || conts.name || '-'

const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
            const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
            mention != undefined ? mention.push(mentionByReply) : []
            const mentionUser = mention != undefined ? mention.filter(n => n) : []

        //MESS
		mess = {
			wait: 'bentar coy',
			success: 'Nieh',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus grup ngab',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            hexa.sendMessage(from, teks, text, {quoted:mek})
        }

        
const sendAudio = (filename) => {
	hexa.sendMessage(from, filename, MessageType.audio, {mimetype: 'audio/mp4', filename: 'audio.mp3', quoted: mek})
}

const sendSticker = (filename) => {
	hexa.sendMessage(from, filename, MessageType.sticker, {quoted: mek})
}
const sendImage = (filename, teks) => {
	if(teks == ``){
	hexa.sendMessage(from, filename, MessageType.image, {quoted: mek})
}
else{
hexa.sendMessage(from, filename, MessageType.image, {quoted: mek, caption: teks})
}}

const sendMess = (hehe, teks) => {
            hexa.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? hexa.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : hexa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }


/*COVID INCLUDES

❒「  *Kasus Covid-19 Indonesia*  」
├ *Terinfeksi :* ${copid[0].kasus}
├ *Kematian :* ${copid[0].kematian}
└ *Sembuh :* ${copid[0].sembuh}
*/
	

/*	const fgrup = (teks) => {
         hexa.sendMessage(from, teks, text, MessageType.text,{contextInfo: {forwardingScore: 508, isForwarded: true },
            quoted: {
               key: {
                  fromMe: false,
                  participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: { "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": time,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
               }
            }
         })
      }
*/
const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 999999999999999, status: 200, "jpegThumbnail": fs.readFileSync(`./stik/thumb.jpeg`), surface: 200, message: 'anak kont\nichiwa', orderTitle: 'ngentod', sellerJid: '0@s.whatsapp.net'} } } 

const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./stik/thumb.jpeg`)
					},
					"title": "Bot Original By\n Hexantodd, recode by ridwan:v",
					"status": 200,
					"surface": 200,
					"description": "Om Hexa Emg ngntd",
					"currencyCode": "IDR",
					"priceAmount1000": "10",
					"retailerId": "MemexsBot",
					"productImageCount": 9
				},
				"businessOwnerJid": ``
		}
	}
}
	const fdocu = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "pdf/document", "title": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./stik/fake.jpeg')}}}

const balas = (text) => {
    hexa.sendMessage(from, text, MessageType.text, {contextInfo:{forwardingScore: 508, isForwarded: true}, quoted: fdocu, sendEphemeral: true,thumbnail: fs.readFileSync(`./stik/thumb.jpeg`)})
}
const sendText = (text) => {
    hexa.sendMessage(from, text, MessageType.text)
}
        const fakestatus = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            hexa.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 12800,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        hexa.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }

	const sendFileFromUrl = async(link, type, options) => {
 	 hasil = await getBuffer(link)
	hexa.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	hexa.sendMessage(from, hasil, type, options).catch(e => {
	hexa.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
	})
	})
	})
	})
	}
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    hexa.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   


//afk2
/*for (let x of mentionUser) {
                if (afkk.hasOwnProperty(x.split('@')[0])) {
                    ini_txt = "Maaf user yang anda reply atau tag sedang afk. "
                    if (afkk[x.split('@')[0]] != "") {
                        ini_txt += "Dengan alasan " + afkk[x.split('@')[0]]
                    }
                    reply(ini_txt)
                }
            }
            if (afkk.hasOwnProperty(sender.split('@')[0])) {
                reply("Anda telah keluar dari mode afk.")
                delete afkk[sender.split('@')[0]]
                fs.writeFileSync("./database/afk.json", JSON.stringify(afkk))
            }


//a ef ka
cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            hexa.sendMessage(mek.key.remoteJid,`Maaf kak ${pushname}! Saat ini kak @6289514791129 Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ ForwadingScore: 508, isFordwarded: true, mentionedJid: ['6289514791129@s.whatsapp.net'],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*LAGI AFK BOS*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
//	if (mek.message.extendedTextMessage.contexInfo
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `6289514791129@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        hexa.sendMessage(mek.key.remoteJid,`Maaf kak ${pushname}!! *Saat ini @6289514791129 Sedang Offline!*\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: ['6289514791129@s.whatsapp.net'],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*SEDANG OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/ridwan.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }

/*
if (!mek.key.remoteJid.endsWith('@g.us') && offline){
      if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJtext)) return

            addafk(mek.key.remoteJtext)
      heheh = ms(Date.now() - waktu) 
      hexa.sendMessage(mek.key.remoteJid,`*Mohon Maaf @{owner} Sedang Offline!*\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan hubungi lagi nanti`, MessageType.text,{contextInfo:{ mentionedJid: ['0@s.whatsapp.net'],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`./stik/thumb.jpeg`)}}}})
      }
    }   
    if (mek.key.remoteJid.endsWith('@g.us') && offline) {
      if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
          if (mek.message.extendedTextMessage.contextInfo != undefined){
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
          if (ment === "0@s.whatsapp.net"){
                        if (isAfk(mek.key.remoteJtext)) return
                        addafk(mek.key.remoteJtext)
            heheh = ms(Date.now() - waktu)
            hexa.sendMessage(mek.key.remoteJid,`*Mohon Maaf @${owner} Sedang Offline!*\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan hubungi lagi nanti`, MessageType.text,{contextInfo:{ mentionedJid: ['0@s.whatsapp.net'],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`./stik/fake.jpeg`)}}}})
      }
        }
            }
          }
        }
      }
    }
*/

//***** FILTER *****//
		if(isGroup && isfilter){
       //  if(hexa.message.stickerMessage) return
         //if(itsMe) return reply(JSON.stringify(eval(mek), null, 2))
        // if(!itsMe) return
         for(let i=0; i<filter.length; i++){
         if(messagesCC.includes(filter[i].Filter)){
         console.log(filter[i].Jawaban)
         reply(filter[i].Jawaban)
      }}}

   //********** FUNCTION OFFLINE **********//
   
   if (!mek.key.remoteJid.endsWith('@g.us') && offline){
      if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJtext)) return

            addafk(mek.key.remoteJtext)
      heheh = ms(Date.now() - waktuafk) 
      hexa.sendMessage(mek.key.remoteJid,`*Mohon Maaf Ridwan Sedang Offline!*\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan hubungi lagi nanti`, MessageType.text,{contextInfo:{ mentionedJid: ['0@s.whatsapp.net'],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`./stik/thumb.jpeg`)}}}})
      }
    }   
    if (mek.key.remoteJid.endsWith('@g.us') && offline) {
      if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
          if (mek.message.extendedTextMessage.contextInfo != undefined){
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
          if (ment === "6281226770537@s.whatsapp.net"){
                        if (isAfk(mek.key.remoteJtext)) return
                        addafk(mek.key.remoteJtext)
            heheh = ms(Date.now() - waktuafk)
            hexa.sendMessage(mek.key.remoteJid,`*Mohon Maaf Ridwam Sedang Offline!*\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan hubungi lagi nanti`, MessageType.text,{contextInfo:{ mentionedJid: ['0@s.whatsapp.net'],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`./stik/thumb.jpeg`)}}}})
      }
        }
            }
          }
        }
      }
    }
      

//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        	function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `*_${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik_*`
}
	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!mek.key.fromMe && banChats === true) return
function tanggal(){
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

/*hexa.on('CB:action,,call', async json => {   
const callerId = json[2][0][1].from;
console.log("call dari "+ callerId)
hexa.sendMessage(callerId, "Auto block system, don't call please", MessageType.text)
await sleep(4000)
await hexa.blockUser(callerId, "add") // Block user
})
*/

switch (command) {
    case prefix+ 'menu':
    case prefix+ 'help':
	run = process.uptime()
        teks = `${kyun(run)}`
    	var menu = `Hai ${pushname}
Prefix : ┌──「 ${prefix} 」
┌────────」
│
├─⦿ JAM • Road To Eid Mubarak
${idulfitri.data.result}
│
├─⦿ Bot Berjalan selama *${teks}*
├─⦿ 
┌──「 𝙎𝙀𝙇𝙁 𝘽𝙊𝙏 」───
│

❒「  *Kasus Covid-19 Indonesia*  ]
├ *Terinfeksi :* ${copid[0].kasus}
├ *Kematian :* ${copid[0].kematian}
└ *Sembuh :* ${copid[0].sembuh}

├─「 MAKER 」───
│
├─⦿  _${prefix}sᴛɪᴄᴋᴇʀ_
├─⦿  _${prefix}sᴡᴍ_ <author|packname>
├─⦿  _${prefix}ᴛᴀᴋᴇ_ <author|packname>
├─⦿  _${prefix}ғᴅᴇғᴀᴄᴇ_
├─⦿  _${prefix}ᴇᴍᴏᴊɪ_
├─⦿  _${prefix}sᴇᴀʀᴄʜᴍᴜsɪᴄ_
│
├─「 CV」───
│
├─⦿  _${prefix}ᴛᴏɪᴍɢ_
├─⦿  _${prefix}ᴛᴏᴍᴘ3_
├─⦿  _${prefix}ᴛᴏᴍᴘ4_
├─⦿  _${prefix}sʟᴏᴡ_
├─⦿  _${prefix}ғᴀsᴛ_
├─⦿  _${prefix}ʀᴇᴠᴇʀsᴇ_
├─⦿  _${prefix}ᴛᴏᴜʀʟ_
│
├─「 UPSW 」───
│
├─⦿  _${prefix}ᴜᴘsᴡᴛᴇᴋs_
├─⦿  _${prefix}ᴜᴘsᴡɪᴍᴀɢᴇ_
├─⦿  _${prefix}ᴜᴘsᴡᴠɪᴅᴇᴏ_
│
├─「 FUN 」───
│
├─⦿  _${prefix}ғɪᴛɴᴀʜ_
├─⦿  _${prefix}ғɪᴛɴᴀʜᴘᴄ_
├─⦿  _${prefix}ᴋᴏɴᴛᴀᴋ_
├─⦿  _${prefix}ᴀsᴜᴘᴀɴ_
├─⦿  _${prefix}infoall_
├─⦿  _${prefix}cekchat_
├─⦿  _${prefix}ppcp_
├─⦿  _${prefix}pin_
├─⦿  _${prefix}unpin_
├─⦿  _${prefix}cuaca_
├─⦿  _${prefix}ᴡɪᴋɪ_
│
├─「 TAG 」───
│
├─⦿  _${prefix}ʜɪᴅᴇᴛᴀɢ_
├─⦿  _${prefix}ᴋᴏɴᴛᴀɢ_
├─⦿  _${prefix}sᴛɪᴄᴋᴛᴀɢ_
├─⦿  _${prefix}ᴛᴏᴛᴀɢ_
│
├─「 Donlod 」───
│
├─⦿  _${prefix}ʏᴛsᴇᴀʀᴄʜ_ <query>
├─⦿  _${prefix}ɪɢsᴛᴀʟᴋ_ <query>
├─⦿  _${prefix}ᴘʟᴀʏ_ <query>
├─⦿  _${prefix}ᴠɪᴅᴇᴏ_ <query>
├─⦿  _${prefix}ʏᴛᴍᴘ3_ <link>
├─⦿  _${prefix}ʏᴛᴍᴘ4_ <link>
├─⦿  _${prefix}ɪɢ_ <link>
├─⦿  _${prefix}ᴛᴡɪᴛᴛᴇʀ_ <link>
├─⦿  _${prefix}ᴛɪkᴋᴛᴏᴋ_ <link>
├─⦿  _${prefix}ᴛɪkᴛᴏᴋᴀᴜᴅɪᴏ_ <link>
├─⦿  _${prefix}ғʙ_ <link>
├─⦿  _${prefix}ʙʀᴀɪɴʟʏ_ <query>
├─⦿  _${prefix}ɪᴍᴀɢᴇ_ <query>
├─⦿  _${prefix}ᴀɴɪᴍᴇ_ <random>
│
├─「 Other 」───
│
├─⦿  _${prefix}shutdown_
├─⦿  _${prefix}self_
├─⦿  _${prefix}public_
├─⦿  _${prefix}setthumb_
├─⦿  _${prefix}settarget_
├─⦿  _${prefix}setfakeimg_
├─⦿  _${prefix}setreply_
├─⦿  _${prefix}ping_
├─⦿  _${prefix}join_
├─⦿  _${prefix}term_ <code>
├─⦿  _x_ <code>
│
│
│
│
└─「 ❏ *SELF-BOT* ❏ 」` 

        	balas(menu)
           	break




//anu
/*	if(chats.match("6289514791129@us.whatsapp.net")){
			if(!mek.key.fromMe) return
            if(afk == true){
            teks = `*Ridwan Sedang Offline*\n\n⬡ Reason : ${reason}\n⬡ Since : _${cekafk.hours} Jam  ${cekafk.minutes} Menit  ${cekafk.seconds} Detik  Yang lalu_`
            hexa.sendMessage(from, teks, MessageType.text, {quoted: tod, contextInfo: {forwardingScore: 508, isForwarded: true }})
		}}

case 'offline':
if(!mek.key.fromMe) return reply('Ente siapa?')
			afk = true
            reason = q
            afktime = Date.now()
            teks = `Going Afk\nReason : ${reason}`
            fakegroup(teks)
            break
case 'online':
if(!mek.key.fromMe) return reply('Ente siapa?')
            afk = false
            teks = `Im no longer Afk`
            fakegroup(teks)
            break
*/

case prefix+ 'leave':
if (!mek.key.fromMe) return reply("Siapa bang?")
 {
hexa.groupLeave(from)
}
 break
case prefix+ 'togif':
                                        if (!isQuotedSticker) return reply('Reply stiker nya')
                                        reply(mess.wait)
                                        if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                                        const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        const media = await hexa.downloadAndSaveMediaMessage(encmedia)
                                        const upload = await uploadimg(media, Date.now() + '.webp')
                                        const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
                                        const buff = await getBuffer(rume.data.result)
                                        hexa.sendMessage(from, buff, video, { mimetype: Mimetype.gif, caption: 'Nih', quoted: fdocu})
                                }
                                break
case prefix+ 'mute':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                hexa.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                hexa.sendMessage(from, '*succes mute this chat*', MessageType.text,{quoted: fdocu})
                console.log('succes mute chat = ' + from)
                break
case prefix+ 'unmute':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                hexa.modifyChat(from, ChatModification.unmute)
                reply('*succes unmute this chat*')
                console.log('succes unmute chat = ' + from)
                break

case prefix+ 'afk':
                    alasan = args.join(" ")
                    afkk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./database/afk.json", JSON.stringify(afkk))
                    ini_txt = "Anda telah afk. "
                    if (alasan != "") {
                        ini_txt += "Dengan alasan " + alasan
                    }
                    reply(ini_txt)
                    break
case prefix+ 'cuaca': 
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}cuaca makassar*`)  
                   reply('[❗] SEDANG DIPROSES', text, ftoko, mek)
                   F = body.slice(7)
                   anu = await fetchJson(`http://leyscoders-api.herokuapp.com/api/cuaca?q=${F}&apikey=OneDayOneCharity`)
                   anu1 = `➻ *TEMPAT* : ${anu.result.Daerah}\n`
                   anu1 += `➻ *Cuaca* : ${anu.result.Cuaca}\n`
                   anu1 += `➻ *Timezone* : ${anu.result.Timezone}\n` 
                   anu1 += `➻ *Temperatur* : ${anu.result.Temperature}\n`
                   anu1 += `➻ *Latitude* : ${anu.result.Latitude}\n` 
                   anu1 += `➻ *Longitude* : ${anu.result.Longitude}\n`
                   anu1 += `➻ ${anu.result.Hari} ${anu.result.Tanggal} ${anu.result.Waktu}\n` 
                   reply(anu1)
                   break 


case prefix+ 'ppcp':
                    getres = await axios.get(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=OneDayOneCharity`)
                    var { male, female } = getres.data.result
                    picmale = await getBuffer(`${male}`)
                    hexa.sendMessage(from, picmale, image)
                    picfemale = await getBuffer(`${female}`)
                    hexa.sendMessage(from, picfemale, image)
                break


case prefix+ 'mediafire':
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `❒「  *${botname}*  」
├ *Nama :* ${res[0].nama}
├ *Ukuran :* ${res[0].size}
└ *Link :* ${res[0].link}
_*Tunggu Proses Upload Media......*_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break

case prefix+ 'infoall':
					if (!isGroup) return reply(mess.only.group)
					var nom = mek.participant
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `┣❥   @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*From :* - [ 𝙎𝙀𝙇𝙁 𝘽𝙊𝙏 ] -\n*Info :*  ${body.slice(9)}\n*Total Member :* ${groupMembers.length} \n\n┏━━━⟪ *INGFONYA* ⟫━━━┓`+teks+`╚═ *「 ${pushname} emang ngntd 」* `, members_id, true)
					break

/*case prefix+ 'tagall':
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
reply(teks)*/
break
case prefix+ 'triggered':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
             encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
             media = await hexa.downloadAndSaveMediaMessage(encmedia)
rem = await upload(media)

res = `https://api-self.herokuapp.com/api/triggered?url=${rem}`
sendStickerFromUrl(from,res)
} else {
reply('kirim/reply gambar')
}
break
case prefix+ 'cekchat':
					hexa.updatePresence(from, Presence.composing)
					hexa.sendMessage(from, `Total : ${totalchat.length} Chat`, text, {quoted  : ftoko})
					break

case prefix+ 'sider':
                if (!isGroup) return reply(`Only group`)
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(hexa.chats.get(ido).presences), hexa.user.jid]
                hexa.sendMessage(from, 'List Sider:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: fdocu,
                    contextInfo: { mentionedJid: online }
                })
                break
case prefix+ 'wiki2':
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {                                                            return reply('_[ ! ] Error Hasil Tidak Ditemukan_')
})
result = `❒「  *Wiki*  」
├ *Judul :* ${res[0].judul}
└ *Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {                      reply(result)
})
break

case prefix+ 'tovn':
if (!isTagedAudio) return reply('Tag Audio Yang Mau Di Jadiin Vn')
reply(mess.wait)
aud = await hexa.downloadMediaAndSaveMeduaMessage(encmedua)
hexa.sendMessage(from, aud, audio, {mimetype: 'audio/mp4',ptt : true})

case prefix+ 'fordward':
		if (!mek.key.fromMe) return balas('tidak bisa kak!')
	        hexa.sendMessage(from, `${budy.slice(10)}`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true }})
                break
/*case prefix+ 'jadwalsholat':
                if (args.length == 0) return reply(`_Example: ${prefix}${command} yogyakarta_`)
                var daerah = args.join(" ")
                var result = await getJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lol}`)
                result = result.result
                text = `╭───「 Jadwal Sholat 」\n`
                text += `├❏ Wilayah : ${result.wilayah}\n│\n`
                text += `├❏ Tanggal : ${result.tanggal}\n│\n`
                text += `├❏ \`\`\`Sahur   : ${result.sahur}\`\`\`\n`
                text += `├❏ \`\`\`Imsak   : ${result.imsak}\`\`\`\n`
                text += `├❏ \`\`\`Subuh   : ${result.subuh}\`\`\`\n`
                text += `├❏ \`\`\`Dhuha   : ${result.dhuha}\`\`\`\n`
                text += `├❏ \`\`\`Dzuhur  : ${result.dzuhur}\`\`\`\n`
                text += `├❏ \`\`\`Ashar   : ${result.ashar}\`\`\`\n`
                text += `├❏ \`\`\`Maghrib : ${result.maghrib}\`\`\`\n`
                text += `├❏ \`\`\`Isya    : ${result.isya}\`\`\`\n│\n`
                text += `╰───「 RidwanXyZ 」`
                await hexa.sendMessage(from, text, result.wilayah.toUpperCase())
                
*/
case prefix+ 'jadwalshalat':
case prefix+ 'jadwalsholat':
if (!q) return balas('Yang bener gan')
njir = await fetchJson(`http://api-iam.herokuapp.com/api/jadwalshalat?daerah=${q}`)
njir1 = `Jadwal sholat untuk daerah ${q}



• Imsyak  : ${njir.Imsyak}
• Subuh   : ${njir.Subuh}
• Dzuhur  : ${njir.Dzuhur}
• Ashar    : ${njir.Ashar}
• Maghrib: ${njir.Maghrib}
• Isya       : ${njir.Isya}


Selamat menunaikan ibadah puasa`
reply(njir1)
break
case prefix+ 'ttp':
         reply(mess.wait)
         data = await fetchJson(`https://api.areltiyan.site/sticker_maker?text=${encodeURIComponent(args.join(' '))}`)
        sendStickerFromUrl(from, data)
					break
case prefix+ 'snobg':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await hexa.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.png')
                        file_name2 = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/removebg?apikey=${lol}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ffmpeg(`./${file_name}`)
                                .input(file_name)
                                .on('error', function(err) {
                                    console.log(err)
                                    fs.unlinkSync(file_name)
                                })
                                .on('end', function() {
                                    hexasendMessage(from, fs.readFileSync(file_name2), sticker, { quoted: mek })
                                    fs.unlinkSync(file_name2)
                                })
                                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                                .toFormat('webp')
                                .save(file_name2)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break

case prefix+ 'ttdl':
                url = args.join(" ")
                result = await ssstik(url)
                console.log(result)
                buf = await getBuffer(`${result.videonowm}`)
                hexa.sendMessage(from, buf, MessageType.video, {mimetype: 'video/mp4', filename: `tiktok.mp4`, quoted: mek, caption: `${result.text}\n\nUrl music : ${result.music}`})
                break
case prefix+ 'hentai':
if(!mek.key.fromMe) return reply('lo sape ngentod?')
nge = await getBuffer(`https://pencarikode.xyz/api/hentai?apikey=pais`)
hexa.sendMessage(from, nge, MessageType.image, {quoted: mek, caption: `nih ${pushname}, segera tobat ya anjinkkkk`})
break
/*case prefix+ 'rhentai':
	    if (!mek.key.fromMe) return
	    mama = axios.get('https://waifu.pics/api/nsfw/neko')
	    sendMediaURL(from, ${mama.data.url})
break

case prefix+ 'on':
            if (!mek.key.fromMe) return 
            offline = false
            fakestatus(' _*ANDA TELAH ONLINE*_ ')
            break     
*/
    case prefix+ 'status':
            fakestatus(`*STATUS*\n${offline ? '├─⦿ OFFLINE' : '├─⦿ ONLINE'}\n${banChats ? '└─⦿ SELF-MODE' : '└─⦿ PUBLIC-MODE'}`, ({contextInfo: {forwadingScore: 508, isForwarded: true}}))
            break
/*
 case prefix+ 'off':
            if (!mek.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = args.join(' ') ? args.join(' ') : '-'
            alasan = anuu
            fakestatus(' _*𝗔𝗻𝗱𝗮 𝗠𝗲𝗺𝗮𝘀𝘂𝗸𝗶 𝗠𝗼𝗱𝗲 𝗢𝗙𝗙𝗟𝗜𝗡𝗘*_', MessageType.text, {contextInfo: { forwardingScore: 508, isFordwarded: true}})
            break */
/*case 'self':
			  if (!mek.key.fromMe) return reply('*Ente owner?_*')
			    public = false
			    return reply(  `*「 𝙈𝙊𝘿𝙀 : 𝙎𝙀𝙇𝙁 」*`, text)
			    break
			    
			  case 'public':
			    if (!mek.key.fromMe) return reply('*Ente owner?_*')
			    public = true
			    return reply(`*「 𝙈𝙊𝘿𝙀 : 𝙋𝙐𝘽𝙇𝙄𝘾 」*`, text)
			    break
			    */
		/*	  case prefix+ 'status':
			    const status = banChats ? '𝙋𝙐𝘽𝙇𝙄𝘾': '𝙎𝙀𝙇𝙁'
			  const onlinee = offline ? '𝙊𝙁𝙁𝙇𝙄𝙉𝙀' : '𝙊𝙉𝙇𝙄𝙉𝙀'
			    return reply(`*「 𝙎𝙏𝘼𝙏𝙐𝙎 𝘽𝙊𝙏 」*\n\n*Status : ${status}*\n*Status : ${onlinee}*`, text)
			    
			    break
			    */
			    case prefix+ 'on':
          	if (!mek.key.fromMe) return reply('Owner bukan?')
          	offline = false
          	return reply(`*ANDA SEKARANG ONLINE*`,text)
          	break       
          	
      	case prefix+ 'off':
         	if (!mek.key.fromMe) return reply('Owner bukan?')
          	offline = true
          	waktuafk = Date.now()
          	anuu = args.join(" ") ? args.join(" ") : 'Tidur'
          	alasanafk = anuu
          	return reply(`*ANDA SEKARANG OFFLINE*\n*DENGAN ALASAN : ${alasanafk}*`,text)
          	break
    case prefix+ 'get':
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break

//KONTOLLLLLLLL

case prefix+ 'unpin':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                hexa.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break

// ANTI DELETE
case prefix+ 'getpic':
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await hexa.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					hexa.sendMessage(from, thumb)
				}
				break


case prefix+ 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./lib/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./lib/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./lib/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return hexa.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return hexa.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./lib/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						hexa.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						hexa.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return hexa.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./lib/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						hexa.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						hexa.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return hexa.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return hexa.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./lib/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					hexa.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./lib/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						hexa.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						hexa.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./lib/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						hexa.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						hexa.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
//ANTI DELETE
case prefix+ 'getgrup': 
case prefix+ 'getgroup': 
case prefix+ 'getg':
				const ingfo = await hexa.getGroup(totalchat)
				let txt = `Ingfo grup\nJumlah Grup: ${ingfo.length}\n\n`
				for (let i = 0; i < ingfo.length; i++){
					txt += `Nama grup : ${ingfo[i].subject}\nID grup : ${ingfo[i].id}\nDibuat : ${moment(`${ingfo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\nJumlah Peserta : ${ingfo[i].participants.length}\n\n`
				}
fakestatus(from, txt)
break

   case prefix+ 'mystat':
   case prefix+ 'mystatus':
				let i = []
				let giid = []
				for (mem of totalchat){
					i.push(mem.jid)
				}
				for (id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                let timestampi = speed();
				let latensii = speed() - timestampi
                const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = hexa.user.phone
                run = process.uptime()
                tesknya = `*V. Whatsapp :* ${wa_version}
*RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*MCC :* ${mcc}
*MNC :* ${mnc}
*Versi OS :* ${os_version}
*Merk HP :* ${device_manufacturer}
*Versi HP :* ${device_model}
*Group Chat :* ${giid.length}
*Personal Chat :* ${totalchat.length - giid.length}
*Total Chat :* ${totalchat.length}
*Speed :* ${latensii.toFixed(4)} Second
*Runtime :* ${kyun(run)}`
                hexa.sendMessage(from, tesknya, `bot status`, text)
				break

case prefix+ 'wikipedia':
case prefix+ 'wiki':
		if (!q) return fakestatus('Isi teksnya!')
                wiki = await axios.get(`https://lindow-python-api.herokuapp.com/api/wiki?q=${q}`)
                hexa.sendMessage(from, `Hasil pencarin dari ${q}\n\n${wiki.data.result}\n\nJika undefined berarti query tidak ditemukan`, text,{quoted: fdocu})
                break
/*case prefix+ 'tahta':
				if (!arg) return reply(from, `Penggunaan ${prefix}tahta teks`, mek)
			reply(from, `sorry proses membutuhkan waktu...`, `loading...`)
			sendMediaURL(from, `https://api.zeks.xyz/api/hartatahta?text=${arg}&apikey=apivinz`)
break
*/
case prefix+ 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.
extendedTextMessage.contextInfo : mek
            owgi = await hexa.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break

case prefix+ 'tahta':
                tahta = `${body.slice(7)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter maksimal 10')
                     buff = await getBuffer(`https://api.zeks.xyz/api/hartatahta/text=${body.slice(7)}&apikey=apivinz`)
                     sendMediaURL(from, buff, image, {quoted: mek, caption: `Harta Tahta ${tahta}`})
                  break
case prefix+ 'circle':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage ) && args.length == 0) {
            boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await hexa.downloadMediaMessage(boij)
            im = await cord.circle(owgi)
            res = await upload(im)
            sendStickerFromUrl(from,res) 
            }else {
            reply('reply gambar')
            }
            break

case prefix+ 'kusonime':
                try {
                q = body.slice(10)
                kus = await axios.get(`https://lindow-python-api.herokuapp.com/api/kuso?q=${q}`)
                var m = { info, link_dl, sinopsis, thumb, title } = kus.data
                buf = await getBuffer(thumb)
                cap = `Title : ${title}\n\n${info}\n\nLink download : ${link_dl}\n\nSinopsis : ${sinopsis}`
                hexa.sendMessage(from, buf, MessageType.image, {caption: cap})
                } catch (e) {
                console.log(e)
                reply(`Anime ${q} tidak ditemukan, coba cari title lain`)
                }
                break
case prefix+ 'searchmusic':
				if (isQuotedAudio){
				const dlfile = await hexa.downloadMediaMessage(JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo)
				const bodyForm = new FormData()
			        bodyForm.append('audio', dlfile, 'music.mp3')
           			bodyForm.append('apikey', 'apivinz')
           			axios('https://api.zeks.xyz/api/searchmusic', {
                		method: 'POST',
                		headers: {
				"Content-Type": "multipart/form-data",
        			...bodyForm.getHeaders()
                		},
                		data: bodyForm
            			})
                		.then(({data}) =>{
				if (data.status){
				reply(`*「 Search Music 」*\n\n\n• *Title*: ${data.data.title}\n\n• *Artists*: ${data.data.artists}\n\n• *Genre*: ${data.data.genre}\n\n• *Album*: ${data.data.album}\n\n• *Release date*: ${data.data.release_date}`)
				} else reply(data.message)
				}).catch(() => reply('Internal server error!, try again later'))
				} else {
				reply('Wrong format!')
				}
				break

case prefix+ 'spam':
				if (!q) return reply(from, `Penggunaan ${prefix}spam teks|jumlahspam`, mek)
				if (!q) return reply(from, `Penggunaan ${prefix}spam teks|jumlah`, mek)
				if (isNaN(arg[1])) return hexa.reply(from, `harus berupa angka`, mek)
				for (let i = 0; i < argz[1]; i++){
					reply(from, argz[0], fake)
				}
				break


case prefix+ 'troli':
if (!mek.key.fromMe) return reply("Khusus gua bang")
hexa.sendMessage(from, 'Ngapain bang?', text,{quoted: troli})
hexa.sendMessage(from, 'Jagoan bang?', text,{quoted: troli})
hexa.sendMessage(from, 'Salken juga bang wkwk:v', text,{quoted: troli})
hexa.sendMessage(from, 'Orang mana bang?', text,{quoted: troli})
hexa.sendMessage(from, 'Iya lah ajg:v', text,{quoted: troli})
break
   case prefix+ 'bug':
  case prefix+ 'ridwanxyz':
	    if (!mek.key.fromMe) return reply('Bug goblok!')
	    hexa.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL, 1)
	    await hexa.toggleDisappearingMessages(from, 0)
	    reply('ridwanxyz')
            break
case prefix+ 'pshidup':
hexa.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL, 1)
await hexa.toggleDisappearingMessages(from, 0)
break
case prefix+ 'sendbug':
hmm = body.slice(8)
hexa.toggleDisappearingMessages(`hmm`, WA_DEFAULT_EPHEMERAL, 1)
await hexa.toggleDisappearingMessages(`hmm`, 0)
break

break
/*
//entahlah
hexa.on('group-participants-update', async (anu) =>
		try {
			const mdata = await hexa.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await hexa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/Tm93nGx/c5ad2a6c6daa.png'
				}
			    thu = await hexa.getStatus(anu.participants[0], MessageType.text)
				teks = `[ *NEW MEMBER IN ${mdata.subject}* ]\n\nUsername : @${num.split('@')[0]}\n\nBio : ${thu.status}\n\nApi number : wa.me/${num.split('@')[0]}\n\nWelcome @${num.split('@')[0]} 👋🏻`
				let buff = await getBuffer(ppimg)
				lindow.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'promote') {
			   try {
					ppimg = await hexa.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gamba
runik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			    var thu = await hexa.getStatus(anu.participants[0], MessageType.text)
			    num = anu.participants[0]
			    teks = `*❏ PROMOTE-DETECTED*\n\nUsername: @${num.split('@')[0]}\n\nBio : ${thu.status}\n\nDate: ${time} ${bulan} 2021\n\nGroup: ${mdata.subject}\n\nDon't break the rules!`
			   let buff = await getBuffer(ppimg)
			   hexa.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'demote') {
			   try {
					ppimg = 'https://i.ibb.co/26ht7ZQ/13a12686b543.png'
				} catch {
					ppimg = 'https://i.ibb.co/26ht7ZQ/13a12686b543.png'
				}
				thu = await hexa.getStatus(anu.participants[0], MessageType.text)
			   num = anu.participants[0]
			   teks = `*❏ DEMOTE-DETECTED*\n\nUsername: @${num.split('@')[0]}\n\nBio : ${thu.status}\n\nDate: ${time} ${bulan} 2021\n\nGroup: ${mdata.subject}\n\nPfft hahaha`
			   let buff = await getBuffer(ppimg)
			   hexasendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					*/
/*case 'asupan':
                    
		    url = `https://h4ck3rs404-api.herokuapp.com/api/asupan?apikey=404Api`
                    asupan = await getBuffer(url)
                    sendMediaURL(from, asupan, MessageType.video, {mimetype: 'video/mp4', filename: `asupan.mp4`, quoted: mek, caption: 'succes'})
                break*/
//asupan v 2
case prefix+ 'asupan':
sendMediaURL(from, `https://lindow-api.herokuapp.com/api/asupan?apikey=LindowApi`, `Nieh asupan`)
break
//bates fod
/*case prefix+ 'metal':
zrapi.textpro("https://textpro.me/black-metal-text-effect-829.html", [`${args.join(' ')`]).then((data) =>
hexa.sendMessage(from, {url:data}, MessageType.image, { quoted : mek, caption: `${args.join(' ')`})
break*/


//********FILTER*********//
case prefix+ 'addfilter':
if(!q) return reply(`ketik perintah addfilter filter|jawab!`)
fltr = q.split('|')[0]
jwb = q.split('|')[1]
if(!jwb) return reply('Format salah!')
for(let i of filter){
  if(fltr.includes(i.Filter)) return reply(`Filter ${fltr} sudah ada didatabase`)
}
const chat = {
Filter : fltr,
Jawaban : jwb
}
filter.push(chat)
fs.writeFileSync('./src/filter.json', JSON.stringify(filter))
reply(`Sukses menambahkan filter ${fltr}\nCek dengan cara ${prefix}listfilter`)
break

case prefix+ 'dellfilter':
for(let i=0; i<filter.length; i++){
if(q.includes(filter[i].Filter)){
   obj = {
      txt: filter[i].text,
      balesan: filter[i].balesan
   }
   let del = filter.indexOf(filter[i])
   filter.splice(del, 1)
   fs.writeFileSync('./src/filter.json', JSON.stringify(filter))
   reply(`Sukses Menghapus Respon ${q}`)
}
}
break

case prefix+ 'autorespon':
	        if(!mek.key.fromMe) return reply('_Only Owner_')
					if (!isGroup) return reply(mess.OnlyGrup)
					if (args.length < 1) return reply('𝗜𝘆𝗮 𝘀𝗮𝘆𝗮𝗻𝗴')
					if (args[0] == 'on') {
						if (sfilter.includes(from)) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳!!!')
						sfilter.push(from)
						fs.writeFileSync('./src/sfilter.json', JSON.stringify(sfilter))
						reply('_Sukses mengaktifkan Autorespon Chat digroup ini_')
					} else if (args[0] == 'off') {
					  let off = sfilter.indexOf(from)
						sfilter.splice(off, 1)
						fs.writeFileSync('./src/sfilter.json', JSON.stringify(sfilter))
						reply('_Sukses menonaktifkan Autorespon Chat digroup ini_')
					} else {
						reply(`_Kirim perintah on untuk mengaktifkan, off untuk menonaktifkan_\nContoh ${prefix + command} on`)
					}
					break
					
					case prefix+ 'listfilter':
   teks = 'List Respon:\n'
   for (let i of filter) {
   teks += `⬡ Filter : ${i.Filter}\n⬡ Jawab : ${i.Jawaban}\n\n---------------------------\n\n`
   }
   teks += `Total : ${filter.length}`
   hexa.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
   break
/*FILTER*/


//ngentod

case prefix+ 'simih':


wo = await axios.get('https://pencarikode.xyz/api/simsimii?text=simi%20cantik?&apikey=pais')
wo1 = `${wo.data.result}`
reply(wo1)
break

case prefix+ 'wame':
hexa.updatePresence(from, Presence.composing) 
      options = {
          text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] , forwadingScore: 509, isForwaded: true}
    }
   

hexa.sendMessage(from, options, text, { quoted: mek } )
break
case prefix+ 'darkjoke':
balas('tunggu kakc')
wek = await fetchJson('https://api.zeks.xyz/api/darkjokes?apikey=apivinz')
an = await getBuffer(wek.result)
hexa.sendMessage(from, an, image, {quoted: mek, caption: `🤣😏🤣😏😌🗿😌😖😱😱😱😱😱dark banget ya hyung *${pushname}!!*`})
break
case prefix+ 'spamcall':
if(!q) return reply(`_[ ! ] Untuk menggunakan ketik *${prefix}spamcall 8xxxxxxxx`)
reply(`Mencoba mengirim spam ke nomor ${q}`)
await fetchJson(`https://videfikri.com/api/call/?nohp=${q}`)
await fetchJson(`https://videfikri.com/api/call/?nohp=${q}`)
await fetchJson(`https://videfikri.com/api/call/?nohp=${q}`)
await fetchJson(`https://videfikri.com/api/call/?nohp=${q}`)
await fetchJson(`https://videfikri.com/api/call/?nohp=${q}`)
await fetchJson(`https://videfikri.com/api/call/?nohp=${q}`)
wok = await fetchJson(`https://videfikri.com/api/call/?nohp=${q}`)
reply(`*${wok.result.logs}*`)
break
case prefix+ 'lirik':

const {
  lirikLagu
} = require('./lib/lirik.js')

if (!q) return reply("Apa Yang Mau Di Cari? ")
reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `❒「  *${teks}*  」
└ *Lirik Lagu :*


${res[0].result}
`
reply(lirik)
})
break
case prefix+ 'covidindo':
cov = `❒「  *Kasus Covid-19 Indonesia*  」
├ *Terinfeksi :* ${copid[0].kasus}
├ *Kematian :* ${copid[0].kematian}
└ *Sembuh :* ${copid[0].sembuh}


_*STAY SAFE BRO, PAKAI MASKER MU!!!*_`
reply(cov)
break
case prefix+ 'fml':
mem = await axios.get('https://api.zeks.xyz/api/fml?apikey=apivinz')
teks =`Quotes: ${mem.data.result}`
reply(teks)
break
if (budy.startsWith('>')){
if(!mek.key.fromMe) return
ras = budy.slice(1)
function _client(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{
reply(util.format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
} 
}

case prefix+ 'virtex':
//ngentod = (fs.readFileSync('./media/peler.txt'))
hexa.sendMessage(from, fs.readFileSync('./media/peler.txt'), MessageType.text, { quoted: mek })

break
case prefix+ 'bugtes':
hexa.sendMessage(from, 'Replied to quoted orderMessage', MessageType.extendedText, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 200,
    surface: 200,
    message: 'idk bro, i just trying this bug',
    orderTitle: '𝙉𝙪𝙧𝙪𝙩𝙤𝙢𝙤', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
case prefix+ 'loli':
sendMediaURL('http://api-iam.herokuapp.com/api/randomloli')
break
case prefix+ 'randomtag':
//
 jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `RANDOM TAG\nDARI : @${sender.split('@')[0]}\nUntuk : @${diaa.jid.split('@')[0]} \nPESAN : ${body.slice(10)}`
					jds.push(sender)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
break
case prefix+ 'resend':
	  if(isQuotedSticker){
	  boij = JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await hexa.downloadMediaMessage(boij)
	fs.writeFileSync(`./src/sticker/resend.jpg`, delb)
	buff = fs.readFileSync('./src/sticker/resend.jpg')
	sendStickerWithFG(buff)
	fs.unlinkSync('./src/sticker/resend.jpg')
	  }
	  else if(isQuotedImage){
	    boij = JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await hexa.downloadMediaMessage(boij)
	fs.writeFileSync(`./src/image/resend.jpg`, delb)
	buff = fs.readFileSync('./src/image/resend.jpg')
	sendImage(buff)
	fs.unlinkSync('./src/image/resend.jpg')
	  }
	 else if(isQuotedAudio){
	   boij = JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await hexa.downloadMediaMessage(boij)
	fs.writeFileSync(`./src/audio/resend.mp3`, delb)
	buff = fs.readFileSync('./src/audio/resend.mp3')
	sendAudio(buff)
	fs.unlinkSync('./src/audio/resend.mp3')
	 }
	break




case prefix+ 'run':
                                  if (!mek.key.fromMe) return reply('*Ente owner?')
                                        return hexa.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
                                        break

case prefix+ 'spam':
				if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
				argz = arg.split("|")
				if (!argz) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(argz[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argz[1]; i++){
					sendText(argz[0])
				}
				break
case prefix+ 'tiktoddl':
					if (args.length < 1) return reply('Urlnya mana um?')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('hmmm')
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.moe/api/tiktok?url=${args[0]}&apiKey=${barbar}`, {method: 'get'})
					if (anu.error) return reply('Yahhh, error tod!')
					buffer = await getBuffer(anu.result)
					hexa.sendMessage(from, buffer, video, {quoted: mek})
					break
case prefix+ 'tagg':
   if(!q) return reply('Ingfonya apa?')
var group = await hexa.groupMetadata(from)
   var member = group['participants']
   var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
   })
var itsme = `0@s.whatsapp.net`
               var split = fake
               var selfbotz = {
                  contextInfo: {
                     mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
                        }
                              }
                      }
               }
if (isQuotedSticker){
   boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
   delb = await hexa.downloadMediaMessage(boij)
   await fs.writeFileSync(`./media/stctagg.webp`, delb)
   result = fs.readFileSync(`./media/stctagg.webp`)
   hexa.sendMessage(from, result, MessageType.sticker, {contextInfo: {mentionedJid: mem},
            quoted: {
               key: {
                  fromMe: false,
                  participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6281804680327-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `${q}`
               }
            }
         })
   await fs.unlinkSync(`./media/stctagg.webp`)
}
else if(isQuotedImage){
   boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
   delb = await hexa.downloadMediaMessage(boij)
   await fs.writeFileSync(`./media/imgtag.jpg`, delb)
   result = fs.readFileSync(`./media/imgtag.jpg`)
   hexa.sendMessage(from, result, MessageType.image, {contextInfo: {mentionedJid: mem},
            quoted: {
               key: {
                  fromMe: false,
                  participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6281804680327-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `${q}`
               }
            }
         })
   await fs.unlinkSync(`./media/imgtag.jpg`)
}
else if(isQuotedAudio){
   boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
   delb = await hexa.downloadMediaMessage(boij)
   await fs.writeFileSync(`./media/vntag.mp3`, delb)
   result = fs.readFileSync(`./media/vntag.mp3`)
            hexa.sendMessage(from, result, MessageType.audio, {mimetype: 'audio/mp4', ptt: true, contextInfo: {mentionedJid: mem},
            quoted: {
               key: {
                  fromMe: false,
                  participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6281804680327-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `${q}`
               }
            }
         })
   await fs.unlinkSync(`./media/vntag.mp3`)
}
else if(isQuotedVideo){
   boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
   delb = await hexa.downloadMediaMessage(boij)
   await fs.writeFileSync(`./media/videotag.mp4`, delb)
   result = fs.readFileSync(`./media/videotag.mp4`)
   hexa.sendMessage(from, result, MessageType.video, {mimetype: 'video/mp4', contextInfo: {mentionedJid: mem},
            quoted: {
               key: {
                  fromMe: false,
                  participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6281804680327-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `${q}`
               }
            }
         })
   await fs.unlinkSync(`./media/videotag.mp4`)
}
else{
   return reply('Reply sticker/image/video/vn!')
}
   break

case prefix+ 'fakecall':
//f (!q) return reply('Masukin nomor yg bener lah kon..tol!!')
var data = body.slice(8)
asu = fetchJson(`https://h4ck3rs404-api.herokuapp.com/api/spamcall?number=`+data`&apikey=404Api`, { method: 'get'})
hexa.sendMessage(from, asu.result,text,MessageType.text)
break
case prefix+ 'spamchat':
if (!mek.key.fromMe) return reply('Owner only wokwok')
reply('Otw Spam 1x')
                                       if (args[0].startsWith('08')) return reply('Gunakan nomor awalan 8/n ex : *8796662*')
                                    //   if (args[0].startsWith('85648910195')) return reply('Gagal tidak dapat spam nomer bot')
                                    //   if (args[0].startsWith('85876330812')) return reply('Gagal tidak dapat spam nomer owner')
                                       var data = body.slice(10)
                                       await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                                  //     await fetchJson(`https://arugaz.herokuapp.com/vapi/spamcall?no=`+data, {method: 'get'})
                                       await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                                       await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
        //                               await fetchJson(`https://zeksapi.herokuapp.com/api/spamcall?no=`+data+`&apikey=apivinz`, {method: 'get'})
                                       break
case prefix+ 'chat':
                if (!mek.key.fromMe) return reply('Lo sape kntl?')
                var pc = budy.slice(6)
                var nomor = pc.split("|")[0];
                var org = pc.split("|")[1];
                hexa.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
                reply('Selesai om...')
                break
case prefix+ 'pin':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                hexa.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
    case prefix+ 'kontag':
            if (!mek.key.fromMe) return reply('Nte siapa?')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            hexa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
case 'kontaktag':
				argz = arg.split('|')
				if (!argz) return reply(from, `Penggunaan ${prefix}kontak @tag atau nomor|nama`, mek)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					hexa.hideTagKontak(from, mentioned[0].split('@')[0], argz[1])
				} else {
					hexa.hideTagKontak(from, argz[0], argz[1])
				}
				break

    case prefix+ 'sticktag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case prefix+ 'tag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case prefix+ 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            hexa.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case prefix+ 'settarget':
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case prefix+ 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await hexa.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await hexa.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case prefix+ 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case prefix+ 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case prefix+ 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case prefix+ 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case prefix+ 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            hexa.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
    case prefix+ 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            hexa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case prefix+ 'take':
    case prefix+ 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await hexa.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `Ridwan`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `XyZ`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, hexa, mek, from)
			break
	case prefix+ 'stikerwm':
	case prefix+ 'stickerwm':
    case prefix+ 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await hexa.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case prefix+ 'upswteks':
            if (!q) return fakestatus('Isi teksnya!')
            hexa.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case prefix+ 'upswimage':
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case prefix+ 'upswvideo':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case prefix+ 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await hexa.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await hexa.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		hexa.sendMessage(from, mat, MessageType.extendedText, anu)
            break
    case prefix+ 'public':
          	if (!mek.key.fromMe) return fakestatus('Nte Sape?')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *_PUBLIC-MODE_* 」`)
          	break
	case prefix+ 'self':
          	if (!mek.key.fromMe) return fakestatus('Nte Sapee?')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 _*SELF-MODE*_ 」`)
          	break
 	case prefix+ 'hidetag':
	case prefix+ 'p':
			if (!mek.key.fromMe) return fakestatus('Ente sapee')
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await hexa.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			hexa.sendMessage(from, optionshidetag, text)
			break
	case prefix+ 'play':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
        case prefix+ 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break      
    case prefix+ 'sticker': 
    case prefix+ 'stiker':
    case prefix+ 'sg':
    case prefix+ 's':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                hexa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            hexa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
    case prefix+ 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await hexa.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'Ini bukan gambarnya?')
			fs.unlinkSync(ran)
			})
			break
	case prefix+ 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await hexa.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *YTSEARCH*'
    		await fakethumb(tbuff,ytresult)
			break
	case prefix+ 'setreply':
	case prefix+ 'setfake':
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case prefix+ 'setprefix':
	case prefix+ 'noprefix':
			prefix = q
			fakegroup(`Succes Mengganti Prefix : ${q}`)
			break
	case prefix+ 'setfakeimg':
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case prefix+ 'setthumb':
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case prefix+ 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case prefix+ 'emoji':
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
        case prefix+ 'asupan62':
        link = axios.get('https://h4ck3rs404-api.herokuapp.com/api/asupan?apikey=404Api')
	sendMediaURL(from, link)
	break
	case prefix+ 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
    case prefix+ 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            hexa.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
 /*	case prefix+ 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
 		tiktod(`${args[0]}`)
    		.then(result => {
    		console.log(result)
    		const { videonowm, videonowm2, text } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${videonowm2}`)
    		.then(async (a) => {
    		me = `*Title* : ${text}\n*Link* : ${a.data}`
		hexa.sendMessage(from,{url:`${videonowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
     		.catch(e => console.log(e))
     	⅞	break*/
case prefix+ 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		console.log(result)
    		const { videonowm, videonowm2, text } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${videonowm2}`)
    		.then(async (a) => {
    		me = `*Title* : ${text}\n*Link* : ${a.data}`
		nowm = await getBuffer(videonowm)
		hexa.sendMessage(from,nowm,video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
    case prefix+ 'tiktokaudio':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
 		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		const { music,text } = result
		hexa.sendMessage(from,{url:`${music}`},audio,{mimetype:'audio/mp4',filename : `${text}`,quoted:mek})
		})
     		.catch(e => console.log(e))
     		break
    case prefix+ 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			hexa.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
    case prefix+ 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        reply(mess.wait)
	igdl(args[0])
	.then((result) => {
    for (Y of result.url_list )
    sendMediaURL(from,Y,'Nih')
	})
	break
    /*case prefix+ 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    */
//case prefix+ 'igstalk':
     /*       if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break//*/

case prefix+ 'igstalk':
if (args.lenght == 0 ) return reply('Usernamenya?')
 axios.get('https://www.instagram.com/${args[0]/?__a=1').then(async(result) => {
const { id, full_name, biography, edge_follow, edge_followed_by, is_private, is_verifed, external_url, profile_pic_url_hd } = result.data.graphql.user
rem = `*ID* :${id}\n*Username* : ${args[0]}\n*Full Name* : ${full_name}\n*BIO* : ${biography}\n*Following* : ${edge_follow.count}\n*Followers* : ${edge_followed_by.count}\n*Private* : ${is_private ? '🔒' : '🔓'}\n*Verified* : ${is_verifed ? '✅' : '❌'}\n*Desc* : ${external_url ? '-' : '-'}\n\n*Link* : https://instagram.com/${args[0]}`
ram = await getBuffer(profile_pic_url_hd)
client.sendMessage(from,ram,image,{quoted:mek,caption:rem})
})
break
    case prefix+ 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            fakestatus(mess.wait)
            Fb.getInfo(`${te}`)
            .then(G => {
            ten = `${G.download.sd}`
            tek = `${G.title}`
            sendMediaURL(from,ten,`*Title* : ${tek}\n\n*Link* : ${ten}`)
            })
            break    
	case prefix+ 'term':
			if (!mek.key.fromMe) return fakestatus('Ente sapee')
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
    case prefix+ 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await hexa.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
    case prefix+'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await twitterGetUrl(`${ten}`)
            .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from,ren,'DONE')
            })
            break
    case prefix+ 'runtime':
    case prefix+ 'test':
	    function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `_*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*_`
}
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
	case prefix+ 'speed':
	case prefix+ 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			fakegroup(pingnya)
			})
			break  
    case prefix+ 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case prefix+ 'tomp4':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await hexa.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
if (budy.includes('Assalamualaikum'))
{ reply('Wa`alaikumussalam wr wb.') }

default:
/*f (budy.includes('>')){
return reply('owner only wahai ${pushname} ngentod!')
}*/
if (budy.startsWith('x')){
if (!mek.key.fromMe) return reply('owner only')
return hexa.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
}  
if (budy.startsWith('!')){


return wo = await axios.get('https://pencarikode.xyz/api/simsimii?text={body.slice(2){&apikey=pais')
reply(wo)
}
	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
	console.log('Message : %s', color(e, 'green'))
	// console.log(e)
	}
}

	
    
