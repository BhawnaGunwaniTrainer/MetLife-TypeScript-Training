// let weight: number | string;

// let weight: number & string;

type Draggable = {
    drag: () => void;
}

type Resizable = {
    resize: () => void;
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => { console.log('Draggable'); },
    resize: () => { console.log('Resize'); }
}

textBox.drag();
textBox.resize();