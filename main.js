songList=[];

var Song = function (songname, artist, album) {
    this.songname=songname;
    this.artist=artist;
    this.album=album;
}

let list = document.getElementById("myList")

document.addEventListener("DOMContentLoaded", function(event) {
    this.getElementById("add").addEventListener("click", function() {
        let songname = document.getElementById("songname").value
        let artist = document.getElementById("artist").value
        let album = document.getElementById("album").value
        var newSong = new Song(songname, artist, album);
        songList.push(newSong);
        /* sessionStorage.setItem('song', (newSong));
        var retrieveSong = JSON.parse(sessionStorage.getItem('song'));
        for(i = 0; i<retrieveSong.length; i++) {
            console.log(JSON.parse(retrieveSong[i]));
        } */
        //console.log(retrieveSong.song + ', ' + retrieveSong.artist + ', ' + retrieveSong.album);
        console.log(songList);
        document.getElementById("added").value = (songname + ' by ' + artist + ' successfully added to Library!');
        document.getElementById("songname").value = "";
        document.getElementById("artist").value = "";
        document.getElementById("album").value = "";
        sessionStorage.setItem('songname', songname);
        sessionStorage.setItem('artist', artist);
        sessionStorage.setItem('album', album);

    })
    this.getElementById("viewList").addEventListener("click", function() {
        document.getElementById("myList").innerHTML = "";
        list = document.getElementById("myList");
        for (i = 0; i < songList.length; i++) {
            let li = document.createElement("li");
            console.log(songList[i].songname);
            li.innerText = songList[i].songname + songList[i].artist + songList[i].album;
            //li.innerText = sessionStorage.getItem('songname') + " by " + sessionStorage.getItem('artist') + " in " + sessionStorage.getItem('album');
            list.appendChild(li);
        }
        
        console.log(sessionStorage.getItem('songname'));
        
        
    })
})

function createSong() {
    

}

function view() {
    /* let list = document.getElementById("myList");
    songList.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item.song + " by " + item.artist + " in " + item.album;
        list.appendChild(li);
    }) */
    list = document.getElementById("myList");
    let li = document.createElement("li");
    li.innerText = sessionStorage.getItem('song') + " by " + sessionStorage.getItem('artist') + " in " + sessionStorage.getItem('album');
    list.appendChild(li);
}

