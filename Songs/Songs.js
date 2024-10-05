// List of songs
const songslist = [
    { SongName: 'LABON KO.mp3' },
    { SongName: 'Das Main Ki Pyar Wichon khatya.mp3' },
    { SongName: 'Mere Mehboob Mere Sanam.mp3' },
    { SongName: 'Mere Rashke Qamar.mp3' },
    { SongName: 'Mundian To Bach Ke.mp3' },
    { SongName: 'Pani Deyan Bulbuleya.mp3' },
    { SongName: 'Tune Jo Na Kaha.mp3' },
    { SongName: 'Ankhen khuli.mp3' },
    { SongName: 'Tujhe dekha to ye jana sanam.mp3' },
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


// Functions
for (let index = 0; index < songslist.length; index++) {
    let htmlcode = `<div class="song">
    <i class="fa-solid fa-headphones"></i>
    <span>${songslist[index].SongName.replace('.mp3', '')}</span>
    </div>`;
    container.insertAdjacentHTML('beforeend', htmlcode);
}


// Event Listeners
// playbutton events that functions for pause or play
masterplay.addEventListener('click', () => {
    if (song.paused || song.currentTime <= 0) {
        song.play();
        masterplay.classList.remove('fa-play')
        masterplay.classList.add('fa-pause')
    }
    else {
        song.pause();
        masterplay.classList.add('fa-play')
        masterplay.classList.remove('fa-pause')
    }
})


// click on a song and it starts playing
songdiv = document.querySelectorAll('.song');
songdiv.forEach((songDiv, index) => {
    songDiv.addEventListener('click', () => {
        song.pause()
        currentIndex = index
        song = new Audio(songslist[index].SongName)
        progress.value = 0
        masterplay.classList.remove('fa-play')
        masterplay.classList.add('fa-pause')
        song.play()
        // Update the name of the song in footer as the song changes
        songinfo.textContent = songslist[currentIndex].SongName.replace('.mp3', '');
        // update seekbar as song plays
        song.addEventListener('timeupdate', () => {
            let prog = parseInt((song.currentTime) / (song.duration) * 100)
            progress.value = prog;
        })
    })
})

// next button logic
next.addEventListener('click', () => {
    song.pause();
    currentIndex = (currentIndex + 1) % songslist.length;  // Move to next song and loop back to start
    song = new Audio(songslist[currentIndex].SongName);
    progress.value = 0;
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    song.play();
    // Update the name of the song in footer as the song changes
    songinfo.textContent = songslist[currentIndex].SongName.replace('.mp3', '');
    // Update seek bar as song plays
    song.addEventListener('timeupdate', () => {
        let prog = parseInt((song.currentTime) / (song.duration) * 100);
        progress.value = prog;
    });
});

//previous button logic
previous.addEventListener('click', () => {
    song.pause()
    progress.value = 0
    if (currentIndex === 0) {
        currentIndex = songslist.length - 1
        song = new Audio(songslist[currentIndex].SongName);
    }
    else {
        currentIndex = currentIndex - 1;
        song = new Audio(songslist[currentIndex].SongName);
    }
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    song.play();
    // Update the name of the song in footer as the song changes
    songinfo.textContent = songslist[currentIndex].SongName.replace('.mp3', '');
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

