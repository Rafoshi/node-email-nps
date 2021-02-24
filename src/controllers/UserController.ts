import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UserController {
	async create(request: Request, response: Response) {
		const { name, email } = request.body;

		const userRepository = getCustomRepository(UsersRepository);

		const userAlreadyExists = await userRepository.findOne({
			email,
		});

		if (userAlreadyExists) {
			return response.status(400).json({
				error: "User already exists!",
			});
		}

		const user = userRepository.create({
			name,
			email,
		});

		await userRepository.save(user);

		return response.status(201).json(user);
	}
}

export { UserController };
