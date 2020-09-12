import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('expenses')
export class ExpenseController {
    @Get('')
    public getAllExpensesForLoggedUser(_: Request, res: Response): void {
        res.json([
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
    }
}
