// for basic variables
// and service finctions
class Manager {
    constructor() {
        this.TIMEINT = 750;
        this.timerId;        
        this.gameover = false;
        this.gamecount = 0;
        this.arr = [];
        this.sound = new Audio();
        this.SIMON = [
            {
                name: "yellow_botton",
                prime_background: "#D7D700",
                push_background: "#FFFF00",
                sound: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
            },
            {
                name: "green_button",
                prime_background: "green",
                push_background: "lime",
                sound: "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
            },
            {
                name: "blue_button",
                prime_background: "#0000AF",
                push_background: "#1E1EFF",
                sound: "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
            },
            {
                name: "red_button",
                prime_background: "#CD0000",
                push_background: "red",
                sound: "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3",
            }
        ];
    }
    
    static get instance() {
        if (!Manager._instance) {
            Manager._instance = new Manager();
        }
        return Manager._instance;
    }
    
    cleanField() {
        for (let i = 0; i < 4; i++) {
            document.getElementById('b' + i).style.background = this.SIMON[i].prime_background;
        }
    }
    
    playSound(soundUrl) {
        this.sound.src = soundUrl;
        const playPromise = this.sound.play();
        if (playPromise !== null) {
            playPromise.catch(() => { console.log(playPromise); })
        }
    }

    initProject() {        
        for (let i = 0; i < 4; i++) {
            document.getElementById('game').innerHTML += '<div  id="b' + i + '" class="block"></div>';
        }
        document.getElementById('game').innerHTML += '<div id="b_cnt" class="center"></div>';
    }
}
