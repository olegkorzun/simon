class Player {
    constructor(eventtarget) {
        this.eventtarget = eventtarget;
    }

p
    eventtarget.style.background = 
    Manager.instance.SIMON[event.target.id[1]].push_background;
    Manager.instance.playSound(Manager.instance.SIMON[eventtarget.id[1]].sound);
    setTimeout(() => {
        Manager.instance.cleanField();
    }, Manager.instance.TIMEINT);
    
    
}
