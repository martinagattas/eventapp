import type { NextApiRequest, NextApiResponse } from 'next';
import { CustomInputType } from 'types/form-components/CustomInputType';
import {
    ERROR_USER_DATA_INCORRECT,
    ERROR_METHOD_NOT_ALLOWED,
    ERROR_SERVER
} from "../../services/users/users.error";

export const validName = 'Martina'

type RegisterData = {
    data: any;
} | {
    error: string;
    message: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<RegisterData>) {
    if (req.method !== "POST") {
        res.status(405).json(ERROR_METHOD_NOT_ALLOWED);
        return;
    }
    try {
        const body: CustomInputType = req.body;
        if (body.name === validName) {
            res.status(200).json({ data: body });
            return;
        }
        res.status(400).json(ERROR_USER_DATA_INCORRECT);
    } catch (err) {
        console.log(err);
        res.status(500).json(ERROR_SERVER);
    }
}