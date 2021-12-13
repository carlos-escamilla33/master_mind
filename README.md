
# 🎮 Mastermind

> This project aims to replicate the classic board game Mastermind.

> The goal is to guess a secret code consisting of a series of 4 numbers

## 🚀 Run Locally

Clone the project

```bash
  git clone git@github.com:carlos-escamilla33/master_mind.git
```

Go to the project directory

```bash
  cd master_mind
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## 🛠️ Tech Used

 Javascript, React, MaterialUi, Axios


## 🔗 Demo

https://mastermindproject.netlify.app


## 🌐 API Reference

#### Used Random Integer Generator API (https://www.random.org/clients/http/api/) to randomly select 4 numbers from 0 ~ 7 (Duplicate numbers were allowed)

GET A plain text response, with one integer per line. 
(if col parameter is set to 1 and format is set to plain)
>**Parameters below are already preset in project api call**
>
| URL Parameter | Recommended Value | purpose |
| :-------- | :------- | :------------------------- |
| `num` | `4` | Number of integers requested|
| `min` | `0` | The smallest value returned|
| `max` | `7` | The largest value returned |
| `col` | `1` | Number of columns used to display the returned values|
| `base` | `10` | Use base 10 system|
| `format` | `plain` | Returns response in a plain text.|
| `rnd` | `new` | Generate a new random numbers|


## 🙋‍♂️ Author

- [@carlosescamilla](https://github.com/carlos-escamilla33)

