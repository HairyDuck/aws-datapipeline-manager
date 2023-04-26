
[![CodeFactor](https://www.codefactor.io/repository/github/hairyduck/aws-datapipeline-manager/badge)](https://www.codefactor.io/repository/github/hairyduck/aws-datapipeline-manager)
![GitHub top language](https://img.shields.io/github/languages/top/HairyDuck/aws-datapipeline-manager)
![GitHub](https://img.shields.io/github/license/HairyDuck/aws-datapipeline-manager)
![GitHub contributors](https://img.shields.io/github/contributors/HairyDuck/aws-datapipeline-manager)

# ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)🚀 AWS Data Pipeline Manager

AWS DataPipeline Manager is an open-source web application that allows you to view, edit, and manage your AWS DataPipeline jobs. With the built-in DataPipeline console being turned off on May 1st, 2023, this project aims to provide a user-friendly alternative for managing your DataPipeline jobs. 📅

## Features

- List all AWS DataPipeline jobs 📋
- View individual pipeline definitions 👀
- Edit pipeline definitions ✏️
- Create new DataPipeline jobs 🆕

## Prerequisites

- Node.js >= 14.x 🚀
- NPM >= 6.x 📦
- An AWS account with DataPipeline access 🔑


## Screenshots
![AWS DataPipeline Manager - Pipeline List View](https://i.imgur.com/5C02eLY.png)
![AWS DataPipeline Manager - Job edit](https://i.imgur.com/ZUe2fHt.png)
## Installation

1. Clone the repository:

   ```
   git clone https://github.com/HairyDuck/aws-datapipeline-manager.git
   ```

2. Change to the project directory:

   ```
   cd aws-datapipeline-manager
   ```

3. Install the required dependencies:

   ```
   npm ci
   ```

4. Set up your AWS credentials and region:

   ```bash
   (echo AWS_REGION= && echo AWS_ACCESS_KEY= && echo AWS_SECRET_ACCESS_KEY=) > .env
   ```

## Usage

1. Start the application:

   ```
   npm start
   ```

   By default, the application will run on port 3000. 🚀

2. Open a web browser and navigate to `http://localhost:3000`. You can now view, edit, and manage your AWS DataPipeline jobs. 🎉

## To Do
- [ ] Create test coverage 🧪
- [ ] Implement a CI/CD pipeline for automated testing and deployment 🔁
- [ ] Migrate to AWS SDK for JavaScript (v3) 🔄
- [ ] Improve error handling ❌
- [ ] Display schedule infomation (e.g.Start 2023-04-05 07:16:20 (UTC) End 2024-04-04 07:16:20 (UTC) Period- Runs every 1 day) 📆
- [ ] Display the current health status 💊
- [ ] Add buttons to clone, activate, and deactivate a pipeline ⏯️
- [ ] Improve UI for editing a job ✏️

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for bug reports, feature requests, or any other improvements. 💪

Before contributing, please review our [Code of Conduct](CODE_OF_CONDUCT.md) and [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is open-source and available under the [MIT License](LICENSE). 📝
