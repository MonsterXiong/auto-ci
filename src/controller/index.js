class userController {
    async index(ctx) {
        ctx.body = 'hello'
    }

    async json(ctx) {
        ctx.body = {
            name: 'monter',
            value: '123',
        }
    }
}

module.exports = new userController()
