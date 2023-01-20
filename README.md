# BookHippo - A simple address book application to learn React basics

## Table of contents

- [BookHippo - A simple address book application to learn React basics](#bookhippo---a-simple-address-book-application-to-learn-react-basics)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The project](#the-project)
    - [TODO:](#todo)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The project

Users should be able to:

- Login using a predefined password. Currently this is set to "HookBippo123".
- Lock the application with a button to return to the login pade.
- Add, delete and keep addresses in localStorage.
- Sort customers based on their first and last name.
- Press on the mail address to open a new gmail mail with the respective mail address preset.


### TODO:
- Search bar
- Edit addresses
- Check if address already exists
- Set password
- Export and import CSV files
- Ecrypt local storage data
- Use Electron for desktop app 

### Screenshot

![](./public/mainPageScreenshot.png)

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- Nanoid


### What I learned

This project was mainly a first attempt at making a complete React application with Vite for project setup and building.

I saw it as an opportunity to put to the test what I had learned through the [Scrimba](https://scrimba.com/) React course. Some of the skills I have learned and applied here are:

- Ternary conditional rendering (used to switch between login and main list page).
- UseEffect to initialize the localStorage with mock data.
- Forms within React; using state for the form data with a singular handle function for all inputs.


### Continued development

In the future, I would love to use Tailwind CSS instead to make the frontend layout responsive and congruent regarding margins, padding etc.. Also, I'm concerned regarding the data integrity and safeness, and will try to figure out a backup function, ways to encrypt the local storage and an option to import and export csv data. 

Ultimately, this project was meant to be an application for my mother to use as a chrome extension. For now, using React + Vite seems to make that a little difficult, so I might look into using Electron instead to turn it into a desktop app. 

### Useful resources

- [Mockaroo](https://www.mockaroo.com/) - Great web app to create mock data in any file format. I've used this for my address/ customer data.
- [Scrimba](https://scrimba.com/learn/learnreact/) - Amazing hands-on course for the React basics. Create multiple projects while learning at the same time.


## Author

- GitHub - [Rauldotgit](https://github.com/rauldotgit/)



