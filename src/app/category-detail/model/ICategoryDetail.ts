import {ICategory} from '../../category/model/ICategory'

export interface ICategoryDetail {
    id: number;
    name: string;
    category: ICategory;
    photoUrls: string[];
    tags: string[];
}