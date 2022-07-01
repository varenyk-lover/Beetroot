const getButton = document.getElementById('buttonID');

const getList = document.getElementById('testlist');

let isShown = true;

getButton.addEventListener('click', () => {
        isShown = !isShown;
        if (isShown) {
            getList.style.display = 'none';
        } else {
            getList.style.display = 'block';
        }
    }
)


//Створити нумерований список
let playList = [

    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },

    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },

    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },

    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },

    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },

    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },

    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },

    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }

];

const musicID = document.getElementById('musicList')


for (let i = 0; i < playList.length; i++) {
    const li = document.createElement('li')
    musicID.appendChild(li)
    // li.innerHTML = Object.values(playList[i])
    //or
    li.innerHTML = `Виконавець: ${playList[i].author},<br> Назва пісні: ${playList[i].song}`
}

