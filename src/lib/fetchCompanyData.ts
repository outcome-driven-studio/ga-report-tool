import axios from 'axios';

const BaseService = axios.create({
    timeout: 120000,
    baseURL: 'https://api.rebatus.com',
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
});


export const fetchCompanyLogo = async (domain: string): Promise<string | null> => {
    const isValidUrl = (url: string) => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    };

    const url = isValidUrl(domain) ? domain : `https://${domain}`;

    try {
        const res = await BaseService.get(`proxy-webpage/metadata?url=${url}`);
        console.log(res.data)
        return res.data.image || null;
    } catch (error) {
        console.error('Error fetching company logo:', error);
        return null;
    }
};

export const fetchCompanyName = async (domain: string): Promise<string | null> => {
    try {
        const res = await BaseService.get(`proxy-webpage/metadata?url=${domain}`);
        return res.data.title || domain;
    } catch (error) {
        console.error('Error fetching company name:', error);
        return domain;
    }
}; 