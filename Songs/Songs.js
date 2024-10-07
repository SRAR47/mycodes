//This is the list of songs where you can add your songs just like this
//For Example { SongName: 'Your song name' },
//You song should be in the same directory(folder) where your JS file is save, no subfolder!
//You can categorize songs, for sad songs, there is a list below and upbeat song's list is also here.
//For removing a song from list just remove the whole line of a song. 
// List of songs
const songslist = [
    { SongName: '9 45.mp3' },
    { SongName: 'LABON KO.mp3' },
    { SongName: 'AAWARA HUN.mp3' },
    { SongName: 'JEENA ISI KA NAAM HA.mp3' },
    { SongName: 'MERA JOOTA HA JAPANI.mp3' },
    { SongName: 'MERE MEHBOOB QAYAMAT HOGI.mp3' },
    { SongName: '12 Bande.mp3' },
    { SongName: 'Aam Jahe Munde.mp3' },
    { SongName: 'Amplifier.mp3' },
    { SongName: 'Angreji Beat.mp3' },
    { SongName: 'Baadshah O Baadshah.mp3' },
    { SongName: 'BROWN MUNDE.mp3' },
    { SongName: 'DAKU.mp3' },
    { SongName: 'DEVIL.mp3' },
    { SongName: 'Dollar.mp3' },
    { SongName: 'Drill.mp3' },
    { SongName: 'East Side Flow.mp3' },
    { SongName: 'Gaal Ni Kadni.mp3' },
    { SongName: 'GAME.mp3' },
    { SongName: 'GOAT.mp3' },
    { SongName: 'GOLIYAN.mp3' },
    { SongName: 'Hairun Khairun.mp3' },
    { SongName: 'Aaye Ho Meri Zindagi Mein Tum Bahar Banke .mp3' },
    { SongName: 'Dil Ne Yeh Kaha Hai.mp3' },
    { SongName: 'Main Yahaan Hoon.mp3' },
    { SongName: 'Mera samne wali khidki.mp3' },
    { SongName: 'Baatein Ye Kabhi Na.mp3' },
    { SongName: 'Chahu main ya na.mp3' },
    { SongName: 'Chal Waha Jate Hai.mp3' },
    { SongName: 'dil sambhal ja zara.mp3' },
    { SongName: 'Hamari Adhuri Kahani.mp3' },
    { SongName: 'Humnava Mere.mp3' },
    { SongName: 'Jeene Laga Hoon.mp3' },
    { SongName: 'Jo Bheji Thi Duaa.mp3' },
    { SongName: 'Khamoshiyan.mp3' },
    { SongName: 'LAKK 28 KUDI DA.mp3' },
    { SongName: 'Lalkaara.mp3' },
    { SongName: 'Lungi Dance.mp3' },
    { SongName: 'MAIN DHOONDNE KO ZAMAANE MEIN.mp3' },
    { SongName: 'Mere Paas Tum Ho.mp3' },
    { SongName: 'MIRASI.mp3' },
    { SongName: 'Mitti De Tibbe.mp3' },
    { SongName: 'Nain Tere.mp3' },
    { SongName: 'OLD SKOOL.mp3' },
    { SongName: 'Same Beef Song.mp3' },
    { SongName: 'SANJU.mp3' },
    { SongName: 'Teri Chunnariya.mp3' },
    { SongName: 'Suraj Hua Maddham.mp3' },
    { SongName: 'Teri meri meri teri.mp3' },
    { SongName: 'Tu ha kahan.mp3' },
    { SongName: 'Tum Hi Ho.mp3' },
    { SongName: 'Ye raaten ye mausam.mp3' },
    { SongName: 'Ye tune kya kiya.mp3' },
    { SongName: 'Zaroori tha.mp3' },
    { SongName: 'Uska Hi Banana.mp3' },
    { SongName: 'Das Main Ki Pyar Wichon khatya.mp3' },
    { SongName: 'Pani Deyan Bulbuleya.mp3' },
    { SongName: 'Mere Rashke Qamar.mp3' },
    { SongName: 'Tung Tung Baje.mp3' },
    { SongName: 'Yaar Anmulle.mp3' },
    { SongName: 'Ankhen khuli.mp3' },
    { SongName: 'Mere Mehboob Mere Sanam.mp3' },
    { SongName: 'Mundian To Bach Ke.mp3' },
    { SongName: 'Tune Jo Na Kaha.mp3' },
    { SongName: 'Tujhe dekha to ye jana sanam.mp3' },
]
//Sad songs list
const sadsongs = [
    { SongName: 'Pani Deyan Bulbuleya.mp3' },
    { SongName: 'Tune Jo Na Kaha.mp3' },
    { SongName: 'Aaye Ho Meri Zindagi Mein Tum Bahar Banke .mp3' },
    { SongName: 'Chahu main ya na.mp3' },
    { SongName: 'Baatein Ye Kabhi Na.mp3' },
    { SongName: 'Chal Waha Jate Hai.mp3' },
    { SongName: 'Dil Ne Yeh Kaha Hai.mp3' },
    { SongName: 'dil sambhal ja zara.mp3' },
    { SongName: 'Hamari Adhuri Kahani.mp3' },
    { SongName: 'Humnava Mere.mp3' },
    { SongName: 'Jeene Laga Hoon.mp3' },
    { SongName: 'Jo Bheji Thi Duaa.mp3' },
    { SongName: 'Khamoshiyan.mp3' },
    { SongName: 'MAIN DHOONDNE KO ZAMAANE MEIN.mp3' },
    { SongName: 'Main Yahaan Hoon.mp3' },
    { SongName: 'Mere samne wali khidki.mp3' },
    { SongName: 'Mere Paas Tum Ho.mp3' },
    { SongName: 'Suraj Hua Maddham.mp3' },
    { SongName: 'Teri meri meri teri.mp3' },
    { SongName: 'Tu ha kahan.mp3' },
    { SongName: 'Tum Hi Ho.mp3' },
    { SongName: 'Ye raaten ye mausam.mp3' },
    { SongName: 'Ye tune kya kiya.mp3' },
    { SongName: 'Zaroori tha.mp3' },
    { SongName: 'Uska Hi Banana.mp3' },
    { SongName: 'Das Main Ki Pyar Wichon khatya.mp3' },
]

//upbeatsongs list
const beatsongs = [
    { SongName: 'Mere Mehboob Mere Sanam.mp3' },
    { SongName: 'Mere Rashke Qamar.mp3' },
    { SongName: 'Mundian To Bach Ke.mp3' },
    { SongName: '9 45.mp3' },
    { SongName: '12 Bande.mp3' },
    { SongName: 'Aam Jahe Munde.mp3' },
    { SongName: 'Amplifier.mp3' },
    { SongName: 'Tung Tung Baje.mp3' },
    { SongName: 'Yaar Anmulle.mp3' },
    { SongName: 'Ankhen khuli.mp3' },
    { SongName: 'Mere Mehboob Mere Sanam.mp3' },
    { SongName: 'Angreji Beat.mp3' },
    { SongName: 'Tu ha kahan.mp3' },
    { SongName: 'Baadshah O Baadshah.mp3' },
    { SongName: 'BROWN MUNDE.mp3' },
    { SongName: 'DAKU.mp3' },
    { SongName: 'DEVIL.mp3' },
    { SongName: 'Dollar.mp3' },
    { SongName: 'Drill.mp3' },
    { SongName: 'East Side Flow.mp3' },
    { SongName: 'Gaal Ni Kadni.mp3' },
    { SongName: 'GAME.mp3' },
    { SongName: 'GOAT.mp3' },
    { SongName: 'GOLIYAN.mp3' },
    { SongName: 'Hairun Khairun.mp3' },
    { SongName: 'LAKK 28 KUDI DA.mp3' },
    { SongName: 'Lalkaara.mp3' },
    { SongName: 'Lungi Dance.mp3' },
    { SongName: 'MIRASI.mp3' },
    { SongName: 'Mitti De Tibbe.mp3' },
    { SongName: 'Nain Tere.mp3' },
    { SongName: 'OLD SKOOL.mp3' },
    { SongName: 'Same Beef Song.mp3' },
    { SongName: 'SANJU.mp3' },
    { SongName: 'Teri Chunnariya.mp3' },
]
//oldsongs list
let oldsongs = [
    { SongName: 'AAWARA HUN.mp3' },
    { SongName: 'JEENA ISI KA NAAM HA.mp3' },
    { SongName: 'Das Main Ki Pyar Wichon khatya.mp3' },
    { SongName: 'MERE MEHBOOB QAYAMAT HOGI.mp3' },
    { SongName: 'MERA JOOTA HA JAPANI.mp3' },
    { SongName: 'Baadshah O Baadshah.mp3' },
    { SongName: 'Aaye Ho Meri Zindagi Mein Tum Bahar Banke .mp3' },
    { SongName: 'Dil Ne Yeh Kaha Hai.mp3' },
    { SongName: 'Tujhe dekha to ye jana sanam.mp3' },
    { SongName: 'Ankhen khuli.mp3' },
    { SongName: 'Main Yahaan Hoon.mp3' },
    { SongName: 'Dil Ne Yeh Kaha Hai.mp3' },
    { SongName: 'Pani Deyan Bulbuleya.mp3' },
    { SongName: 'Mere Mehboob Mere Sanam.mp3' },
    { SongName: 'Ye tune kya kiya.mp3' },
    { SongName: 'Mere Rashke Qamar.mp3' },
    { SongName: 'Suraj Hua Maddham.mp3' },
    { SongName: 'Ye raaten ye mausam.mp3' },
    { SongName: 'Teri Chunnariya.mp3' },
    { SongName: 'Mere samne wali khidki.mp3' },
]

// vairables defined
let masterplay = document.getElementById('masterplay');
let progress = document.getElementById('seekbar');
let container = document.getElementsByClassName('container')[0];
let song = new Audio(songslist[0].SongName);
let songdiv
let prog
let currentIndex = 0;
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let songinfo = document.getElementsByClassName('songinfo')[0];
let allsongsbtn = document.getElementById('allsongs');
let sadsongsbtn = document.getElementById('sadsongs');
let currentlist
let beatsongsbtn = document.getElementById('beatsongs');
let oldsongsbtn = document.getElementById('oldsongs');
let songDiv
let ct = document.getElementById('current-time');
let tt = document.getElementById('total-time');


// Functions
// Function to add songs to container and make them playable
function loadsongs(SongsList) {
    SongsList.sort((a, b) => a.SongName.localeCompare(b.SongName));

    container.innerHTML = ''
    for (let index = 0; index < SongsList.length; index++) {
        let htmlcode = `<div class="song">
        <i class="fa-solid fa-headphones"></i>
        <span>${SongsList[index].SongName.replace('.mp3', '').toUpperCase()}</span>
        </div>`;
        container.insertAdjacentHTML('beforeend', htmlcode);
    }
    // click on a song and it starts playing
    songdiv = document.querySelectorAll('.song');
    songdiv.forEach((songDiv, index) => {
        songDiv.addEventListener('click', () => {
            song.pause()
            songdiv.forEach(div => {
                div.classList.remove('opaque')
            });
            currentIndex = index
            song = new Audio(SongsList[index].SongName)
            progress.value = 0
            masterplay.classList.remove('fa-play')
            masterplay.classList.add('fa-pause')
            song.play()
            songDiv.classList.add('opaque')
            // Update the name of the song in footer as the song changes
            songinfo.textContent = SongsList[currentIndex].SongName.replace('.mp3', '');
            // update seekbar as song plays
            song.addEventListener('timeupdate', () => {
                let prog = parseInt((song.currentTime) / (song.duration) * 100)
                let totalseconds = song.duration
                let mins = Math.floor(totalseconds / 60);
                let secs = Math.floor(totalseconds % 60);
                if (secs < 10) {
                    tt.innerText = `${mins}:0${secs}`
                }
                else {
                    tt.innerText = `${mins}:${secs}`
                }
                let currentseconds = Math.floor(song.currentTime)
                let currentmins = Math.floor(song.currentTime / 60);
                let currentsecs = Math.floor(song.currentTime % 60);
                if (currentsecs < 10) {
                    if (song.currentTime < 60) {
                        ct.innerText = `00:0${currentseconds}`
                    }
                    else {
                        ct.innerText = `${currentmins}:0${currentsecs}`
                    }
                }
                else {
                    if (song.currentTime < 60) {
                        ct.innerText = `00:${currentseconds}`
                    }
                    else {
                        ct.innerText = `${currentmins}:${currentsecs}`
                    }
                }

                progress.value = prog;
            })
            // Function to handle when the song ends
            song.addEventListener('ended', () => {
                next.click(); // This triggers the next button's logic to play the next song
            });
        })
    })
}



// Event Listeners

//sadsongs list
sadsongsbtn.addEventListener('click', () => {
    sadsongsbtn.classList.add('underlined')
    allsongsbtn.classList.remove('underlined')
    beatsongsbtn.classList.remove('underlined')
    oldsongsbtn.classList.remove('underlined')
    currentlist = sadsongs
    loadsongs(sadsongs)
})
//all songs list
allsongsbtn.addEventListener('click', () => {
    sadsongsbtn.classList.remove('underlined')
    allsongsbtn.classList.add('underlined')
    beatsongsbtn.classList.remove('underlined')
    oldsongsbtn.classList.remove('underlined')
    currentlist = songslist
    loadsongs(songslist)
})
//upbeatsongs list
beatsongsbtn.addEventListener('click', () => {
    sadsongsbtn.classList.remove('underlined')
    allsongsbtn.classList.remove('underlined')
    beatsongsbtn.classList.add('underlined')
    oldsongsbtn.classList.remove('underlined')
    currentlist = beatsongs
    loadsongs(beatsongs)
})
//old songs list
oldsongsbtn.addEventListener('click', () => {
    sadsongsbtn.classList.remove('underlined')
    allsongsbtn.classList.remove('underlined')
    beatsongsbtn.classList.remove('underlined')
    oldsongsbtn.classList.add('underlined')
    currentlist = oldsongs
    loadsongs(oldsongs)
})


// playbutton events that functions for pause or play
masterplay.addEventListener('click', () => {
    if (!allsongsbtn.classList.contains('underlined') && !sadsongsbtn.classList.contains('underlined') && !beatsongsbtn.classList.contains('underlined') && !oldsongsbtn.classList.contains('underlined')) {
        return
    }
    else if (song.paused || song.currentTime <= 0) {
        song.play();
        masterplay.classList.remove('fa-play')
        masterplay.classList.add('fa-pause')
    }
    else {
        song.pause();
        masterplay.classList.add('fa-play')
        masterplay.classList.remove('fa-pause')
    }
    // Function to handle when the song ends
    song.addEventListener('ended', () => {
        next.click(); // This triggers the next button's logic to play the next song
    });
})



// next button logic
next.addEventListener('click', () => {
    song.pause();
    songdiv.forEach(div => {
        div.classList.remove('opaque')
    });
    currentIndex = (currentIndex + 1) % currentlist.length;  // Move to next song and loop back to start
    song = new Audio(currentlist[currentIndex].SongName);
    progress.value = 0;
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    song.play();
    songdiv[currentIndex].classList.add('opaque')
    // Update the name of the song in footer as the song changes
    songinfo.textContent = currentlist[currentIndex].SongName.replace('.mp3', '');
    // Update total time (tt) and current time (ct)
    song.addEventListener('loadedmetadata', () => {
        let totalseconds = song.duration;
        let mins = Math.floor(totalseconds / 60);
        let secs = Math.floor(totalseconds % 60);
        tt.innerText = secs < 10 ? `${mins}:0${secs}` : `${mins}:${secs}`;

        // Set current time to 0 at the start
        ct.innerText = `00:00`;
    });

    song.addEventListener('timeupdate', () => {
        let prog = parseInt((song.currentTime) / song.duration * 100);
        progress.value = prog;

        // Update current time (ct)
        let currentmins = Math.floor(song.currentTime / 60);
        let currentsecs = Math.floor(song.currentTime % 60);
        ct.innerText = currentsecs < 10 ? `${currentmins}:0${currentsecs}` : `${currentmins}:${currentsecs}`;
    });
    // Function to handle when the song ends
    song.addEventListener('ended', () => {
        next.click(); // This triggers the next button's logic to play the next song
    });
    // Update seek bar as song plays
    song.addEventListener('timeupdate', () => {
        let prog = parseInt((song.currentTime) / (song.duration) * 100);
        progress.value = prog;
    });

});

//previous button logic
previous.addEventListener('click', () => {
    song.pause();
    songdiv.forEach(div => {
        div.classList.remove('opaque')
    });
    progress.value = 0
    if (currentIndex === 0) {
        currentIndex = currentlist.length - 1
        song = new Audio(currentlist[currentIndex].SongName);
    }
    else {
        currentIndex = currentIndex - 1;
        song = new Audio(currentlist[currentIndex].SongName);
    }
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    song.play();
    songdiv[currentIndex].classList.add('opaque')
    // Update the name of the song in footer as the song changes
    songinfo.textContent = currentlist[currentIndex].SongName.replace('.mp3', '');
    // Update total time (tt) and current time (ct)
    song.addEventListener('loadedmetadata', () => {
        let totalseconds = song.duration;
        let mins = Math.floor(totalseconds / 60);
        let secs = Math.floor(totalseconds % 60);
        tt.innerText = secs < 10 ? `${mins}:0${secs}` : `${mins}:${secs}`;

        // Set current time to 0 at the start
        ct.innerText = `00:00`;
    });

    song.addEventListener('timeupdate', () => {
        let prog = parseInt((song.currentTime) / song.duration * 100);
        progress.value = prog;

        // Update current time (ct)
        let currentmins = Math.floor(song.currentTime / 60);
        let currentsecs = Math.floor(song.currentTime % 60);
        ct.innerText = currentsecs < 10 ? `${currentmins}:0${currentsecs}` : `${currentmins}:${currentsecs}`;
    });

    // Function to handle when the song ends
    song.addEventListener('ended', () => {
        next.click(); // This triggers the next button's logic to play the next song
    });
    // Update seek bar as song plays
    song.addEventListener('timeupdate', () => {
        let prog = parseInt((song.currentTime) / (song.duration) * 100);
        progress.value = prog;
    });
})

// seekbar function
progress.addEventListener('change', () => {
    song.currentTime = progress.value * song.duration / 100
})

