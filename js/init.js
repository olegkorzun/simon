window.onload = () => onloadProject();

function onloadProject() {
          Manager.instance.initProject();
          Game.instance.play();
}
