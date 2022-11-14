class Message {
    constructor(name, time, text) {
        this.name = name,
            this.time = time,
            this.text = text
    }

    toHtml() {
        let result = `<p>${this.name} sent a message. </b><br></b> Message : ${this.text} </b><br></b> Time : ${this.time}</p></b>`;
        return result;
    }
}

class Messenger {
    constructor() {
        this.messages = []
    }

    gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    }

    sendMessage(name, text) {
        this.messages.push(new Message(name, this.gettime(), text))
    }

    show_history() {
        let history = document.querySelector(".history")
        history.innerHTML = ''

        this.messages.forEach(el => history.innerHTML += el.toHtml());
    }
}

let sender = new Messenger();

document.querySelector('form').addEventListener(
    'submit', (event)=> {
        event.preventDefault();

        const data = new FormData(event.target);

        // let time = data.get('time');
        let name = data.get('name');
        let text = data.get('text');

        sender.sendMessage(name, text);
        sender.show_history();

    }
)