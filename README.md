# Multi Select Dropdown Menu App
A simple dropdown app menu app which supports a single selected option and multiple selected option type.

---
# Quick Start
1. Install npm/nvm
```
brew install nvm 
brew install npm
```

2. Install node
```
brew install node@14
```
3. Install modules
```
npm cache clear --force
npm install
```
4. Start up the project in your local web-browser.
```
npm start
```
5. If it doesn't automatically open, navigate in web-browser to http://localhost:3000
---

# Usage
DropDownMenu takes two props options and type. Options is the dropdown options list and type is the type of dropdown (Multiselect or single select). 

Example of options prop:
```
const data = [
  { id: 0, label: 'Siddarth Patel' },
  { id: 1, label: 'Zach Kayyali' },
  { id: 2, label: 'Sho Weimer' },
  { id: 3, label: 'Mikela Dockery' },
  { id: 4, label: 'Stephanny Cocconcelli' },
]

```

1. DropDownMenu with multi select
    ```
    <DropdownMenu options={data} type='multi' />
    ```
2. DropDownMenu with single select
    ```
    <DropdownMenu options={data} type='single' />
    ```

---
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

