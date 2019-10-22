class Comp{ 
    
    turn() {
        let pos = 0;
        Manager.instance.arr.push(Math.floor(Math.random() * 4));
        // new comp step
        let tId = setInterval(() => {
            Manager.instance.cleanField();
            if (pos < Manager.instance.arr.length) {
                document.getElementById('b' + 
                Manager.instance.arr[pos]).style.background = 
                Manager.instance.SIMON[Manager.instance.arr[pos]].push_background;
                Manager.instance.playSound(Manager.instance.SIMON[Manager.instance.arr[pos]].sound);
                pos++;
            } else {
                Manager.instance.gamecount++;
                document.getElementById('b_cnt').innerHTML = '<p>' + Manager.instance.gamecount + '</p>';        
                clearInterval(tId);
            }
        }, Manager.instance.TIMEINT);

    }
}