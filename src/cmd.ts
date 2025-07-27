import inquirer from 'inquirer';
import { getVisitsPerCountry } from './services/visits-per-country.js';
import { getVisitsPerProject } from './services/visits-per-project.js';

const getVisitsPerProjectKey = 'Get visits per project'; //$ Just avoiding typos
const getVisitsPerCountryKey = 'Get visits per country'; //$ Just avoiding typos

const main = async()=>{

    const result = await inquirer.prompt([{
        name: 'Action',
        message: 'What  action do you want to perform?',
        choices: [getVisitsPerProjectKey, getVisitsPerCountryKey],
        type: 'list'
    }])

    switch(result.Action){
        case getVisitsPerProjectKey:
            console.log(await getVisitsPerProject());
            break;
        case getVisitsPerCountryKey:
            console.log(await getVisitsPerCountry());
            break;
    }
}

main()