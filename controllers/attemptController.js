import Equacao from '../entities/Equacao.js';
import { isFt } from "../domain/validation.js";
import { tip } from "../domain/game.js";
import fs from 'fs'
import { constants } from 'buffer';
import { Console } from 'console';
let dataBase = [];

export const attemptList = function (req, res) {
    return res.json(dataBase);
}

export const createAttempt = function (req, res) {
    const { param_1, param_2, param_3, param_4, param_5, param_6 } = req.body;
    let trying = new Equacao(param_1, param_2, param_3, param_4, param_5, param_6);
    let validation = isFt(param_1, param_2, param_3, param_4, param_5, param_6)
    if (validation !== 'ok')
    {    
        let resp  = [validation];
        return res.json({resp});
    }
        else
    {
        dataBase.push(trying);
        try {
            const data = JSON.parse(fs.readFileSync('./database/game.json', 'utf8'));
            let resp = tip(trying, data);
            return res.json({resp});
        } catch (err) {
            console.error(err);
        }
    }
}