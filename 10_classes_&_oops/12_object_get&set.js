const User = {
    set email(value) {
        this._email = value;
    },
    get email() {
        return this._email;
    }
};

const tea = Object.create(User);
tea.email = "chai@code.com";
console.log(tea.email); // chai@code.com
