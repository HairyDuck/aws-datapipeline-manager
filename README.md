# ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)🚀 AWS DataPipeline Manager

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
   npm install
   ```

4. Set up your AWS credentials and region in the `app.js` file:

   ```javascript
   AWS.config.update({
     region: 'your_region',
     accessKeyId: 'your_access_key',
     secretAccessKey: 'your_secret_access_key',
   });
   ```

   Replace `'your_region'`, `'your_access_key'`, and `'your_secret_access_key'` with your AWS credentials.

## Usage

1. Start the application:

   ```
   node app.js
   ```

   By default, the application will run on port 3000. 🚀

2. Open a web browser and navigate to `http://localhost:3000`. You can now view, edit, and manage your AWS DataPipeline jobs. 🎉

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for bug reports, feature requests, or any other improvements. 💪

## License

This project is open-source and available under the [MIT License](LICENSE). 📝
