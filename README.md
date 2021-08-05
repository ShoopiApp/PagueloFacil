
#  PagueloFacil Node.js Library

  

The PagueloFacil Node library provides convenient access to the PagueloFacil API from applications written in server-side JavaScript.

  

You can read the full [documentation](https://developers.paguelofacil.com/guias) of PagueloFacil.

##  Content
[Installation](#installation)

[Usage Examples](#usage-examples)
- [Authorization](#authorization)
- [Reverse Authorization](#reverse-authorization)
- [Capture](#capture)
- [Reverse Capture](#reverse-capture)
- [Authorize and Capture](#authorize-and-capture)
- [Recurrent](#recurrent)

[API Reference](#api-reference)
- [Constructor](#constructor)
- [PaymentInformation](#PaymentInformation)
- [CardInformation](#CardInformation)
- [ReverseInformation](#ReverseInformation)
- [CaptureInformation](#CaptureInformation)
- [ServerResponse](#ServerResponse)
- [HeaderStatus](#HeaderStatus)
- [Data](#Data)

[Running Tests](#running-tests)



##  Installation

Install PagueloFacil with npm

  

```bash

npm install @shoopiapp/paguelofacil

```

  

##  Usage Examples

```javascript
import  PagueloFacil  from  '@shoopiapp/paguelofacil';
const  pagueloFacil  =  new  PagueloFacil(cclw, token, 'development');
```

  

- ### Authorization

```javascript

const  paymentInfo  =  {
    amount:  1,
    taxAmount:  0.0,
    email:  "email@mail.com",
    phone:  "61234567",
    concept:  "concept",
    description:  "description",
}

const  cardInfo  =  {
    cardNumber:  "xxxxxxxxxxxxxxxx",
    expMonth:  "1",
    expYear:  "30",
    cvv:  "123",
    firstName:  "FirstName",
    lastName:  "LastName",
    cardType:  "MASTERCARD"
}
const  response  =  await pagueloFacil.Authorization(paymentInfo, cardInfo);

```

  

- ### Reverse Authorization

```javascript

const  reverseInfo  =  {
    amount:  1,
    description:  'description',
    codOper:  'SANDBOX_AUTH-XXXXXXXXX'
}
const  response  =  await pagueloFacil.ReverseAuthorization(reverseInfo);

```

  

-  ### Capture

```javascript

const  paymentInfo  =  {
    amount:  1,
    taxAmount:  0.0,
    email:  "email@mail.com",
    phone:  "61234567",
    concept:  "concept",
    description:  "description",
    codOper: "SANDBOX_AUTH-XXXXXXXXX"
}
const  response  =  await pagueloFacil.Capture(paymentInfo);

```

  

-  ### Reverse Capture

```javascript

const  reverseInfo  =  {
    amount:  1,
    description:  'description',
    codOper:  'SANDBOX_AUTH-XXXXXXXXX'
}
const  response  =  await pagueloFacil.ReverseCapture(reverseInfo);

```

  

-  ### Authorize and Capture

```javascript

const  paymentInfo  =  {
    amount:  1,
    taxAmount:  0.0,
    email:  "email@mail.com",
    phone:  "61234567",
    concept:  "concept",
    description:  "description"
} 

const  cardInfo  =  {
    cardNumber:  "xxxxxxxxxxxxxxxx",
    expMonth:  "1",
    expYear:  "30",
    cvv:  "123",
    firstName:  "FirstName",
    lastName:  "LastName",
    cardType:  "MASTERCARD"
}
const  response  =  await pagueloFacil.AuthCapture(paymentInfo, cardInfo);

```

  

-  ### Recurrent

```javascript

const  recurrentInfo  =  {
    amount:  1,
    taxAmount:  0.0,
    email:  'email@mail.com',
    phone:  '61234567',
    concept:  'concept',
    description:  'description',
    codOper:  'SANDBOX_AUTH-XXXXXXXXX'
}
const  response  =  await pagueloFacil.Recurrent(recurrentInfo);

```

  

##  API Reference

####  Constructor

```javascript
new PagueloFacil(cclw, token, environment)
```

| Parameter | Type | Description |
| :------------ | :-------------------------- | :-------------------------------- |
| `cclw` | `string` | **Required**. Your cclw key |
| `token` | `string` | **Required**. Your token key |
| `environment` | `development or production` | **Optional**. Type of environment |

  
  
  

####  PaymentInformation

| Parameter | Type | Description |
| :------------------ | :-------------------------------- | :----------------------------------------------- |
| `amount` | `number` | **Required**. Transaction amount |
| `taxAmount` | `number` | **Required**. Trax amount |
| `email` | `string` | **Required**. Client email |
| `phone` | `string` | **Required**. Client phone |
| `concept` | `string` | **Required**. Transaction concept |
| `description` | `string` | **Required**. Transaction description |
| `lang` | `string` | **Optional**. Language |
| `customFieldValues` | `Array<[string, string, string]>` | **Optional**. Optional fields (id, label, value) |

  
  
  

####  CardInformation

| Parameter | Type | Description |
| :----------- | :------------------- | :---------------------------------- |
| `cardNumber` | `string` | **Required**. Client card number |
| `expMonth` | `string` | **Required**. The expiration month |
| `expYear` | `string` | **Optional**. The expiration year |
| `cvv` | `string` | **Optional**. The cvv or cvc |
| `firstName` | `string` | **Optional**. The client first name |
| `lastName` | `string` | **Optional**. The client last name |
| `cardType` | `VISA or MASTERCARD` | **Optional**. The card type |

  
  
  

####  ReverseInformation

| Parameter | Type | Description |
| :------------------ | :-------------------------------- | :----------------------------------------------- |
| `codOper` | `string` | **Required**. codOper return by the transaction |
| `amount` | `number` | **Required**. Transaction amount |
| `description` | `string` | **Required**. Transaction description |
| `lang` | `string` | **Optional**. Language |
| `customFieldValues` | `Array<[string, string, string]>` | **Optional**. Optional fields (id, label, value) |

  
  
  

####  CaptureInformation

| Parameter | Type | Description |
| :------------------ | :-------------------------------- | :----------------------------------------------- |
| `amount` | `number` | **Required**. Transaction amount |
| `taxAmount` | `number` | **Required**. Trax amount |
| `email` | `string` | **Required**. Client email |
| `phone` | `string` | **Required**. Client phone |
| `concept` | `string` | **Required**. Transaction concept |
| `description` | `string` | **Required**. Transaction description |
| `lang` | `string` | **Optional**. Language |
| `customFieldValues` | `Array<[string, string, string]>` | **Optional**. Optional fields (id, label, value) |
| `codOper` | `string` | **Required**. codOper return by the transaction |

  
  
  

####  ServerResponse

| Parameter | Type | Description |
| :------------- | :---------------------------- | :----------------------------------- |
| `headerStatus` | [HeaderStatus](#headerstatus) | Transaction status |
| `serverTime` | `string` | Current server time |
| `message` | `string or null` | Server message |
| `data` | [Data](#data) | Transaction data |
| `success` | `boolean` | Server response if is success or not |

  
  
  

###  HeaderStatus

| Parameter | Type | Description |
| :------------ | :------- | :------------------------ |
| `code` | `number` | Server code |
| `description` | `string` | Server status description |

  
  
  

###  Data

| Parameter | Type | Description |
| :----------------- | :-------------------- | :--------------------------------------------- |
| `date` | `string` | Transaction date |
| `authStatus` | `string` | Server session status |
| `cardType` | `VISA or MASTERCARD` | Type of card for the transaction |
| `type` | `VISA or MASTERCARD` | Card provider for the transaction |
| `idtx` | `number` | Id identifier for the transaction |
| `cardToken` | `string` | Token generated by the transaction |
| `totalPay` | `string` | Total amount of the transaction |
| `binInfo` | `Object` | Information of card provider |
| `name` | `string` | Card name |
| `displayNum` | `string` | Last fourth number of the card |
| `operationType` | `string` | Type of operation |
| `returnUrl` | `string` | Callback URL |
| `requestPayAmount` | `number` | Amount to pay of the request |
| `email` | `string` | Client email |
| `codOper` | `string` | Operation code of the transaction |
| `status` | `boolean` | Show if the transaction was successfull or not |
| `messageSys` | `boolean` | Show the system message |

  
  
  

##  Running Tests

Remember to set environment variables `CCLW` and `TOKEN`

To run tests, run the following command

```bash

npm run test

```

  

##  🚀 About US

We are [Shoopi](https://shoopi.app) a Panamanian Marketplace for everyone.