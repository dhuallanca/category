import {ICategory} from '../../category/model/ICategory'

export interface ICategoryDetail {
    id: number;
    nombre: string;
    category: ICategory;
    fotoUrls: string[];
    tags: string[];
}