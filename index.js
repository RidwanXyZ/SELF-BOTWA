//batwsSC NYA JANGAN DI JUAL NGENTOD MAKASIH DAH PAKE
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
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require("fb-video-downloader");
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
const tidur = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
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
const setiker = JSON.parse(fs.readFileSync('./temp/stick.json'))


fake = `_ [ 𝙎𝙀𝙇𝙁-𝘽𝙊𝙏 ] _`
numbernye = '0'
banChats = false
offline = false
botname = 'ridwangon memang oke'
owner = '6289514791129'
waktu = ''
alasan = ''
shape = '⬡ '
targetpc = '6285751056816'
barbar = 'B40MxRPs2xx1BonDNEWK'
apikey = 'LindowApi'
zeks = 'RidwanXyZ'
xtim = 'MIMINETBOT'
xtem = 'xteamtester'
lol = 'ridwanxyz'
vtear = 'AdiOfficial404'
lolhuman = 'oniichan'
afktime = ''
reason = ''
//foto = getBuffer('https://i.ibb.co/y88cbkV/FB-IMG-16202244253877019.jpg')
baterai = {
        battery: "" || "Tidak terdeteksi",
        cas: "" || false
}
telponv = 'Maaf kak, anda telah terdeteksi menelpon bot.\n*System akan otomatis menambahkan anda ke database block!*, Jika ingin membuka block, silahkan hubungi owner RidwanXyZ bot!.\n\n\n\n\n\n\n\n\n\n\n           𝗔𝗨𝗧𝗢𝗕𝗟𝗢𝗖𝗞 𝗦𝗬𝗦𝗧𝗘𝗠 & 𝗔𝗡𝗧𝗜 𝗖𝗔𝗟𝗟             \n'
fake2 = `JAM: ${time}
BATRE: ${baterai.battery}
STATUS: ${baterai.cas ? 'Ngecas⚡' : '~Ngecas~'}`
//=================================================//
module.exports = ridwan = async (ridwan, mek) => {
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
        	const time2 = moment.tz('Asia/Makassar').format('DD-MM JAM HH MENIT mm DETIK ss')
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
		const botNumber = ridwan.user.jid
		const botNumberss = ridwan.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
				const totalchat = await ridwan.chats.all()
				const groupMetadata = isGroup ? await ridwan.groupMetadata(from) : ''
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
        const conts = mek.key.fromMe ? ridwan.user.jid : ridwan.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? ridwan.user.name : conts.notify || conts.vname || conts.name || '-'
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
            ridwan.sendMessage(from, teks, text, {contextInfo: {forwardingScore: 509, isForwarded: true}, quoted:mek, sendEphemeral: true})
        }

        
const sendAudio = (filename) => {
	ridwan.sendMessage(from, filename, MessageType.audio, {mimetype: 'audio/mp4', filename: 'audio.mp3', quoted: mek})
}

const sendSticker = (filename) => {
	ridwan.sendMessage(from, filename, MessageType.sticker, {contextInfo: {forwardingScore: 509, isForwarded: true}, quoted: mek, sendEphemeral: true})
}
const sendImage = (filename, teks) => {
	if(teks == ``){
	ridwan.sendMessage(from, filename, MessageType.image, {quoted: mek})
}
else{
ridwan.sendMessage(from, filename, MessageType.image, {quoted: mek, caption: teks})
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
            ridwan.sendMessage(hehe, teks, text)
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

ridwan.groupMetadata(e)
                grup.push(ingfo)
        }
        return grup
}



        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? ridwan.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : ridwan.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }

const htag = (from, text) => {
	let anu = groupMembers
	let ane = []
	for (let i of anu){
		ane.push(i.jid)
	}
	ridwan.sendMessage(from, text, MessageType.text, {contextInfo: {"mentionedJid": ane}})
}

const naufal = (filename, name) => {
    var image = fs.createReadStream(filename)
    var form = new FormData()
    form.append('image', image, name)

    const upload = fetch('https://storage.naufalhoster.xyz', {
        method: 'POST',
        body: form
    }).then((response) => response.json())
        .then((result) => {
            return result                                                     })
        .catch(e => {
            return e
        })
    return upload
}

const uploadImages = (buffData, type) => {
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
	


const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 9999999, status: 200, "jpegThumbnail": fs.readFileSync(`./stik/thumb.jpeg`), surface: 200, message: `Loe ngentod\n${pushname}`, orderTitle: 'ngentod', sellerJid: '0@s.whatsapp.net'} } } 

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
					"title": "Bot",
					"status": 200,
					"surface": 200,
					"description": "Dijual su",
					"currencyCode": "IDR",
					"priceAmount1000": "10",
					"retailerId": "MemexsBot",
					"productImageCount": 9999999
				},
				"businessOwnerJid": `6289514791129@s.whatsapp.net`
		}
	}
}
	const fdocu = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "pdf/document", "title": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./stik/fake.jpeg')}}}

const balas = (text) => {
    ridwan.sendMessage(from, text, MessageType.text, {contextInfo:{forwardingScore: 508, isForwarded: true}, quoted: fdocu, sendEphemeral: true,thumbnail: fs.readFileSync(`./stik/thumb.jpeg`)})
}
const sendText = (text) => {
    ridwan.sendMessage(from, text, MessageType.text)
}
        const fakestatus = (teks) => {
            ridwan.sendMessage(from, teks, text, {
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
            ridwan.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            ridwan.sendMessage(from, teks, text, {
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
                        ridwan.sendMessage(to, media, MessageType.sticker,{quoted:mek, sendEphemeral: true})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }

	const sendFileFromUrl = async(link, type, options) => {
 	 hasil = await getBuffer(link)
	ridwan.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	ridwan.sendMessage(from, hasil, type, options).catch(e => {
	ridwan.sendMessage(from, { url : link }, type, options).catch(e => {
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
                    ridwan.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
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

//SIMI COKK

       	 if(isGroup && issimi){
         if(!isCmd){
         data = await fetchJson(`https://h4ck3rs404-api.herokuapp.com/api/simsimi?text=${mek.message.conversation}&apikey=404Api`)
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
      ridwan.sendMessage(mek.key.remoteJid,`*Mohon Maaf Ridwan Sedang Offline!*\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan hubungi lagi nanti`, MessageType.text,{contextInfo:{ mentionedJid: ['0@s.whatsapp.net'],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`./stik/thumb.jpeg`)}}}})
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
            ridwan.sendMessage(mek.key.remoteJid,`*Mohon Maaf Ridwam Sedang Offline!*\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan hubungi lagi nanti`, MessageType.text,{contextInfo:{ mentionedJid: ['0@s.whatsapp.net'],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`./stik/thumb.jpeg`)}}}})
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
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		    const messagesC = pes.slice(0).trim()


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
ridwan.on("CB:action,,battery", json => {
          const battery = json[2][0][1].value
          const persenbat = parseInt(battery)
          baterai.battery = `${persenbat}%`
          baterai.cas = json[2][0][1].live
})
ridwan.on('CB:action,,call', async json => {
    const kabg = json[2][0][1].from;
    console.log("call dari "+ kabg)
        ridwan.sendMessage(kabg, telponv, text,{contextInfo: {forwardingScore: 509, isForwarded: true}, quoted: finv, sendEphemeral: true})
        await tidur(5000)
	ridwan.blockUser(kabg, 'add')
//	ridwan.deleteChat(mek.key.remoteJid)
});
if (setiker.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./temp/stick/${namastc}.webp`)
	ridwan.sendMessage(from, buffer, sticker, {quoted:mek })
	}
try{
if(!mek.message.extendedTextMessage.contextInfo.quotedMessage.orderMessage.itemCount < 991){
	try{
		teks = `*T R O L I  D E T E C T E D*\n\n
⬡ remoteJid : ${mek.key.remoteJid}\n
⬡ fromMe : ${mek.key.fromMe}\n
⬡ id : ${mek.key.id}`
		reply(teks)
		ridwan.deleteChat(mek.key.remoteJid)
		sleep(3000)
		ridwan.modifyChat(from, ChatModification.mute, 24*60*60*1000)
	}catch(e){
	}
}}catch(e){
}


if (budy.includes('@6289514791129'))
{
reply('Apasih tag tag!!')
sendStickerFromUrl(from, `https://i.ibb.co/zQqFGfB/SAVE-20210511-163208.jpg`)
}


switch(command) {
    case prefix+ 'menu':
    case prefix+ 'help':
//gif = await getBuffer('https://i.pinimg.com/originals/c9/1a/bc/c91abcd94e4323d30e504c3eb43c7a87.gif')
//foto = await getBuffer('https://i.ibb.co/y88cbkV/FB-IMG-16202244253877019.jpg')
	run = process.uptime()
        teks = `${kyun(run)}`
    	var menu = `Hai ${pushname}
Prefix : ┌──「 ${prefix} 」
${shape} BATERAI: ${baterai.battery} ${baterai.cas === true ? 'Ngecas⚡' : '~Ngecas~'}

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
${shape}  ${prefix}truth
${shape}  ${prefix}dare
${shape}  ${prefix}simi (teks)
${shape}  ${prefix}spams teks|jumlah
${shape}  ${prefix}darkjoke
${shape}  ${prefix}meme
${shape}  ${prefix}shiprot
${shape}  ${prefix}xnxx query
${shape}  ${prefix}xhamster query
${shape}  ${prefix}pornhub (blom jadi su!)
│
│
│
└─「 ❏ *SELF-BOT* ❏ 」` 

ya = fs.readFileSync('menu.webp')
      		ridwan.sendMessage(from, menu,text, {contextInfo: {forwardingScore: 509, isForwarded: true}, quoted: od, sendEphemeral: true})
	   	break


case prefix+ 'simi':
sim = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/simsimi?text=${q}&apikey=404Api`)
reply(`simi👩: ${sim.data.result.success}`)
break

case prefix+ 'baterai':
reply(`${shape} BATERAI: ${baterai.battery}\n${shape} ${baterai.cas == true ? 'Charging' : '~Charging~'}`)
break
case prefix+ 'leave':
if (!mek.key.fromMe) return reply("Siapa bang?")
 {
ridwan.groupLeave(from)
}
 break

case prefix+ 'del':
                                case prefix+ 'delete':
                                        ajgh = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                        ridwan.deleteMessage(from, {id: ajgh.stanzaId, remoteJid: from})
                                        break
case prefix+ 'togif':
				if (!isQuotedSticker) return reply('Reply stiker nya')
				if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
					const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const media = await ridwan.downloadAndSaveMediaMessage(encmedia)
					const uploadn = await uptonaufal(media, Date.now() + '.webp')
					const anjj = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${uploadn.result.image}`)
					thumb = await getBuffer(anjj.data.result)
					ridwan.sendGif(from, thumb)
					fs.unlinkSync(media)
				} else {
					reply(`Harus sticker bergerak`)
				}
				break
case prefix+ 'mute':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                ridwan.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                ridwan.sendMessage(from, '*succes mute this chat*', MessageType.text,{quoted: fdocu, sendEphemeral: true})
                console.log('succes mute chat = ' + from)
                break
case prefix+ 'unmute':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                ridwan.modifyChat(from, ChatModification.unmute)
                reply('*succes unmute this chat*')
                console.log('succes unmute chat = ' + from)
                break
case prefix+ 'truth':
gambar = await getBuffer('https://telegra.ph/file/30f12369e3e84d47564db.jpg')
tru = await axios.get('https://pencarikode.xyz/api/truthid?apikey=pais')
g = '```'
ridwan.sendMessage(from, gambar, image,{quoted: mek, caption: `*${shape}*D A R E*\n\n\n\n\n ${g}${tru.data.message}${g}`})
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

case prefix+ 'simimode':
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
					var res = await ridwan.query({
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
				await ridwan.sendMessage(from, caption, text, { quoted: mek, contextInfo: { mentionedJid: parseMention(caption)}})
				break

case prefix+ 'getlink':
res = await ridwan.query({
				        json: ["query", "inviteCode", from],
			    		expect200: true
  					})
reply(JSON.stringify('https://chat.whatsapp.com/'+res))
break
case prefix+ 'xhamster':
if (!q) return reply ('Masukkan query')
reply('Lagi nyelam di tubuh hamster kak!')
data = await fetchJson(`https://lolhuman.herokuapp.com/api/xhamstersearch?apikey=${lol}&query=${q}`)
teks = shape +`   *X H A M S T E R*   `+ shape+'\n\n\n\n\n'
for (let i of data.result){
	teks += `${shape} Judul  : ${i.title}\n`
	teks += `${shape} Durasi : ${i.duration}\n`
	teks += `${shape} Rate   : ${i.rating}\n`
	teks += `${shape} Views  : ${i.views}\n`
	teks += `${shape} Link   : ${i.link}\n\n\n`
	teks += `-----PEMBATAS SLURR-----\n\n\n\n`
}
reply(teks)
break
case prefix+ 'xhamsterdl':
if(!q) return reply('Link nya?')
data = await fetchJson(`https://lolhuman.herokuapp.com/api/xhamster?apikey=${lol}&url=${q}`)
img = await getBuffer(data.result.thumbnail)
i = (data.result)
	t = `Judul: ${data.result.title}\nDurasi: ${i.duration}\nLike: ${i.likes}`
await ridwan.sendMessage(from, img, image, {quoted: mek, caption: t})
break

case prefix+ 'xnxx':
if (!q) return reply('Judul bokep nya?')
	reply('Sedang menjelajah web ex en ex ex')
	data = await fetchJson(`https://lolhuman.herokuapp.com/api/xnxxsearch?apikey=ridwanxyz&query=${q}`)
	teks = `*X N X X  S E A R C H*\n\n\n\n`
	img = await getBuffer(data.result[0].thumbnail)
	for (let i of data.result){
		teks += `⬡ Judul   : ${i.title}\n\n`
		teks += `⬡ Views   : ${i.views}\n\n`
		teks += `⬡ Durasi  : ${i.duration}\n\n`
		teks += `⬡ Uploader: ${i.uploader}\n\n`
		teks += `⬡ Link    : ${i.link}\n\n\n`
		//mg = await getBuffer(i.thumbnail[0])
	}
await ridwan.sendMessage(from,img, image, {contextInfo: {forwardingScore: 3, isForwarded: true},quoted: mek, caption: teks, sendEphemeral: true})
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
                    await ridwan.sendMessage(from, ini_buffer, video, { quoted: mek })
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
		    ridwan.sendMessage(from, bufer, image,{quoted: mek, caption: ini_txt})
                    break
case prefix+ 'cuaca':
if (!q) return reply('Nyari apa si kntl?')
reply('Tunggu sloer !')
	lol = await axios.get(`https://lolhuman.herokuapp.com/api/cuaca/${q}?apikey=${lol}`)
	ok = await axios.get(`https://api.vhtear.com/weather?city=${q}&apikey=${vtear}`)
	teks = `Cuaca :\n${ok.data.result.weather}
		Lokasi: \n${ok.data.result.location}`
reply(teks)
ridwan.sendMessage(from, { "degreesLatitude": lol.data.result.latitude,
            "degreesLongitude": lol.data.result.longitude,
            "name": 'Cuaca Kota:',
            "address": q
}, location, {contextInfo: {forwardingScore: 509, isForwarded: true}, quoted: mek, sendEphemeral: true})
break

case prefix+ 'ppcp':
                    getres = await axios.get(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=OneDayOneCharity`)
                    var { male, female } = getres.data.result
                    picmale = await getBuffer(`${male}`)
                    ridwan.sendMessage(from, picmale, image)
                    picfemale = await getBuffer(`${female}`)
                    ridwan.sendMessage(from, picfemale, image)
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


case prefix+ 'triggered':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
             encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
             media = await ridwan.downloadAndSaveMediaMessage(encmedia)
rem = await uploadImages(media)

res = `https://lolhuman.herokuapp.com/api/editor/triggered?apikey=${lol}&img=${rem}`
sendStickerFromUrl(from,res)
} else {
reply('kirim/reply gambar')
}
break
case prefix+ 'cekchat':
					ridwan.updatePresence(from, Presence.composing)
					ridwan.sendMessage(from, `Total : ${totalchat.length} Chat`, text, {quoted  : ftoko, sendEphemeral: true})
					break

case prefix+ 'sider':
id = from
mCount = {}
totalM = 0
tagg = []
await ridwan.loadAllMessages(id, mek => {
user = mek.key.fromMe ? ridwan.user.jid : mek.participant ? mek.participant : id.includes('g.us') ? '' : id
if (!user) return
if (user in mCount) mCount[user]++
else mCount[user] = 1
totalM++
}, 1000)
sorted = Object.entries(mCount).sort((a,b)=>b[1]-a[1])
teks = `*L I S T  M E M B E R  J A R A N G  N I M B R U N G*\n\n`
for(let i of groupMembers){
if(!sorted.map(v=> v[0]).includes(i.jid)){
teks += shape + ' ' + '@' + i.jid.split('@')[0] + '\n'
tagg.push(i.jid)
}
}
mentions(teks, tagg, true)
break

case prefix+ 'listonline':
                if (!isGroup) return reply(`Only group`)
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(ridwan.chats.get(ido).presences), ridwan.user.jid]
                ridwan.sendMessage(from, 'List Sider:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
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



case prefix+ 'fordward':
		if (!mek.key.fromMe) return balas('tidak bisa kak!')
	        ridwan.sendMessage(from, `${budy.slice(10)}`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true }})
                break

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
if (!isMedia || isQuotedImage || isQuotedSticker)
boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await ridwan.downloadMediaMessage(boij)
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
		ridwan.sendMessage(from, fer, MessageType.video, {quoted: mek, caption: on})
                break
case prefix+ 'hentai':
if(!mek.key.fromMe) return reply('lo sape ngentod?')
reply('Tunggu kak!')
nge = await getBuffer(`https://pencarikode.xyz/api/hentai?apikey=pais`)
ridwan.sendMessage(from, nge, MessageType.image, {quoted: mek, sendEphemeral: true, caption: `nih ${pushname}, segera tobat ya anjinkkkk`})
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
ridwan.sendMessage(from, img, image, {quoted: mek, caption: cap})
await ridwan.sendMessage(from, lagu, audio,{mimetype: `audio/mp4`, filename: `${q}.mp3`, quoted: mek})
break

    case prefix+ 'status':
            fakestatus(`*STATUS*\n${offline ? '${shape} OFFLINE' : '${shape} ONLINE'}\n${shape} WA VERSION: ${ridwan.user.phone.wa_version}\n${shape} OS VERSION: ${ridwan.user.phone.os_version}\n${shape} DEVICE: ${ridwan.user.phone.device_manufacturer}, ${ridwan.user.phone.device_model}, ${ridwan.user.phone.os_build_number}\n${shape} BATERAI ${baterai.battery} ${baterai.cas == true ? `Ngecas⚡` : `~Ngecas~`}\n${shape} RUNTIME ${kyun(run)}\n${banChats ? '└─⦿ SELF-MODE' : '└─⦿ PUBLIC-MODE'}`, ({contextInfo: {forwadingScore: 508, isForwarded: true}}))
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

//KONTOLLLLLLLL

case prefix+ 'unpin':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                ridwan.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break

// ANTI DELETE
case prefix+ 'getpic':
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await ridwan.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					ridwan.sendMessage(from, thumb)
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
            owgi = await ridwan.downloadMediaMessage(boij)
            res = await naufal(owgi)
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
			ridwan.sendMessage(from, buff, image, {contextInfo: {forwardingScore: 509, isForwarded: true}, quoted: mek, sendEphemeral: true})
                   sendMediaURL(from, buff, `Harta Tahta ${tahta}`)
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
ridwan.sendMessage(from, buf, MessageType.image, {quoted: mek, caption: cap, sendEphemeral: true})
break
case prefix+ 'searchmusic':
				if (isQuotedAudio){
				const dlfile = await ridwan.downloadMediaMessage(JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo)
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

case prefix+ 'troli':
if (!mek.key.fromMe) return reply("Khusus gua bang")
ridwan.sendMessage(from, 'Ngapain bang?', text,{quoted: troli})
ridwan.sendMessage(from, 'Jagoan bang?', text,{quoted: troli})
ridwan.sendMessage(from, 'Salken juga bang wkwk:v', text,{quoted: troli})
ridwan.sendMessage(from, 'Orang mana bang?', text,{quoted: troli})
ridwan.sendMessage(from, 'Iya lah ajg:v', text,{quoted: troli})
break
case prefix+ 'bugloc':
if(!q) return reply(`Example : ${prefix}bugloc Rumah doi|Jl.`)
namaxx = q.split('|')[0]
jlnxx = q.split('|')[1]
ridwan.sendMessage(from, { "degreesLatitude": 37.38980827772353,
						"degreesLongitude": -122.08141386508942,
            "name": namaxx,
            "address": jlnxx,
            "jpegThumbnail": fs.readFileSync('./stik/fake.jpeg') }, location, { quoted:{
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				})
					break
   case prefix+ 'bug':
  case prefix+ 'ridwanxyz':
	    if (!mek.key.fromMe) return reply('Bug goblok!')
	    ridwan.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL, 1)
	    await ridwan.toggleDisappearingMessages(from, 0)
	    reply(`*${groupName}* has ben hacked!`)
            break
case prefix+ 'pshidup':
ridwan.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL, 1)
await ridwan.toggleDisappearingMessages(from, 0)
break

case prefix+ 'asupan2':
reply('Bentar coeg')
sendMediaURL(from, `https://api.xteam.xyz/shitpost?APIKEY=${xtem}`, `Dark🗿🗿`)
break
//bates fod


case prefix+ 'uptele':
				const encmediiia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				const mediaq = await ridwan.downloadMediaMessage(encmediiia)
				const upli = await uptotele(mediaq)
				reply(from, `${upli}`, text, {quoted: mek})
break
case prefix+ 'tourl2':
  if ((isMedia && !ridwan.message.videoMessage || isQuotedImage || isQuotedVideo || isQuotedSticker) && args.length == 0) {
    reply(mess.wait)
            boij = isQuotedImage || isQuotedVideo || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await ridwan.downloadMediaMessage(boij)
            res = await uploadImages(owgi, false)
            reply(res)
  }
            break
case prefix+ 'istirahat':
case prefix+ 'tidur':
if (!mek.key.fromMe) return reply('Owner only')
reply('tidur dulu ya kak!')
await tidur(`{q}`)
reply('YEAAAYYY, SELESAI ISTIRAHAT!!!')
break

case prefix+ 'shutdown':
if (!mek.key.fromMe) return reply('nte sape?')
reply('Siap tuan...')
ridwan.close()
break
case prefix+ 'freeproxy':
nih = await fetchJson('https://h4ck3rs404-api.herokuapp.com/api/proxy-random?apikey=404Api')
nyo = `Free Proxy\n\n\n`
nyo += `Http: ${nih.result.https}\nIP: ${nih.result.ip}\nLokasi: ${nih.result.lokasi}`
reply(nyo)
break

case prefix+ 'cita-cita':
g = groupMembers
okw = await getBuffer('https://pencarikode.xyz/api/cita-cita?apikey=pais')
ridwan.sendMessage(from, okw, audio,{mimetype: "audio/mp4", ptt: true, duration: 359996400, mentionedJid: sender})
break
case prefix+ 'ssweb2':
if (!q) return reply('Link nya kak?')
reply('Wait, lemme get the buffer')
buf = await getBuffer(`https://api.screenshotmachine.com?key=50e554&url=${q}&dimension=1024x768`)
ridwan.sendMessage(from, buf, image,{contextInfo: {forwardingScore: 509, isForwarded: true},quoted: mek, sendEphemeral: true})
break

case prefix+ 'ssweb':
if (!q) return reply(`Link nya mana kak ${pushname}??`)
reply(`Bentar kak, lagi akses web ${q}`)
sswe = await getBuffer(`http://caliph-api.herokuapp.com/api/ssweb?url=${q}`)
ridwan.sendMessage(from, sswe, MessageType.image,{quoted: mek, caption: `SCREENSHOOT WEB ${q}`, sendEphemeral: true})
break

case prefix+ 'wame':
ridwan.updatePresence(from, Presence.composing) 
      options = {
          text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] , forwadingScore: 509, isForwaded: true}
    }
   

ridwan.sendMessage(from, options, text, { quoted: mek } )
break
case prefix+ 'darkjoke':
balas(`_[ ! ] Tunggu kak ${pushname}!_`)
sendMediaURL(from, `https://lolhuman.herokuapp.com/api/random/meme?apikey=${lol}`, 'dark anjgg darkk')
break
case prefix+ 'spamcall':
if(!q) return reply(`_[ ! ] Untuk menggunakan ketik *${prefix}spamcall 8xxxxxxxx`)
reply(`Mencoba mengirim spam ke nomor ${q}`)
wok1 = await axios.get(`https://videfikri.com/api/call/?nohp=${q}`)
await tidur(5000)
wok2 = await axios.get(`https://videfikri.com/api/call/?nohp=${q}`)
await tidur(5000)
wok3 = await axios.get(`https://videfikri.com/api/call/?nohp=${q}`)
await tidur(5000)
wok4 = await axios.get(`https://videfikri.com/api/call/?nohp=${q}`)
await tidur(5000)
wok5 = await axios.get(`https://videfikri.com/api/call/?nohp=${q}`)
await tidur(5000)
wok6 = await axios.get(`https://videfikri.com/api/call/?nohp=${q}`)
await tidur(5000)
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
ridwan.sendMessage(from, re, image, {quoted: mek, caption: 'Ga cringe kan?(emote batu)', sendEphemeral: true})
break
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
					ridwan.sendMessage(from, teks.trim(), text, {contextInfo: { forwadingScore: 509, isForwaded: true }, quoted: memek, sendEphemeral: true})
break
case prefix+ 'fakeloc':
if(!q) return reply(`Example ; ${prefix}fakeloc Rumah doi|Jl.`)
nama = q.split('|')[0]
jln = q.split('|')[1]
if(!jln) return reply('Format salah')
ridwan.sendMessage(from, { "degreesLatitude": -3.748174,
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
for (let i of anj.result){
teks += `⬡ ${i.subject}: \n⬡ LINK: ${i.link}\n======================\n\n`
}
reply(teks)
break
case prefix+ 'caripesan':
tagg = []
data = await ridwan.searchMessages(q, mek.key.remoteJid, 10, 1)
fox = `*C A R I  P E S A N*\n⬡ Query : ${q}\n\n`
console.log(`Total ${data.messages.length} pesan didapatkan`)
num = 0
for(let i of data.messages){
   num += 1
   if (i.message.conversation) {
                        if (i.key.fromMe){ 
                            fox += '⬡ Nama: '+ridwan.user.name+'\n⬡ Tag : @'+ridwan.user.jid.split("@")[0]+'\n⬡ Msg : '+i.message.conversation+'\n⬡ MsgID : '+i.key.id+'\n⬡ Type:  conversation\n\n'
                        }else{
                        	   conts = mek.key.fromMe ? ridwan.user.jid : ridwan.contacts[i.participant] || {notify: jid.replace(/@.+/, '')}
pushnama = mek.key.fromMe ? ridwan.user.name : conts.notify || conts.vname || conts.name || '-'
                            fox += '⬡ Nama: '+pushnama+'\n⬡ Tag : @'+i.participant.split("@")[0]+'\n⬡ Msg : '+i.message.conversation+'\n⬡ MsgID : '+i.key.id+'\n⬡ Type :  conversation\n\n'
                        } 
                    }
                    else if (i.message.extendedTextMessage){
                        if (i.key.fromMe){ 
                            fox += '⬡ Nama: '+ridwan.user.name+'\n⬡ Tag : @'+ridwan.user.jid.split("@")[0]+'\n⬡ Msg : '+i.message.extendedTextMessage.text+'\n⬡ MsgID : '+i.key.id+'\n⬡ Type :  extendedTextMessage\n\n'
                        }else{
                        	   conts = mek.key.fromMe ? ridwan.user.jid : ridwan.contacts[i.participant] || {notify: jid.replace(/@.+/, '')}
pushnama = mek.key.fromMe ? ridwan.user.name : conts.notify || conts.vname || conts.name || '-'
                            fox += '⬡ Nama: '+pushnama+'\n⬡ Tag : @'+i.participant.split("@")[0]+'\n⬡ Msg : '+i.message.extendedTextMessage.text+'\n⬡ MsgID : '+i.key.id+'\n⬡ Type :  extendedTextMessage\n\n'
                        }
                    }
tagg.push(i.participant)
tagg.push(ridwan.user.jid)
}
console.log(fox)
mentions(fox, tagg, true)
break


case prefix+ 'troli2':
ridwan.sendMessage(from, pushname, MessageType.extendedText, {
 quoted: {
  key: {                                                                                              participant: sender // Fake sender Jid
 },                                                                                                   message: {
   orderMessage: {
    itemCount: 9999999, // Bug


    sellerJid: sender // Seller
   }
  }
 }
})
ridwan.sendMessage(from, pushname, MessageType.extendedText, {
 quoted: {
  key: {
 participant: sender // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    
  
    

    sellerJid: sender // Seller
   }
  }
 }
})
ridwan.sendMessage(from, `Bang ${pushname}`, MessageType.extendedText, {
 quoted: {                                                                                key: {                                                                              },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug


    sellerJid: sender // Seller
   }
  }
 }
})
ridwan.sendMessage(from, `Hay bang ${pushname}`, MessageType.extendedText, {
 quoted: {
  key: {                                                                                   participant: sender // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    
    

    sellerJid: sender // Seller
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
	delb = await ridwan.downloadMediaMessage(boij)
	fs.writeFileSync(`./src/resend.jpg`, delb)
	buff = fs.readFileSync('./src/resend.jpg')
	sendStickerWithFG(buff)
	fs.unlinkSync('./src/resend.jpg')
	  }
	  else if(isQuotedImage){
	    boij = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await ridwan.downloadMediaMessage(boij)
	fs.writeFileSync(`./src/resend.jpg`, delb)
	buff = fs.readFileSync('./src/resend.jpg')
	sendImage(buff)
	fs.unlinkSync('./src/resend.jpg')
	  }
	 else if(isQuotedAudio){
	   boij = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	delb = await ridwan.downloadMediaMessage(boij)
	fs.writeFileSync(`./src/resend.mp3`, delb)
	buff = fs.readFileSync('./src/resend.mp3')
	sendAudio(buff)
	fs.unlinkSync('./src/resend.mp3')
	 }
	break




case prefix+ 'repeat':
mekk = `${q}\n`.repeat(q.split(`|`))
reply(mekk)
break
//********** ADD **********//
		case prefix+ 'addstik':
				if (!isQuotedSticker) return reply('Reply stiker nya')
				if (!q) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await ridwan.downloadMediaMessage(boij)
				setiker.push(`${q}`)
				fs.writeFileSync(`./temp/stick/${q}.webp`, delb)
				fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
				ridwan.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: mek })
				break
		case prefix+ 'liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
		teks += `\n*Total : ${setiker.length}*`
		ridwan.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
		break
		case prefix+ 'dellstik':
		if(!mek.key.fromMe) return fakegroup('Only owner')
		if (!q) return fakegroup(mess.wrongFormat)
		try {
			fs.unlinkSync(`./temp/stick/${q}.webp`)
			setiker.splice(q,1)
			fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
			fakegroup(`Succes delete sticker ${q}!`)
			} catch (err) {
		fakegroup(`Gagal delete sticker ${q}!`)
			}
		break
//***** Wokeee ***//
case prefix+ 'spams':
			  if(!mek.key.fromMe) return reply('Owner only tod!')
			  	if(mek.message.conversation){
				if (!q) return reply(`Penggunaan ${prefix}spam teks|jumlah spam`)
				argz = q.split("|")
				if (!q) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(argz[1])) return reply2(`harus berupa angka`)
				for (let i = 0; i < argz[1]; i++){
				ridwan.sendMessage(from, argz[0], text,{contextInfo: {forwardingScore: 509, isForwarded: true}, sendEphemeral: true})
				}}
				else if(!mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation == ''){
					for (let i = 0; i < q; i++){
				ridwan.sendMessage(from, mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation, text,{contextInfo: {forwardingScore: 509, isForwarded: true}, sendEphemeral: true})
				}
				}
				else if(isQuotedSticker){
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					delb = await ridwan.downloadMediaMessage(boij)
					fs.writeFileSync(`./media/spam.jpg`, delb)
					buff = fs.readFileSync('./media/spam.jpg')
					for(let i=0; i<q; i++){
					sendSticker(buff)
				}
					fs.unlinkSync('./media/spam.jpg')
				}
				else if(isQuotedAudio){
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					delb = await ridwan.downloadMediaMessage(boij)
					fs.writeFileSync(`./media/spam.mp3`, delb)
					buff = fs.readFileSync('./media/spam.mp3')
					for(let i=0; i<q; i++){
					if(mek.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage.ptt == true){
					ridwan.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', ptt: true})
					}
					else{
					ridwan.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', ptt: false})
						}
				}
					fs.unlinkSync('./media/spam.mp3')
				}
				else if(isQuotedImage){
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					delb = await ridwan.downloadMediaMessage(boij)
					fs.writeFileSync(`./media/spam.jpg`, delb)
					buff = fs.readFileSync('./media/spam.jpg')
					for(let i=0; i<q; i++){
						try{
	sendImage(buff, mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption)
	}catch(e){
	sendImage(buff)
	}
	}
	fs.unlinkSync('./media/spam.jpg')
}
	else if(isQuotedDocument){
		boij = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					delb = await ridwan.downloadMediaMessage(boij)
					fs.writeFileSync(`./media/spam`, delb)
					buff = fs.readFileSync('./media/spam')
					for(let i=0; i<q; i++){
						ridwan.sendMessage(from, buff, MessageType.document, {mimetype: mek.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage.mimetype, filename: `${mek.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage.fileName}`})
						}
		fs.unlinkSync('./media/spam')
		}
	else if(isQuotedlocation){
		sloc = mek.message.extendedTextMessage.contextInfo.quotedMessage.locationMessage
		for(let i=0; i<q; i++){
			try{
			ridwan.sendMessage(from,  {degreesLatitude: sloc.degreesLatitude, degreesLongitude: sloc.degreesLongitude, name: sloc.name , address: sloc.address}, MessageType.location)
		}catch(e){
			ridwan.sendMessage(from,  {degreesLatitude: sloc.degreesLatitude, degreesLongitude: sloc.degreesLongitude}, MessageType.location)
		}
		}

	}
	else if(isQuotedVideo){
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					delb = await ridwan.downloadMediaMessage(boij)
					fs.writeFileSync(`./media/spam.mp4`, delb)
					buff = fs.readFileSync('./media/spam.mp4')
					try{
						if(mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.gifPlayback == true){
							for(let i=0; i<q; i++){
						try{
	ridwan.sendMessage(from, buff, video, {mimetype: Mimetype.gif, caption: mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.caption})
	}catch(e){
	ridwan.sendMessage(from, buff, video, {mimetype: Mimetype.gif})
	}
	}
	fs.unlinkSync('./media/spam.mp4')
						}
					}catch(e){
					for(let i=0; i<q; i++){
						try{
	sendVideo(buff, mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.caption)
	}catch(e){
	sendVideo(buff)
	}
	}
	fs.unlinkSync('./media/spam.mp4')
}
}
				break

case prefix+ 'tiktoddl':
					if (args.length < 1) return reply('Urlnya mana um?')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('hmmm')
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.moe/api/tiktok?url=${args[0]}&apiKey=${barbar}`, {method: 'get'})
					if (anu.error) return reply('Yahhh, error tod!')
					buffer = await getBuffer(anu.result)
					ridwan.sendMessage(from, buffer, video, {quoted: mek})
					break
case prefix+ 'tagg':
   if(!q) return reply('Ingfonya apa?')
var group = await ridwan.groupMetadata(from)
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
   delb = await ridwan.downloadMediaMessage(boij)
   await fs.writeFileSync(`./media/stctagg.webp`, delb)
   result = fs.readFileSync(`./media/stctagg.webp`)
   ridwan.sendMessage(from, result, MessageType.sticker, {contextInfo: {mentionedJid: mem},
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
   delb = await ridwan.downloadMediaMessage(boij)
   await fs.writeFileSync(`./media/imgtag.jpg`, delb)
   result = fs.readFileSync(`./media/imgtag.jpg`)
   ridwan.sendMessage(from, result, MessageType.image, {contextInfo: {mentionedJid: mem},
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
   delb = await ridwan.downloadMediaMessage(boij)
   await fs.writeFileSync(`./media/doctag`, delb)
   result = fs.readFileSync(`./media/doctag`)
   ridwan.sendMessage(from, result, MessageType.document, {mimetype: mek.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage.mimetype,filename: `${mek.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage.fileName}`, contextInfo: {mentionedJid: mem},
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
   delb = await ridwan.downloadMediaMessage(boij)
   await fs.writeFileSync(`./media/vntag.mp3`, delb)
   result = fs.readFileSync(`./media/vntag.mp3`)
            ridwan.sendMessage(from, result, MessageType.audio, {mimetype: 'audio/mp4', ptt: true, contextInfo: {mentionedJid: mem},
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
   delb = await ridwan.downloadMediaMessage(boij)
   await fs.writeFileSync(`./media/videotag.mp4`, delb)
   result = fs.readFileSync(`./media/videotag.mp4`)
   ridwan.sendMessage(from, result, MessageType.video, {mimetype: 'video/mp4', contextInfo: {mentionedJid: mem},
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

case prefix+ 'chat':
                if (!mek.key.fromMe) return reply('Lo sape kntl?')
                var nomor = q.split("|")[0];
                var org = q.split("|")[1];
                ridwan.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)
                reply('Selesai om...')
                break
case prefix+ 'pin':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                ridwan.modifyChat(from, ChatModification.pin)
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
            ridwan.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
case prefix+ 'kontaktag':
				argz = arg.split('|')
				if (!argz) return reply(from, `Penggunaan ${prefix}kontak @tag atau nomor|nama`, mek)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					ridwan.hideTagKontak(from, mentioned[0].split('@')[0], argz[1])
				} else {
					ridwan.hideTagKontak(from, argz[0], argz[1])
				}
				break

    case prefix+ 'sticktag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ridwan.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ridwan.groupMetadata(from)
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
            ridwan.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case prefix+ 'tag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ridwan.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ridwan.groupMetadata(from)
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
            ridwan.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ridwan.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ridwan.groupMetadata(from)
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
            ridwan.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ridwan.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ridwan.groupMetadata(from)
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
            ridwan.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ridwan.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ridwan.groupMetadata(from)
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
            ridwan.sendMessage(from, ini_buffer, video, options)
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
            ridwan.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
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
            const responye = await ridwan.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await ridwan.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case prefix+ 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await ridwan.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            ridwan.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case prefix+ 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await ridwan.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            ridwan.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case prefix+ 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await ridwan.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            ridwan.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case prefix+ 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await ridwan.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            ridwan.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
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
            ridwan.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
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
            ridwan.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case prefix+ 'take':
    case prefix+ 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await ridwan.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `RidwanXyZ BOT


















`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, ridwan, mek, from)
			break
	case prefix+ 'stikerwm':
	case prefix+ 'stickerwm':
    case prefix+ 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await ridwan.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            ridwan.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            ridwan.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
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
            const media = await ridwan.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            ridwan.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            ridwan.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
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
    case prefix+ 'upswaudio':
	if (!mek.key.fromMe) return reply('*Ente owner?')
	ridwan.updatePresence(from, Presence.composing)
	if (isQuotedAudio) {
	const swsw = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		cihcih = await ridwan.downloadMediaMessage(swsw)
		ridwan.sendMessage('status@broadcast', cihcih, audio, { caption: `${q}` })
		}
	bur = `Sukses Upload Story audio dengan Caption: ${q}`
	ridwan.sendMessage(from, bur, text, { quoted: mek })
	    break
    case prefix+ 'upswteks':
	    if (!mek.key.fromMe) return reply('This command only for Ridwan!')
            if (!q) return fakestatus('Isi teksnya!')
            ridwan.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case prefix+ 'upswimage':
            if (!mek.key.fromMe) return reply(mess.owner)
	    if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await ridwan.downloadMediaMessage(swsw)
            ridwan.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            ridwan.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case prefix+ 'upswvideo':
	    if (!mek.key.fromMe) return reply(mess.owner)
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await ridwan.downloadMediaMessage(swsw)
            ridwan.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            ridwan.sendMessage(from, bur, text, { quoted: mek })
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
            const tipes = await ridwan.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await ridwan.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		ridwan.sendMessage(from, mat, MessageType.extendedText, anu)
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
	case prefix+ 'randombkp':
 		yoir = await axios.get('https://ferdizstar-api.herokuapp.com/api/dewasa')
		sendMediaURL(from, yoir.data.image, yoir.data.teks)
	break
 	case prefix+ 'hidetag':
	case prefix+ 'p':
			if (!mek.key.fromMe) return fakestatus('Ente sapee')
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await ridwan.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem }
			}
			ridwan.sendMessage(from, optionshidetag, text,{contextInfo: {forwardingScore: 509, isForwarded: true}, quoted: memek, sendEphemeral: true})
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
			kntl = await getBuffer(dl_link)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await ridwan.sendMessage(from, kntl, audio,{mimetype: 'audio/mp4', quoted: mek, duration: 359996400}).catch(() => reply('error'))
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
            const media = await ridwan.downloadAndSaveMediaMessage(encmedia)
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
                ridwan.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek, sendEphemeral: true})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await ridwan.downloadAndSaveMediaMessage(encmedia)
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
            ridwan.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
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
			media = await ridwan.downloadAndSaveMediaMessage(encmedia)
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
        	return await ridwan.sendMessage(from, 'Error!', MessageType.text, dload)
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
			delb = await ridwan.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case prefix+ 'setthumb':
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await ridwan.downloadMediaMessage(boij)
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
        case prefix+ 'asupan':
        link = 'https://h4ck3rs404-api.herokuapp.com/api/asupan?apikey=404Api'
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
ridwan.sendMessage(from, se, MessageType.image, {quoted: mek, sendEphemeral: true})
break
    case prefix+ 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            ridwan.sendMessage(from,{url:images},image,{quoted:mek})
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
		ridwan.sendMessage(from,nowm,video,{mimetype:'video/mp4',quoted:mek,caption:me})
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
		ridwan.sendMessage(from,{url:`${music}`},audio,{mimetype:'audio/mp4',filename : `${text}`,quoted:mek})
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
			ridwan.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
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
ridwan.sendMessage(from, img, MessageType.image, {quoted: mek, caption: cap})
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
ridwan.sendMessage(from, mg, image, {quoted: mek, caption: cap, sendEphemeral: true})
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
	    if (!mek.key.fromMe) return reply('Ga ah, makasi!')
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await ridwan.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
    case'twitter':
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
            teks = `${kyun(run)}\n       ʀɪᴅᴡᴀɴ sᴇʟғʙᴏᴛ       `
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

ridwan.sendMessage(from, `        𝗥𝗜𝗗𝗪𝗔𝗡 𝗦𝗘𝗟𝗙𝗕𝗢𝗧       `, text, {contextInfo: {forwardingScore: 509, isForwarded: true},quoted: test, sendEphemeral: true})
break
	case prefix+ 'speed':
	case prefix+ 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			reply(`      ${pingnya}\n       ${fake}      \n                `)
			})
			break  
    case prefix+ 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ridwan.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ridwan.groupMetadata(from)
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
            ridwan.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ridwan.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ridwan.groupMetadata(from)
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
            ridwan.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ridwan.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ridwan.groupMetadata(from)
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
            ridwan.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ridwan.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ridwan.groupMetadata(from)
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
            ridwan.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/document/audio/video dengan caption ${prefix}totag`)
        }
        break
    case prefix+ 'tomp4':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await ridwan.downloadAndSaveMediaMessage(ger)
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
if (!mek.key.fromMe) return console.log(sender)
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval brooo`))
try {
return ridwan.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval brooo`))
} catch(err) {
e = String(err)
fakestatus(e)
}
}  

else if (budy.startsWith('>')){
				if(!mek.key.fromMe) return reply(' lu siaa?')
				console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V2 brooo`))
				try{
reply(require('util').format(await eval(`;(async () => { ${budy.slice(2)} })()`)))
}catch(err){
	e = String(err)
	reply(e)
	}}}
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
