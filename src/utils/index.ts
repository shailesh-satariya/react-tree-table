import {v4 as uuid} from 'uuid';

export const getId = ( obj: Record<string, any> ): string => {
    const key: string = '_uuid';
    if (!(obj[key])) {
        const pd: PropertyDescriptor = {value: uuid()};
        Object.defineProperty(obj, key, pd);
    }

    return obj[key].toString();
};