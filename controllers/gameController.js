import fs from 'fs'
import equacao from '../database/fakeDataBase.js';

export const newGame = function (req, res) {
    const eq = equacao();
    //console.log(eq);
    fs.writeFileSync('./database/game.json', JSON.stringify(eq), (err) => {
        if (err) console.log('Error writing file:', err)
    });
    return res.json({"status": "OK"});
}