const output = document.querySelector('#output');
const buttons = document.querySelectorAll('.btn');
const save = document.querySelector('.save')
const load = document.querySelector('#inputfile')

for (let btn of buttons) {
    btn.addEventListener('click', () => {
        let cmd = btn.dataset['command'];
        document.execCommand(cmd, false, null);
    })
}

save.addEventListener('click', function() {
    const data = {
        note: output.innerHTML
    };

    const jsonData = JSON.stringify(data);
    const file = new Blob([jsonData], {type: 'application/json'});
    
    save.href = URL.createObjectURL(file);
    save.download = 'note.json';
})


load.addEventListener('change', function() {
    const fr = new FileReader();

    fr.onload = function() {
        const json = JSON.parse(fr.result);
        const { note } = json;

        output.innerHTML = note;
    }
        
    fr.readAsText(this.files[0]);
})