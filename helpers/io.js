const inquirer = require('inquirer');
require('colors');

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'What do you want to do?',
    choices: [
      {
        value: 1,
        name: `${'1.'.green} Search city`
      },
      {
        value: 2,
        name: `${'2.'.green} History`
      },
      {
        value: 0,
        name: `${'0.'.green} Exit`
      }
    ]
  }
];

async function showMenu() {

  console.clear();
  console.log('=========================='.green);
  console.log('  Choose an option'.white);
  console.log('==========================\n'.green);

  const { option } = await inquirer.prompt(questions);

  return option;
}

async function list ( places = [] ) {

  const choices = places.map( (place, i) => {

      const idx = `${i + 1}.`.green;

      return {
          value: place.id,
          name:  `${ idx } ${ place.name }`
      }
  });

  choices.unshift({
      value: '0',
      name: '0.'.green + ' Cancel'
  });

  const question = [
      {
          type: 'list',
          name: 'id',
          message: 'Choose a place: ',
          choices
      }
  ]

  const { id } = await inquirer.prompt(question);
  return id;
}


async function readInput(message) {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Please, enter a value.';
        }
        return true;
      }
    }
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
}

async function pause() {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Press ${'enter'.green} to continue.`
    }
  ];

  console.log('\n');
  await inquirer.prompt(question);
}

module.exports = {
  readInput,
  showMenu,
  pause,
  list,
}