export const API_KEY = 'bMVEb8UCZqAudco44x39x9JhgRxzzEMQ';
export const LIMIT = 12;

export interface TRENDING_DATA {
        id: string;
        type: string;
        analytics: {
            onclick: {
                url: string;
            }
            onload: {
                url: string;
            }
        }
        image: any
        url: string;
}