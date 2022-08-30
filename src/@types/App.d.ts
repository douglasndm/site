interface IApp {
    id?: string;
    friendlyPackageName: string;
    name: string;
    description: string;
    logo: string;
    AppStore: string;
    GooglePlay: string;
    MSStore: string;
    web?: string;
    tags: string;

    backgroundColor: string;
    textColor: string;
}
