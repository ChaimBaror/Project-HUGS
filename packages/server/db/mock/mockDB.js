const mock = (obj) => ({
    toJSON() {
        return obj;
    },
});
function getDB() {
    const users = [];
    const accounts = [];
    const db = {
        user: {
            async create(user) {
                users.push(user);
                return mock(user);
            },
            async findByEmail(email) {
                const i = users.find((u) => u.email === email);
                return i;
            },
            async update(user) {
                const i = users.findIndex((u) => u.id === user.id);
                users.splice(i, 1, user);
            },
            async delete(user) {
                const i = users.findIndex((u) => u.id === user.id);
                users.splice(i, 1);
            },
        },
        account: {
            async update(account) {
                const i = accounts.findIndex((u) => u.id === account.id);
                accounts.splice(i, 1, account);
                return mock(account);
            },
        },
    };
    return db;
}
module.exports = getDB();
