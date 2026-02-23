import fs from 'fs/promises';
export const readFile = async (Path) => {
    try {
        const data = await fs.readFile(Path, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading file:', error);
        throw error;
    }
}