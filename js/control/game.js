class Game {
    static get instance() {
        if (!Game._instance) {
            Game._instance = new Game;
        }
        return Game._instance;
    }

    play() {
        let comp = new Comp;
        comp.turn();
        let gpos=0;

        // put listener on click
        document.getElementById('game').onclick = (event) => {
            if (event.target.className == "block" && !Manager.instance.gameover) {
                // show your tern
                event.target.style.background = 
                Manager.instance.SIMON[event.target.id[1]].push_background;
                Manager.instance.playSound(Manager.instance.SIMON[event.target.id[1]].sound);
                setTimeout(() => {
                    Manager.instance.cleanField();
                }, Manager.instance.TIMEINT);
                
               if (event.target.id[1] != Manager.instance.arr[gpos]) {
                    // oops, you fail game over...
                    document.getElementById('h1').innerHTML = 'Game Over';
                    document.getElementById('b_cnt').innerHTML = '<p>fail</p>';
                    Manager.instance.gameover = true;
                    setTimeout(() => {
                        Manager.instance.cleanField();
                    }, Manager.instance.TIMEINT);
                } else {
                    // good, go to the next turn
                    gpos++
                    if (gpos === Manager.instance.arr.length) {
                        // graet, you have finished current serie!!!                       
                        comp.turn();
                        gpos = 0;
                    }
                }
            }
        }
    }
}