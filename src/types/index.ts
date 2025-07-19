import { LargeNumberLike } from "crypto";

// all the values needed for one class that the user inputs
export interface Class 
{
    id: string;
    className: string;
    grade: number;
    weighting: number;
    gpaValue: number;
}

// Represents one row in the schools grade conversion chart
export interface GradeMappingEntry 
{ 
    maxGrade: number;
    minGrade: number;
    weight: string;
    gpaValue: number;
}

// the result of an input
export interface GPAResult 
{
    overallGPA: number;
    totalClasses: number;
    classes: Class[];
}

// if you want to group different examples by categories
export interface GPABreakdown 
{
    weightedCY: number;
    unweightedCY: number;
    weightedNormal: number;
    unweightedNormal: number;
}
