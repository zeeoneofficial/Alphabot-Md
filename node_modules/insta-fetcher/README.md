# Insta Fetcher
[![HitCount](http://hits.dwyl.com/Gimenz/insta-fetcher.svg)](http://hits.dwyl.com/Gimenz/insta-fetcher)

Fetch instagram metadata

Installation:
```
npm i insta-fetcher
```

Usage:
```js
const ig = require('insta-fetcher')
```

Example
```js
const ig = require('insta-fetcher')

// Public post
ig.fetchPost('https://www.instagram.com/p/CMBZUsMALA_/').then(res => {
 console.log(res)
 /* {
  username: 'solfmood_',
  name: '𝗛𝗮𝗹𝘂 𝟭𝟬𝟬𝗸 𝗳𝗼𝗹𝗹𝘀??',
  likes: 16432,
  caption: 'Adem bgt dengernya,\n' +
    'Tap 2x❤️\n' +
    '━━━━━━━━━━━━━━━━━━━\n' +
    '✎ ɴᴏᴡ ᴘʟᴀʏ✓\n' +
    '✎ 𝙍𝙚𝙥𝙤𝙨𝙩?? 𝙏𝙖𝙜💐\n' +
    '#solfmood_ @solfmood_\n' +
    '━━━━━━━━━━━━━━━━━━━\n' +
    '✎ 𝙋𝙖𝙧𝙩𝙣𝙚𝙧✨\n' +
    '@fckingezzy_ @tmblr.songs\n' +
    '@mooddhuman @itz.chqrixy @Fcknnght\n' +
    '@lyrics.moodly @storykamuu\n' +
    '@r.a.f.l.i_rd @ashi.bie @rdnsysans\n' +
    '@its.naabilaa @fckncrash @coretanrasamu_\n' +
    '@loyalcrash @moddy.tone\n' +
    '━━━━━━━━━━━━━━━━━━━\n' +
    '✎ 𝙏𝙖𝙜𝙖𝙧🌸\n' +
    '#sunday #quotesindonesia #quran #alqalam #qori #sabar #ikhlas #arabic #lailahaillallah #subhanallahwalhamdulillahwalaillahaillallahallahuakbar #assalamualaikum #shalawatnabi #pesawat #rahman #sholawatmerdu #hijab #muhammad #mekkah #tasbih #tolerance #sebuahrasa #lailahaillallah #weekend #alhamdulillah #tahunbaru #bukber #puasa #alhamdulillah #ramadhan #takbiran',
  media_count: 1,
  links: [
    {
      type: 'video',
      url: 'https://instagram.fjog3-1.fna.fbcdn.net/v/t50.2886-16/156230423_298630191682542_3482583275330215463_n.mp4?_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=x6MJURUJG4wAX_9eLpa&oe=604A7CA5&oh=aa954095915fb9e47809d3a3b0a6d6e6'
    }
  ]
}*/
})

// User data
ig.fetchUser('mg.creativestudio').then(res => {
  console.log(res)
  
  /* {
  username: 'mg.creativestudio',
  full_name: 'mg',
  profile_id: '23391090876',
  biography: 'whoami? @gimenz.id⠀\n' +
    'Work with After Effects CC⠀\n' +
    '⠀\n' +
    '⠀\n' +
    'mail: agaaja187@gmail.com',
  followers: 187,
  following: 44,
  external_url: null,
  is_private: false,
  is_verified: false,
  profile_pic_url_hd: 'https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/94093462_2387995234825154_6853923121787830272_n.jpg?tp=1&_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=UUHxLCjUciAAX8o8g9Y&oh=ee7bc4973602826d6c66bff56c692f84&oe=60723309',
  posts: [Array]
  } */
})
```
