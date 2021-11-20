
export enum cardType {
    Normal= 'Normal',
    Visa = 'Visa',
    Master = 'MasterCard',
    Debit = 'VisaDebit'
}

export enum LineOfCredit {
    Normal = 20000000,
    Visa = 50000000,
    Master = 10000000,
    Debit = 50000000,
}

export type typeCardToSearch = {
    Account: number,
    CardType: string
}

export type cardRequestDto = {
    IdentifyCard: number,
    type: string
}

export type newCardDto = {
    CardID: number,
    CurrentBalance: number,
    CVV:number,
    DateOfExpired: string,
    Account: number,
    CardType: number,
    CardStatus:number,
}

export type CardSearchByIdDto = {
    CardID: number
}