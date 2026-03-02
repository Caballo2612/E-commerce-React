/* eslint-disable no-undef */
import fs from 'node:fs/promises';
import path from 'node:path';
import pc from 'picocolors';

const folder = process.argv[2] ?? '.'

async function listAdvances(folder) {
    let files;
    
    try {
        files = await fs.readdir(folder);
    } catch {
        console.error(pc.red(`No se puede leer este directorio gvon: ${folder}`));
        process.exit(1);
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file);
        let stats;

        try {
            stats = await fs.stat(filePath);
        } catch {
            console.error(pc.red(`No se puede leer este archivo panita: ${filePath}`));
            process.exit(1);
        }

        const isDirectory = stats.isDirectory();
        const type = isDirectory ? 'dir'.padEnd(4) : 'file';
        const size = isDirectory ? '-' : `${stats.size} bytes`;
        const mtime = stats.mtime.toLocaleString();

        return `${pc.bgMagenta(type)} | ${pc.cyan(file.padEnd(30))} | ${pc.green(size.padStart(20))} | ${pc.yellow(mtime)} \n`;
    });

    const results = await Promise.all(filesPromises);

    results.forEach(result => console.log(result));
}

listAdvances(folder);