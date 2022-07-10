<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h2 align="center">Presentation</h2>

  <p align="center">
    A basic project to create your presentation and attendees!
  </p>
</div>

<!-- TABLE OF CONTENTS -->

<!-- ABOUT THE PROJECT -->

## About The Project

This is a sample project built with Nest.js and React.js where you can create your presentation, create an attendee and add it to your presentation.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

Technologies used on this project

- [![Nest][nest.js]][nest-url]
- Nest.js is being used on the backend because it's the most useful for me to facilitate the process of creating the API, the setup is quite simple and the structure is well organized.
- [![React][react.js]][react-url]
- I decided to use React mainly because it's the frontend framework I'm most comfortable with, I didn't felt like I needed to use Next.js here, since it was simple.
- [![Docker][docker]][docker-url]
- Docker is being used here to host the API and the Database.
- [![Swagger][swagger]][swagger-url]
- Swagger is the tool I used to document the backend, it's quite simple and has a good integration with Nest.js
- [![Postgres][postgres]][postgres-url]
- I don't have a specific reason of why I used Postgres, but I'd say that it's because it's the one I'm most comfortable with
- [![Typescript][typescript]][typescript-url]
- Typescript is being used on the frontend and backend, helps to avoid bugs.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Here are the steps to reproduce this on your local machine.

### Prerequisites

Required tools

- npm or yarn
  ```sh
  npm install npm@latest -g
  ```
    ```sh
  npm install yarn@latest -g
  ```
- Docker
 https://www.docker.com/

### Installation

_Install and run_

1. Clone the repo
   ```sh
   git clone https://github.com/LucianoPierdona/Presentations.git
   ```
2. Install NPM packages
   ```sh
   cd web && yarn
   cd server && yarn
   ```
3. run docker compose (the process to compile Nest.js might take longer on Windows OS)
   ```sh
   cd server && docker-compose build && docker-compose up
   ```
3. run react
   ```sh
   cd web && yarn start
   ```
5. web and server urls
   ```sh
   web: http://localhost:3000/
   server: http://localhost:3001/
   ```
6. server documentation url
   ```sh
   http://localhost:3001/api
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[nest.js]: https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white
[nest-url]: https://nestjs.com
[docker]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[docker-url]: https://www.docker.com/
[swagger]: https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white
[swagger-url]: https://swagger.io/
[postgres]: https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[postgres-url]: https://www.postgresql.org/
[typescript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
