[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![NPM Unpacked Size (with version)](https://img.shields.io/npm/unpacked-size/semantic-logs/1.0.1)
![NPM Downloads](https://img.shields.io/npm/dm/semantic-logs)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/sandeep-shome/semantic-logs/release.yml)
![GitHub Release](https://img.shields.io/github/v/release/sandeep-shome/semantic-logs)

# semantic-logs

A lightweight utility library for logging in node.js, built with TypeScript and powered by [**boxen**](https://github.com/sindresorhus/boxen) and [**chalk**](https://github.com/chalk/chalk).

## 🚀 Features

- 🔍 Simple `log()` function to semantically log.
- ⚡ Lightweight and fast – Only 2 dependencies.
- 🧩 Easily extensible for custom logging rules with `createLogger()`.

## ⬇️ Installation

Install semantic-logs with npm

```bash
md my-app
cd my-app
npm install semantic-logs
```

## 💿 Usage/Examples

```javascript
import { Logger } from 'semantic-logs';

const logger = new Logger();

logger.log('Hello World');
```

## 🧰 Functions/Methods

Usage and parameter list of all available functions

### `log()`

Logs the passed message with provided options.

```javascript
import { Logger } from 'semantic-logs';

const logger = new Logger();

logger.log('warn', { level: 'warn' });
```

| Parameter   | Type         | Required | Description                       |
| ----------- | ------------ | -------- | --------------------------------- |
| **Message** | `any`        | `true`   | The input to emit log on console. |
| Options     | `LogOptions` | `false`  | Options for log.                  |

### `createLogger()`

Create a return a logging function with defined options.

```javascript
import { Logger } from 'semantic-logs';

const logger = new Logger();

const options: LogOptions = {
  level: 'info',
  title: 'System Update',
  color: 'cyan',
  borderStyle: 'bold',
  padding: 1
};

logger.createLogger(options);
```

| Parameter | Type         | Required | Description      |
| --------- | ------------ | -------- | ---------------- |
| Options   | `LogOptions` | `false`  | Options for log. |

### 🛠 LogOptions Specification

| Property          | Type                  | Description                                                         |
| :---------------- | :-------------------- | :------------------------------------------------------------------ |
| `level`           | `LogLevel`            | Defines the severity level of the log entry.                        |
| `title`           | `string`              | The heading text displayed for the log.                             |
| `color`           | `ForegroundColorName` | Sets the color for the primary text.                                |
| `borderColor`     | `ForegroundColorName` | Sets the color for the box/container border.                        |
| `icon`            | `string`              | An optional icon or emoji prefix.                                   |
| `textAlignment`   | `Alignment`           | (Readonly) Horizontal alignment of the main text.                   |
| `padding`         | `number`              | (Readonly) Internal spacing within the log container.               |
| `margin`          | `number`              | (Readonly) External spacing around the log container.               |
| `titleAlignment`  | `Alignment`           | (Readonly) Horizontal alignment of the title.                       |
| `backgroundColor` | `BackgroundColorName` | (Readonly) The background color behind the text.                    |
| `borderStyle`     | `keyof Boxes`         | (Readonly) The line style of the border (e.g., 'single', 'double'). |

## 🤝 Contribution

Contributions are welcome and appreciated!
If you have suggestions for improvements, feel free to open an issue or submit a pull request.
Let’s make semantic-logs better together! 🐝✨

## 🚀 Run Locally

Clone the project

```bash
git clone https://github.com/sandeep-shome/semantic-logs.git
```

Go to the project directory

```bash
cd semantic-logs
```

🔧 Install dependencies

```bash
npm install
```

_You can now explore and modify the package as per your needs._

📦 Build the Project

```bash
npm run build
```

## 🧪 Running Tests

Follow the steps below to run and verify the functionality of the CLI and validation logic.

```bash
npm run test
```

## 🔧 Built With

- [**TypeScript**](https://www.typescriptlang.org/) – Strongly typed language for scalable JavaScript development
- [**Jest**](https://jestjs.io/docs/getting-started) – Fast unit testing framework with great DX
- [**tsup**](https://tsup.egoist.dev/) – Super-fast TypeScript bundler powered by esbuild

## 📎Appendix

semantic-logs is an open-source project developed and maintained by a solo developer with a passion for clean code, creativity, and community-driven tools.

You're welcome to explore, use, and contribute to the project! Whether it's fixing a bug, suggesting a feature, or improving the documentation — your contributions are highly appreciated.

Feel free to check out the GitHub repository and join in making this project better for everyone. Let's build something fun together! 💡

## 👨‍💻 Authors

[@Sandeep Shome](https://github.com/sandeep-shome)

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)

## 🙋‍♂️ Support

For support, email sandeepshome.dev@gmail.com
