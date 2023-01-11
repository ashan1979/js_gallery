function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    }
    throw new Error(
        `Please Check "${selection}" selector, no such element exists`
    );
}

class Gallery {
    constructor(element) {
        this.container = element;
    }
}