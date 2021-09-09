export const p = (text='') => {
    let paragraph = document.createElement('p');
    paragraph.innerHTML = text;
    return paragraph;
};
