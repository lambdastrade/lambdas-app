import React from 'react';


export const enum SubscriptionType {
    none = 0,
    basic = 1,
    pro = 2,
    team = 3,
}

const account: AccountContextType = {
    account: {
        id: 1,
        name: 'Kristof Varadi',
        subscription: {
            type: SubscriptionType.none,
            billing: 'yearly',
            expires: -1
        }
    }
};

interface AccountContextType {
    account: {
        id: number;
        name: string;
        subscription: {
            type: SubscriptionType,
            billing: 'monthly' | 'yearly',
            expires: number
        }
    };
}

const AccountContext: React.Context<AccountContextType> = React.createContext(account);

export default AccountContext;