enum Gender {
    MALE,
    FEMALE,
    OTHER
  }

export interface UserSignupInfo {
    email: string,
    name: string,
    gender: Gender | undefined,
    levelOfGreenLife: number,
    amount: number,
    oneTimePurchase: boolean,
    termsAccepted: boolean
}