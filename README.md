# Express Boilerplate

This repository serves as a boilerplate for Express applications, providing a foundation with useful features and configurations.

## Features

- **Flexible Auth Middleware:** Includes a customizable authentication middleware that supports different authentication types.
- **Custom Request and Response:** Provides custom request and response objects with added functionalities.
- **Dynamic Exception Handling:** Implements dynamic exception handling for better error management.
- **Env Variable Config:** Includes a configuration setup for environment variables.
- **Ts Config, Prettierc, Eslint Config:** Includes TypeScript configuration, Prettier configuration, and ESLint configuration for code formatting and linting.

## Getting Started

1. Clone the repository:

   ```sh
   git clone https://github.com/prussian94/express_boilerplate.git
   ```

2. Install dependencies:

   ```sh
   cd express_boilerplate
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file in the root directory and add your environment variables:

   ```
   PORT=3000
   API_VERSION=v1
   ```

4. Start the server:

   ```sh
   npm start
   ```

## Usage

- Customize the auth middleware in `src/helpers/middleware/authMiddleware.ts`.
- Modify the custom request and response objects in `src/models/request/CustomRequest.ts` and `src/models/response/CustomResponse.ts`.
- Adjust custom exceptions in `src/exceptions/Exceptions.ts`.
- Configure environment variables in the `.env` file.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
