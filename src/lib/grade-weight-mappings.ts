

import { GradeMappingEntry } from "../types";

import mappingData from "../data/gpa-mappings.json";

export function getGPAValue(grade: number, weight: string): number
{
    
    if(!isValidGrade(grade))
    {
        throw new Error(`Invalid grade: ${grade}. Must be between 0-100`);
    }

    const matchingEntry = findMatchingEntry(grade, weight);

    if (matchingEntry)
    {
        return matchingEntry.gpaValue;
    }
    

    console.warn(`No GPA mapping found for grade ${grade} and weight ${weight}`)
    return 0;
}


export function isValidGrade(grade: number): boolean
{
    if (grade < 0 || grade > 100 || typeof grade != 'number')
        return false;
    else
        return true;
}

function findMatchingEntry(grade: number, weight: string): GradeMappingEntry
{
    return mappingData.find(entry =>
        grade >= entry.minGrade &&
        grade <= entry.maxGrade && 
        entry.weight === weight
    );
}
