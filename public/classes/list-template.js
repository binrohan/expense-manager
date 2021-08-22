export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('LI');
        const h4 = document.createElement('H4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('P');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.append(li);
        }
        else {
            this.container.appendChild(li);
        }
    }
}
