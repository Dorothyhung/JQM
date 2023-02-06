songList=[];

var Song = function (songname, artist, album) {
    this.songname=songname;
    this.artist=artist;
    this.album=album;
}

let list = document.getElementById("myList");
let list2 = document.getElementById("myList");

document.addEventListener("DOMContentLoaded", function(event) {
    //Add to Library
    this.getElementById("add").addEventListener("click", function() {
        let songname = document.getElementById("songname").value
        let artist = document.getElementById("artist").value
        let album = document.getElementById("album").value
        if((songname == "") || (artist == "") || (album == "")) {
            alert("Please enter text in all fields");
        } else {
            var newSong = new Song(songname, artist, album);
            songList.push(newSong);
            console.log(songList);
            document.getElementById("added").value = (songname + ' by ' + artist + ' successfully added to Library!');
            document.getElementById("songname").value = "";
            document.getElementById("artist").value = "";
            document.getElementById("album").value = "";
        }
        
    })

    //View Library
    this.getElementById("viewList").addEventListener("click", function() {
        document.getElementById("myList").innerHTML = "";
        document.getElementById("added").value = '';
        list = document.getElementById("myList");
        for (i = 0; i < songList.length; i++) {
            let li = document.createElement("li");
            console.log(songList[i].songname);
            li.innerText = songList[i].songname + " by " + songList[i].artist + " in " + songList[i].album;
            list.appendChild(li);
        }
    })

    //Search Library
    this.getElementById("searchList").addEventListener("click", function() {
        document.getElementById("myList2").innerHTML = "";
        document.getElementById("added").value = '';
        list2 = document.getElementById("myList2");
        for (i = 0; i < songList.length; i++) {
            let li = document.createElement("li");
            console.log(songList[i].songname);
            li.innerText = songList[i].songname + " by " + songList[i].artist + " in " + songList[i].album;
            list2.appendChild(li);
        }
    })
})