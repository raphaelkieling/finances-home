describe('Expense function tests ', () => {
    it('should return a valid payment', async () => {
        const { body, status } = await global.testRequest.get('/expenses');
        expect(status).toBe(200);
        expect(body).toEqual([
            {
                value: 299,
                payments: [
                    {
                        date: '2020-09-12',
                        status: 'paid',
                    },
                    {
                        date: '2020-10-12',
                        status: 'pending',
                    },
                    {
                        date: '2020-11-12',
                        status: 'pending',
                    },
                ],
                category: {
                    description: 'computer',
                },
            },
        ]);
    });
});
