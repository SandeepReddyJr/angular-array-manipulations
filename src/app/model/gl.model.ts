export class GlTbModel {
    accountcode: string;
    accountname: string;
    finalamount: string;
    fingroupid: number;
    fingroupname: string;
    finsubgroupid: number;
    finsubgroupname: string;
    leadsheetcode: string;
    leadsheetid: number;
    leadsheetname: string;
    opening_balance: string | number;
    originalbalance: string;
    total_balance: string | number;
    trailbalanceid: number;
    transactions: SubLedgerModel[] = [];
    closingBalance: any;
    openingBalance: string;
  }
  
  export class SubLedgerModel {
    amount: string | number;
    balance: string | number;
    colDescription: string;
    date: string;
    description: string;
    num: string;
    transactionType: string;
    accountcode: string;
    accountname: string;
    fingroupname: string;
    finsubgroupname: string;
    leadsheetcode: string;
    leadsheetname: string;
    leadsheetid: number;
    finsubgroupid: number;
    fingroupid: number;
    Name: string;
    acctyear: number;
  }
  
  export class GLTbYearModel {
    year: string;
    tbRowObj: GlTbModel[];
  }
  
  export class LsAccountsModel {
    lsName: string;
    lsCode: string;
    lsId: number;
    accountCode: string;
    trialBalId: number;
    accountName: string;
    finalAmount: string;
    subGroupId: number;
    groupId: number;
  }
  
  export class GlGroupModel {
    groupName: string;
    groupId: number;
  }
  
  export class GlSubGroupModel {
    subGroupName: string;
    subGroupId: number;
    groupId: number;
  }
  