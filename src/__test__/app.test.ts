import PagueloFacil from '../index'

describe('Test for the package', () => {
    let codOper = '';
    const amount = 1
    test('Will request AUTH transaction', async () => {
        const pagueloFacil = new PagueloFacil(process.env.CCLW, process.env.TOKEN, 'development')
        const paymentInfo = {
            amount: amount,
            taxAmount: 0.0,
            email: 'testemail@mail.com',
            phone: '6123456789',
            concept: 'testing AUTH',
            description: 'testing AUTH',
        };

        const cardInfo = {
            cardNumber: "5517747952039692",
            expMonth: "1",
            expYear: "30",
            cvv: "123",
            firstName: "FirstName",
            lastName: "LastName",
            cardType: "MASTERCARD"
        }
        
        const response = await pagueloFacil.Authorization(paymentInfo, cardInfo)
        expect(response.success).toBeTruthy()
        codOper = response.data.codOper;
    })

    test('Will attemp to REVERSE_AUTH transaction', async () => {
        const pagueloFacil = new PagueloFacil(process.env.CCLW, process.env.TOKEN, 'development')
        const response = await pagueloFacil.ReverseAuthorization({
            amount: amount,
            description: 'testing REVERSE',
            codOper: codOper
        })
        expect(response.success).toBeTruthy()
        codOper = response.data.codOper;
    })

    test('Will request AUTH transaction for CAPTURE transaction', async () => {
        const pagueloFacil = new PagueloFacil(process.env.CCLW, process.env.TOKEN, 'development')
        const response = await pagueloFacil.Authorization({
            amount: amount + 1,
            taxAmount: 0.0,
            email: 'testemail@mail.com',
            phone: '6123456789',
            concept: 'testing AUTH',
            description: 'testing AUTH',
        }, {
            cardNumber: "5517747952039692",
            expMonth: "1",
            expYear: "30",
            cvv: "123",
            firstName: "FirstName",
            lastName: "LastName",
            cardType: "MASTERCARD"
        })
        expect(response.success).toBeTruthy()
        codOper = response.data.codOper;
    })

    test('Will request CAPTURE transaction', async () => {
        const pagueloFacil = new PagueloFacil(process.env.CCLW, process.env.TOKEN, 'development')
        const response = await pagueloFacil.Capture({
            amount: amount + 1,
            taxAmount: 0.0,
            email: 'testemail@mail.com',
            phone: '6123456789',
            concept: 'testing AUTH',
            description: 'testing CAPTURE',
            codOper: codOper
        })
        expect(response.success).toBeTruthy()
        codOper = response.data.codOper;
    })

    test('Will attemp to REVERSE_CAPTURE transaction', async () => {
        const pagueloFacil = new PagueloFacil(process.env.CCLW, process.env.TOKEN, 'development')
        const response = await pagueloFacil.ReverseCapture({
            amount: amount + 1,
            description: 'testing REVERSE',
            codOper: codOper
        })
        expect(response.success).toBeTruthy()
        codOper = response.data.codOper;
    })

    test('Will attemp to AUTH_CAPTURE transaction', async () => {
        const pagueloFacil = new PagueloFacil(process.env.CCLW, process.env.TOKEN, 'development')
        const response = await pagueloFacil.AuthCapture({
            amount: amount + 2,
            taxAmount: 0.0,
            email: 'testemail@mail.com',
            phone: '6123456789',
            concept: 'testing AUTH_CAPTURE',
            description: 'testing AUTH_CAPTURE',
        }, {
            cardNumber: "5517747952039692",
            expMonth: "1",
            expYear: "30",
            cvv: "123",
            firstName: "FirstName",
            lastName: "LastName",
            cardType: "MASTERCARD"
        })
        expect(response.success).toBeTruthy()
        codOper = response.data.codOper;
    })

    test('Will attemp to RECURRENT transaction', async () => {
        const pagueloFacil = new PagueloFacil(process.env.CCLW, process.env.TOKEN, 'development')
        const response = await pagueloFacil.Recurrent({
            amount: amount + 3,
            taxAmount: 0.0,
            email: 'testemail@mail.com',
            phone: '6123456789',
            concept: 'testing RECURRENT',
            description: 'testing RECURRENT',
            codOper: codOper
        })
        expect(response.success).toBeTruthy()
    })
})