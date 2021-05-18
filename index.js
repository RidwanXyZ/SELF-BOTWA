//SC BELUM JARI FULL, BTW BASE NYA HEXAGONZ, ADA BEBERAPA CASE YG GA DI CANTUMKAN DI MENU, GA SEMPET TOD:V
//batwsSC NYA JANGAN DI JUAL NGENTOD MAKASIH DAH PAKE
//More? rakit sendiri ya anjg
//Thanks for hexantod



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
const translate = require('@vitalets/google-translate-api')
const cheerio = require('cheerio')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const FormData = require('form-data')
const brainly = require('brainly-scraper')
const ms = require('parse-ms')
const toMs = require('ms')
const { fromBuffer } = require('file-type');
const yts = require( 'yt-search')
const { error } = require("qrcode-terminal")
const { getBuffer, promoteAdmin, getGroup, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const { virtext } = require('./media/peler')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/afk.json'))
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const afkk = JSON.parse(fs.readFileSync('./database/afk.json'))
const {  mediafireDl } = require('./lib/mediafire.js')
const {  covid } = require('./lib/covid.js')
const { wikiSearch } = require('./lib/wiki.js')
const { uptotele, uptonaufal, uploadFile } = require('./lib/uploadimg')
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

fake = `_ [ 𝙎𝙀𝙇𝙁-𝘽𝙊𝙏 ] _`
numbernye = '0'
banChats = true
offline = false
botname = `${pushname}`
owner = '' //isi nomor kau
waktu = ''
alasan = ''
shape = '⬡ '
targetpc = '' //ganti nomot loe coeg
barbar = 'B40MxRPs2xx1BonDNEWK'
apikey = 'LindowApi'
zeks = 'RidwanXyZ'
xtim = 'MnekT' //api.xteam.xyz
xtem = 'xtietaj' //api.xteam.xyz
lol = 'rxyz' //api.lolhuman
vtear = 'iwan' //vhtear.api
//afk = false,
lolhuman = 'oniichan' 
//afk = false, 
afktime = ''
reason = ''
//foto = await getBuffer('https://i.ibb.co/y88cbkV/FB-IMG-16202244253877019.jpg')
baterai = {
        battery: "" || "Tidak terdeteksi",
        cas: "" || false
}
fake2 = `JAM: ${time}
BATRE: ${baterai.battery}
STATUS: ${baterai.cas === true ? 'Ngecas⚡' : '~Ngecas~'}`
//run = process.uptime()

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
		//const idulfitri = await axios.get('https://api-self.herokuapp.com/api/hitungmundur?tanggal=13&bulan=5&tahun=2021')
		const type = Object.keys(mek.message)[0]
        	   const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
		  const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
		  
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(0).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		
		const isCmd = body.startsWith(prefix)
				const copid = await covid()
				const q = args.join(' ')
		const botNumber = hexa.user.jid
		const botNumberss = hexa.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
				const totalchat = await hexa.chats.all()
				const groupMetadata = isGroup ? await hexa.groupMetadata(from) : ''
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
	const simi = JSON.parse(fs.readFileSync('./src/simi.json'))
	const issimi = isGroup ? simi.includes(from) : false
const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
            const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
            mention != undefined ? mention.push(mentionByReply) : []
            const mentionUser = mention != undefined ? mention.filter(n => n) : []

        //MESS
		mess = {
			owner: `Maaf ${pushname}!!, Command ini khusu untuk Ridwan`,
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
            hexa.sendMessage(from, teks, text, {contextInfo: {forwardingScore: 509, isForwarded: true}, quoted:mek, sendEphemeral: true})
        }

        
const sendAudio = (filename) => {
	hexa.sendMessage(from, filename, MessageType.audio, {mimetype: 'audio/mp4', filename: 'audio.mp3', quoted: mek})
}

const sendSticker = (filename) => {
	hexa.sendMessage(from, filename, MessageType.sticker, {contextInfo: {forwardingScore: 509, isForwarded: true}, quoted: mek, sendEphemeral: true})
}
const sendImage = (filename, teks) => {
	if(teks == ``){
	hexa.sendMessage(from, filename, MessageType.image, {quoted: mek})
}
else{
hexa.sendMessage(from, filename, MessageType.image, {quoted: mek, caption: teks})
}}

const memek = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "status@broadcast"
	},
	"message": {
		"liveLocationMessage": {
			"name": fake2
		}
	}
}
const finv = {
  "key": {
    "fromMe": false,
    "participant": "0@s.whatsapp.net",
    "remoteJid": "0@s.whatsapp.net"
  },
  "message": {
    "groupInviteMessage": {
      "groupJid": from,
      "inviteCode": "NgsCIU2lXKh3VHJT",
      "groupName": "FLAY BOT",
    }
  }
}


const od ={
  "key": {
    "fromMe": false,
    "participant": "0@s.whatsapp.net",
    "remoteJid": "0@s.whatsapp.net"
  },
  "message": {
    "groupInviteMessage": {
      "groupJid": "6281226770537-1611127287@g.us",
      "inviteCode": "NgsCIU2lXKh3VHJT",
      "groupName": "Zay Bot WeA",
      "caption": `Menampilkan _*${command}*_`
    }
  }
}

const flo = {
  "key": {
    "fromMe": false,
    "participant": "0@s.whatsapp.net",
    "remoteJid": "status@broadcast"
  },
  "message": {
    "locationMessage": {
      "name": fake2
    }
  }
}


const sendMess = (hehe, teks) => {
            hexa.sendMessage(hehe, teks, text)
        }


const getGrup = async (totalchat) => {
        let grup = []
        let a = []
        let b = []
        for (c of totalchat){
                a.push(c.jid)
        }
        for (d of a){
                if (d && d.includes('g.us')){
                        b.push(d)
                }
        }
        for (e of b){
                let ingfo = await 

hexa.groupMetadata(e)
                grup.push(ingfo)
        }
        return grup
}



        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? hexa.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : hexa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
const uploadImages = (buffData, type) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const cmd = text.toLowerCase()
        const filePath = 'media/tmp.' + ext
        const _buffData = type ? await resizeImage(buffData, false) : buffData
        fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp.' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then(res => res.json())
                .then(res => {
                    if (res.error) return reject(res.error)
                    resolve('https://telegra.ph' + res[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch(err => reject(err))
        })
    })
}

/*COVID INCLUDES

COVID BY ZENN

❒「  *Kasus Covid-19 Indonesia*  」
├ *Terinfeksi :* ${copid[0].kasus}
├ *Kematian :* ${copid[0].kematian}
└ *Sembuh :* ${copid[0].sembuh}
*/
	



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
                        hexa.sendMessage(to, media, MessageType.sticker,{quoted:mek, sendEphemeral: true})
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




const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('0m') }
    afk.push(obj)
    fs.writeFileSync('./src/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./src/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
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

//SIMI COKK

       	 if(isGroup && issimi){
         if(!isCmd){
         data = await fetchJson(`https://api.xteam.xyz/simsimi2?kata=${mek.message.conversation}&APIKEY=${xtem}`)
         teks = `_Simi_ : ${data.result}`
         console.log(`Simi\n⬡ Input : ${mek.message.conversation}\n⬡ Jawab : ${data.result}`)
         reply(teks)
      }
   }

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
        	const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
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

function parseMention(text) {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
function formatDate(n, locale = 'id') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}
hexa.on("CB:action,,battery", json => {
          const battery = json[2][0][1].value
          const persenbat = parseInt(battery)
          baterai.battery = `${persenbat}%`
          baterai.cas = json[2][0][1].live
})




if (budy.includes('@62'))
{
reply('Apasih tag tag!!')
sendStickerFromUrl(from, `https://i.ibb.co/zQqFGfB/SAVE-20210511-163208.jpg`)
}

switch (command) {
    case prefix+ 'menu':
    case prefix+ 'help':
gif = await getBuffer('https://i.pinimg.com/originals/c9/1a/bc/c91abcd94e4323d30e504c3eb43c7a87.gif')
foto = await getBuffer('https://i.ibb.co/y88cbkV/FB-IMG-16202244253877019.jpg')
	run = process.uptime()
        teks = `${kyun(run)}`
    	var menu = `Hai ${pushname}
Prefix : ┌──「 ${prefix} 」
${shape} BATERAI: ${baterai.battery} ${baterai.cas === true ? 'Ngecas⚡' : '~Ngecas~'}
${shape} JAM • Road To Eid Mubarak
SELAMAT HARI RAYA IDUL FITRI

TAQABBALALLAHU WINNA WA MINKUM

SEMOGA AMAL KITA DI TERIMA OLEH ALLAH SWT.

MINAL AIDZIN WAL FAIDZIN

MOHON MAAF LAHIR DAN BATIN🙏🏼🙏🏼🙏🏼

${shape} Bot Berjalan selama ${teks}

┌──「 𝙎𝙀𝙇𝙁 𝘽𝙊𝙏 」───
│

❒「  *Kasus Covid-19 Indonesia*  ]
├ *Terinfeksi :* ${copid[0].kasus}
├ *Kematian :* ${copid[0].kematian}
└ *Sembuh :* ${copid[0].sembuh}

├─「 MAKER 」───
│
${shape}  _${prefix}sᴛɪᴄᴋᴇʀ_
${shape}  _${prefix}sᴡᴍ_ <author|packname>
${shape}  _${prefix}ᴛᴀᴋᴇ_ <author|packname>
${shape}  _${prefix}ғᴅᴇғᴀᴄᴇ_
${shape}  _${prefix}ᴇᴍᴏᴊɪ_
${shape}  _${prefix}sᴇᴀʀᴄʜᴍᴜsɪᴄ_
│
├─「 CV」───
│
${shape}  _${prefix}ᴛᴏɪᴍɢ_
${shape}  _${prefix}ᴛᴏᴍᴘ3_
${shape}  _${prefix}ᴛᴏᴍᴘ4_
${shape}  _${prefix}sʟᴏᴡ_
${shape}  _${prefix}ғᴀsᴛ_
${shape}  _${prefix}ʀᴇᴠᴇʀsᴇ_
${shape}  _${prefix}ᴛᴏᴜʀʟ_
│
├─「 UPSW 」───
│
${shape}  _${prefix}ᴜᴘsᴡᴛᴇᴋs_
${shape}  _${prefix}ᴜᴘsᴡɪᴍᴀɢᴇ_
${shape}  _${prefix}ᴜᴘsᴡᴠɪᴅᴇᴏ_
│
├─「 FUN 」───
│
${shape}  _${prefix}ғɪᴛɴᴀʜ_
${shape}  _${prefix}ғɪᴛɴᴀʜᴘᴄ_
${shape}  _${prefix}ᴋᴏɴᴛᴀᴋ_
${shape}  _${prefix}ᴀsᴜᴘᴀɴ_
${shape}  _${prefix}infoall_
${shape}  _${prefix}cekchat_
${shape}  _${prefix}ppcp_
${shape}  _${prefix}pin_
${shape}  _${prefix}unpin_
${shape}  _${prefix}cuaca_
${shape}  _${prefix}ᴡɪᴋɪ_
│
├─「 TAG 」───
│
${shape}  _${prefix}ʜɪᴅᴇᴛᴀɢ_
${shape}  _${prefix}ᴋᴏɴᴛᴀɢ_
${shape}  _${prefix}sᴛɪᴄᴋᴛᴀɢ_
${shape}  _${prefix}ᴛᴏᴛᴀɢ_
│
├─「 Donlod 」───
│
${shape}  _${prefix}ʏᴛsᴇᴀʀᴄʜ_ <query>
${shape}  _${prefix}ɪɢsᴛᴀʟᴋ_ <query>
${shape}  _${prefix}ᴘʟᴀʏ_ <query>
${shape}  _${prefix}ᴠɪᴅᴇᴏ_ <query>
${shape}  _${prefix}ʏᴛᴍᴘ3_ <link>
${shape}  _${prefix}ʏᴛᴍᴘ4_ <link>
${shape}  _${prefix}ɪɢ_ <link>
${shape}  _${prefix}ᴛᴡɪᴛᴛᴇʀ_ <link>
${shape}  _${prefix}ᴛɪkᴋᴛᴏᴋ_ <link>
${shape}  _${prefix}ᴛɪkᴛᴏᴋᴀᴜᴅɪᴏ_ <link>
${shape}  _${prefix}ғʙ_ <link>
${shape}  _${prefix}ʙʀᴀɪɴʟʏ_ <query>
${shape}  _${prefix}ɪᴍᴀɢᴇ_ <query>
${shape}  _${prefix}ᴀɴɪᴍᴇ_ <random>
│
├─「 Other 」───
│
${shape}  _${prefix}shutdown_
${shape}  _${prefix}self_
${shape}  _${prefix}public_
${shape}  _${prefix}setthumb_
${shape}  _${prefix}settarget_
${shape}  _${prefix}setfakeimg_
${shape}  _${prefix}setreply_
${shape}  _${prefix}ping_
${shape}  _${prefix}join_
${shape}  _${prefix}term_ <code>
${shape}  _x_ <code>
├─「 Other 」───
${shape}  ${prefix}infogempa
${shape}  ${prefix}joox
${shape}  ${prefix}phcoment
${shape}  ${prefix}ttdl
${shape}  ${prefix}asupan2
${shape}  ${prefix}spam
${shape}  ${prefix}leave
${shape}  ${prefix}mediafire
${shape}  ${prefix}ttp
${shape}  ${prefix}sleding (teks)
${shape}  ${prefix}spamsms 6289xxx
${shape}  ${prefix}inspect (linkgrup)
${shape}  ${prefix}cita-cita
│
│
│
└─「 ❏ *SELF-BOT* ❏ 」` 

ya = fs.readFileSync('menu.jpg')
      		hexa.sendMessage(from, foto, MessageType.image, {contextInfo: {forwardingScore: 509, isForwarded: true}, quoted: od, caption: menu, sendEphemeral: true})
        //	hexa.sendMessage(from, ya, MessageType.sticker, {quoted: mek})
	   	break





case prefix+ 'leave':
if (!mek.key.fromMe) return reply("Siapa bang?")
 {
hexa.groupLeave(from)
}
 break
/*case prefix+ 'togif':
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
                                break*/


case prefix+ 'togif':
				if (!isQuotedSticker) return reply('Reply stiker nya')
				if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
					const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const media = await hexa.downloadAndSaveMediaMessage(encmedia)
					const uploadn = await uptonaufal(media, Date.now() + '.webp')
					const anjj = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${uploadn.result.image}`)
					thumb = await getBuffer(anjj.data.result)
					hexa.sendGif(from, thumb)
					fs.unlinkSync(media)
				} else {
					reply(`Harus sticker bergerak`)
				}
				break
case prefix+ 'mute':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                hexa.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                hexa.sendMessage(from, '*succes mute this chat*', MessageType.text,{quoted: fdocu, sendEphemeral: true})
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

case prefix+ 'simi':
           if(!mek.key.fromMe) return reply('_Lu Siapa?_')
               if (!isGroup) return reply(mess.OnlyGrup)
               if (args.length < 1) return reply('𝗜𝘆𝗮 𝘀𝗮𝘆𝗮𝗻𝗴')
               if (args[0] == '1') {
                  if (simi.includes(from)) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳!!!')
                  simi.push(from)
                  fs.writeFileSync('./src/simi.json', JSON.stringify(simi))
                  reply(`_Sukses mengaktifkan Simi Simi digroup ${groupName}`)
               } else if (args[0] == '0') {
                 let off = simi.indexOf(from)
                  simi.splice(off, 1)
                  fs.writeFileSync('./src/simi.json', JSON.stringify(simi))
                  reply(`_Sukses menonaktifkan Simi Simi digroup ${groupName}`)
               } else {
                  reply(`_Kirim perintah on untuk mengaktifkan, off untuk menonaktifkan_\nContoh ${prefix}modesimi on`)
               }
               break

case prefix+ 'inspect':
					codee = body.slice(9).split('https://chat.whatsapp.com/')[1]
					var res = await hexa.query({
				        json: ["query", "invite", codee],
			    		expect200: true
  					})
  					var caption = `
*「 Group Link Inspector 」*


• *Id:* ${res.id}

• *Judul:* ${res.subject}

• *Dibuat oleh* @${res.id.split('-')[0]}
pada *${formatDate(res.creation * 1000)}*${res.subjectOwner ? `

• *Judul diubah oleh* @${res.subjectOwner.split(`@`)[0]}
pada *${formatDate(res.subjectTime * 1000)}*`: ''}${res.descOwner ? `

• *Deskripsi diubah oleh* @${res.descOwner.split(`@`)[0]}
pada *${formatDate(res.descTime * 1000)}*` : ''}

• *Jumlah Member:* ${res.size}

• *Teman yang diketahui join*: ${res.participants ? '\n' + res.participants.map((user, i) => ++i + '. @' + user.id.split(`@`)[0]).join('\n').trim() : 'Tidak ada'}
${res.desc ? `\n• *Deskripsi:*\n
${res.desc}` : '\n*Tidak ada Deskripsi*'}
`
				await hexa.sendMessage(from, caption, text, { quoted: mek, contextInfo: { mentionedJid: parseMention(caption)}})
				break

case prefix+ 'xnxx':
if (!q) return reply('Judul bokep nya?')
	reply('Sedang menjelajah web ex en ex ex')
	data = await fetchJson(`https://lolhuman.herokuapp.com/api/xnxxsearch?apikey=ridwanxyz&query=${q}`)
	teks = `*X N X X  S E A R C H*\n\n\n\n`
	img = await getBuffer(data.result[0].thumbnail)
	for (let i of data.result){
	img = await getBuffer(`${i.thumbnail[0]}`)
		teks += `⬡ Judul   : ${i.title}\n\n`
		teks += `⬡ Views   : ${i.views}\n\n`
		teks += `⬡ Durasi  : ${i.duration}\n\n`
		teks += `⬡ Uploader: ${i.uploader}\n\n`
		teks += `⬡ Link    : ${i.link}\n\n\n`
		//img = await getBuffer(i.thumbnail[0])
	}
hexa.sendMessage(from,img, image, {contextInfo: {forwardingScore: 3, isForwarded: true},quoted: mek, caption: teks, sendEphemeral: true})
break
case prefix+ 'spamsms':
if (!q) return reply('Mau spam siapa?')
a = await fetchJson(`https://lolhuman.herokuapp.com/api/sms/spam1?apikey=${lol}&nomor=${q}`)
b = await fetchJson(`https://lolhuman.herokuapp.com/api/sms/spam2?apikey=${lol}&nomor=${q}`)
c = await fetchJson(`https://lolhuman.herokuapp.com/api/sms/spam3?apikey=${lol}&nomor=${q}`)
d = await fetchJson(`https://lolhuman.herokuapp.com/api/sms/spam4?apikey=${lol}&nomor=${q}`)
e = await fetchJson(`https://lolhuman.herokuapp.com/api/sms/spam5?apikey=${lol}&nomor=${q}`)
f = await fetchJson(`https://lolhuman.herokuapp.com/api/sms/spam6?apikey=${lol}&nomor=${q}`)
g = await fetchJson(`https://lolhuman.herokuapp.com/api/sms/spam7?apikey=${lol}&nomor=${q}`)
h = await fetchJson(`https://lolhuman.herokuapp.com/api/sms/spam2?apikey=${lol}nomor=${q}`)
om = `Sukses spam ${q}`
reply(om)
break
case prefix+ 'ttnowm':
                    if (!q) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    
                    ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${lol}&url=${q}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    await hexa.sendMessage(from, ini_buffer, video, { quoted: mek })
                    break
case prefix+ 'xhamster':
data = await fetchJson(`https://api.lolhuman.xyz/api/xhamstersearch?apikey=${lol}&query=${q}`)
                    //
		    bufer = await getBuffer(data.result[0].thumbnail)
                    ini_txt = `*X H A M S T E R*`
                    for (let x of data.result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
		    hexa.sendMessage(from, bufer, image,{quoted: mek, caption: ini_txt})
                    break
case prefix+ 'cuaca':
if (!q) return reply('Nyari apa si kntl?')
reply('Tunggu sloer !')
	lol = await axios.get(`https://lolhuman.herokuapp.com/api/cuaca/${q}?apikey=${lol}`)
	ok = await axios.get(`https://api.vhtear.com/weather?city=${q}&apikey=${vtear}`)
	teks = `Cuaca :\n${ok.data.result.weather}
		Lokasi: \n${ok.data.result.location}`
reply(teks)
hexa.sendMessage(from, { "degreesLatitude": lol.data.result.latitude,
            "degreesLongitude": lol.data.result.longitude,
            "name": 'Cuaca Kota:',
            "address": q
}, location, {contextInfo: {forwardingScore: 509, isForwarded: true}, quoted: mek, sendEphemeral: true})
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
if (!mek.key.fromMe) return reply('Maaf, saat ini fitur sedang di private')
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
case prefix+ 'tagall':
					if (!isGroup) return reply(mess.only.group)
					var nom = mek.participant
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `┣❥   @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*From :* - [ 𝙎𝙀𝙇𝙁 𝘽𝙊𝙏 ] -\n*Info :*  ${body.slice(9)}\n*Total Member :* ${groupMembers.length} \n\n┏━━━⟪ *INGFONYA* ⟫━━━┓`+teks+`└─「 ❏ *SELF-BOT* ❏ 」` `, members_id, true)
					break


case prefix+ 'triggered':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
             encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
             media = await hexa.downloadAndSaveMediaMessage(encmedia)
rem = await uploadImages(media)

res = `https://lolhuman.herokuapp.com/api/editor/triggered?apikey=${lol}&img=${rem}`
sendStickerFromUrl(from,res)
} else {
reply('kirim/reply gambar')
}
break
case prefix+ 'cekchat':
					hexa.updatePresence(from, Presence.composing)
					hexa.sendMessage(from, `Total : ${totalchat.length} Chat`, text, {quoted  : ftoko, sendEphemeral: true})
					break

case prefix+ 'listonline':
                if (!isGroup) return reply(`Only group`)
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(hexa.chats.get(ido).presences), hexa.user.jid]
                hexa.sendMessage(from, 'List Sider:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: fdocu,
                    contextInfo: { mentionedJid: online, forwadingScore: 999, isForwading: true},
		    sendEphemeral: true
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
sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result, sendEphemeral: true}).catch(e => {                      reply(result)
})
break

case prefix+ 'tovn':
if (!isQuoteAudio) return reply('Tag Audio Yang Mau Di Jadiin Vn')
reply(mess.wait)
aud = await hexa.downloadMediaAndSaveMeduaMessage(encmedua)
hexa.sendMessage(from, aud, audio, {mimetype: 'audio/mp4', quoted: mek, ptt : true})

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
                await hexa.sendMessage(from, text, result.wilayah.topperCase())
                
*/
case prefix+ 'jadwalshalat':
case prefix+ 'jadwalsholat':
if (!q) return balas('Yang bener gan')
njir = await fetchJson(`http://api-iam.herokuapp.com/api/jadwalshalat?daerah=${q}`)
njir1 = `Jadwal sholat untuk daerah ${q}


╭───「 Jadwal Sholat 」
├❏ Wilayah : ${q}
├
├❏ Imsyak  : ${njir.Imsyak}
├❏ Subuh   : ${njir.Subuh}
├❏ Dzuhur  : ${njir.Dzuhur}
├❏ Ashar    : ${njir.Ashar}
├❏ Maghrib: ${njir.Maghrib}
├❏ Isya       : ${njir.Isya}
╰───「 Jadwal Sholat 」

`
reply(njir1)
break
case prefix+ 'ttp':
if (!q) return reply('Teks nya mana ngentod?')
         reply(mess.wait)

         data = `https://lolhuman.herokuapp.com/api/ttp?apikey=${lol}&text=${q}`
        sendStickerFromUrl(from, data)
					break

case prefix+ 'snobg':
case prefix+ 'nobg':
if (!isMedia || isQuotedImage)
boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await hexa.downloadMediaMessage(boij)
            res = await uploadImages(owgi)
nj = `https://lolhuman.herokuapp.com/api/removebg?apikey=ridwanxyz&img=${res}`
            sendStickerFromUrl(from,nj)
break
case prefix+ 'ttdl':
		
		if (!q) return reply('Link nya mana konsoll?')
		sendStickerFromUrl(from, `https://telegra.ph/file/2c25c9a02cd4f68052435.png`)
		mber = await axios.get(`https://api.zeks.xyz/api/tiktok?url=${q}&apikey=${zeks}`)
		fer = await getBuffer(mber.data.no_watermark)
		on = `*T I K T O K*\n\n\n\nJudul: ${mber.data.title}\n\nLike: ${mber.data.like_count}\n\n${mber.data.author}`
		hexa.sendMessage(from, fer, MessageType.video, {quoted: mek, caption: on})
                break
case prefix+ 'hentai':
if(!mek.key.fromMe) return reply('lo sape ngentod?')
reply('Tunggu kak!')
nge = await getBuffer(`https://pencarikode.xyz/api/hentai?apikey=pais`)
hexa.sendMessage(from, nge, MessageType.image, {quoted: mek, sendEphemeral: true, caption: `nih ${pushname}, segera tobat ya anjinkkkk`})
break
case prefix+ 'joox':
if (!q) return reply('Nyari apa konsoll???')
reply('Bentar ya kak!')
jo = await axios.get(`https://pencarikode.xyz/download/joox?search=${q}&apikey=pais`)
lagu = await getBuffer(jo.data.result.mp3_url)
img = await getBuffer(jo.data.result.img_url)
cap = `*J O O X  P L A Y*\n\n\n`
cap += `${shape} Judul: ${jo.data.result.judul}\n`
cap += `${shape} Artis: ${jo.data.result.artist}\n`
cap += `${shape} Ukuran: ${jo.data.result.filesize}\n`
cap += `${shape} Durasi: ${jo.data.result.duration}\n`
cap += `*!Tunggu file dikirim*\n`
cap += `[        JOOX PLAY        ]`
hexa.sendMessage(from, img, image, {quoted: mek, caption: cap})
await hexa.sendMessage(from, lagu, audio,{mimetype: `audio/mp4`, filename: `${q}.mp3`, quoted: mek})
break

    case prefix+ 'status':
            fakestatus(`*STATUS*\n${offline ? '${shape} OFFLINE' : '${shape} ONLINE'}\n${shape} WA VERSION: ${hexa.user.phone.wa_version}\n${shape} OS VERSION: ${hexa.user.phone.os_version}\n${shape} DEVICE: ${hexa.user.phone.device_manufacturer}, ${hexa.user.phone.device_model}, ${hexa.user.phone.os_build_number}\n${shape} BATERAI ${baterai.battery} ${baterai.cas === true ? `Ngecas⚡` : `~Ngecas~`}\n${shape} RUNTIME ${kyun(run)}\n${banChats ? '└─⦿ SELF-MODE' : '└─⦿ PUBLIC-MODE'}`, ({contextInfo: {forwadingScore: 508, isForwarded: true}}))
            break

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



case prefix+ 'unpin':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                hexa.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break


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

case prefix+ 'listgc': 
case prefix+ 'listgrup': 
case prefix+ 'grouplist':
				const ingfo = await getGrup(totalchat)
				let txt = `Ingfo grup\nJumlah Grup: ${ingfo.length}\n\n`
				for (let i = 0; i < ingfo.length; i++){
					txt += `Nama grup : ${ingfo[i].subject}\nID grup : ${ingfo[i].id}\nDibuat : ${moment(`${ingfo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\nJumlah Peserta : ${ingfo[i].participants.length}\n\n`
				}
reply(txt)
break

   

case prefix+ 'wikipedia':
case prefix+ 'wiki':
		if (!q) return fakestatus('Isi teksnya!')
                wiki = await axios.get(`https://lindow-python-api.herokuapp.com/api/wiki?q=${q}`)
                reply(`Hasil pencarin dari ${q}\n\n${wiki.data.result}\n\nJika undefined berarti query tidak ditemukan`)
                break

case prefix+ 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.
extendedTextMessage.contextInfo : mek
            owgi = await hexa.downloadMediaMessage(boij)
            res = await uploadImages(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break

case prefix+ 'tahta':
                tahta = `${body.slice(7)}`
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter maksimal 10')
                    buff = `https://api.zeks.xyz/api/hartatahta/text=${body.slice(7)}&apikey=${zeks}`
			hexa.sendMessage(from, buff, image, {contextInfo: {forwardingScore: 509, isForwarded: true}, quoted: mek, sendEphemeral: true})
                   sendMediaURL(from, buff, `Harta Tahta ${tahta}`)
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
if (!q) return reply('Nama anime nya apa konsol??')
pel = await axios.get(`https://xinzbot-api.herokuapp.com/api/anime/kusonime?search=${q}&apikey=XinzBot`)
buf = await getBuffer(pel.data.result.thumbs)
cap = `• *Title:* ${pel.data.result.title} | ${pel.data.result.title_jp}\n`
cap += `• *Genre:* ${pel.data.result.genre}\n`
cap += `• *Producer:* ${pel.data.result.producer}\n`
cap += `• *Score:* ${pel.data.result.score}\n`
cap += `• *Rilis:* ${pel.data.result.released_on}\n`
cap += `• *Sinopsis:* ${pel.data.result.description}\n\n\n\n\n`
cap += `-`
hexa.sendMessage(from, buf, MessageType.image, {quoted: mek, caption: cap, sendEphemeral: true})
break
case prefix+ 'searchmusic':
				if (isQuotedAudio){
				const dlfile = await hexa.downloadMediaMessage(JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo)
				const bodyForm = new FormData()
			        bodyForm.append('audio', dlfile, 'music.mp3')
           			bodyForm.append('apikey', '${zeks}')
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
if (!mek.key.fromMe) return reply('Private menu')
if (!q) return reply('Nomornya ngab?')
reply('Tunggu ngab, spamming')
await fetchJson(`https://api.xteam.xyz/spammer/olx?no=${q}&APIKEY=${xtim}`)
await fetchJson(`https://api.xteam.xyz/spammer/jagreward?no=${q}&APIKEY=${xtim}`)
reply('Terkirim mungkin ngab:v')
break
case prefix+ 'troli':
if (!mek.key.fromMe) return reply("Khusus gua bang")
hexa.sendMessage(from, 'Ngapain bang?', text,{quoted: troli})
hexa.sendMessage(from, 'Jagoan bang?', text,{quoted: troli})
hexa.sendMessage(from, 'Salken juga bang wkwk:v', text,{quoted: troli})
hexa.sendMessage(from, 'Orang mana bang?', text,{quoted: troli})
hexa.sendMessage(from, 'Iya lah ajg:v', text,{quoted: troli})
break

case prefix+ 'asupan2':
reply('Bentar coeg')
sendMediaURL(from, `https://api.xteam.xyz/shitpost?APIKEY=${xtem}`, `Dark🗿🗿`)
break
case prefix+ 'asupan':
reply('Wait cuy')
sendMediaURL(from, `https://lindow-api.herokuapp.com/api/asupan?apikey=LindowApi`, `Nieh asupan`)
break
//bates fod


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
//EMROR GAN, FIX SEMDIRI
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
//emror
case 'uptele':
				const encmediiia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				const mediaq = await hexa.downloadMediaMessage(encmediiia)
				const upli = await uptotele(mediaq)
				reply(from, `${upli}`, text, {quoted: mek})
break
case prefix+ 'tourl2':
  if ((isMedia && !hexa.message.videoMessage || isQuotedImage || isQuotedVideo || isQuotedSticker) && args.length == 0) {
    reply(mess.wait)
            boij = isQuotedImage || isQuotedVideo || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await hexa.downloadMediaMessage(boij)
            res = await uploadImages(owgi, false)
            reply(res)
  }
            break
case prefix+ 'shutdown':
if (!mek.key.fromMe) return reply('nte sape?')
reply('Siap tuan...')
hexa.close()
break

case prefix+ 'freeproxy':
nih = await fetchJson('https://h4ck3rs404-api.herokuapp.com/api/proxy-random?apikey=404Api')
nyo = `Free Proxy\n\n\n`
nyo += `Http: ${nih.result.https}\nIP: ${nih.result.ip}\nLokasi: ${nih.result.lokasi}`
reply(nyo)
break

case prefix+ 'cita-cita':
reply(`Kak ${pushname} cita-citanya apa ya? hmm`)
okw = await getBuffer('https://pencarikode.xyz/api/cita-cita?apikey=pais')
hexa.sendMessage(from, okw, audio,{mimetype: "audio/mp4", quoted: mek, ptt: true})
break

case prefix+ 'ssweb2':
if (!q) return reply('Link nya kak?')
reply('Wait, lemme get the buffer')
buf = await getBuffer(`https://api.vhtear.com/ssweb?link=${q}&type=phone&apikey=${vtear}`)
hexa.sendMessage(from, buf, image,{contextInfo: {forwardingScore: 509, isForwarded: true},quoted: mek, sendEphemeral: true})
break

case prefix+ 'ssweb':
if (!q) return reply(`Link nya mana kak ${pushname}??`)
reply(`Bentar kak, lagi akses web ${q}`)
sswe = await getBuffer(`http://caliph-api.herokuapp.com/api/ssweb?url=${q}`)
hexa.sendMessage(from, sswe, MessageType.image,{quoted: mek, caption: `SCREENSHOOT WEB ${q}`, sendEphemeral: true})
break
translate = require('@vitalets/google-translate-api')
case prefix+ 'translate':
			
			teks = body.slice(11)
			ok1 = teks.split('|')[0]
			ok2 = teks.split('|')[1]
			anu = await translate(ok2, {to: ok1})
			console.log(anu)
				    reply(anu.text)
					break
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
balas(`_[ ! ] Tunggu kak ${pushname}!_`)
wek = await fetchJson('https://api.zeks.xyz/api/darkjokes?apikey=${zeks}')
an = await getBuffer(wek.result)
hexa.sendMessage(from, an, image, {contextInfo:{forwadingScore: 509, isForwaded: true}, quoted: mek, sendEphemeral: true, caption: `🤣😏🤣😏😌🗿😌😖😱😱😱😱😱dark banget ya hyung *${pushname}!!*`})
break
case prefix+ 'spamcall':
if(!q) return reply(`_[ ! ] Untuk menggunakan ketik *${prefix}spamcall 8xxxxxxxx`)
reply(`Mencoba mengirim spam ke nomor ${q}`)
wok1 = await axios.get(`https://videfikri.com/api/call/?nohp=${q}`)
await sleep(5000)
wok2 = await axios.get(`https://videfikri.com/api/call/?nohp=${q}`)
await sleep(10000)
wok3 = await axios.get(`https://videfikri.com/api/call/?nohp=${q}`)
await sleep(15000)
wok4 = await axios.get(`https://videfikri.com/api/call/?nohp=${q}`)
await sleep(20000)
wok5 = await axios.get(`https://videfikri.com/api/call/?nohp=${q}`)
await sleep(25000)
wok6 = await axios.get(`https://videfikri.com/api/call/?nohp=${q}`)
await sleep(30000)
wok = await axios.get(`https://videfikri.com/api/call/?nohp=${q}`)
reply(`_[!] ${wok1.data.result.logs}_\n\n\n_[!] ${wok2.data.result.logs}_\n\n\n_[!] ${wok3.data.result.logs}_\n\n\n_[!] ${wok4.data.result.logs}_\n\n\n_[!] ${wok5.data.result.logs}_\n\n\n_[!] ${wok6.data.result.logs}_\n\n\n_[!] ${wok.data.result.logs}_`)

break
case prefix+ 'lirik':

const {
  lirikLagu
} = require('./lib/lirik.js')

if (!q) return reply("Apa Yang Mau Di cari???\nTolol sia! ")
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
case prefix+ 'binner':
if (!q) return reply('Maaf, yg mau di enc mana cuy?')
reply('Bentar bang, prosesing!')
res = await fetchJson(`https://h4ck3rs404-api.herokuapp.com/api/binary/encode?text=${q}&apikey=404Api`)
jaw = `Teks: *${res.result.staring}*\n\n`
jaw += `Encode: *${res.result.encode}*`
reply(jaw)
break
case prefix+ 'ccgen':
case prefix+ 'ccgenerator':
reply('Tunggu kak!')
mem = await fetchJson('https://videfikri.com/api/ccgenerator')
te = `*Credit Card Generator*   \n\n\n`
te += `*⬡ Nama:* ${mem.result.customer.name}\n*Address:* ${mem.result.customer.address}\n*Country:* ${mem.result.customer.country}`
te += `*⬡ Network:* ${mem.result.card.network}\n`
te += `*⬡ Number:* ${mem.result.card.number}\n`
te += `*⬡ CVV:* ${mem.result.card.cvv}\n`
te += `*⬡ PIN:* ${mem.result.card.pin}\n`
te += `*⬡ Balance:* ${mem.result.card.balance}\n`
te += `*⬡ EXP:* ${mem.result.card.expiration_month} ${mem.result.card.expiration_year}\n`
reply(te)
break
case prefix+ 'meme':
res = await fetchJson('https://api.zeks.xyz/api/memeindo?apikey=${zeks}')
re = await getBuffer(res.result)
hexa.sendMessage(from, re, image, {quoted: mek, caption: 'Ga cringe kan?(emote batu)', sendEphemeral: true})
break
//emror
case prefix+ 'telesticker':
if(!q) return reply(`Ketik ${prefix}telesticker link|Jumlah yang dikirim`)
linx = q.split('|')[0]
jumlahh = q.split('|')[1]
if(!jumlahh) return reply('Format salah!')
reply(mess.wait)
data = await axios.get(`https://api.zeks.xyz/api/telegram-sticker?apikey=${zeks}&url=${linx}`)
hdata = data.data.result
reply(`Mengirim Sticker Telegram...`)
for(let i=0; i<jumlahh; i++){
 await sendStickerFromUrl(hdata[i])
}
break

case prefix+ 'liputan6':
data = await fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=${zeks}`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {

						teks += `*⬡ Judul* : ${i.title}\n*⬡ Url* : ${i.url}\n*⬡ Keterangan* : ${i.ket}\n*⬡ Category* : ${i.category}\n*⬡ Time* : ${i.time}\n=================\n`
					}
					hexa.sendMessage(from, teks.trim(), text, {contextInfo: { forwadingScore: 509, isForwaded: true }, quoted: memek, sendEphemeral: true})
break

case prefix+ 'fakeloc':
if(!q) return reply(`Example ; ${prefix}fakeloc Rumah doi|Jl.`)
nama = q.split('|')[0]
jln = q.split('|')[1]
if(!jln) return reply('Format salah')
hexa.sendMessage(from, { "degreesLatitude": -3.748174,
            "degreesLongitude": 119.58556,
            "name": nama,
            "address": jln,
            "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABkAGQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAcECAP/xAAxEAACAgECAgYIBwAAAAAAAAAAAQIDBAURIVEGBxMxQXESFCNCYYGRwRUiMoKxstH/xAAZAQEBAAMBAAAAAAAAAAAAAAAAAQQFBgP/xAAiEQEAAgEDBAMBAAAAAAAAAAAAAQIDBBExBQYSITJBcbH/2gAMAwEAAhEDEQA/AOkwAQAAAAPO+6rHqlbfZCquPGU5yUUvNsHL0BgwtZ0vOtdWDqWFk2L3Kb4zf0TN5ImJ4W1ZrO0wAAqAAAAAAAAAAA877YUUWXXSUa64ucpPwSW7Zz30t6SZevahO/JnKuiDbqpb4VL/AHm/tsledexJ5+h6jh1PazIxrKovfucotL+TmfOplZC2rjCT4bSWzT5M12vvaIiscS6rtjBjva+S0b2jgoy42T9jbvKL9LyfMtnVd0lv1jDuws+bsysZJxsk93OHdx5tcOPJrve7IHgYdtWR2lm0Ut/HfcrPUvh2S1jNzVuqq8d0vk3KUWv6P6rmY+ktNcsVrPqW165ipl0VsmSNrRwrwANy4AAAAAAAAAAAAjvWx0c9Szlq2JDbHyZe1SXCFnfv5S4vzT5osRg17Tq9W0fLwbdtrq2ot+7LvjL5NJ/I8c+KMtJrLO6drbaLPXLHH3+OcMLGtzMurHx4Oy62ShGK8W3sjojovotOg6NThVbSmvzWzS/XN97+y+CSJr1OabDI1jLzrYNPFrj2al4Snut/NKMl+4sBjaHD41855lt+49fObNGCvxr/AGQAGe5oAAAAAAAAAAAAAYNK0jA0nt/w/HVPbz9OzaTe7+b4L4LgjeASIiPULa02ne07yAAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==" }, location, { quoted: mek })
break
case prefix+ 'phcoment':
if (!q) return reply ('Masukkan pesan!')
reply('Tunggu kak!')
sendMediaURL(from, `https://api.zeks.xyz/api/phub?apikey=${zeks}&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${pushname}&msg=${q}`)
break
case prefix+ 'sleding':

if (!q) return reply ('Teks nya?')
reply('Tunggu ya kak!')
           buffer = `https://api.vhtear.com/slidingtext?text=${q}&apikey=${vtear}`
	   sendStickerFromUrl(from, buffer)
break
case prefix+ 'grupwa':
case prefix+ 'carigrup':
if (!q) return reply('Mau nyari gc apa?')
anj = await fetchJson(`https://api.xteam.xyz/search/grupwa?q=${q}&APIKEY=MIMINETBOT`)
teks = '*G R U P   W A  S E A R C H*\n\n\n'
for (let memek of anj.result){
teks += `⬡ Title: ${memek.subject}: \n⬡ LINK: ${memek.link}\n======================\n\n`
}
reply(teks)
break
case prefix+ 'caripesan':
tagg = []
data = await hexa.searchMessages(q, mek.key.remoteJid, 10, 1)
fox = `*C A R I  P E S A N*\n⬡ Query : ${q}\n\n`
console.log(`Total ${data.messages.length} pesan didapatkan`)
num = 0
for(let i of data.messages){
   num += 1
   if (i.message.conversation) {
                        if (i.key.fromMe){ 
                            fox += '⬡ Nama: '+hexa.user.name+'\n⬡ Tag : @'+hexa.user.jid.split("@")[0]+'\n⬡ Msg : '+i.message.conversation+'\n⬡ MsgID : '+i.key.id+'\n⬡ Type:  conversation\n\n'
                        }else{
                        	   conts = mek.key.fromMe ? hexa.user.jid : hexa.contacts[i.participant] || {notify: jid.replace(/@.+/, '')}
pushnama = mek.key.fromMe ? hexa.user.name : conts.notify || conts.vname || conts.name || '-'
                            fox += '⬡ Nama: '+pushnama+'\n⬡ Tag : @'+i.participant.split("@")[0]+'\n⬡ Msg : '+i.message.conversation+'\n⬡ MsgID : '+i.key.id+'\n⬡ Type :  conversation\n\n'
                        } 
                    }
                    else if (i.message.extendedTextMessage){
                        if (i.key.fromMe){ 
                            fox += '⬡ Nama: '+hexa.user.name+'\n⬡ Tag : @'+hexa.user.jid.split("@")[0]+'\n⬡ Msg : '+i.message.extendedTextMessage.text+'\n⬡ MsgID : '+i.key.id+'\n⬡ Type :  extendedTextMessage\n\n'
                        }else{
                        	   conts = mek.key.fromMe ? hexa.user.jid : hexa.contacts[i.participant] || {notify: jid.replace(/@.+/, '')}
pushnama = mek.key.fromMe ? hexa.user.name : conts.notify || conts.vname || conts.name || '-'
                            fox += '⬡ Nama: '+pushnama+'\n⬡ Tag : @'+i.participant.split("@")[0]+'\n⬡ Msg : '+i.message.extendedTextMessage.text+'\n⬡ MsgID : '+i.key.id+'\n⬡ Type :  extendedTextMessage\n\n'
                        }
                    }
tagg.push(i.participant)
tagg.push(hexa.user.jid)
}
console.log(fox)
mentions(fox, tagg, true)
break


case prefix+ 'fml':
mem = await axios.get('https://api.zeks.xyz/api/fml?apikey=${zeks}')
teks =`Quotes:\n*_${mem.data.result}_*`
console.log(mem.data)
reply(teks)
break


case prefix+ 'infoalamat':
if (!q) return reply(`Masukkan query kak, contoh\n${prefix + command} Polres Jakarta Utara`)
aw = await fetchJson(`https://api.vhtear.com/infoalamat?query=${q}&apikey=${vtear}`)
text = `*I N G F O  A L A M A T\n\n\n*`
text += `Data: ${aw.data}\n`
text += `Desk: ${aw.deskripsi}`
reply(text)
break

case prefix+ 'virtex':
//ngentod = (fs.readFileSync('./media/peler.txt'))
hexa.sendMessage(from, fs.readFileSync('./media/peler.txt'), MessageType.text)
break

case prefix+ 'bugtes':
hexa.sendMessage(from, 'Replied to quoted orderMessage', MessageType.extendedText, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 999, // Bug
    status: 200,
    surface: 200,
    message: 'idk bro, i just trying this bug',
    orderTitle: 'idk', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break

case prefix+ 'randomtag':

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
	  boij = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await hexa.downloadMediaMessage(boij)
	fs.writeFileSync(`./src/sticker/resend.jpg`, delb)
	buff = fs.readFileSync('./src/sticker/resend.jpg')
	sendStickerWithFG(buff)
	fs.unlinkSync('./src/sticker/resend.jpg')
	  }
	  else if(isQuotedImage){
	    boij = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await hexa.downloadMediaMessage(boij)
	fs.writeFileSync(`./src/image/resend.jpg`, delb)
	buff = fs.readFileSync('./src/image/resend.jpg')
	sendImage(buff)
	fs.unlinkSync('./src/image/resend.jpg')
	  }
	 else if(isQuotedAudio){
	   boij = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
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
   if(!q) return reply(`Ingfonya apa?\nContoh penggunaan (reply media) ${prefix + command}`)
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
else if(isQuotedDocument){
  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
   delb = await hexa.downloadMediaMessage(boij)
   await fs.writeFileSync(`./media/doctag`, delb)
   result = fs.readFileSync(`./media/doctag`)
   hexa.sendMessage(from, result, MessageType.document, {mimetype: mek.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage.mimetype,filename: `${mek.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage.fileName}`, contextInfo: {mentionedJid: mem},
            quoted: {
               key: {
                  fromMe: false,
                  participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283897228022-1614611024@g.us' } : {})
               },
               message: {
                  conversation: `${q}`
               }
            }
         })
   await fs.unlinkSync(`./media/doctag`)
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
        //                               await fetchJson(`https://zeksapi.herokuapp.com/api/spamcall?no=`+data+`&apikey=${zeks}`, {method: 'get'})
                                       break
case prefix+ 'chat':
                if (!mek.key.fromMe) return reply('Lo sape kntl?')
                var pc = body.slice(6)
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
            satu = anu[0] !== '' ? anu[0] : `${puhname}`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `    `
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
	    if (!mek.key.fromMe) return reply('This command only for Ridwan!')
            if (!q) return fakestatus('Isi teksnya!')
            hexa.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case prefix+ 'upswimage':
            if (!mek.key.fromMe) return reply(mess.owner)
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
	    if (!mek.key.fromMe) return reply(mess.owner)
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
			
			}
			hexa.sendMessage(from, optionshidetag, text,{contexInfo: {forwardingScore: 509, isForwarded: true}, quoted: memek, sendEphemeral: true})
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
                hexa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek, sendEphemeral: true})
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
	case prefix+ 'setshape':
	        if (!q) return reply('di ganti apa bang?')
	        shape = q
	        reply (`Mengganti shape menjadi ${q}`)
	        break
	case prefix+ 'setreply':
	case prefix+ 'setfake':
	        if (itsMe) return
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case prefix+ 'setprefix':
	case prefix+ 'noprefix':
			if (!mek.key.fromMe) return reply(`Lo saha ${pushname}??`)
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
case prefix+ 'gimage':
if (!q) return reply('Nyari apa?')
ske = await fetchJson(`http://nzcha-apii.herokuapp.com/googleimage?q=${q}`)
se = await getBuffer(ske.result)
hexa.sendMessage(from, se, MessageType.image, {quoted: mek, sendEphemeral: true})
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
case prefix+ 'googleimage':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(mess.wait)
teks = args.join(' ')
res = await gis(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
break

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
.catch(err => {
reply('eror kak')
})
	break
case prefix+ 'igdl':
if (!q) return reply(`Masukkan link, contoh\n${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
data = await fetchJson(`https://lolhuman.herokuapp.com/api/instagram2?apikey=${lol}&url=${q}`)
bap = (data.result[0].media)
cap = `*${data.result.account.username}*`
cap += `\n\n\n\nCaption: ${data.result.caption}`
buf = (data.result[0].media)
sendMediaURL(from, bap, cap)
break




case prefix+ 'igstalk':
if (!q) return reply('Nyari apaan konsol!')
njir = await axios.get(`https://videfikri.com/api/igstalk/?username=${q}`)
img = await getBuffer(njir.data.result.profile_hd)
cap = `⬡ *I G  S T A L K*\n\n\n`
cap += `⬡ *USERNAME:* _${njir.data.result.username}_\n`
cap += `⬡ *FULLNAME:* _${njir.data.result.full_name}_\n`
cap += `⬡ *FOLLOWER:* _${njir.data.result.followers} Followers_\n`
cap += `⬡ *FOLLOWING:* _${njir.data.result.following} Following_\n`
cap += `⬡ *POSTINGAN:* _${njir.data.result.post_count}\n`
cap += `⬡ *BIOGRAPHY:* _${njir.data.result.bio}_\n`
cap += `[ I N S T A G R A M  S T A L K ]`
hexa.sendMessage(from, img, MessageType.image, {quoted: mek, caption: cap})
break

case prefix+ 'infogempa':
mp = await axios.get('https://ferdizstar-api.herokuapp.com/api/infogempa')
mg = await getBuffer(mp.data.map)
cap = `*I N G F O   G E M P A*`
cap += `\n\n\n*Lokasi:* ${mp.data.lokasi}\n`
cap += `*Koordinat:* ${mp.data.koordinat}\n`
cap += `*Kedalaman:* ${mp.data.kedalaman}\n`
cap += `*Magnitude:* ${mp.data.magnitude}\n`
cap += `*Potensi:* ${mp.data.potensi}\n`
cap += `*Waktu:* ${mp.data.waktu}\n\n\n\n\n`
cap += `*I N G F O   G E M P A*`
hexa.sendMessage(from, mg, image, {quoted: mek, caption: cap, sendEphemeral: true})
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
            teks = `${kyun(run)}\n       𝗥𝗜𝗗𝗪𝗔𝗡 𝗦𝗘𝗟𝗙𝗕𝗢𝗧       `
const test = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "628983583288-1620319322@g.us",
			"inviteCode": "NgsCIU2lXKh3VHJT",
			"groupName": "FLAY BOT",
			"caption": `\n${teks}`
		}
	}
}

hexa.sendMessage(from, `        𝗥𝗜𝗗𝗪𝗔𝗡 𝗦𝗘𝗟𝗙𝗕𝗢𝗧       `, text, {contextInfo: {forwardingScore: 509, isForwarded: true},quoted: test, sendEphemeral: true})
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
            sendMediaURL(from, res.result, `Nih kak ${pushname}`)
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break




default:
if (budy.startsWith('x')){
if (!mek.key.fromMe) return reply('Lu siapa si?')
try {
return hexa.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval brooo`))
} catch(err) {
e = String(err)
fakestatus(e)
}
}  

if (budy.startsWith('>')){
				if (!mek.key.fromMe) return reply('Lu siapa si?')
				console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V2 brooo`))
				try{
reply(require('util').format(await eval(`;(async () => { ${body.slice(2)} })()`)))
}catch(err){
	e = String(err)
	reply(e)
	}
}


	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


