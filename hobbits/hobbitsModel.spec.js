

describe('hobbits model', () => {
    it('should set evironment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });
})