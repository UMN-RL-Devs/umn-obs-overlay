# UMN Rocket League Custom Overlay

This repository will contain all the source code for the UMN Rocket League Custom Broadcast Overlay.

## Table of Contents

## Setup & Installation

1. Clone this repository to your machine.
2. Ensure that Rocket League and Bakkesmod are running in the background. If you don't have either of these installed, please do so and make sure they are running when finished.
3. In the root directory of this code, in a command prompt/terminal, run `npm install`. This will install all the necessary dependencies needed to successfully run the project. This may take several minutes as there are a lot of dependencies and files that are needed.
4. In the same terminal, run `npm start`. This will run the overlay locally on [localhost:3000](https://localhost:3000).
5. Now, open OBS. If you don't have it installed, please do so and open it once completed.
6. In the scene where you will be capturing the Rocket League application, create a new `Browser` source. The URL will be `https://localhost:3000`.
7. Once set up, you will need to right click the preview window and select `Interact`. From here, you can provide the necessary inputs to successfully run the overlay locally.
8. When you are spectating a game of Rocket League, please be sure to disable all in-game overlays to create the best experience for your viewers.
9. After a series concludes OR you need to reassign teams, you will need to `Refresh` the browser source to navigate back to the homepage.

## Commands

### `npm install`

Install all the necessary dependencies.

### `npm start`

Start running the application locally.

## Dev Notes

Commands run during setup
<br/>
_Windows - Command Prompt_
`set BAKKESMODSDK=[PATH_TO_SDK]`
`set (BAKKESMODSDK)=[PATH_TO_SDK]`
