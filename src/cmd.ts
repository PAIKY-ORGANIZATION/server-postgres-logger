import inquirer from 'inquirer';
import { getVisitsPerCountry } from './services/visits-per-country.js';
import { getVisitsPerProject } from './services/visits-per-project.js';
import { getVisitsPerIp } from './services/visits-per-ip.js';
import { getVisitCount } from './services/visits-count.js';

const getVisitsPerProjectKey = 'Get visits per project'; //$ Just avoiding typos
const getVisitsPerCountryKey = 'Get visits per country'; //$ Just avoiding typos
const getVisitsPerIpKey = 'Get visits per ip';
const getVisitCountKey = 'Get visit count';

const main = async()=>{

    const result = await inquirer.prompt([{
        name: 'Action',
        message: 'What  action do you want to perform?',
        choices: [getVisitsPerProjectKey, getVisitsPerCountryKey, getVisitsPerIpKey, getVisitCountKey],
        type: 'list'
    }])

    switch(result.Action){
        case getVisitsPerProjectKey:
            console.log(await getVisitsPerProject());
            break;
        case getVisitsPerCountryKey:
            console.log(await getVisitsPerCountry());
            break;
        case getVisitsPerIpKey:
            console.log(await getVisitsPerIp());
            break;
        case getVisitCountKey:
            console.log(await getVisitCount());
            break;


    }
}

main()