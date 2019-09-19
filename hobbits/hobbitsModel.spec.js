const Hobbits = require('./hobbitsModel.js');
const db = require('../data/dbConfig.js');


describe('hobbits model', () => {
    it('should set evironment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });
    
    describe('insert()', () => {
    

        it('should insert hobbits into db', async () => {
            const [id] = await Hobbits.insert({ name: "Gaffer"});

            let hobbit = await db('hobbits')
                .where({ id })
                .first();
            expect(hobbit.name).toBe('Gaffer');
        })
    })
})