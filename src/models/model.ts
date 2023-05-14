export interface IData {
    id: number,
    name: string,
    cars?: ICar[],
    estate?: IEstate[],
}

export interface ICar {
    id: number,
    mark: string,
    models: IModel[],
}

interface IModel {
    id: number,
    model: string,
    classes: IClass[],
}

interface IClass {
    id: number,
    class: string,
    types: IType[],
}

interface IType {
    id: number,
    type: string,
}


export interface IEstate {
    id: number,
    region: string,
    categories: ICategory[],
}

interface ICategory {
    id: number,
    category: string,
    types: IType[],
}